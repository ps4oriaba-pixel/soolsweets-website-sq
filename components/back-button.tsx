'use client'

import { useRouter } from 'next/navigation'
import { ChevronRight } from 'lucide-react'

export function BackButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
      aria-label="חזור לעמוד הקודם"
    >
      <ChevronRight className="w-5 h-5" />
      <span>חזור</span>
    </button>
  )
}
