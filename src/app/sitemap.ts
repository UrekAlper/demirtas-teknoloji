import { MetadataRoute } from 'next'

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://demirtasteknoloji.com'

const routes = [
  { tr: '', en: '' },
  { tr: '/hakkimizda', en: '/about' },
  { tr: '/kabiliyetler', en: '/capabilities' },
  { tr: '/kalite', en: '/quality' },
  { tr: '/ortaklar', en: '/partners' },
  { tr: '/iletisim', en: '/contact' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap(({ tr, en }) => [
    {
      url: `${BASE}/tr${tr}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: `${BASE}/tr${tr}`,
          en: `${BASE}/en${en}`,
        },
      },
    },
    {
      url: `${BASE}/en${en}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: `${BASE}/tr${tr}`,
          en: `${BASE}/en${en}`,
        },
      },
    },
  ])
}
