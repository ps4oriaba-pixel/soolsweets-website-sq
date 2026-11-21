// Custom next/image loader.
//
// Cloudflare has no built-in Next.js image optimizer, so instead of resizing on demand we serve
// pre-generated WebP variants from public/img-v/<width>/... (created by
// scripts/generate-image-variants.py). Static assets are free and unlimited on Cloudflare.
// Requests wider than the largest variant use the original file. Anything outside /images/
// (e.g. remote URLs) is returned untouched.

const WIDTHS = [480, 960]
const EXT = /\.(webp|png|jpe?g)$/i

export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }): string {
  if (!src.startsWith('/images/')) return src
  const m = EXT.exec(src)
  if (!m) return src
  const w = WIDTHS.find((x) => x >= width)
  if (!w) return src
  return `/img-v/${w}${src.slice('/images'.length, src.length - m[0].length)}.webp`
}
