import Image from 'next/image'
import { shouldSkipImageOptimization } from '@/lib/image-ratios'

interface FramedHeroProps {
  src: string
  alt: string
  // portrait = תמונות אנכיות (פריטים), landscape = תמונות לרוחב (קטגוריות)
  variant: 'portrait' | 'landscape'
}

// תמונה עליונה: מוצגת שלמה (בלי חיתוך) בתוך מסגרת, ומאחוריה אותה תמונה במטושטש קל.
export default function FramedHero({ src, alt, variant }: FramedHeroProps) {
  const skip = shouldSkipImageOptimization(src)
  const maxHeight =
    variant === 'portrait' ? 'max-h-[324px] md:max-h-[480px]' : 'max-h-[210px] md:max-h-[360px]'

  return (
    <section className="relative overflow-hidden bg-secondary/40">
      <Image
        src={src}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        quality={50}
        unoptimized={skip}
        className="object-cover object-center scale-110 blur-[5px] saturate-[1.1]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 to-background/30" />
      <div className="relative z-10 flex justify-center px-4 pt-6 pb-14 md:pt-10 md:pb-16">
        <div className="overflow-hidden rounded-3xl border-[5px] border-card bg-card shadow-2xl">
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={1200}
            priority
            sizes="(max-width: 768px) 90vw, 480px"
            quality={90}
            unoptimized={skip}
            style={{ width: 'auto', height: 'auto' }}
            className={`block max-w-[calc(100vw-3rem)] ${maxHeight}`}
          />
        </div>
      </div>
    </section>
  )
}
