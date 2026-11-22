// תמונות המלצות של לקוחות (צילומי מסך של הודעות וואטסאפ וכד').
// להוספה: מעלים את הקובץ לתיקייה public/images/testimonials/ ומוסיפים שורה כאן, למשל:
//   { src: '/images/testimonials/rec-1.webp', alt: 'המלצה מלקוחה מרוצה' },
// כל עוד הרשימה ריקה מוצגות כרטיסיות דוגמה במקום.

export interface Testimonial {
  src: string
  alt: string
}

export const testimonials: Testimonial[] = [
  { src: '/images/testimonials/rec-1.webp', alt: 'המלצה מלקוחה מרוצה בוואטסאפ' },
]
