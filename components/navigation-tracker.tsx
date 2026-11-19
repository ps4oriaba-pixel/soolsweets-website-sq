'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

const STORAGE_KEY = 'navHistory'

export function NavigationTracker() {
  const pathname = usePathname()
  const prevPathname = useRef<string | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Skip if same path (e.g. re-renders)
    if (prevPathname.current === pathname) return
    prevPathname.current = pathname

    let stack: string[] = []
    try {
      const parsed = JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) ?? '[]')
      if (Array.isArray(parsed)) stack = parsed.filter((s): s is string => typeof s === 'string' && s.startsWith('/') && !s.startsWith('//'))
    } catch {
      stack = []
    }

    const last = stack[stack.length - 1]

    // If navigating back (current page is second-to-last), pop the stack
    if (stack.length >= 2 && stack[stack.length - 2] === pathname) {
      stack.pop()
    } else if (last !== pathname) {
      // Normal forward navigation — push current page
      stack.push(pathname)
      // Keep stack size reasonable
      if (stack.length > 30) stack.shift()
    }

    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(stack))

    // previousUrl is always the second-to-last entry
    const prev = stack.length >= 2 ? stack[stack.length - 2] : '/'
    window.sessionStorage.setItem('previousUrl', prev)
  }, [pathname])

  return null
}
