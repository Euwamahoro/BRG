# BRG — Best in Rwanda Group

Website for BRG, covering the **Nzuri Foods** product line and BRG's export services. Built with Next.js (App Router) and TypeScript.

Live site: https://brg-website-bice.vercel.app

## Pages

- `/` — Home
- `/about` — About BRG
- `/products` — Nzuri Foods products (beans, peeled banana, banana plantain, dagaa dried fish, sweet potatoes)
- `/quote?product=<id>` — Request a quote for a specific product
- `/export-services` — Export services
- `/contact` — Contact form + WhatsApp/phone/email details

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- [Resend](https://resend.com) — transactional email for the Contact and Quote forms

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

The Contact form (`/contact`) and Quote form (`/quote`) send email via Resend through two API routes: `app/api/send-contact/route.ts` and `app/api/send-quote/route.ts`. Both require:

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | API key from your [Resend](https://resend.com) account. Without a verified sending domain, Resend's free tier can only deliver to the email address you signed up with. |

Set this in your local `.env.local` for development, and in your Vercel project's **Settings → Environment Variables** for production/preview.

Both routes currently point deliveries to a single test inbox (`enockdev01@gmail.com`), set directly in the route files — update `CONTACT_EMAIL` / `QUOTE_EMAIL` there once you're ready to move off testing and want it landing in a real business inbox (and verify a custom sending domain in Resend so `from` isn't restricted to the sandbox address).

If `RESEND_API_KEY` isn't set, both forms show an error message with a WhatsApp link as a fallback, instead of failing silently.

## Contact Details

Phone / WhatsApp number used across the site (Header, Footer, About, Contact, Quote): `+250 786 291 710`.

## Deployment

Auto-deploys from the `main` branch via Vercel. Remember to add `RESEND_API_KEY` in the Vercel project settings — without it, the build succeeds but the Contact/Quote forms will return a configuration error at runtime.
