// Verifies that every raster image under public/images has its responsive variants in public/img-v.
// Run: node scripts/check-image-variants.mjs   (fix with: python3 scripts/generate-image-variants.py)
import { readdirSync, statSync, existsSync } from 'node:fs'
import { join, relative, extname } from 'node:path'

const SRC = 'public/images'
const WIDTHS = [480, 960]
const missing = []
function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f)
    if (statSync(p).isDirectory()) { walk(p); continue }
    if (!/\.(webp|png|jpe?g)$/i.test(f)) continue
    const rel = relative(SRC, p).slice(0, -extname(f).length)
    for (const w of WIDTHS) if (!existsSync(join('public/img-v', String(w), rel + '.webp'))) missing.push(`${w}/${rel}`)
  }
}
walk(SRC)
if (missing.length) { console.error(`Missing ${missing.length} variants, e.g.:\n` + missing.slice(0, 10).join('\n')); process.exit(1) }
console.log('All image variants present')
