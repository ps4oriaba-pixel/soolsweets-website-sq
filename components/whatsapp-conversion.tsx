'use client'

import { useEffect } from 'react'

// מדידת המרה בגוגל בכל לחיצה על קישור וואטסאפ באתר (כפתורים, תפריט, כפתור צף, כרטיסי מוצר ועוד).
// הקישור נפתח בלשונית חדשה, לכן לא מעבירים כתובת לפונקציה – רק שולחים את האירוע.
export default function WhatsAppConversion() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return // גרירה של הכפתור הצף
      const link = (e.target as Element | null)?.closest?.('a[href*="wa.me"]')
      if (!link) return
      try {
        ;(window as unknown as { gtag_report_conversion?: () => void }).gtag_report_conversion?.()
      } catch {
        // מדידה לא אמורה לשבור את הקישור
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
  return null
}
