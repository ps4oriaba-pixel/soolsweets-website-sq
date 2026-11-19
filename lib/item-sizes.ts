export interface ItemSizeOption {
  minGuests: number
  maxGuests: number
  guests: string
  size: string
  dimensions?: string
  variant?: 'heart'
}

const standardCakeSizes: ItemSizeOption[] = [
  { minGuests: 5, maxGuests: 8, guests: '5-8 אנשים', size: 'קוטר 12, 2-3 שכבות' },
  { minGuests: 8, maxGuests: 14, guests: '8-14 אנשים', size: 'קוטר 14, 2-3 שכבות' },
  { minGuests: 14, maxGuests: 20, guests: '14-20 אנשים', size: 'קוטר 16, 2-3 שכבות' },
  { minGuests: 18, maxGuests: 22, guests: '18-22 אנשים', size: 'קוטר 18, 2-3 שכבות' },
  { minGuests: 24, maxGuests: 28, guests: '24-28 אנשים', size: 'קוטר 20, 2-3 שכבות' },
]

const heartCakeSizes: ItemSizeOption[] = [
  { minGuests: 4, maxGuests: 6, guests: '4-6 אנשים', size: 'קוטר 12, 2-3 שכבות', variant: 'heart' },
  { minGuests: 8, maxGuests: 10, guests: '8-10 אנשים', size: 'קוטר 14, 2-3 שכבות', variant: 'heart' },
  { minGuests: 12, maxGuests: 15, guests: '12-15 אנשים', size: 'קוטר 16, 2-3 שכבות', variant: 'heart' },
  { minGuests: 18, maxGuests: 22, guests: '18-22 אנשים', size: 'קוטר 18, 2-3 שכבות', variant: 'heart' },
  { minGuests: 22, maxGuests: 26, guests: '22-26 אנשים', size: 'קוטר 20, 2-3 שכבות', variant: 'heart' },
]

export const ITEM_SIZES: Record<string, ItemSizeOption[]> = {
  'vintage-cakes': [...standardCakeSizes, ...heartCakeSizes],
  'mousse-cakes': [...standardCakeSizes, ...heartCakeSizes],
  'custom-cakes': [...standardCakeSizes, ...heartCakeSizes],
  'burnt-paper-cakes': [...standardCakeSizes, ...heartCakeSizes],
  'bento-cakes': [
    { minGuests: 2, maxGuests: 2, guests: '2 אנשים', size: 'קוטר 10 / גובה 7 (קופסת T.A)' },
    { minGuests: 2, maxGuests: 3, guests: '2-3 אנשים', size: 'קוטר 10 / גובה 8-10 (קופסא שקופה)' },
  ],
  'number-cakes': [
    ...heartCakeSizes,
    { minGuests: 15, maxGuests: 15, guests: 'כ- 15 אנשים', size: 'עוגה ספרה אחת' },
    { minGuests: 25, maxGuests: 25, guests: 'כ-25 אנשים', size: 'עוגת שתי ספרות' },
  ],
  'rectangular-cakes': [
    ...heartCakeSizes,
    { minGuests: 25, maxGuests: 30, guests: '25-30 אנשים', dimensions: 'אורך 35 / רוחב 25', size: 'בינונית' },
    { minGuests: 35, maxGuests: 40, guests: '35-40 אנשים', dimensions: 'אורך 43 / רוחב 30', size: 'גדולה (A3)' },
  ],
  'bow-tie-cakes': [
    { minGuests: 12, maxGuests: 14, guests: '12-14 אנשים', size: 'קוטר 14, 3 שכבות' },
    { minGuests: 18, maxGuests: 20, guests: '18-20 אנשים', size: 'קוטר 16, 3 שכבות' },
    { minGuests: 22, maxGuests: 24, guests: '22-24 אנשים', size: 'קוטר 18, 3 שכבות' },
  ],
  'crown-cakes': [
    ...heartCakeSizes,
    { minGuests: 12, maxGuests: 14, guests: '12-14 אנשים', size: 'קוטר 14, 3 שכבות' },
    { minGuests: 18, maxGuests: 20, guests: '18-20 אנשים', size: 'קוטר 16, 3 שכבות' },
    { minGuests: 22, maxGuests: 24, guests: '22-24 אנשים', size: 'קוטר 18, 3 שכבות' },
    { minGuests: 26, maxGuests: 28, guests: '26-28 אנשים', size: 'קוטר 20, 3 שכבות' },
  ],
}
