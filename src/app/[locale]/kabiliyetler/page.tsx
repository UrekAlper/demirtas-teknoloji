'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Settings2, Printer, Layers, Download } from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'
import AmberLine from '@/components/ui/AmberLine'
import MachineTable from '@/components/ui/MachineTable'
import { cncMachines, additiveMachines, measurementDevices, toolGrindingMachines } from '@/lib/machines'
import CTASection from '@/components/home/CTASection'

const MATERIALS = [
  'Titanyum & alaşımları',
  'Paslanmaz Çelik: 420, 431, 440, 630, 303, 304, 316',
  'Alüminyum: 60 ve 70 serisi',
  'Pirinç: C36, C39, C35600 ve diğerleri',
  'Inconel',
  'Çelik: 4140, 4130, C serisi, imalat/otomat çelikleri',
  'Bakır, civa çelikleri',
]

const MATERIALS_EN = [
  'Titanium & alloys',
  'Stainless Steel: 420, 431, 440, 630, 303, 304, 316',
  'Aluminum: 60 and 70 series',
  'Brass: C36, C39, C35600 and others',
  'Inconel',
  'Steel: 4140, 4130, C series, free-machining steels',
  'Copper, leaded steels',
]

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }

export default function KabiliyetlerPage() {
  const t = useTranslations('Capabilities')

  return (
    <>
      {/* Hero */}
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

      {/* CNC Machining */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <SectionTag label={t('machiningTag')} className="mb-4" />
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-charcoal mt-3 mb-5">
                {t('machiningTitle')}
              </h2>
              <AmberLine className="mb-6" />
              <p className="font-body text-gray-mid leading-relaxed mb-8">
                {t('machiningDesc')}
              </p>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Çap Aralığı / Range', value: '4–40 mm' },
                  { label: 'Tolerans / Tolerance', value: '±0.01 mm' },
                  { label: 'Tezgah / Machines', value: '29+' },
                  { label: 'Swiss CNC', value: '14' },
                ].map(({ label, value }) => (
                  <div key={label} className="border border-border p-4">
                    <p className="font-mono text-xs text-gray-mid mb-1">{label}</p>
                    <p className="font-display font-bold text-2xl text-amber">{value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Materials */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <SectionTag label={t('materialsTag')} className="mb-6" />
              <ul className="flex flex-col gap-3">
                {MATERIALS.map((m, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 font-mono text-sm text-charcoal border border-border px-4 py-3 hover:border-amber hover:bg-amber/5 transition-colors"
                  >
                    <span className="w-[6px] h-[6px] bg-amber shrink-0" />
                    {m}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additive + Post-process */}
      <section className="bg-gray-light py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white border border-border p-10"
          >
            <div className="w-12 h-12 bg-amber/10 flex items-center justify-center mb-6">
              <Printer size={22} className="text-amber" />
            </div>
            <SectionTag label={t('additiveTag')} className="mb-3" />
            <h3 className="font-display font-bold text-2xl text-charcoal mt-2 mb-3">
              {t('additiveTitle')}
            </h3>
            <AmberLine className="mb-5" />
            <p className="font-body text-gray-mid text-sm leading-relaxed">{t('additiveDesc')}</p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-border p-10"
          >
            <div className="w-12 h-12 bg-amber/10 flex items-center justify-center mb-6">
              <Layers size={22} className="text-amber" />
            </div>
            <SectionTag label={t('postProcessTag')} className="mb-3" />
            <h3 className="font-display font-bold text-2xl text-charcoal mt-2 mb-3">
              {t('postProcessTitle')}
            </h3>
            <AmberLine className="mb-5" />
            <div className="flex flex-wrap gap-2">
              {t('postProcessItems')
                .split('|')
                .map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs border border-border px-3 py-1 text-charcoal"
                  >
                    {item.trim()}
                  </span>
                ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Machine Tables */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <SectionTag label={t('machineTableTag')} className="mb-4" />
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-charcoal mt-3">
              {t('machineTableTitle')}
            </h2>
            <AmberLine className="mt-5" />
          </div>

          {/* CNC table */}
          <div className="mb-16">
            <h3 className="font-display font-semibold text-lg text-charcoal mb-5 flex items-center gap-3">
              <Settings2 size={18} className="text-amber" />
              {t('cncTableTitle')}
            </h3>
            <MachineTable
              columns={[
                { key: 'model', label: t('tableModel'), mono: true },
                { key: 'count', label: t('tableCount'), align: 'center' },
                { key: 'year',  label: t('tableYear'),  align: 'center' },
              ]}
              rows={cncMachines.map((m) => ({
                model: m.model,
                count: m.count,
                year: m.year,
              }))}
            />
          </div>

          {/* Additive table */}
          <div className="mb-16">
            <h3 className="font-display font-semibold text-lg text-charcoal mb-5 flex items-center gap-3">
              <Printer size={18} className="text-amber" />
              {t('additiveTableTitle')}
            </h3>
            <MachineTable
              columns={[
                { key: 'model', label: t('tableModel'), mono: true },
                { key: 'desc',  label: t('tableDesc') },
                { key: 'year',  label: t('tableYear'), align: 'center' },
              ]}
              rows={additiveMachines.map((m) => ({
                model: m.model,
                desc: m.description,
                year: m.year,
              }))}
            />
          </div>

          {/* Measurement table */}
          <div className="mb-16">
            <h3 className="font-display font-semibold text-lg text-charcoal mb-5">
              {t('measurementTableTitle')}
            </h3>
            <MachineTable
              columns={[
                { key: 'model', label: t('tableModel'), mono: true },
                { key: 'count', label: t('tableCount'), align: 'center' },
                { key: 'desc',  label: t('tableDesc') },
                { key: 'year',  label: t('tableYear'), align: 'center' },
              ]}
              rows={measurementDevices.map((m) => ({
                model: m.model,
                count: m.count,
                desc: m.description,
                year: m.year,
              }))}
            />
          </div>

          {/* Tool grinding table */}
          <div className="mb-16">
            <h3 className="font-display font-semibold text-lg text-charcoal mb-5">
              {t('toolGrindingTableTitle')}
            </h3>
            <MachineTable
              columns={[
                { key: 'model', label: t('tableModel'), mono: true },
                { key: 'count', label: t('tableCount'), align: 'center' },
                { key: 'desc',  label: t('tableDesc') },
                { key: 'year',  label: t('tableYear'), align: 'center' },
              ]}
              rows={toolGrindingMachines.map((m) => ({
                model: m.model,
                count: m.count,
                desc: m.description,
                year: m.year,
              }))}
            />
          </div>

          {/* Download catalog button */}
          <div className="text-center pt-4">
            <a
              href="/catalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-amber text-[#1A1A1A] px-10 py-5 font-display font-bold text-base hover:bg-amber-dark transition-colors"
            >
              <Download size={20} />
              {t('downloadCatalog')}
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
