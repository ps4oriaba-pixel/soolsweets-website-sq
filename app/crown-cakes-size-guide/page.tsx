import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import HeartSizeModal from '@/components/heart-size-modal'
import { BackButton } from '@/components/back-button'

export const metadata = {
  title: 'טבלת גדלי עוגות כתר | SoolSweets',
  description: 'עוגות כתר מעוצבות – עיצוב מלכותי עם כתר נוצץ, פפיונים ונצנצים שמתפזרים באפקט מרהיב.',
}

interface SizeRow {
  guests: string
  size: string
}

const rows: SizeRow[] = [
  { guests: '12-14 אנשים', size: 'קוטר 14, 3 שכבות' },
  { guests: '18-20 אנשים', size: 'קוטר 16, 3 שכבות' },
  { guests: '22-24 אנשים', size: 'קוטר 18, 3 שכבות' },
  { guests: '26-28 אנשים', size: 'קוטר 20, 3 שכבות' },
]

export default function CrownCakesSizeGuidePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Breadcrumb */}
        <section className="max-w-3xl mx-auto px-6 pt-6 pb-2">
          <Link href="/gallery/crown-cakes" className="text-primary hover:text-primary/80 text-sm font-medium">
            ← עוגות כתר
          </Link>
        </section>

        {/* Header */}
        <section className="bg-secondary py-14 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance mb-4">
              עוגות כתר
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed">
              לא בטוחים איזה גודל להזמין? הטבלה הבאה תעזור לכם לבחור את העוגה המושלמת
              בהתאם למספר האורחים ולסוג האירוע.
            </p>
          </div>
        </section>

        {/* Back Button */}
        <section className="max-w-2xl mx-auto px-6 pt-14 pb-4">
          <BackButton />
        </section>

        {/* Table */}
        <section className="max-w-2xl mx-auto px-6 py-14">
          <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
            <table className="w-full text-right border-collapse bg-card">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-5 py-3 font-semibold text-sm whitespace-nowrap">כמות אנשים</th>
                  <th className="px-5 py-3 font-semibold text-sm whitespace-nowrap">גודל עוגה מומלץ</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.guests} className={i % 2 === 0 ? 'bg-card' : 'bg-muted/40'}>
                    <td className="px-5 py-4 font-bold text-foreground whitespace-nowrap align-top border-t border-border">
                      {row.guests}
                    </td>
                    <td className="px-5 py-4 font-semibold text-primary whitespace-nowrap align-top border-t border-border">
                      {row.size}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-base text-muted-foreground mt-6 leading-relaxed">
            הגדלים הם המלצה כללית. לא מצאתם בדיוק את מה שחיפשתם? כתבו לי ונתאים יחד את הגודל המושלם עבורכם.
          </p>

          <p className="text-center text-sm text-muted-foreground mt-4 leading-relaxed">
            <span className="text-primary font-semibold">*</span> כל הגדלים המוצעים מתאימים לעוגה עגולה. עבור עוגת לב&nbsp;
            <HeartSizeModal />
            &nbsp;יש להוריד 2-4 פרוסות מהגודל המומלץ.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-accent py-14 px-6">
          <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-5">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-background text-balance">
              יודעים איזה גודל אתם רוצים?
            </h2>
            <p className="text-background/75 leading-relaxed text-sm md:text-base">
              שלחו לי הודעה בוואטסאפ עם מספר האורחים וסוג האירוע, ונתחיל לתכנן.
            </p>
            <WhatsAppButton message="שלום סלעית, אשמח להזמין עוגת כתר!" />
            <Link
              href="/category/cakes"
              className="text-sm font-semibold text-background/80 hover:text-background transition-colors underline underline-offset-4"
            >
              חזרה לעוגות המעוצבות
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
