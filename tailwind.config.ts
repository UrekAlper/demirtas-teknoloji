import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        amber:       'var(--color-amber)',
        'amber-dark':'var(--color-amber-dark)',
        'amber-light':'var(--color-amber-light)',
        charcoal:    'var(--color-charcoal)',
        'dark-bg':   'var(--color-dark-bg)',
        'gray-mid':  'var(--color-gray-mid)',
        'gray-light':'var(--color-gray-light)',
        border:      'var(--color-border)',
      },
      fontFamily: {
        display: ['var(--font-barlow)', 'sans-serif'],
        body:    ['var(--font-dm-sans)', 'sans-serif'],
        mono:    ['var(--font-jetbrains)', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '2px',
        sm: '2px',
        md: '4px',
        lg: '4px',
        xl: '4px',
        '2xl': '4px',
        '3xl': '4px',
        full: '9999px',
      },
    },
  },
  plugins: [],
}

export default config
