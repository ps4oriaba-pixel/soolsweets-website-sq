'use client'

export const metadata = {
  title: 'עוגות ספל | SoolSweets',
  description: 'עוגות ספל מעוצבות - כל ספל מגיע מוכן להפתעה עם כפית משוקולד, נר צבעוני וארוז בקופסה שקופה.',
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
      <div className="flex-1 pt-20">
        <main className="flex-1 pt-20">
          <section className="max-w-xl mx-auto px-6 py-14">
            <h1 className="text-4xl font-bold text-primary mb-2 text-right">
              עוגות ספל
            </h1>
            <p className="text-lg text-foreground/80 mb-8 text-right">
              כל ספל מגיע מוכן להפתעה עם:
            </p>
            <div className="bg-card rounded-lg p-6 mb-8 border border-border text-right">
              <p className="text-foreground font-semibold">
                כפית משוקולד  |  נר צבעוני  |  ארוז בקופסה שקופה ומרשימה
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-border mb-8">
              <table className="w-full text-right border-collapse bg-background">
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
          </section>
        </main>
      </div>
    </div>
  )
}
