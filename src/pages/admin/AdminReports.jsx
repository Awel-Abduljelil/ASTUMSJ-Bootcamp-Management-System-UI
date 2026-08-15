import { Download } from 'lucide-react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { adminNav } from '../../lib/nav'
import { Card, ProgressBar, Avatar } from '../../components/ui/Card'
import { Select } from '../../components/ui/Input'
import Button from '../../components/ui/Button'

const topStudents = [
  { name: 'Selamawit Fikru', batch: 'Batch 4', score: '96%' },
  { name: 'Betelhem Tesfaye', batch: 'Batch 4', score: '90%' },
  { name: 'Dawit Kassa', batch: 'Batch 4', score: '88%' },
]
const bottomStudents = [
  { name: 'Yohannes Bekele', batch: 'Batch 3', score: '61%' },
  { name: 'Mihret Alemu', batch: 'Batch 1', score: '68%' },
]

export default function AdminReports() {
  return (
    <DashboardLayout sections={adminNav} pageTitle="Reports & Analytics" userName="Admin User" userRole="Administrator">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Select id="date-range" defaultValue="30" className="sm:w-48">
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="all">All time</option>
          </Select>
          <Select id="batch-filter" defaultValue="" className="sm:w-48">
            <option value="">All Batches</option>
            <option value="batch-4">Batch 4</option>
          </Select>
        </div>
        <Button variant="outline" icon={Download}>Export PDF</Button>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <Card>
          <h3 className="mb-4 text-h4 text-text-primary dark:text-dark-text">Attendance Trend</h3>
          <div className="flex h-48 items-end gap-2.5">
            {[80, 84, 78, 88, 91, 86, 90, 93].map((v, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
                <div className="flex h-36 w-full items-end rounded-md bg-app dark:bg-dark-elevated">
                  <div className="w-full rounded-md bg-brand" style={{ height: `${v}%` }} />
                </div>
                <span className="text-caption text-text-muted">W{i + 1}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="mb-4 text-h4 text-text-primary dark:text-dark-text">Assignment Completion</h3>
          <div className="space-y-4">
            {[
              { label: 'Batch 1 — Frontend', value: 92 },
              { label: 'Batch 2 — Backend', value: 85 },
              { label: 'Batch 3 — Full Stack', value: 78 },
              { label: 'Batch 4 — Cybersecurity', value: 88 },
            ].map((row) => (
              <div key={row.label}>
                <div className="mb-1.5 flex justify-between text-small">
                  <span className="text-text-secondary dark:text-dark-text-secondary">{row.label}</span>
                  <span className="font-medium text-text-primary dark:text-dark-text">{row.value}%</span>
                </div>
                <ProgressBar value={row.value} colorClass="bg-brand" />
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="mb-4 text-h4 text-text-primary dark:text-dark-text">Student Performance Distribution</h3>
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

        <div className="grid grid-cols-1 gap-6">
          <Card>
            <h3 className="mb-3 text-h4 text-text-primary dark:text-dark-text">Top Students</h3>
            <ul className="space-y-2.5">
              {topStudents.map((s) => (
                <li key={s.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Avatar name={s.name} size="sm" />
                    <span className="text-small text-text-primary dark:text-dark-text">{s.name}</span>
                  </div>
                  <span className="text-small font-semibold text-present">{s.score}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="mb-3 text-h4 text-text-primary dark:text-dark-text">Needs Attention</h3>
            <ul className="space-y-2.5">
              {bottomStudents.map((s) => (
                <li key={s.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Avatar name={s.name} size="sm" />
                    <span className="text-small text-text-primary dark:text-dark-text">{s.name}</span>
                  </div>
                  <span className="text-small font-semibold text-absent">{s.score}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
