import Link from 'next/link'
import SocialIcons from '@/components/social-icons'

export default function Footer({ flush = false }: { flush?: boolean }) {
  return (
    <footer className={`bg-accent text-accent-foreground ${flush ? '' : 'mt-16'}`}>
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-10">
        {/* Brand – centered */}
        <div className="flex justify-center">
          <span dir="ltr" className="font-serif italic font-bold whitespace-nowrap block" style={{ fontSize: '3.2rem', color: '#FFF0ED', letterSpacing: '0.02em' }}>
            SoolSweets
          </span>
        </div>

        {/* Follow us – centered under the logo */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 text-center sm:text-right">
          <p className="text-sm leading-snug text-accent-foreground/90">
            <span className="block font-semibold">רוצים להכיר יותר?</span>
            <span className="block">הקליקו כדי לעקוב אחריי ברשתות החברתיות</span>
          </p>
          <SocialIcons size={34} className="gap-3" />
        </div>

        <div className="mt-6 flex flex-col md:flex-row justify-start items-start gap-8 md:gap-16 text-right">
          {/* Quick links */}
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-foreground/80 mb-1">
              ניווט מהיר
            </h3>
            <Link href="/" className="text-sm text-accent-foreground/70 hover:text-secondary transition-colors">
              דף הבית
            </Link>
            <Link href="/about" className="text-sm text-accent-foreground/70 hover:text-secondary transition-colors">
              קצת עליי
            </Link>
            <Link href="/category/cakes" className="text-sm text-accent-foreground/70 hover:text-secondary transition-colors">
              עוגות מעוצבות
            </Link>
            <Link href="/category/boxes" className="text-sm text-accent-foreground/70 hover:text-secondary transition-colors">
              מארזים מעוצבים
            </Link>
            <Link href="/category/desserts" className="text-sm text-accent-foreground/70 hover:text-secondary transition-colors">
              קינוחים
            </Link>
            <Link href="/category/special" className="text-sm text-accent-foreground/70 hover:text-secondary transition-colors">
              עיצובים מיוחדים
            </Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-foreground/80 mb-1">
              יצירת קשר
            </h3>
            <a
              href="https://wa.me/972545629058"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent-foreground/70 hover:text-secondary transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              0545629058
            </a>
            <p className="text-sm text-accent-foreground/70">
              זמינה להזמנות ושאלות בוואטסאפ
            </p>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-8 pt-6 text-right text-xs text-accent-foreground/50">
          &copy; {new Date().getFullYear()} <span dir="ltr" className="font-serif italic font-bold text-[1.25em] leading-none" style={{ color: '#E8857A', letterSpacing: '0.02em' }}>SoolSweets</span>. כל הזכויות שמורות לסלעית.
        </div>
      </div>
    </footer>
  )
}
