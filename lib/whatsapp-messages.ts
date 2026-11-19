// הודעת וואטסאפ מוכנה לפי העמוד שבו נמצא המבקר (לכפתור הצף).
// הודעות הפריטים זהות ל-whatsappMessage שב-lib/gallery-data.ts – אם משנים שם, כדאי לעדכן גם כאן.

export const WHATSAPP_NUMBER = '972545629058'

const DEFAULT_MESSAGE = 'שלום סלעית, אשמח לשמוע עוד על העוגות והמארזים שלך'

const categoryMessages: Record<string, string> = {
  cakes: 'שלום סלעית, אשמח להזמין עוגה מעוצבת!',
  boxes: 'שלום סלעית, אשמח להזמין מארז מעוצב!',
  desserts: 'שלום סלעית, אשמח להזמין קינוחים אישיים!',
  special: 'שלום סלעית, אשמח לשמוע על קולקציית ה-WOW שלך!',
}

const galleryMessages: Record<string, string> = {
  "boxes-events": "שלום סלעית, אשמח להזמין מארז לאירוע מיוחד שיש לי בקרוב",
  "bar-bat-mitzvah": "שלום סלעית, אשמח להזמין מארז בהתאמה אישית!",
  "gender-reveal": "שלום סלעית, אשמח להזמין מארז לחג",
  "sweet-sixteen": "שלום סלעית, אשמח להזמין מארז עסקי",
  "branded-boxes": "שלום סלעית, אשמח לשמוע על מארזים ממותגים לחברה!",
  "holiday-boxes": "שלום סלעית, אשמח להזמין מארז חג!",
  "custom-cakes": "שלום סלעית, אשמח להזמין עוגה בעיצוב אישי!",
  "vintage-cakes": "שלום סלעית, אשמח להזמין עוגת וינטאג'!",
  "mousse-cakes": "שלום סלעית, אשמח להזמין עוגת מוס!",
  "bento-cakes": "שלום סלעית, אשמח להזמין עוגת בנטו!",
  "rectangular-cakes": "שלום סלעית, אשמח להזמין עוגה מלבנית!",
  "bow-tie-cakes": "שלום סלעית, אשמח להזמין עוגת פפיון!",
  "number-cakes": "שלום סלעית, אשמח להזמין עוגת מספרים!",
  "crown-cakes": "שלום סלעית, אשמח להזמין עוגת כתר!",
  "mug-cakes": "שלום סלעית, אשמח להזמין ספל שכולו אושר!",
  "burnt-paper-cakes": "שלום סלעית, אשמח להזמין עוגת דף נשרף!",
  "cup-desserts": "שלום סלעית, אשמח להזמין מארזי כוסות!",
  "crumble-desserts": "שלום סלעית, אשמח להזמין מארזי קראמבל!",
  "dedicated-dessert-boxes": "שלום סלעית, אשמח להזמין מארז קינוח ייעודי!",
  "chocolate-ball": "שלום סלעית, אשמח להזמין כדורי שוקולד מתנפצים!",
  "exploding-candy": "שלום סלעית, אשמח להזמין סוכריות מתנפצות!",
  "exploding-egg": "שלום סלעית, אשמח להזמין ביצים מתנפצות!",
  "tiered-cakes": "שלום סלעית, אשמח להזמין עוגת קומות!",
}

export function getWhatsAppMessage(pathname: string | null): string {
  if (!pathname) return DEFAULT_MESSAGE
  const parts = pathname.split('/').filter(Boolean)
  if (parts[0] === 'gallery' && parts[1]) {
    return galleryMessages[decodeURIComponent(parts[1])] ?? DEFAULT_MESSAGE
  }
  if (parts[0] === 'category' && parts[1]) {
    return categoryMessages[parts[1]] ?? DEFAULT_MESSAGE
  }
  if (parts[0] === 'about') {
    return 'שלום סלעית, אשמח להכיר ולשמוע עוד!'
  }
  return DEFAULT_MESSAGE
}

export function getWhatsAppUrl(pathname: string | null): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(getWhatsAppMessage(pathname))}`
}
