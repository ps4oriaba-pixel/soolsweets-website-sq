import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import HeartSizeModal from '@/components/heart-size-modal'



interface SizeRow {
  guests: string
  size: string
}

const rows: SizeRow[] = [
  {
    guests: '5-8 אנשים',
    size: 'קוטר 12, 2-3 שכבות ',
  },
  {
    guests: '8-14 אנשים',
    size: 'קוטר 14, 2-3 שכבות ',
  },
  {
    guests: '14-20 אנשים',
    size: 'קוטר 16, 2-3 שכבות',
  },
  {
    guests: '18-22 אנשים',
    size: 'קוטר 18, 2-3 שכבות\n',
  },
  {
    guests: '24-28 אנשים',
    size: 'קוטר 20 , 2-3 שכבות',
  },
]

export default function SizeGuidePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Header */}
        <section className="bg-secondary py-14 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
              מדריך גדלים
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance mb-4">
              טבלת גדלי עוגות לפי כמות אורחים
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed">
              לא בטוחים איזה גודל להזמין? הטבלה הבאה תעזור לכם לבחור את העוגה המושלמת
              בהתאם למספר האורחים ולסוג האירוע.
            </p>
          </div>
        </section>

        {/* Table */}
        <section className="max-w-4xl mx-auto px-6 py-14">
          <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
            <table className="w-full text-right border-collapse bg-card">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-5 py-4 font-semibold text-sm whitespace-nowrap">
                    כמות אנשים
                  </th>
                  <th className="px-5 py-4 font-semibold text-sm whitespace-nowrap">
                    גודל עוגה מומלץ (קוטר / שכבות)
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.guests}
                    className={i % 2 === 0 ? 'bg-card' : 'bg-muted/40'}
                  >
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
            הגדלים הם המלצה כללית. לא מצאתם בדיוק את מה שחיפשתם? כתבו לי ונתאים יחד את
            הגודל המושלם עבורכם.
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
            <WhatsAppButton message="שלום סלעית, אשמח לעזרה בבחירת גודל עוגה מתאים לאירוע שלי" />
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
