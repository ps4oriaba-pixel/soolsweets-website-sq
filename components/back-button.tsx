'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ChevronLeft } from 'lucide-react'

export function BackButton() {
  const router = useRouter()
  const [canGoBack, setCanGoBack] = useState(true)

  useEffect(() => {
    // Check if there's a history to go back to
    setCanGoBack(typeof window !== 'undefined' && window.history.length > 1)
  }, [])

  const handleBack = () => {
    if (canGoBack) {
      router.back()
    }
  }

  return (
    <button
      onClick={handleBack}
      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
      aria-label="חזור לעמוד הקודם"
    >
      <ChevronLeft className="w-5 h-5" />
      <span>חזור</span>
    </button>
  )
}
