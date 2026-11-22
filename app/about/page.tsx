import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { BackButton } from '@/components/back-button'

export const metadata = {
  title: 'קצת עליי | SoolSweets',
  description:
    'סלעית – בעלת עסק בוטיק להכנת עוגות, מארזים וקינוחים מיוחדים ומעוצבים בהתאמה אישית לכל אירוע.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Page Header – תמונה מלאה בנייד (בלי חיתוך), כיתוב עליה, וכרטיס תחתון מעוגל */}
        <section className="relative overflow-hidden bg-[#ead8c8]">
          <div className="relative aspect-[3/4] md:aspect-auto md:h-96">
            <Image
              src="/images/about-owner.png"
              alt="סלעית בסטודיו האפייה"
              fill
              priority
              sizes="100vw"
              quality={90}
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FBDAD4]/80 via-[#FBDAD4]/35 via-30% to-transparent to-45% md:hidden" />
            <div className="absolute inset-0 hidden bg-foreground/45 md:block" />
            <div className="absolute right-4 top-4 z-20">
              <BackButton variant="icon" />
            </div>
            {/* בנייד: כיתוב בראש התמונה */}
            <div className="absolute inset-x-0 top-0 z-10 px-5 pt-16 text-right md:hidden">
              <p className="inline-block rounded-full bg-white/80 px-4 py-1.5 text-base font-bold tracking-[0.14em] text-[#E8857A]">
                הכירו אותי
              </p>
              <h1 className="mt-3 text-[2.6rem] font-extrabold leading-[1.1] text-white [-webkit-text-stroke:1px_#E8857A] [paint-order:stroke_fill] [text-shadow:0_2px_10px_rgba(232,133,122,0.35)]">
                קצת עליי
              </h1>
            </div>
            {/* במחשב: כיתוב במרכז */}
            <div className="absolute inset-0 hidden flex-col items-center justify-center gap-3 px-4 md:flex">
              <p className="text-secondary text-sm font-medium tracking-widest uppercase">
                <span dir="ltr" className="font-logo italic font-bold text-[1.25em] leading-none" style={{ color: '#E8857A', letterSpacing: '0.02em' }}>SoolSweets</span>
              </p>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-background text-center text-balance">
                קצת עליי
              </h1>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="relative z-10 -mt-8 rounded-t-[2rem] bg-background shadow-[0_-8px_24px_rgba(107,58,52,0.12)] md:mt-0 md:rounded-none md:shadow-none">
          <div className="mx-auto mt-4 h-1 w-11 rounded-full bg-[#EBA59D] md:hidden" />
          <div className="max-w-5xl mx-auto px-6 pt-8 pb-12 md:py-12">
          <div className="flex flex-col md:flex-row gap-14 items-start">
            {/* Photo placeholder */}
            <div className="hidden md:block md:w-2/5 flex-shrink-0">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-muted relative shadow-md">
                <Image
                  src="/images/about-owner.png"
                  alt="סלעית – בעלת SoolSweets"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  quality={90}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="md:w-3/5 flex flex-col gap-6">
              <div>
                <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">
                  הכירו אותי
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
                  אני סלעית
                </h2>
                <div className="w-12 h-1 bg-primary mt-4 rounded-full" />
              </div>

              <div className="flex flex-col gap-4 text-foreground/80 leading-relaxed text-base">
                <p>
                  בעלת עסק בוטיק להכנת עוגות, מארזים וקינוחים מיוחדים ומעוצבים בשלל סגנונות
                  וצבעים, ובהתאמה אישית לכל אירוע.
                </p>
                <p>
                  כל יצירה שלי נעשית באפייה ביתית מתוך אהבה גדולה למקצוע, בדגש על שימוש
                  בחומרי גלם איכותיים, וזאת כדי להבטיח לא רק יופי, אלא גם טעם בלתי נשכח.
                </p>
                <p>
                  אני אוהבת לקחת על עצמי אתגרים עיצוביים, כך שתוכלו להעלות כל רעיון – ואני
                  אגשים אותו בצורה הכי מרהיבה שיש!
                </p>
                <p>
                  בנוסף, אני מציעה סדנאות אפייה לקבוצות קטנות – חוויה מעשירה ומהנה שמתאימה
                  לחגיגות פרטיות ואישיות.
                </p>
                <p className="font-semibold text-foreground">
                  מוזמנים להצטרף לעולם שלי – <span dir="ltr" className="font-logo italic font-bold text-[1.25em] leading-none" style={{ color: '#E8857A', letterSpacing: '0.02em' }}>SoolSweets</span> – שבו טעם ואסתטיקה נפגשים, ליצירת
                  רגעים בלתי נשכחים!
                </p>
              </div>

            </div>
          </div>
          </div>
        </section>
      </main>

      <Footer flush />
    </div>
  )
}
