import { cn } from '@/lib/utils'

type Props = { className?: string; vertical?: boolean }

export default function AmberLine({ className, vertical }: Props) {
  return (
    <span
      className={cn(
        'block bg-amber shrink-0',
        vertical ? 'w-[3px] h-full' : 'h-[3px] w-16',
        className
      )}
      aria-hidden="true"
    />
  )
}
