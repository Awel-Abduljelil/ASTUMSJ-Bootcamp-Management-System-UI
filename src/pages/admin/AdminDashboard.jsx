import { Users, UserCog, Layers, FileText } from 'lucide-react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { adminNav } from '../../lib/nav'
import { Card, StatCard, ProgressBar } from '../../components/ui/Card'
import { Avatar } from '../../components/ui/Card'
import StatusBadge from '../../components/ui/Badge'

const activity = [
  { name: 'Betelhem Tesfaye', action: 'submitted Assignment: React Router', time: '10 min ago' },
  { name: 'Nathnael Girma', action: 'marked present in Batch 4 — Frontend', time: '32 min ago' },
  { name: 'Mentor Selam A.', action: 'graded 6 submissions in Batch 2', time: '1 hr ago' },
  { name: 'Admin', action: 'published announcement "Week 4 Schedule"', time: '2 hrs ago' },
]

const atRisk = [
  { name: 'Yohannes Bekele', batch: 'Batch 3 — Backend', reason: 'Attendance 58%', risk: 'High' },
  { name: 'Mihret Alemu', batch: 'Batch 1 — Frontend', reason: '2 missing assignments', risk: 'Medium' },
  { name: 'Dawit Kassa', batch: 'Batch 4 — Cybersecurity', reason: 'Avg grade 61%', risk: 'Medium' },
]

export default function AdminDashboard() {
  return (
    <DashboardLayout sections={adminNav} pageTitle="Dashboard" userName="Admin User" userRole="Administrator" showSearch>
      <div className="mb-6">
        <h2 className="text-h2 text-text-primary dark:text-dark-text">Good Morning, Admin</h2>
        <p className="mt-1 text-body text-text-secondary dark:text-dark-text-secondary">
          Here's what's happening in your bootcamp today.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total Students" value="248" icon={Users} trend="12 this week" accent="brand" />
        <StatCard label="Total Mentors" value="18" icon={UserCog} trend="2 new" accent="present" />
        <StatCard label="Total Batches" value="6" icon={Layers} accent="brand" />
        <StatCard label="Active Assignments" value="34" icon={FileText} trend="5 due this week" trendDirection="down" accent="late" />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-h4 text-text-primary dark:text-dark-text">Attendance Overview</h3>
            <span className="text-caption text-text-muted">Last 7 days</span>
          </div>
          <div className="flex h-56 items-end gap-3">
            {[72, 85, 68, 91, 76, 88, 94].map((v, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-2">
                <div className="flex h-40 w-full items-end rounded-md bg-app dark:bg-dark-elevated">
                  <div className="w-full rounded-md bg-brand" style={{ height: `${v}%` }} />
                </div>
                <span className="text-caption text-text-muted">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="mb-4 text-h4 text-text-primary dark:text-dark-text">Student Progress Overview</h3>
          <div className="space-y-4">
            {[
              { label: 'Completed', value: 38, color: 'bg-completed' },
              { label: 'In Progress', value: 46, color: 'bg-in-progress' },
              { label: 'Needs Improvement', value: 10, color: 'bg-needs-improvement' },
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
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <h3 className="mb-4 text-h4 text-text-primary dark:text-dark-text">Recent Activity</h3>
          <ul className="space-y-4">
            {activity.map((a, i) => (
              <li key={i} className="flex items-start gap-3">
                <Avatar name={a.name} size="sm" />
                <div className="min-w-0 flex-1">
                  <p className="text-small text-text-primary dark:text-dark-text">
                    <span className="font-medium">{a.name}</span> {a.action}
                  </p>
                  <p className="text-caption text-text-muted">{a.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h3 className="mb-4 text-h4 text-text-primary dark:text-dark-text">At-Risk Students</h3>
          <ul className="space-y-3">
            {atRisk.map((s, i) => (
              <li key={i} className="flex items-center justify-between gap-3 rounded-md border border-border p-3 dark:border-dark-border">
                <div className="min-w-0">
                  <p className="truncate text-small font-medium text-text-primary dark:text-dark-text">{s.name}</p>
                  <p className="truncate text-caption text-text-muted">{s.batch} · {s.reason}</p>
                </div>
                <StatusBadge status={s.risk} />
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </DashboardLayout>
  )
}
