import { cn } from '@/lib/utils'

type Props = {
  label: string
  light?: boolean
  className?: string
}

export default function SectionTag({ label, light, className }: Props) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 font-display text-xs font-semibold tracking-[0.15em] uppercase',
        light ? 'text-amber' : 'text-amber',
        className
      )}
    >
      <span className="w-[3px] h-4 bg-amber inline-block shrink-0" aria-hidden="true" />
      {label}
    </span>
  )
}
