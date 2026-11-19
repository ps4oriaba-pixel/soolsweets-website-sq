import { testimonials } from '@/lib/testimonials'

const placeholders = [
  'כאן תופיע המלצה אמיתית מלקוח/ה מרוצה',
  'אפשר גם צילום מסך של הודעה בוואטסאפ',
  'תמונות ההמלצות מתחלפות כאן מעצמן',
  'עוד המלצה מלקוח/ה',
]

function Card({ index }: { index: number }) {
  const item = testimonials[index]
  if (item) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        className="h-auto w-56 sm:w-64 rounded-2xl shadow-md bg-card"
      />
    )
  }
  return (
    <div className="flex w-56 sm:w-64 flex-col gap-3 rounded-2xl bg-card p-5 shadow-md">
      <div className="flex items-center gap-2">
        <span className="h-8 w-8 rounded-full bg-primary/30" />
        <span className="text-sm font-bold text-foreground">שם הלקוח/ה</span>
      </div>
      <p className="text-sm leading-relaxed text-foreground/80">{placeholders[index % placeholders.length]}</p>
    </div>
  )
}

// קרוסלת המלצות שנעה לבד ללא הפסקה. עוצרת במעבר עכבר, ולא זזה למי שביקש פחות תנועה.
export default function TestimonialsCarousel() {
  const count = testimonials.length > 0 ? testimonials.length : placeholders.length
  const indexes = Array.from({ length: count }, (_, i) => i)
  const duration = Math.max(24, count * 7)

  return (
    <section className="py-16 md:py-20" aria-labelledby="testimonials-heading">
      <div className="text-center px-6 mb-8 md:mb-12">
        <p className="text-primary font-medium tracking-widest uppercase text-base mb-2">
          לקוחות מספרים
        </p>
        <h2 id="testimonials-heading" className="font-serif text-3xl md:text-4xl font-bold text-foreground">
          מה אומרים עלינו
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
      </div>

      <div className="marquee overflow-hidden" dir="ltr">
        <div className="marquee-track flex w-max" style={{ animationDuration: `${duration}s` }}>
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0" aria-hidden={copy === 1 ? true : undefined}>
              {indexes.map((i) => (
                <div key={i} className="mr-4 shrink-0">
                  <Card index={i} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
