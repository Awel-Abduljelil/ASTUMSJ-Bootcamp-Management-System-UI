import { Loader2 } from 'lucide-react'
import { cn } from '../../lib/cn'

const variants = {
  primary:
    'bg-brand text-white hover:bg-brand-hover active:bg-brand-hover disabled:bg-brand/40',
  secondary:
    'bg-navy text-white hover:bg-navy/90 active:bg-navy/80 disabled:bg-navy/30 dark:bg-dark-elevated dark:hover:bg-dark-elevated/80',
  outline:
    'bg-transparent text-text-primary dark:text-dark-text border border-border dark:border-dark-border hover:bg-app dark:hover:bg-dark-elevated disabled:opacity-40',
  danger:
    'bg-absent text-white hover:bg-red-700 active:bg-red-800 disabled:bg-absent/40',
  text:
    'bg-transparent text-brand hover:bg-brand-bg active:bg-brand-soft disabled:opacity-40',
  icon:
    'bg-transparent text-text-secondary dark:text-dark-text-secondary hover:bg-app dark:hover:bg-dark-elevated rounded-full disabled:opacity-40',
}

const sizes = {
  sm: 'h-8 px-3 text-[13px]',
  md: 'h-10 px-4 text-btn',
  lg: 'h-12 px-5 text-btn',
}

export default function Button({
  as: Tag = 'button',
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  icon: Icon,
  iconOnly = false,
  className,
  children,
  ...props
}) {
  return (
    <Tag
      disabled={disabled || loading}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors duration-150',
        'disabled:cursor-not-allowed',
        variants[variant],
        iconOnly ? 'aspect-square p-0 h-10 w-10' : sizes[size],
        className,
      )}
      {...props}
    >
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        Icon && <Icon className="h-4 w-4 shrink-0" />
      )}
      {!iconOnly && children}
    </Tag>
  )
}
