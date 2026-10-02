# Contact form Worker

Cloudflare Worker behind the site's contact form. It accepts `POST /contact`
from the site, checks a Turnstile token and a honeypot field, and emails the
message with Cloudflare Email Service. The visitor's address is set as Reply-To.

## One-time setup

1. **Turnstile**: in the Cloudflare dashboard create a Turnstile widget for
   `beautifulrevolution.com.au` and `www.beautifulrevolution.com.au`.
   - Put the site key in `client/.env.production` (`VITE_TURNSTILE_SITE_KEY`). It is public.
   - Store the secret key on the Worker: `npx wrangler secret put TURNSTILE_SECRET_KEY`
2. **Email Service**: onboard `beautifulrevolution.com.au` for sending and verify
   `dc@beautifulrevolution.com.au` as a destination address. Sending to a verified
   address is free on every plan.
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
without real keys. Emails are not sent locally; wrangler writes them to
`.wrangler/tmp/email/`.
