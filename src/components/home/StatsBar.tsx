import { useTranslations } from 'next-intl'

export default function StatsBar() {
  const t = useTranslations('Stats')

  const stats = [
    { value: t('estValue'),           label: t('est') },
    { value: t('manufacturingValue'), label: t('manufacturing') },
    { value: t('cncValue'),           label: t('cnc') },
    { value: t('diameterValue'),      label: t('diameter') },
  ]

  return (
    <section className="bg-amber">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-[#1A1A1A]/20">
          {stats.map(({ value, label }, i) => (
            <div key={i} className="text-center lg:px-8 py-2 lg:py-0">
              <p className="font-display font-extrabold text-3xl lg:text-4xl text-[#1A1A1A] leading-none">
                {value}
              </p>
              <p className="font-body text-sm font-medium text-[#1A1A1A]/70 mt-1 uppercase tracking-wider">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
