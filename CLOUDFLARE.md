# Deploying to Cloudflare Workers

The site runs on Cloudflare Workers through the OpenNext adapter (`@opennextjs/cloudflare`).
It still builds on Vercel too (branch previews keep working).

## Cloudflare dashboard setup (Workers & Pages -> Create -> Import a repository)
- Repository: `ps4oriaba-pixel/soolsweets-website-sq`, production branch `main` (use `cloudflare-deploy` while testing)
- Build command: `pnpm add -D @opennextjs/cloudflare@^1.20.3 wrangler@^4.34.0`
- Deploy command: `pnpm run deploy`
- Then: Settings -> Domains & Routes -> add `soolsweets.com` and `www.soolsweets.com`
- Recommended plan: Workers Paid (the free plan has 3 MiB Worker size and 10 ms CPU per request limits)

## Images
Cloudflare has no on-demand Next.js image optimizer, so `lib/image-loader.ts` serves pre-generated
WebP variants from `public/img-v/{480,960}/...`; anything wider uses the original file.
After adding or replacing any photo under `public/images`, run:

    python3 scripts/generate-image-variants.py   # needs Pillow
    pnpm run check:images                        # variants + search tags

## Notes
- The Cloudflare adapter (`@opennextjs/cloudflare`) and `wrangler` are installed by the build command above instead of being listed
  in `package.json`, because the lockfile could not be regenerated offline and CI installs with `--frozen-lockfile`.
  To make them regular dependencies: run `pnpm add @opennextjs/cloudflare wrangler -D` locally, commit `pnpm-lock.yaml`, and clear the build command.
  (`open-next.config.ts` is excluded in `tsconfig.json` so Vercel builds do not need the adapter.)
- Static-asset headers live in `public/_headers` (the `headers()` in `next.config.mjs` only covers Worker responses).
- Last deploy trigger: 2026-11-21
