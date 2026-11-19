// בודק שלכל תמונת פריט/קטגוריה יש שורה ב-lib/image-tags.ts (תגיות לחיפוש החכם).
// הרצה: node scripts/check-image-tags.mjs
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const read = (f) => readFileSync(f, 'utf8')
const files = ['lib/gallery-data.ts', 'app/page.tsx']
for (const d of readdirSync('app/category')) {
  const f = join('app/category', d, 'page.tsx')
  try { if (statSync(f).isFile()) files.push(f) } catch {}
}

const srcs = new Set()
for (const f of files) {
  for (const m of read(f).matchAll(/['"`](\/images\/[^'"`]+|https:\/\/[^'"`]+\.(?:jpg|jpeg|png|webp))['"`]/g)) srcs.add(m[1])
}
const tagged = new Set([...read('lib/image-tags.ts').matchAll(/^\s*'([^']+)':\s*\[/gm)].map((m) => m[1]))
const ignore = (s) => /hero|about-owner/.test(s)
const missing = [...srcs].filter((s) => !tagged.has(s) && !ignore(s))

if (missing.length) {
  console.log(`חסרות תגיות ל-${missing.length} תמונות:`)
  missing.forEach((s) => console.log(' ', s))
  process.exit(1)
}
console.log('לכל התמונות יש תגיות חיפוש ✔')
