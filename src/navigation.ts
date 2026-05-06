import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'
import type { Pathnames } from 'next-intl/navigation'

export const locales = ['tr', 'en'] as const
export const defaultLocale = 'tr' as const

export const pathnames = {
  '/': '/',
  '/hakkimizda': { tr: '/hakkimizda', en: '/about' },
  '/kabiliyetler': { tr: '/kabiliyetler', en: '/capabilities' },
  '/kalite': { tr: '/kalite', en: '/quality' },
  '/ortaklar': { tr: '/ortaklar', en: '/partners' },
  '/iletisim': { tr: '/iletisim', en: '/contact' },
} satisfies Pathnames<typeof locales>

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, pathnames })
