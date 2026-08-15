import { cn } from '../../lib/cn'

// Maps every status word used across the spec to a token color.
const statusMap = {
  // Attendance
  present: 'bg-present/10 text-present',
  absent: 'bg-absent/10 text-absent',
  late: 'bg-late/10 text-late',
  excused: 'bg-excused/10 text-excused',
  // Progress
  completed: 'bg-completed/10 text-completed',
  'in progress': 'bg-in-progress/10 text-in-progress',
  'needs improvement': 'bg-needs-improvement/10 text-needs-improvement',
  'not started': 'bg-not-started/10 text-not-started',
  // Assignment
  pending: 'bg-pending/10 text-pending',
  submitted: 'bg-submitted/10 text-submitted',
  graded: 'bg-graded/10 text-graded',
  'resubmission requested': 'bg-resubmit/10 text-resubmit',
  overdue: 'bg-overdue/10 text-overdue',
  // Risk
  high: 'bg-absent/10 text-absent',
  medium: 'bg-late/10 text-late',
  low: 'bg-present/10 text-present',
  // Generic
  active: 'bg-present/10 text-present',
  inactive: 'bg-not-started/10 text-not-started',
}

export default function StatusBadge({ status, className }) {
  const key = status?.toLowerCase()
  const style = statusMap[key] || 'bg-brand-soft text-brand'
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-caption font-medium capitalize',
        style,
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  )
}
