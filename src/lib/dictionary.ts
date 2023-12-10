import 'server-only'
import type { Locale } from '@/i18n.config'

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then(module => module.default),
  ar: () => import('@/dictionaries/ar.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale) => {
  if (locale in dictionaries) {
    return dictionaries[locale]();
  } else {
    throw new Error(`Locale '${locale}' is not supported.`);
  }
};