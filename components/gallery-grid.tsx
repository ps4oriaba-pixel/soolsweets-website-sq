'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import type { GalleryImage } from '@/lib/gallery-data'
import { getImageRatio } from '@/lib/image-ratios'

interface GalleryGridProps {
  images: GalleryImage[]
  title: string
  fullPhotoLayout?: boolean
}

const INITIAL_VISIBLE_COUNT = 10
const LOAD_MORE_COUNT = 10

// מספר עמודות: 2 בטלפון, 3 במסך גדול
function useColumnCount() {
  const [cols, setCols] = useState(2)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const update = () => setCols(mq.matches ? 3 : 2)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return cols
}

export default function GalleryGrid({ images, title }: GalleryGridProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const visibleImages = images.slice(0, visibleCount)
  const cols = useColumnCount()
  // חלוקה לעמודות לפי סדר (תמונה 1 לעמודה 1, תמונה 2 לעמודה 2 וכו'),
  // כך שטעינת תמונות נוספות לא מזיזה את התמונות הקיימות
  const columns: { img: GalleryImage; index: number }[][] = Array.from({ length: cols }, () => [])
  visibleImages.forEach((img, index) => columns[index % cols].push({ img, index }))
  const hasMore = visibleCount < images.length

  const handleLoadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, images.length))
  }, [images.length])

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + visibleImages.length) % visibleImages.length))
  }, [visibleImages.length])

  const showNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % visibleImages.length))
  }, [visibleImages.length])

  useEffect(() => {
    if (lightboxIndex === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') showNext()
      if (e.key === 'ArrowRight') showPrev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxIndex, closeLightbox, showPrev, showNext])

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  return (
    <>
      {/* Grid – כל תמונה מוצגת ביחס המקורי שלה: בלי חיתוך ובלי שוליים */}
      <div className="flex items-start gap-3 md:gap-4">
        {columns.map((column, c) => (
          <div key={c} className="flex min-w-0 flex-1 flex-col gap-3 md:gap-4">
            {column.map(({ img, index }) => (
              <button
                key={index}
                onClick={() => setLightboxIndex(index)}
                style={{ aspectRatio: getImageRatio(img.src) }}
                className="group relative block w-full overflow-hidden rounded-xl bg-card focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label={`פתח תמונה: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/25 transition-colors duration-300 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16zm0-4v-4m0 0V7m0 4H7m4 0h4"
                    />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Load more */}
      {hasMore && (
        <div className="flex flex-col items-center gap-2 mt-8">
          <button
            onClick={handleLoadMore}
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm tracking-wide hover:bg-primary/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            טען עוד תמונות
          </button>
          <span className="text-foreground/50 text-xs">
            {visibleImages.length} מתוך {images.length} תמונות
          </span>
        </div>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`תמונה ${lightboxIndex + 1} מתוך ${visibleImages.length}: ${visibleImages[lightboxIndex].alt}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-accent/90 backdrop-blur-sm px-4"
          onClick={closeLightbox}
        >
          {/* Image container */}
          <div
            className="relative w-full max-w-3xl max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Plain <img> renders at the photo's real aspect ratio and
                resolution, so max-w-full/max-h-[85vh] only ever scale it
                down (never up) and it's always shown in full, never
                cropped or distorted. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={visibleImages[lightboxIndex].src || '/placeholder.svg'}
              alt={visibleImages[lightboxIndex].alt}
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-2xl shadow-2xl"
            />

            {/* Caption */}
            <p className="sr-only">{visibleImages[lightboxIndex].alt}</p>

            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 left-0 text-background/80 hover:text-background transition-colors"
              aria-label="סגור"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Counter */}
            <span className="absolute -top-12 right-0 text-background/70 text-sm font-medium">
              {lightboxIndex + 1} / {visibleImages.length}
            </span>

            {/* Prev */}
            {visibleImages.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); showPrev() }}
                className="absolute right-0 translate-x-14 text-background/80 hover:text-background transition-colors hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-accent/60 hover:bg-accent"
                aria-label="תמונה קודמת"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Next */}
            {visibleImages.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); showNext() }}
                className="absolute left-0 -translate-x-14 text-background/80 hover:text-background transition-colors hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-accent/60 hover:bg-accent"
                aria-label="תמונה הבאה"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Mobile swipe dots */}
            {visibleImages.length > 1 && (
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-1.5 md:hidden">
                {visibleImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setLightboxIndex(i) }}
                    className={`w-2 h-2 rounded-full transition-colors ${i === lightboxIndex ? 'bg-background' : 'bg-background/40'}`}
                    aria-label={`עבור לתמונה ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
