import { useState } from 'react'
import { Eye, EyeOff, Search, AlertCircle } from 'lucide-react'
import { cn } from '../../lib/cn'

const fieldBase =
  'w-full rounded-md border bg-surface dark:bg-dark-elevated px-3.5 h-11 text-body text-text-primary dark:text-dark-text placeholder:text-text-muted transition-colors outline-none'

const fieldState = (error, disabled) =>
  cn(
    error
      ? 'border-absent focus:border-absent focus:ring-2 focus:ring-absent/20'
      : 'border-border dark:border-dark-border focus:border-brand focus:ring-2 focus:ring-brand/20',
    disabled && 'bg-app dark:bg-dark-surface text-text-muted cursor-not-allowed opacity-60',
  )

export function Label({ children, htmlFor, required }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-small font-medium text-text-secondary dark:text-dark-text-secondary">
      {children}
      {required && <span className="text-absent"> *</span>}
    </label>
  )
}

export function HelperText({ error, children }) {
  if (!children) return null
  return (
    <p className={cn('mt-1.5 flex items-center gap-1 text-small', error ? 'text-absent' : 'text-text-muted')}>
      {error && <AlertCircle className="h-3.5 w-3.5" />}
      {children}
    </p>
  )
}

export function TextInput({ label, id, error, helperText, disabled, required, className, ...props }) {
  return (
    <div className={className}>
      {label && <Label htmlFor={id} required={required}>{label}</Label>}
      <input id={id} disabled={disabled} className={cn(fieldBase, fieldState(error, disabled))} {...props} />
      <HelperText error={error}>{helperText}</HelperText>
    </div>
  )
}

export function PasswordInput({ label, id, error, helperText, disabled, required, className, ...props }) {
  const [visible, setVisible] = useState(false)
  return (
    <div className={className}>
      {label && <Label htmlFor={id} required={required}>{label}</Label>}
      <div className="relative">
        <input
          id={id}
          disabled={disabled}
          type={visible ? 'text' : 'password'}
          className={cn(fieldBase, fieldState(error, disabled), 'pr-11')}
          {...props}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-secondary"
          tabIndex={-1}
        >
          {visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>
      <HelperText error={error}>{helperText}</HelperText>
    </div>
  )
}

export function SearchInput({ id, className, ...props }) {
  return (
    <div className={cn('relative', className)}>
      <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
      <input id={id} type="search" className={cn(fieldBase, fieldState(false, false), 'pl-10')} {...props} />
    </div>
  )
}

export function Textarea({ label, id, error, helperText, disabled, required, rows = 4, className, ...props }) {
  return (
    <div className={className}>
      {label && <Label htmlFor={id} required={required}>{label}</Label>}
      <textarea
        id={id}
        disabled={disabled}
        rows={rows}
        className={cn(fieldBase, fieldState(error, disabled), 'h-auto py-2.5 resize-y')}
        {...props}
      />
      <HelperText error={error}>{helperText}</HelperText>
    </div>
  )
}

export function Select({ label, id, error, helperText, disabled, required, className, children, ...props }) {
  return (
    <div className={className}>
      {label && <Label htmlFor={id} required={required}>{label}</Label>}
      <select id={id} disabled={disabled} className={cn(fieldBase, fieldState(error, disabled), 'appearance-none')} {...props}>
        {children}
      </select>
      <HelperText error={error}>{helperText}</HelperText>
    </div>
  )
}
