import { cn } from '../../lib/cn'

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        'rounded-lg border border-border bg-surface p-6 shadow-card dark:border-dark-border dark:bg-dark-surface',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function StatCard({ label, value, icon: Icon, trend, trendDirection = 'up', accent = 'brand' }) {
  const accentMap = {
    brand: 'bg-brand-bg text-brand dark:bg-brand/10',
    present: 'bg-present/10 text-present',
    late: 'bg-late/10 text-late',
    absent: 'bg-absent/10 text-absent',
  }
  return (
    <Card className="flex items-start justify-between">
      <div>
        <p className="text-small font-medium text-text-secondary dark:text-dark-text-secondary">{label}</p>
        <p className="mt-2 text-h1 text-text-primary dark:text-dark-text">{value}</p>
        {trend && (
          <p className={cn('mt-2 text-small font-medium', trendDirection === 'up' ? 'text-present' : 'text-absent')}>
            {trendDirection === 'up' ? '▲' : '▼'} {trend}
          </p>
        )}
      </div>
      {Icon && (
        <div className={cn('flex h-11 w-11 items-center justify-center rounded-md', accentMap[accent])}>
          <Icon className="h-5 w-5" />
        </div>
      )}
    </Card>
  )
}

export function ProgressBar({ value, colorClass = 'bg-brand', trackClass, showLabel = false }) {
  return (
    <div className="w-full">
      <div className={cn('h-2 w-full overflow-hidden rounded-full bg-app dark:bg-dark-elevated', trackClass)}>
        <div
          className={cn('h-full rounded-full transition-all duration-500', colorClass)}
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
      {showLabel && (
        <p className="mt-1 text-caption text-text-muted">{value}%</p>
      )}
    </div>
  )
}

export function Avatar({ name, size = 'md', src }) {
  const sizes = { sm: 'h-8 w-8 text-caption', md: 'h-10 w-10 text-small', lg: 'h-14 w-14 text-body' }
  const initials = name
    ?.split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  if (src) {
    return <img src={src} alt={name} className={cn('rounded-full object-cover', sizes[size])} />
  }
  return (
    <div
      className={cn(
        'flex shrink-0 items-center justify-center rounded-full bg-brand-soft font-semibold text-brand dark:bg-brand/20',
        sizes[size],
      )}
    >
      {initials}
    </div>
  )
}
