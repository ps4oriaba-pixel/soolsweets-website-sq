'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const PLACEHOLDER_HINTS = [
  'עוגת יום הולדת ל-20 איש בסגנון וינטאג׳...',
  'מארז גילוי מין העובר מפתיע...',
  'קינוח לאירוע קטן ואינטימי...',
  'עוגת חתונה קלאסית לקבוצה גדולה...',
  'הפתעה עם שוקולד לבת מצווה...',
]

export default function HeroSearch() {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const [displayedPlaceholder, setDisplayedPlaceholder] = useState('')
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // Typewriter effect for placeholder hints
  useEffect(() => {
    const currentText = PLACEHOLDER_HINTS[placeholderIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentText.length) {
            setDisplayedPlaceholder(currentText.slice(0, charIndex + 1))
            setCharIndex((c) => c + 1)
          } else {
            // Pause at end then delete
            setTimeout(() => setIsDeleting(true), 1800)
          }
        } else {
          if (charIndex > 0) {
            setDisplayedPlaceholder(currentText.slice(0, charIndex - 1))
            setCharIndex((c) => c - 1)
          } else {
            setIsDeleting(false)
            setPlaceholderIndex((i) => (i + 1) % PLACEHOLDER_HINTS.length)
          }
        }
      },
      isDeleting ? 35 : 65
    )

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, placeholderIndex])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!query.trim()) return
    router.push(`/search?q=${encodeURIComponent(query.trim())}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl"
      dir="rtl"
      aria-label="חיפוש חכם למוצרים"
    >
      <div className="relative flex items-center">
        {/* Search icon */}
        <span className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-background/60">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="w-4 h-4"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path strokeLinecap="round" d="m21 21-4.35-4.35" />
          </svg>
        </span>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.nativeEvent.isComposing && !(e.keyCode === 229)) {
              handleSubmit(e)
            }
          }}
          placeholder={displayedPlaceholder || 'מה תרצו להזמין?'}
          className="w-full rounded-full bg-background/15 backdrop-blur-sm border border-background/30 pr-12 pl-36 py-4 text-sm text-background placeholder:text-background/55 focus:outline-none focus:ring-2 focus:ring-background/40 shadow-lg"
          aria-label="תיאור הבקשה"
        />

        <button
          type="submit"
          disabled={!query.trim()}
          className="absolute left-1.5 top-1/2 -translate-y-1/2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-xs font-bold hover:opacity-90 transition-opacity disabled:opacity-40 whitespace-nowrap shadow"
        >
          חפשו לי
        </button>
      </div>

      <p className="mt-3 text-background/55 text-xs text-center">
        ציינו: מספר אנשים, סוג האירוע וסגנון מועדף
      </p>
    </form>
  )
}
