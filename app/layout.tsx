import type { Metadata, Viewport } from 'next'
import { Assistant, Cormorant_Garamond } from 'next/font/google'
import { NavigationTracker } from '@/components/navigation-tracker'
import FloatingWhatsApp from '@/components/floating-whatsapp'
import WhatsAppConversion from '@/components/whatsapp-conversion'
import './globals.css'

const assistant = Assistant({
  subsets: ['hebrew', 'latin'],
  variable: '--font-assistant',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: '700',
  style: 'italic',
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

const gtagInline = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-17408220155/vlzfCK6Ewb0dEPu38exA',
      'event_callback': callback
  });
  return false;
}
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl" className={`${assistant.variable} ${cormorant.variable} bg-background`}>
      <head>
        <script async src="https://www.googletagmanager.com/gtm.js?id=AW-17408220155"></script>
        <script dangerouslySetInnerHTML={{ __html: gtagInline }} />
      </head>
      <body className="antialiased font-sans">
        <NavigationTracker />
        {children}
        <FloatingWhatsApp />
        <WhatsAppConversion />
      </body>
    </html>
  )
}
