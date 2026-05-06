import { cn } from '@/lib/utils'

type Column = {
  key: string
  label: string
  mono?: boolean
  align?: 'left' | 'center' | 'right'
}

type Props = {
  columns: Column[]
  rows: Record<string, string | number>[]
  className?: string
}

export default function MachineTable({ columns, rows, className }: Props) {
  return (
    <div className={cn('overflow-x-auto', className)}>
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b-2 border-amber">
            {columns.map((col) => (
              <th
                key={col.key}
                className={cn(
                  'py-3 px-4 text-left font-display font-semibold text-xs tracking-[0.1em] uppercase text-charcoal',
                  col.align === 'center' && 'text-center',
                  col.align === 'right' && 'text-right'
                )}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={cn(
                'border-b border-border transition-colors',
                i % 2 === 0 ? 'bg-white' : 'bg-gray-light/50',
                'hover:bg-amber/5'
              )}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={cn(
                    'py-3 px-4 text-charcoal',
                    col.mono && 'font-mono text-xs',
                    col.align === 'center' && 'text-center',
                    col.align === 'right' && 'text-right'
                  )}
                >
                  {row[col.key] ?? '—'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
