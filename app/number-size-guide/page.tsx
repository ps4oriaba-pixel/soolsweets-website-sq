import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import HeartSizeModal from '@/components/heart-size-modal'

interface SizeRow {
  servings: string
  dimensions: string
  size: string
}

const rows: SizeRow[] = [
  {
    servings: 'כ- 15 אנשים',
    dimensions: 'אורך 35 / רוחב 25 ',
    size: 'עוגה ספרה אחת',
  },
  {
    servings: 'כ-25 אנשים',
    dimensions: 'רוחב 35 / אורך 25 ',
    size: 'עוגת שתי ספרות',
  },
]

export default function NumberSizeGuidePage() {
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
              טבלת גדלי עוגות מספרים
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed">
              עוגות מספרים מרשימות לימי הולדת מיוחדים. בחרו את הגודל המתאים למספר אורחיכם.
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
                    מידות  ס״מ
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
                    <td className="px-3 py-3 font-semibold text-foreground whitespace-nowrap align-top border-t border-border">
                      {row.dimensions}
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
            הגדלים הם המלצה כללית. לא מצאתם בדיוק את מה שחיפשתם? כתבו לי ונתאים יחד את הגודל המושלם.
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
              בחרו את הגודל ותעדכנו אותי בוואטסאפ עם מספר הספרה וצבעי ההעדפה.
            </p>
            <WhatsAppButton message="שלום סלעית, אשמח להזמין עוגת מספרים!" />
            <Link
              href="/gallery/number-cakes"
              className="text-sm font-semibold text-background/80 hover:text-background transition-colors underline underline-offset-4"
            >
              חזרה לעוגות מספרים
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
