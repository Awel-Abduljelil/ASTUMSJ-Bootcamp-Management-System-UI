import { Users, Percent, ClipboardList, AlertTriangle } from 'lucide-react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { mentorNav } from '../../lib/nav'
import { Card, StatCard, ProgressBar, Avatar } from '../../components/ui/Card'
import StatusBadge from '../../components/ui/Badge'

const attention = [
  { name: 'Yohannes Bekele', reason: 'Attendance 58%', risk: 'High' },
  { name: 'Mihret Alemu', reason: '2 missing assignments', risk: 'Medium' },
]

const pending = [
  { student: 'Nathnael Girma', title: 'React Router Project', submitted: '2 hours ago' },
  { student: 'Selamawit Fikru', title: 'Express API Assignment', submitted: '5 hours ago' },
  { student: 'Dawit Kassa', title: 'React Router Project', submitted: '1 day ago' },
]

const deadlines = [
  { title: 'Node.js Basics', due: 'Due tomorrow' },
  { title: 'MongoDB Aggregation', due: 'Due in 4 days' },
]

export default function MentorDashboard() {
  return (
    <DashboardLayout sections={mentorNav} pageTitle="Dashboard" userName="Selam Alemayehu" userRole="Mentor" showSearch>
      <div className="mb-6">
        <h2 className="text-h2 text-text-primary dark:text-dark-text">Good Morning, Selam</h2>
        <p className="mt-1 text-body text-text-secondary dark:text-dark-text-secondary">Here's how Batch 4 is doing today.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Assigned Students" value="36" icon={Users} accent="brand" />
        <StatCard label="Average Attendance" value="88%" icon={Percent} accent="present" />
        <StatCard label="Pending to Grade" value="7" icon={ClipboardList} accent="late" />
        <StatCard label="At-Risk Students" value="2" icon={AlertTriangle} accent="absent" />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <h3 className="mb-4 text-h4 text-text-primary dark:text-dark-text">Student Progress Overview</h3>
          <div className="space-y-4">
            {[
              { label: 'Completed', value: 41, color: 'bg-completed' },
              { label: 'In Progress', value: 44, color: 'bg-in-progress' },
              { label: 'Needs Improvement', value: 9, color: 'bg-needs-improvement' },
              { label: 'Not Started', value: 6, color: 'bg-not-started' },
            ].map((row) => (
              <div key={row.label}>
                <div className="mb-1.5 flex justify-between text-small">
                  <span className="text-text-secondary dark:text-dark-text-secondary">{row.label}</span>
                  <span className="font-medium text-text-primary dark:text-dark-text">{row.value}%</span>
                </div>
                <ProgressBar value={row.value} colorClass={row.color} />
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="mb-4 text-h4 text-text-primary dark:text-dark-text">Students Needing Attention</h3>
          <ul className="space-y-3">
            {attention.map((s) => (
              <li key={s.name} className="flex items-center justify-between gap-3 rounded-md border border-border p-3 dark:border-dark-border">
                <div className="min-w-0">
                  <p className="truncate text-small font-medium text-text-primary dark:text-dark-text">{s.name}</p>
                  <p className="truncate text-caption text-text-muted">{s.reason}</p>
                </div>
                <StatusBadge status={s.risk} />
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <h3 className="mb-4 text-h4 text-text-primary dark:text-dark-text">Pending Submissions</h3>
          <ul className="divide-y divide-border dark:divide-dark-border">
            {pending.map((p, i) => (
              <li key={i} className="flex items-center gap-3 py-3">
                <Avatar name={p.student} size="sm" />
                <div className="min-w-0 flex-1">
                  <p className="text-small font-medium text-text-primary dark:text-dark-text">{p.title}</p>
                  <p className="text-caption text-text-muted">{p.student} · {p.submitted}</p>
                </div>
                <StatusBadge status="Submitted" />
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h3 className="mb-4 text-h4 text-text-primary dark:text-dark-text">Upcoming Deadlines</h3>
          <ul className="space-y-3">
            {deadlines.map((d) => (
              <li key={d.title} className="rounded-md border border-border p-3 dark:border-dark-border">
                <p className="text-small font-medium text-text-primary dark:text-dark-text">{d.title}</p>
                <p className="text-caption text-late">{d.due}</p>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </DashboardLayout>
  )
}
