import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale, pathnames } from './navigation'

export default createMiddleware({
  locales,
  defaultLocale,
  pathnames,
  localePrefix: 'always',
})

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
