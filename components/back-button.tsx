'use client'

import { useRouter } from 'next/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function BackButton({ variant = 'pill' }: { variant?: 'pill' | 'icon' }) {
  const router = useRouter()

  const handleBack = () => {
    const prev = typeof window !== 'undefined'
      ? window.sessionStorage.getItem('previousUrl')
      : null
    // רק נתיב פנימי באתר – לא כתובת חיצונית
    const safe = prev && prev.startsWith('/') && !prev.startsWith('//') ? prev : '/'
    router.push(safe)
  }

  if (variant === 'icon') {
    return (
      <button
        type="button"
        onClick={handleBack}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-card/90 text-foreground shadow-md backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
        aria-label="חזור לעמוד הקודם"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={handleBack}
      className="inline-flex items-center gap-3 border-2 border-primary text-primary px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-sm group"
      aria-label="חזור לעמוד הקודם"
    >
      <span className="flex items-center justify-center w-6 h-6 rounded-full border border-primary group-hover:border-primary-foreground transition-all duration-200">
        <ChevronLeft className="w-4 h-4" />
      </span>
      <span>חזור</span>
    </button>
  )
}
