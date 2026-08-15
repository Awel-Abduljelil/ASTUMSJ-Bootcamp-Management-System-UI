import { cn } from '../../lib/cn'

export default function Tabs({ tabs, active, onChange }) {
  return (
    <div className="flex gap-1 border-b border-border dark:border-dark-border">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={cn(
            'relative px-4 py-2.5 text-small font-medium transition-colors',
            active === tab
              ? 'text-brand'
              : 'text-text-secondary hover:text-text-primary dark:text-dark-text-secondary dark:hover:text-dark-text',
          )}
        >
          {tab}
          {active === tab && <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-brand" />}
        </button>
      ))}
    </div>
  )
}
