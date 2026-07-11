'use client'

import { useRouter } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'

export function BackButton() {
  const router = useRouter()

  return (
    <button
      type="button"
      onClick={() => router.back()}
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
