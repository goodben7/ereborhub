import en from "./dictionaries/en.json";
import fr from "./dictionaries/fr.json";
import type { Dictionary, Locale } from "./dictionaries";

const dictionaries = {
  en,
  fr,
} satisfies Record<Locale, Dictionary>;

export const getDictionaryByLocale = (locale: Locale): Dictionary => dictionaries[locale];
