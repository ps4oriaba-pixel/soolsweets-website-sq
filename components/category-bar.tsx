'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const categories = [
  { href: '/category/cakes', label: 'עוגות מעוצבות', key: 'cakes' },
  { href: '/category/boxes', label: 'מארזים מעוצבים', key: 'boxes' },
  { href: '/category/desserts', label: 'קינוחים', key: 'desserts' },
  { href: '/category/special', label: 'עיצובים מיוחדים', key: 'special' },
]

// Maps every gallery slug to its parent category so the bar highlights
// correctly even when the visitor is inside a gallery page.
const slugToCategory: Record<string, string> = {
  // cakes
  'vintage-cakes': 'cakes',
  'mousse-cakes': 'cakes',
  'bento-cakes': 'cakes',
  'rectangular-cakes': 'cakes',
  'custom-cakes': 'cakes',
  'number-cakes': 'cakes',
  'mug-cakes': 'cakes',
  // boxes
  'boxes-events': 'boxes',
  'gender-reveal': 'boxes',
  'sweet-sixteen': 'boxes',
  'bar-bat-mitzvah': 'boxes',
  'branded-boxes': 'boxes',
  'holiday-boxes': 'boxes',
  // desserts
  'cup-desserts': 'desserts',
  'crumble-desserts': 'desserts',
  // special
  'chocolate-ball': 'special',
  'exploding-candy': 'special',
  'exploding-egg': 'special',
  'tiered-cakes': 'special',
  'burnt-paper-cakes': 'special',
}

export default function CategoryBar() {
  const pathname = usePathname()

  function activeKey(): string | null {
    if (pathname.startsWith('/category/')) {
      return pathname.split('/')[2] ?? null
    }
    if (pathname.startsWith('/gallery/')) {
      const slug = pathname.split('/')[2]
      return slug ? slugToCategory[slug] ?? null : null
    }
    return null
  }

  const active = activeKey()

  return (
    <div className="border-t border-border/60" style={{ backgroundColor: 'rgba(255,240,237,0.85)' }}>
      <nav
        className="max-w-6xl mx-auto px-4"
        aria-label="ניווט קטגוריות"
        dir="rtl"
      >
        <ul className="flex items-center gap-1.5 overflow-x-auto py-2 no-scrollbar">
          {categories.map((cat) => {
            const isActive = active === cat.key
            return (
              <li key={cat.key} className="shrink-0">
                <Link
                  href={cat.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={
                    isActive
                      ? 'inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-1.5 text-sm font-semibold whitespace-nowrap shadow-sm'
                      : 'inline-block rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-background/70 transition-colors whitespace-nowrap'
                  }
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground shrink-0" aria-hidden="true" />
                  )}
                  {cat.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
