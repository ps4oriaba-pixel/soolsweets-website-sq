import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import BowTieSizeGuideContent from '@/components/bow-tie-size-guide-content'
import Breadcrumb from '@/components/breadcrumb'

export const metadata = {
  title: 'טבלת גדלי עוגת פפיון | SoolSweets',
  description:
    'טבלת גדלי עוגת פפיון – בחרו את הגודל המושלם לאירוע שלכם.',
}

export default function BowTieSizeGuidePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'עוגות מעוצבות', href: '/category/cakes' }, { label: 'עוגת פפיון', href: '/gallery/bow-tie-cakes' }, { label: 'מדריך גדלים' }]} />
        <BowTieSizeGuideContent />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
