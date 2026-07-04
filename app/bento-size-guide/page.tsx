import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'

export const metadata = {
  title: 'טבלת גדלי עוגות בנטו | SoolSweets',
  description:
    'טבלת גדלי עוגות בנטו – בחרו את הגודל המושלם לאירוע אינטימי שלכם.',
}

interface SizeRow {
  size: string
  servings: string
  note: string
}

const rows: SizeRow[] = [
  {
    size: 'קוטר 10 ס"מ, גובה 7 ס"מ',
    servings: '2-3 אנשים',
    note: 'אירוע אינטימי, זוג או משפחה קטנה, פינוק אישי',
  },
  {
    size: 'קוטר 10 ס"מ, גובה 10 ס"מ',
    servings: '2-3 אנשים',
    note: 'אירוע אינטימי עם עוגה גבוהה יותר, מרשימה יותר',
  },
]

export default function BentoSizeGuidePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28">
        {/* Header */}
        <section className="bg-secondary py-14 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
              טבלת גדלים
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance mb-4">
              טבלת גדלי עוגות בנטו
            </h1>
            <p className="text-foreground/70 leading-relaxed">
              עוגות בנטו מלאות בעוד 40 טעמים בתוך כל כוס. בחרו את הגודל המושלם לאירוע האינטימי שלכם.
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
                    כמות אנשים
                  </th>
                  <th className="px-5 py-4 font-semibold text-sm">
                    הערה
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
                    <td className="px-5 py-4 font-bold text-foreground whitespace-nowrap align-top border-t border-border">
                      {row.servings}
                    </td>
                    <td className="px-5 py-4 text-sm text-muted-foreground leading-relaxed align-top border-t border-border">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6 leading-relaxed">
            הגדלים הם המלצה כללית. כל עוגה בנטו מעוצבת אישית בהתאם לטעם שלכם.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-accent py-14 px-6">
          <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-5">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-background text-balance">
              מוכנים להזמין?
            </h2>
            <p className="text-background/75 leading-relaxed text-sm md:text-base">
              בחרו את הגודל ותעדכנו אותי בוואטסאפ. נתחיל לתכנן ביחד.
            </p>
            <WhatsAppButton message="שלום סלעית, אשמח להזמין עוגת בנטו!" />
            <Link
              href="/gallery/bento-cakes"
              className="text-sm font-semibold text-background/80 hover:text-background transition-colors underline underline-offset-4"
            >
              חזרה לעוגות בנטו
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
