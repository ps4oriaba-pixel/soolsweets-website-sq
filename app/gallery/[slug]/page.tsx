import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import GalleryGrid from '@/components/gallery-grid'
import Breadcrumb from '@/components/breadcrumb'
import FramedHero from '@/components/framed-hero'
import { getGallery, getAllSlugs, hasSizeGuide, getSizeGuideUrl, getCategoryForSlug } from '@/lib/gallery-data'
import { getProductDescription } from '@/lib/product-descriptions'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const gallery = getGallery(slug)
  if (!gallery) return {}
  return {
    title: `${gallery.title} | SoolSweets`,
    description: getProductDescription(slug) || gallery.description,
  }
}

export default async function GalleryPage({ params }: PageProps) {
  const { slug } = await params
  const gallery = getGallery(slug)
  if (!gallery) notFound()

  const productDescription = getProductDescription(slug)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Breadcrumb */}
        <Breadcrumb items={[getCategoryForSlug(slug), { label: gallery.title }]} />

        {/* Hero – full photo in a frame, soft-blurred copy behind it */}
        <FramedHero src={gallery.heroImage} alt={gallery.title} variant="portrait" />

        {/* Bottom-sheet card */}
        <div className="relative -mt-8 rounded-t-[2rem] bg-card shadow-[0_-6px_20px_rgba(107,58,52,0.12)]">
          <div className="max-w-5xl mx-auto px-5 md:px-6 pt-6 pb-16">
            <div className="mx-auto mb-4 h-1.5 w-11 rounded-full bg-border" aria-hidden="true" />

            <div className="flex items-center justify-between gap-3">
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight">
                {gallery.title}
              </h1>
              <span className="shrink-0 rounded-full bg-muted px-3 py-1 text-xs md:text-sm font-bold text-muted-foreground">
                {gallery.images.length} תמונות
              </span>
            </div>
            {gallery.subtitle && (
              <p className="mt-2 text-foreground/70 font-medium">{gallery.subtitle}</p>
            )}
            {productDescription && (
              <p className="mt-3 text-foreground/70 leading-relaxed max-w-2xl">{productDescription}</p>
            )}

            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
              <WhatsAppButton compact label="להזמנה בוואטסאפ" message={gallery.whatsappMessage} />
              {hasSizeGuide(slug) && (
                <Link
                  href={getSizeGuideUrl(slug)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-foreground transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3M9 11.25v1.5M12 9v3.75m3-6v6" />
                  </svg>
                  טבלת גדלים מומלצת לפי כמות אורחים
                </Link>
              )}
            </div>

            <div className="my-6 h-px bg-border" />

        {/* Whats included – mug cakes only */}
        {slug === 'mug-cakes' && (
          <section className="max-w-xl mx-auto pb-8">
            <div className="bg-accent/40 rounded-2xl border border-border p-6 text-center">
              <p className="text-sm font-medium tracking-widest uppercase text-foreground mb-3">
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
        )}

            {/* Gallery Grid */}
            <GalleryGrid images={gallery.images} title={gallery.title} fullPhotoLayout={slug === 'tiered-cakes'} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
