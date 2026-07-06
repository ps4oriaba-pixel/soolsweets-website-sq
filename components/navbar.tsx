'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'בית' },
  { href: '/about', label: 'קצת עליי' },
  { href: '/category/cakes', label: 'עוגות מעוצבות' },
  { href: '/category/boxes', label: 'מארזים מעוצבים' },
  { href: '/category/desserts', label: 'קינוחים' },
  { href: '/category/special', label: 'עיצובים מיוחדים' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 right-0 left-0 z-50 backdrop-blur-sm border-b border-border" style={{ backgroundColor: 'rgba(251,218,212,0.96)' }}>
      {/* Use flex-row-reverse so logo sits on left visually while RTL nav is on right */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-row-reverse items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="SoolSweets"
            width={200}
            height={60}
            priority
            className="h-12 w-auto"
          />
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
          className="lg:hidden bg-background border-t border-border px-4 py-4 flex flex-col gap-4"
          aria-label="תפריט נייד"
          dir="rtl"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base text-foreground hover:text-primary transition-colors font-medium py-1"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
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
