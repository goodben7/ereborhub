import 'server-only'
import type { Dictionary, Locale } from './dictionaries'

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module): Dictionary => module.default),
  fr: () => import('./dictionaries/fr.json').then((module): Dictionary => module.default),
} satisfies Record<Locale, () => Promise<Dictionary>>

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
