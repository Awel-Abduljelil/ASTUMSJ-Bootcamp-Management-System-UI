import { X } from 'lucide-react'

export default function Modal({ open, onClose, title, children, footer }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/40 p-4">
      <div className="w-full max-w-md rounded-lg bg-surface shadow-modal dark:bg-dark-elevated">
        <div className="flex items-center justify-between border-b border-border px-6 py-4 dark:border-dark-border">
          <h3 className="text-h4 text-text-primary dark:text-dark-text">{title}</h3>
          <button onClick={onClose} className="text-text-muted hover:text-text-primary dark:hover:text-dark-text">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="px-6 py-5">{children}</div>
        {footer && (
          <div className="flex justify-end gap-3 border-t border-border px-6 py-4 dark:border-dark-border">{footer}</div>
        )}
      </div>
    </div>
  )
}
