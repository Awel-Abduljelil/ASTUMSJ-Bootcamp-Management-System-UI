import { useState } from 'react'
import { Plus, Users, UserCog, Calendar } from 'lucide-react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { adminNav } from '../../lib/nav'
import { Card } from '../../components/ui/Card'
import StatusBadge from '../../components/ui/Badge'
import Button from '../../components/ui/Button'
import Tabs from '../../components/ui/Tabs'
import { SearchInput } from '../../components/ui/Input'

const batches = [
  { id: 1, name: 'Batch 1 — Frontend Development', students: 42, mentors: 3, status: 'Active', start: 'Jun 1, 2026', end: 'Aug 20, 2026' },
  { id: 2, name: 'Batch 2 — Backend Development', students: 38, mentors: 3, status: 'Active', start: 'Jun 1, 2026', end: 'Aug 20, 2026' },
  { id: 3, name: 'Batch 3 — Full Stack Development', students: 45, mentors: 4, status: 'Active', start: 'Jun 1, 2026', end: 'Aug 20, 2026' },
  { id: 4, name: 'Batch 4 — Cybersecurity', students: 36, mentors: 3, status: 'Active', start: 'Jun 1, 2026', end: 'Aug 20, 2026' },
  { id: 5, name: 'Batch 0 — Spring Pilot', students: 28, mentors: 2, status: 'Completed', start: 'Mar 1, 2026', end: 'May 20, 2026' },
]

export default function ManageBatches() {
  const [selected, setSelected] = useState(null)
  const [tab, setTab] = useState('Overview')

  if (selected) {
    return (
      <DashboardLayout sections={adminNav} pageTitle="Batch Details" userName="Admin User" userRole="Administrator">
        <button onClick={() => setSelected(null)} className="mb-4 text-small font-medium text-brand hover:text-brand-hover">
          ← Back to Batches
        </button>
        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-h3 text-text-primary dark:text-dark-text">{selected.name}</h2>
            <p className="mt-1 text-small text-text-secondary dark:text-dark-text-secondary">
              {selected.start} — {selected.end}
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Assign Mentor</Button>
            <Button>Enroll Student</Button>
          </div>
        </div>

        <Card className="p-0">
          <div className="px-6 pt-2">
            <Tabs tabs={['Overview', 'Students', 'Mentors', 'Assignments', 'Attendance']} active={tab} onChange={setTab} />
          </div>
          <div className="p-6">
            {tab === 'Overview' && (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div><p className="text-caption text-text-muted">Students</p><p className="text-h3 text-text-primary dark:text-dark-text">{selected.students}</p></div>
                <div><p className="text-caption text-text-muted">Mentors</p><p className="text-h3 text-text-primary dark:text-dark-text">{selected.mentors}</p></div>
                <div><p className="text-caption text-text-muted">Status</p><StatusBadge status={selected.status} className="mt-1" /></div>
                <div><p className="text-caption text-text-muted">Track</p><p className="text-h3 text-text-primary dark:text-dark-text">—</p></div>
              </div>
            )}
            {tab !== 'Overview' && (
              <p className="text-body text-text-secondary dark:text-dark-text-secondary">
                {tab} list for this batch goes here — same DataTable pattern as Manage Users.
              </p>
            )}
          </div>
        </Card>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout sections={adminNav} pageTitle="Batches" userName="Admin User" userRole="Administrator">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-h3 text-text-primary dark:text-dark-text">Manage Batches</h2>
        <Button icon={Plus}>Create Batch</Button>
      </div>

      <SearchInput placeholder="Search batches..." className="mb-6 sm:w-72" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {batches.map((b) => (
          <Card key={b.id} className="cursor-pointer hover:shadow-card-hover" onClick={() => setSelected(b)}>
            <div className="mb-3 flex items-start justify-between">
              <h3 className="text-h4 text-text-primary dark:text-dark-text">{b.name}</h3>
              <StatusBadge status={b.status} />
            </div>
            <div className="flex items-center gap-4 text-small text-text-secondary dark:text-dark-text-secondary">
              <span className="flex items-center gap-1.5"><Users className="h-4 w-4" /> {b.students}</span>
              <span className="flex items-center gap-1.5"><UserCog className="h-4 w-4" /> {b.mentors}</span>
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-caption text-text-muted">
              <Calendar className="h-3.5 w-3.5" /> {b.start} — {b.end}
            </div>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  )
}
