'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

const heartSizes = [
  { size: 'קוטר 12, 2-3 שכבות', servings: '4-6 אנשים' },
  { size: 'קוטר 14, 2-3 שכבות', servings: '8-10 אנשים' },
  { size: 'קוטר 16, 2-3 שכבות', servings: '12-15 אנשים' },
  { size: 'קוטר 18, 2-3 שכבות', servings: '18-22 אנשים' },
  { size: 'קוטר 20, 2-3 שכבות', servings: '22-26 אנשים' },
]

export default function HeartSizeModal() {
  return (
    <Dialog>
      <DialogTrigger className="text-primary font-semibold hover:underline">
        לחצו כאן
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-center">גדלים לעוגת לב</DialogTitle>
        </DialogHeader>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-right border-collapse bg-card text-sm">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-4 py-3 font-semibold whitespace-nowrap">
                  גודל
                </th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap">
                  כמות אנשים
                </th>
              </tr>
            </thead>
            <tbody>
              {heartSizes.map((row, i) => (
                <tr
                  key={row.size}
                  className={i % 2 === 0 ? 'bg-card' : 'bg-muted/40'}
                >
                  <td className="px-4 py-3 font-semibold text-primary whitespace-nowrap border-t border-border">
                    {row.size}
                  </td>
                  <td className="px-4 py-3 font-bold text-foreground whitespace-nowrap border-t border-border">
                    {row.servings}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DialogContent>
    </Dialog>
  )
}
