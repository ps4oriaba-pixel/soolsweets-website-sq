'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function NavigationTracker() {
  const pathname = usePathname()

  useEffect(() => {
    // When we land on a new page, read the stored "previous" URL if it exists
    // Then store THIS page as the new "previous" for when we leave
    if (typeof window !== 'undefined') {
      const currentPath = pathname
      
      // If there's no previousUrl set yet (first page), just store current
      // Otherwise, update previousUrl to what was previously stored (which is from before this navigation)
      const existing = window.sessionStorage.getItem('currentUrl')
      if (existing) {
        // Update previous to the current from last time
        window.sessionStorage.setItem('previousUrl', existing)
      }
      // Always update current to be the new pathname
      window.sessionStorage.setItem('currentUrl', currentPath)
    }
  }, [pathname])

  return null
}
