# SahiMilo Kisan

Standalone farmer-support website for Bihar, with a Hindi-first experience and a focus on practical farming needs.

## Current website implementation

- `src/index.js` serves the standalone SahiMilo Kisan website from a Cloudflare Worker.
- `wrangler.toml` contains the Worker deployment configuration.
- The public enquiry form currently opens the visitor's email application and prepares an email to `sahimilo.in@gmail.com`. It does not yet save enquiries to a database.

## Deploy on Cloudflare Workers

1. Open Cloudflare Dashboard → Workers & Pages.
2. Create or select the Worker named `kisan-sahimilo`.
3. Connect this GitHub repository (`sahimiloin-commits/kisan.sahimilo`) using Workers Builds, with production branch `main`.
4. Set the deploy command to `npx wrangler deploy`. The repository includes `wrangler.toml`.
5. Deploy, then test the assigned `*.workers.dev` address and its `/health` endpoint.
6. Only after testing, add the GoDaddy domain as a Custom Domain in Worker settings. Do not replace nameservers or delete existing DNS records as part of this deployment.

## Notes

This repository previously contained a farmer-support pilot and a separate hosting/data setup. The new Worker entry point is an independent front-end. Do not migrate, delete, or expose any existing database or secrets without reviewing the production configuration first.
