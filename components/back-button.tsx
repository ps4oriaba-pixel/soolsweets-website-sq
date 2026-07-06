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
      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
      aria-label="חזור לעמוד הקודם"
    >
      <ChevronLeft className="w-5 h-5" />
      <span>חזור</span>
    </button>
  )
}
