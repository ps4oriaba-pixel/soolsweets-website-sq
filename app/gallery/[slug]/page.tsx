import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import GalleryGrid from '@/components/gallery-grid'
import Breadcrumb from '@/components/breadcrumb'
import { getGallery, getAllSlugs, hasSizeGuide, getSizeGuideUrl } from '@/lib/gallery-data'

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
    description: gallery.description,
  }
}

export default async function GalleryPage({ params }: PageProps) {
  const { slug } = await params
  const gallery = getGallery(slug)
  if (!gallery) notFound()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="relative h-64 md:h-80 overflow-hidden">
          <Image
            src={gallery.heroImage}
            alt={gallery.title}
            fill
            priority
            className="object-cover object-center"
          />
          {/* Neutral dark scrim so the photo keeps its own colors */}
          <div className="absolute inset-0 bg-foreground/45" />
          <div className="absolute inset-0 flex items-center justify-center flex-col gap-3 px-4">
            <p className="text-secondary text-xs font-medium tracking-widest uppercase">
              SoolSweets
            </p>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-background text-center text-balance">
              {gallery.title}
            </h1>
            <p className="text-background/80 text-sm md:text-base text-center max-w-lg">
              {gallery.subtitle}
            </p>
          </div>
        </section>

        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'קטגוריות', href: '/#categories' }, { label: gallery.title }]} />

        {/* Description */}
        <section className="max-w-2xl mx-auto px-6 pb-8 text-center">
          <p className="text-foreground/70 leading-relaxed">{gallery.description}</p>
          {hasSizeGuide(slug) && (
            <Link
              href={getSizeGuideUrl(slug)}
              className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-primary hover:text-foreground transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3M9 11.25v1.5M12 9v3.75m3-6v6" />
              </svg>
              טבלת גדלים מומלצת לפי כמות אורחים
            </Link>
          )}
          <div className="w-10 h-0.5 bg-primary mx-auto mt-6 rounded-full" />
        </section>

        {/* Whats included – mug cakes only */}
        {slug === 'mug-cakes' && (
          <section className="max-w-xl mx-auto px-6 pb-8">
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
        )}

        {/* Gallery Grid */}
        <section className="max-w-5xl mx-auto px-6 pb-20">
          <GalleryGrid images={gallery.images} title={gallery.title} />
        </section>

        {/* CTA */}
        <section className="bg-accent py-14 px-6">
          <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-5">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-background text-balance">
              אהבתם? בואו נדבר!
            </h2>
            <p className="text-background/75 leading-relaxed text-sm md:text-base">
              אשמח לעזור לכם לעצב את החלום שלכם
            </p>
            <WhatsAppButton message={gallery.whatsappMessage} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
