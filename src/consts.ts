export const SITE = {
  title: 'Documentation',
  description: 'Your website description.',
  defaultLanguage: 'en-us'
} as const

export const OPEN_GRAPH = {
  image: {
    src: 'default-og-image.png',
    alt:
      'astro logo on a starry expanse of space,' +
      ' with a purple saturn-like planet floating in the right foreground'
  },
  twitter: 'astrodotbuild'
}

export const KNOWN_LANGUAGES = {
  Deutsch: 'de',
  English: 'en'
} as const
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES)

export const EDIT_URL = `https://github.com/advanced-astro/astro-docs-template/tree/main`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

// See "Algolia" section of the README for more information.
import dotenv from 'dotenv';
dotenv.config();
const iN = process.env.INDEXNAME;
const aI = process.env.APPID;
const aK = process.env.APIKEY;
export const ALGOLIA = {
  indexName: "edu",
  appId: '1GTWTF80PI',
  apiKey: '6e39cac0a8a34f96653c30be4e7abc17'
}

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>
export const SIDEBAR: Sidebar = {
  en: {
    'Documentation Overview': [
      { text: 'Introduction', link: 'en/introduction' },
      { text: 'Chemistry', link: 'en/chemistry' },
      { text: 'Xefili.dev', link: 'en/xefili.dev' }
    ],
  }
}
