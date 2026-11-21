# Deploying to Cloudflare Workers

The site runs on Cloudflare Workers through the OpenNext adapter (`@opennextjs/cloudflare`).
It still builds on Vercel too (branch previews keep working).

## Cloudflare dashboard setup (Workers & Pages -> Create -> Import a repository)
- Repository: `ps4oriaba-pixel/soolsweets-website-sq`, production branch `main` (use `cloudflare-deploy` while testing)
- Build command: *(leave empty)*
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
- `.npmrc` sets `frozen-lockfile=false` because the lockfile was not regenerated when the Cloudflare
  dependencies were added. Run `pnpm install` once locally, commit `pnpm-lock.yaml`, then delete that line.
- Static-asset headers live in `public/_headers` (the `headers()` in `next.config.mjs` only covers Worker responses).
- Two burnt-paper photos in `lib/gallery-data.ts` still load from Vercel Blob URLs; copy them into
  `public/images/gallery/burn-away-cakes/` and update their paths to remove that dependency.
