import type { Metadata, Viewport } from 'next'
import { Assistant, Cormorant_Garamond } from 'next/font/google'
import { NavigationTracker } from '@/components/navigation-tracker'
import FloatingWhatsApp from '@/components/floating-whatsapp'
import './globals.css'

const assistant = Assistant({
  subsets: ['hebrew', 'latin'],
  variable: '--font-assistant',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SoolSweets | עוגות ומארזים מעוצבים',
  description:
    'קונדיטוריה ביתית בוטיק של סלעית – עוגות מעוצבות, מארזים לאירועים, קינוחים ועיצובים מיוחדים בהתאמה אישית.',
  keywords: 'עוגות מעוצבות, קונדיטוריה ביתית, מארזים לאירועים, SoolSweets, סלעית',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#FBDAD4',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl" className={`${assistant.variable} ${cormorant.variable} bg-background`}>
      <body className="antialiased font-sans">
        <NavigationTracker />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
