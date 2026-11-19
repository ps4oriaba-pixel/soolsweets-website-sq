'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

const navLinks: { href: string; label: string; items?: { href: string; label: string }[] }[] = [
  { href: '/', label: 'דף הבית' },
  { href: '/about', label: 'קצת עליי' },
  {
    href: '/category/cakes',
    label: 'עוגות מעוצבות',
    items: [
      { href: '/gallery/custom-cakes', label: "עוגות בעיצוב אישי" },
      { href: '/gallery/vintage-cakes', label: "עוגות וינטאג'" },
      { href: '/gallery/bento-cakes', label: "עוגות בנטו" },
      { href: '/gallery/rectangular-cakes', label: "עוגה מלבנית מעוצבת" },
      { href: '/gallery/number-cakes', label: "עוגות מספרים" },
      { href: '/gallery/bow-tie-cakes', label: "עוגת פפיון" },
      { href: '/gallery/crown-cakes', label: "עוגות כתר" },
      { href: '/gallery/mousse-cakes', label: "עוגות מוס" },
      { href: '/gallery/burnt-paper-cakes', label: "עוגות דף נשרף" },
      { href: '/gallery/mug-cakes', label: "ספל שכולו אושר" },
    ],
  },
  {
    href: '/category/boxes',
    label: 'מארזים מעוצבים',
    items: [
      { href: '/gallery/boxes-events', label: "רגעים ששווה לחגוג" },
      { href: '/gallery/bar-bat-mitzvah', label: "מארז בהתאמה אישית" },
      { href: '/gallery/holiday-boxes', label: "חגים" },
      { href: '/gallery/branded-boxes', label: "עסקים" },
    ],
  },
  {
    href: '/category/desserts',
    label: 'קינוחים אישיים',
    items: [
      { href: '/gallery/cup-desserts', label: "מארזי כוסות" },
      { href: '/gallery/crumble-desserts', label: "מארזי קראמבל" },
      { href: '/gallery/dedicated-dessert-boxes', label: "קינוחים מסוג אחד" },
    ],
  },
  {
    href: '/category/special',
    label: 'קולקציית ה-WOW',
    items: [
      { href: '/gallery/chocolate-ball', label: "כדורגל שוקולד" },
      { href: '/gallery/exploding-candy', label: "סוכריה גדולה ומתוקה" },
      { href: '/gallery/exploding-egg', label: "ביצת שוקולד ענקית" },
      { href: '/gallery/tiered-cakes', label: "עוגות קומות" },
      { href: '/gallery/burnt-paper-cakes', label: "עוגות דף נשרף" },
    ],
  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <header className="fixed top-0 right-0 left-0 z-50 backdrop-blur-sm border-b border-border" style={{ backgroundColor: 'rgba(251,218,212,0.96)' }}>
      {/* Use flex-row-reverse so logo sits on left visually while RTL nav is on right */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-row-reverse items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0" style={{ direction: 'ltr' }}>
          <span
            className="font-serif italic font-bold leading-tight whitespace-nowrap"
            style={{ fontSize: '3.2rem', color: '#E8857A', letterSpacing: '0.02em' }}
          >
            SoolSweets
          </span>
        </Link>

        {/* Desktop nav – RTL order, appears on right */}
        <nav className="hidden lg:flex items-center gap-5" aria-label="ניווט ראשי" dir="rtl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-foreground hover:text-primary transition-colors duration-200 font-medium whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/972545629058"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-secondary hover:text-foreground transition-colors duration-200 whitespace-nowrap"
          >
            הזמינו עכשיו
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'סגור תפריט' : 'פתח תפריט'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="lg:hidden bg-background border-t border-border px-4 py-4 flex flex-col gap-2 max-h-[calc(100vh-5rem)] overflow-y-auto"
          aria-label="תפריט נייד"
          dir="rtl"
        >
          {navLinks.map((link) =>
            link.items ? (
              <div key={link.href}>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className="p-2 text-foreground/70"
                    aria-label={`הצג פריטים ב${link.label}`}
                    aria-expanded={expanded === link.href}
                    onClick={() => setExpanded(expanded === link.href ? null : link.href)}
                  >
                    <ChevronDown size={18} className={`transition-transform ${expanded === link.href ? 'rotate-180' : ''}`} />
                  </button>
                  <Link
                    href={link.href}
                    className="text-base text-foreground hover:text-primary transition-colors font-medium py-1.5"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </div>
                {expanded === link.href && (
                  <div className="flex flex-col pr-4 mr-1 border-r-2 border-primary/40 mb-1">
                    {link.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-sm text-foreground/75 hover:text-primary transition-colors py-1.5"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-base text-foreground hover:text-primary transition-colors font-medium py-1.5"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ),
          )}
          <a
            href="https://wa.me/972545629058"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground text-center px-4 py-3 rounded-full text-sm font-medium mt-2"
            onClick={() => setOpen(false)}
          >
            הזמינו עכשיו
          </a>
        </nav>
      )}
    </header>
  )
}
