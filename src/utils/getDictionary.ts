import 'server-only';
import type { Locale } from '^/i18n';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
   en: () => import('^/i18n/dictionaries/en.json').then(module => module.default),
   id: () => import('^/i18n/dictionaries/id.json').then(module => module.default),
};

export async function getDictionary(locale: Locale) {
   return dictionaries[locale]?.() ?? dictionaries.en();
}
