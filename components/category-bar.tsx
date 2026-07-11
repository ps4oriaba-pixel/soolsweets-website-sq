'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

const categories = [
  { href: '/category/cakes', label: 'עוגות מעוצבות', key: 'cakes' },
  { href: '/category/boxes', label: 'מארזים מעוצבים', key: 'boxes' },
  { href: '/category/desserts', label: 'קינוחים אישיים', key: 'desserts' },
  { href: '/category/special', label: 'קולקציית ה-WOW', key: 'special' },
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
  const [underlineStyle, setUnderlineStyle] = useState({ left: '0px', width: '0px' })
  const navRef = useRef<HTMLUListElement>(null)

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

  // Update underline position when active category changes
  useEffect(() => {
    if (!navRef.current) return

    const activeLinkElement = navRef.current.querySelector('[aria-current="page"]')
    if (!activeLinkElement) {
      setUnderlineStyle({ left: '0px', width: '0px' })
      return
    }

    const navRect = navRef.current.getBoundingClientRect()
    const linkRect = activeLinkElement.getBoundingClientRect()

    // Calculate position relative to nav container (accounting for RTL)
    const left = linkRect.left - navRect.left
    const width = linkRect.width

    setUnderlineStyle({ left: `${left}px`, width: `${width}px` })
  }, [active])

  return (
    <div className="border-t border-border/60" style={{ backgroundColor: 'rgba(255,240,237,0.85)' }}>
      <nav
        className="max-w-6xl mx-auto px-4 relative"
        aria-label="ניווט קטגוריות"
        dir="rtl"
      >
        <ul ref={navRef} className="flex items-center gap-1.5 overflow-x-auto py-3 no-scrollbar relative">
          {categories.map((cat) => {
            const isActive = active === cat.key
            return (
              <li key={cat.key} className="shrink-0">
                <Link
                  href={cat.href}
                  aria-current={isActive ? 'page' : undefined}
                  className="inline-block px-4 py-1 text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
                >
                  {cat.label}
                </Link>
              </li>
            )
          })}
          
          {/* Animated underline indicator */}
          <div
            className="absolute bottom-0 h-1 bg-primary rounded-t"
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width,
              transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            aria-hidden="true"
          />
        </ul>
      </nav>
    </div>
  )
}
