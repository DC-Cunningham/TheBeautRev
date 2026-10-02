# Contact form Worker

Cloudflare Worker behind the site's contact form. It accepts `POST /contact`
from the site, checks a Turnstile token and a honeypot field, and emails the
message through the Resend API. The visitor's address is set as Reply-To.

## One-time setup

1. **Turnstile**: in the Cloudflare dashboard create a Turnstile widget for
   `beautifulrevolution.com.au` and `www.beautifulrevolution.com.au`.
   - Put the site key in `client/.env.production` (`VITE_TURNSTILE_SITE_KEY`). It is public.
   - Store the secret key on the Worker: `npx wrangler secret put TURNSTILE_SECRET_KEY`
2. **Resend**: add the domain `beautifulrevolution.com.au` in Resend and create
   the DNS records it lists. They sit under `send.` and `resend._domainkey.`, so
   the root MX and SPF records (Migadu) are not touched. Then create an API key
   with sending access only and store it on the Worker:
   `npx wrangler secret put RESEND_API_KEY`
3. **GitHub secrets** for the deploy workflow: `CLOUDFLARE_API_TOKEN` and
   `CLOUDFLARE_ACCOUNT_ID`.

The Worker is served from `api.beautifulrevolution.com.au` (a custom domain
created by `wrangler deploy`) and deploys on pushes to `release` that touch
`worker/`.

## Local development

```bash
cp .dev.vars.example .dev.vars
npm install
npm run dev
```

`.dev.vars.example` uses Cloudflare's published Turnstile test secret, and
`client/.env.development` the matching test site key, so the form works locally
without real Turnstile keys. Sending needs a real `RESEND_API_KEY` in `.dev.vars`;
with one set, local submissions send a real email to `CONTACT_TO`.
