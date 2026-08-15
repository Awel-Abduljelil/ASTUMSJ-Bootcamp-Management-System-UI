import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '../../lib/cn'

/**
 * columns: [{ key, header, render?: (row) => node }]
 */
export default function DataTable({ columns, rows, page = 1, totalPages = 1, onPageChange, onRowClick }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-surface dark:border-dark-border dark:bg-dark-surface">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-border bg-app/60 dark:border-dark-border dark:bg-dark-elevated/50">
              {columns.map((col) => (
                <th key={col.key} className="whitespace-nowrap px-5 py-3.5 text-caption font-semibold uppercase tracking-wide text-text-muted">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.id ?? i}
                onClick={() => onRowClick?.(row)}
                className={cn(
                  'border-b border-border last:border-0 hover:bg-app/50 dark:border-dark-border dark:hover:bg-dark-elevated/40',
                  onRowClick && 'cursor-pointer',
                )}
              >
                {columns.map((col) => (
                  <td key={col.key} className="whitespace-nowrap px-5 py-3.5 text-body text-text-primary dark:text-dark-text">
                    {col.render ? col.render(row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between border-t border-border px-5 py-3.5 dark:border-dark-border">
          <p className="text-small text-text-muted">
            Page {page} of {totalPages}
          </p>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onPageChange?.(Math.max(1, page - 1))}
              disabled={page === 1}
              className={cn(
                'flex h-8 w-8 items-center justify-center rounded-md border border-border text-text-secondary disabled:opacity-40 dark:border-dark-border',
                page !== 1 && 'hover:bg-app dark:hover:bg-dark-elevated',
              )}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => onPageChange?.(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              className={cn(
                'flex h-8 w-8 items-center justify-center rounded-md border border-border text-text-secondary disabled:opacity-40 dark:border-dark-border',
                page !== totalPages && 'hover:bg-app dark:hover:bg-dark-elevated',
              )}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
