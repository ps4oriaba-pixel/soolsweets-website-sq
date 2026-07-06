import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'

export const metadata = {
  title: 'טבלת גדלי עוגות ספל | SoolSweets',
  description:
    'עוגות ספל מעוצבות - כל ספל מגיע מוכן להפתעה עם כפית משוקולד, נר צבעוני וארוז בקופסה שקופה ומרשימה.',
}

interface SizeRow {
  servings: string
  dimensions: string
  size: string
}

const rows: SizeRow[] = [
  {
    servings: '2 אנשים',
    dimensions: 'קוטר 8 ס״מ, תכולה 340 מ״ל',
    size: 'ספל יחיד',
  },
  {
    servings: '3-4 אנשים',
    dimensions: 'קוטר 10 ס״מ, תכולה 500 מ״ל',
    size: 'ספל זוגי',
  },
  {
    servings: '10-12 אנשים',
    dimensions: 'קוטר 16 ס״מ, 3 שכבות',
    size: 'עוגת כפיות',
  },
]

export default function MugCakesSizeGuidePage() {
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
              עוגות ספל
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed">
              כל ספל מגיע מוכן להפתעה עם כפית משוקולד, נר צבעוני וארוז בקופסה שקופה ומרשימה.
            </p>
          </div>
        </section>

        {/* Whats included */}
        <section className="max-w-xl mx-auto px-6 pt-14">
          <div className="bg-accent/40 rounded-2xl border border-border p-6 text-center">
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
              כל ספל מגיע מוכן להפתעה עם
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-foreground font-semibold">
              <span>כפית משוקולד</span>
              <span className="hidden sm:inline text-primary">|</span>
              <span>נר צבעוני</span>
              <span className="hidden sm:inline text-primary">|</span>
              <span>ארוז בקופסה שקופה ומרשימה</span>
            </div>
          </div>
        </section>

        {/* Table */}
        <section className="max-w-xl mx-auto px-6 py-14">
          <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
            <table className="w-full text-right border-collapse bg-card">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-3 py-3 font-semibold text-sm whitespace-nowrap">
                    כמות אנשים
                  </th>
                  <th className="px-3 py-3 font-semibold text-sm whitespace-nowrap">
                    מידות
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

          <div className="flex justify-center mt-10">
            <WhatsAppButton message="שלום סלעית, אשמח להזמין עוגת ספל!" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
