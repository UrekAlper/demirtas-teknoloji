import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'white'
  size?: 'sm' | 'md' | 'lg'
  as?: 'button' | 'a'
  href?: string
  target?: string
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant = 'primary', size = 'md', className, children, as: Tag = 'button', href, target, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center gap-2 font-display font-semibold tracking-wide transition-all duration-150 border-2 cursor-pointer'

    const variants = {
      primary: 'bg-amber border-amber text-[#1A1A1A] hover:bg-amber-dark hover:border-amber-dark',
      secondary: 'bg-transparent border-amber text-amber hover:bg-amber hover:text-[#1A1A1A]',
      white: 'bg-white border-white text-[#1A1A1A] hover:bg-gray-100 hover:border-gray-100',
    }

    const sizes = {
      sm:  'px-4 py-2 text-sm',
      md:  'px-6 py-3 text-sm',
      lg:  'px-8 py-4 text-base',
    }

    const classes = cn(base, variants[variant], sizes[size], className)

    if (Tag === 'a' && href) {
      return (
        <a href={href} target={target} className={classes}>
          {children}
        </a>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
