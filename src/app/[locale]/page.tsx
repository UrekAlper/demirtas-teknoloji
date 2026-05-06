import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import StatsBar from '@/components/home/StatsBar'
import CapabilitiesPreview from '@/components/home/CapabilitiesPreview'
import MachineHighlight from '@/components/home/MachineHighlight'
import CertificationsStrip from '@/components/home/CertificationsStrip'
import CTASection from '@/components/home/CTASection'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  setRequestLocale(locale)

  const t = await getTranslations({ locale, namespace: 'Hero' })

  return {
    title: 'DE|TECH — Demirtaş Teknoloji',
    description: t('subtitle'),
    alternates: {
      canonical: `/${locale}`,
      languages: { tr: '/tr', en: '/en' },
    },
    openGraph: {
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  }
}

export default function HomePage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  setRequestLocale(locale)

  return (
    <>
      <Hero />
      <StatsBar />
      <CapabilitiesPreview />
      <MachineHighlight />
      <CertificationsStrip />
      <CTASection />
    </>
  )
}