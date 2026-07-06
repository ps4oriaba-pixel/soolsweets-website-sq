import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import BowTieSizeGuideContent from '@/components/bow-tie-size-guide-content'
import { BackButton } from '@/components/back-button'

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
        <section className="max-w-2xl mx-auto px-6 pb-4">
          <BackButton />
        </section>
        <BowTieSizeGuideContent />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
