import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'

export const metadata = {
  title: 'טבלת גדלי עוגות מלבניות | SoolSweets',
  description:
    'טבלת גדלי עוגות מלבניות מעוצבות – בחרו את הגודל המושלם לאירוע שלכם.',
}

interface SizeRow {
  size: string
  dimensions: string
  servings: string
}

const rows: SizeRow[] = [
  {
    size: 'בינונית',
    dimensions: 'אורך 35 / רוחב 25',
    servings: '25-30 אנשים',
  },
  {
    size: 'גדולה',
    dimensions: 'אורך 43 / רוחב 30',
    servings: '35-40 אנשים',
  },
]

export default function RectangularSizeGuidePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Header */}
        <section className="bg-secondary py-14 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
              טבלת גדלים
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance mb-4">
              טבלת גדלי עוגות מלבניות מעוצבות
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed">
              עוגות מלבניות עם עיצובים מרהיבים. בחרו את הגודל המתאים לאירוע שלכם.
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
                    גודל עוגה
                  </th>
                  <th className="px-5 py-4 font-semibold text-sm whitespace-nowrap">
                    מידות (ס"מ)
                  </th>
                  <th className="px-5 py-4 font-semibold text-sm whitespace-nowrap">
                    כמות אנשים
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.size}
                    className={i % 2 === 0 ? 'bg-card' : 'bg-muted/40'}
                  >
                    <td className="px-5 py-4 font-semibold text-primary whitespace-nowrap align-top border-t border-border">
                      {row.size}
                    </td>
                    <td className="px-5 py-4 font-semibold text-foreground whitespace-nowrap align-top border-t border-border">
                      {row.dimensions}
                    </td>
                    <td className="px-5 py-4 font-bold text-foreground whitespace-nowrap align-top border-t border-border">
                      {row.servings}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-base text-muted-foreground mt-6 leading-relaxed">
            הגדלים הם המלצה כללית. לא מצאתם בדיוק את מה שחיפשתם? כתבו לי ונתאים יחד את הגודל המושלם.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-accent py-14 px-6">
          <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-5">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-background text-balance">
              יודעים איזה גודל אתם רוצים?
            </h2>
            <p className="text-background/75 leading-relaxed text-sm md:text-base">
              בחרו את הגודל ותעדכנו אותי בוואטסאפ עם פרטי העיצוב המיוחד שלכם.
            </p>
            <WhatsAppButton message="שלום סלעית, אשמח להזמין עוגה מלבנית מעוצבת!" />
            <Link
              href="/gallery/rectangular-cakes"
              className="text-sm font-semibold text-background/80 hover:text-background transition-colors underline underline-offset-4"
            >
              חזרה לעוגות מלבניות
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
