'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ChevronLeft } from 'lucide-react'

export function BackButton() {
  const router = useRouter()
  const [previousUrl, setPreviousUrl] = useState<string | null>(null)

  useEffect(() => {
    // Get the previously stored URL from sessionStorage
    // NavigationTracker stores the previous page path in 'previousUrl'
    if (typeof window !== 'undefined') {
      const prev = window.sessionStorage.getItem('previousUrl')
      if (prev) {
        setPreviousUrl(prev)
      }
    }
  }, [])

  const handleBack = () => {
    if (previousUrl) {
      // Use router.push with a small delay to ensure proper navigation
      setTimeout(() => {
        router.push(previousUrl)
      }, 100)
    } else {
      // Fallback to home if no previous URL
      setTimeout(() => {
        router.push('/')
      }, 100)
    }
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
