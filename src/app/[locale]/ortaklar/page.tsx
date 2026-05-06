import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import SectionTag from '@/components/ui/SectionTag'
import AmberLine from '@/components/ui/AmberLine'
import PartnersGrid from '@/components/home/PartnersGrid'
import CTASection from '@/components/home/CTASection'

export default function OrtaklarPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  setRequestLocale(locale)

  const t = useTranslations('Partners')

  return (
    <>
      <section className="bg-[#1A1A1A] py-24 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-[4px] h-full bg-amber" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <SectionTag label={t('sectionTag')} className="mb-4" />
          <h1 className="font-display font-extrabold text-5xl lg:text-6xl text-white mt-3">
            {t('title')}
          </h1>
          <AmberLine className="mt-6" />
        </div>
      </section>

      <PartnersGrid showHeader={false} />
      <CTASection />
    </>
  )
}