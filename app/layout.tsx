import type { Metadata, Viewport } from 'next'
import { Heebo, Playfair_Display } from 'next/font/google'
import './globals.css'

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  variable: '--font-heebo',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
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
  themeColor: '#F5E7E1',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${playfair.variable} bg-background`}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}
