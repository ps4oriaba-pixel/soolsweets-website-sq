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
  servings: string
  size: string
}

const rows: SizeRow[] = [
  {
    servings: '2 אנשים',
    size: 'קוטר 10 / גובה 7 (קופסת T.A)',
  },
  {
    servings: '2-3 אנשים',
    size: 'קוטר 10 / גובה 8-10 (קופסא שקופה)',
  },
]

export default function BentoSizeGuidePage() {
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
              טבלת גדלי עוגות בנטו
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed">
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
                  <th className="px-3 py-3 font-semibold text-sm whitespace-nowrap">
                    כמות אנשים
                  </th>
                  <th className="px-3 py-3 font-semibold text-sm whitespace-nowrap">
                    גודל עוגה
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.servings}
                    className={i % 2 === 0 ? 'bg-card' : 'bg-muted/40'}
                  >
                    <td className="px-3 py-3 font-bold text-foreground whitespace-nowrap align-top border-t border-border">
                      {row.servings}
                    </td>
                    <td className="px-3 py-3 font-semibold text-primary whitespace-nowrap align-top border-t border-border">
                      {row.size}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-base text-muted-foreground mt-6 leading-relaxed">
            הגדלים הם המלצה כללית. כל עוגת בנטו מעוצבת אישית בהתאם לטעם שלכם.
          </p>
          
          <p className="text-center text-sm text-muted-foreground mt-4 leading-relaxed">
            <span className="text-primary font-semibold">*</span> כל הגדלים המוצעים מתאימים לעוגה עגולה. עבור עוגת לב יש להוריד 2-4 פרוסות מהגודל המומלץ.
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
