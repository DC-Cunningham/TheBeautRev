export interface Env {
  RESEND_API_KEY: string;
  RESEND_API_URL: string;
  TURNSTILE_SECRET_KEY: string;
  ALLOWED_ORIGINS: string;
  CONTACT_TO: string;
  CONTACT_FROM: string;
}

interface ContactBody {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
  turnstileToken?: unknown;
}

const SITEVERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const MAX_BODY_BYTES = 20_000;
const MAX_NAME = 100;
const MAX_EMAIL = 254;
const MAX_SUBJECT = 150;
const MAX_MESSAGE = 5000;
const EMAIL_PATTERN = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const cors = corsHeaders(request, env);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }

    const url = new URL(request.url);
    if (url.pathname !== "/contact") {
      return json({ error: "Not found" }, 404, cors);
    }

    if (request.method !== "POST") {
      return json({ error: "Method not allowed" }, 405, cors);
    }

    // Browsers always send Origin on a cross-origin POST; anything else is not the site's form.
    if (!cors["Access-Control-Allow-Origin"]) {
      return json({ error: "Origin not allowed" }, 403, cors);
    }

    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return json({ error: "Message too large" }, 413, cors);
    }

    let body: ContactBody;
    try {
      body = JSON.parse(raw);
    } catch {
      return json({ error: "Invalid JSON body" }, 400, cors);
    }
    if (typeof body !== "object" || body === null) {
      return json({ error: "Invalid JSON body" }, 400, cors);
    }

    // Honeypot: real visitors never see this field. Pretend it worked so bots don't retry.
    if (clean(body.website)) {
      return json({ success: true }, 200, cors);
    }

    const name = singleLine(clean(body.name));
    const email = clean(body.email);
    const subject = singleLine(clean(body.subject));
    const message = clean(body.message);

    if (!name || !email || !message) {
      return json({ error: "Please complete all required fields" }, 400, cors);
    }
    if (!EMAIL_PATTERN.test(email) || email.length > MAX_EMAIL) {
      return json({ error: "Please enter a valid email" }, 400, cors);
    }
    if (name.length > MAX_NAME || subject.length > MAX_SUBJECT || message.length > MAX_MESSAGE) {
      return json({ error: "Message too long" }, 400, cors);
    }

    const token = clean(body.turnstileToken);
    if (!token) {
      return json({ error: "Verification required" }, 400, cors);
    }
    const verified = await verifyTurnstile(token, request.headers.get("CF-Connecting-IP"), env);
    if (!verified) {
      return json({ error: "Verification failed" }, 403, cors);
    }

    const sent = await sendEmail(env, {
      from: `The Beautiful Revolution website <${env.CONTACT_FROM}>`,
      to: env.CONTACT_TO,
      reply_to: email,
      subject: subject ? `Contact form: ${subject}` : `Contact form: message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<h3>Message from The Beautiful Revolution contact page</h3>
<p>From: ${escapeHtml(name)}</p>
<p>At: ${escapeHtml(email)}</p>
<p style="white-space: pre-wrap">${escapeHtml(message)}</p>`,
    });
    if (!sent) {
      return json({ error: "Could not send message" }, 502, cors);
    }

    return json({ success: true }, 200, cors);
  },
};

async function verifyTurnstile(token: string, ip: string | null, env: Env): Promise<boolean> {
  const form = new FormData();
  form.append("secret", env.TURNSTILE_SECRET_KEY);
  form.append("response", token);
  if (ip) form.append("remoteip", ip);

  try {
    const res = await fetch(SITEVERIFY_URL, { method: "POST", body: form });
    const result = (await res.json()) as { success: boolean };
    return result.success === true;
  } catch {
    return false;
  }
}

// Sends through the Resend API. The recipient is fixed in config, never taken from the request.
async function sendEmail(env: Env, email: Record<string, string>): Promise<boolean> {
  try {
    const res = await fetch(env.RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    });
    if (!res.ok) {
      console.error("Email send failed", res.status, await res.text());
    }
    return res.ok;
  } catch (err: any) {
    console.error("Email send failed", err?.message);
    return false;
  }
}

function corsHeaders(request: Request, env: Env): Record<string, string> {
  const headers: Record<string, string> = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
  const origin = request.headers.get("Origin");
  const allowed = env.ALLOWED_ORIGINS.split(",").map((o) => o.trim());
  if (origin && allowed.includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }
  return headers;
}

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

// Name and subject end up in mail headers; keep them to one line.
function singleLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ");
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function json(data: unknown, status: number, cors: Record<string, string>): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...cors, "Content-Type": "application/json" },
  });
}
