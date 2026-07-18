'use client'

interface SizeRow {
  guests: string
  size: string
}

const rows: SizeRow[] = [
  {
    guests: '12-14 אנשים',
    size: 'קוטר 14, 3 שכבות',
  },
  {
    guests: '18-20 אנשים',
    size: 'קוטר 16, 3 שכבות',
  },
  {
    guests: '22-24 אנשים',
    size: 'קוטר 18, 3 שכבות',
  },
]

export default function BowTieSizeGuideContent() {
  return (
    <>
      {/* Header */}
      <section className="bg-secondary py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance mb-4">
            מדריך לבחירת גודל העוגה
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed">
            לא בטוחים איזה גודל להזמין? הטבלה הבאה תעזור לכם לבחור את העוגה המושלמת
            בהתאם למספר האורחים.
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
          <span className="text-primary font-semibold">*</span> כל הגדלים המוצעים מתאימים לעוגה עגולה
        </p>
      </section>
    </>
  )
}
