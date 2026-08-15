import { useState } from 'react'
import { Pencil } from 'lucide-react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { mentorNav } from '../../lib/nav'
import { Card, Avatar, ProgressBar } from '../../components/ui/Card'
import StatusBadge from '../../components/ui/Badge'
import { Select, Textarea } from '../../components/ui/Input'
import Button from '../../components/ui/Button'
import Modal from '../../components/ui/Modal'

const topics = ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Git/GitHub']

const rows = [
  { id: 1, student: 'Betelhem Tesfaye', topic: 'React', status: 'In Progress', value: 65, notes: 'Working through hooks; needs more practice with useEffect.' },
  { id: 2, student: 'Nathnael Girma', topic: 'Node.js', status: 'Not Started', value: 0, notes: '' },
  { id: 3, student: 'Selamawit Fikru', topic: 'Express.js', status: 'Completed', value: 100, notes: 'Solid grasp of middleware and routing.' },
  { id: 4, student: 'Yohannes Bekele', topic: 'JavaScript', status: 'Needs Improvement', value: 40, notes: 'Struggling with async/await — recommend 1:1 session.' },
]

const progressColor = {
  Completed: 'bg-completed',
  'In Progress': 'bg-in-progress',
  'Needs Improvement': 'bg-needs-improvement',
  'Not Started': 'bg-not-started',
}

export default function ProgressManagement() {
  const [editing, setEditing] = useState(null)

  return (
    <DashboardLayout sections={mentorNav} pageTitle="Progress" userName="Selam Alemayehu" userRole="Mentor">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row">
        <Select id="batch-filter" label="Batch" defaultValue="batch-4" className="sm:w-56">
          <option value="batch-4">Batch 4 — Cybersecurity</option>
        </Select>
        <Select id="student-filter" label="Student" defaultValue="" className="sm:w-56">
          <option value="">All Students</option>
          {rows.map((r) => <option key={r.id} value={r.id}>{r.student}</option>)}
        </Select>
        <Select id="topic-filter" label="Topic" defaultValue="" className="sm:w-56">
          <option value="">All Topics</option>
          {topics.map((t) => <option key={t} value={t}>{t}</option>)}
        </Select>
      </div>

      <Card className="p-0">
        <ul className="divide-y divide-border dark:divide-dark-border">
          {rows.map((r) => (
            <li key={r.id} className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3 sm:w-64">
                <Avatar name={r.student} size="sm" />
                <div>
                  <p className="text-small font-medium text-text-primary dark:text-dark-text">{r.student}</p>
                  <p className="text-caption text-text-muted">{r.topic}</p>
                </div>
              </div>
              <div className="flex-1 sm:max-w-xs">
                <div className="mb-1 flex items-center justify-between">
                  <StatusBadge status={r.status} />
                  <span className="text-caption text-text-muted">{r.value}%</span>
                </div>
                <ProgressBar value={r.value} colorClass={progressColor[r.status]} />
              </div>
              <Button variant="outline" size="sm" icon={Pencil} onClick={() => setEditing(r)}>Update</Button>
            </li>
          ))}
        </ul>
      </Card>

      <Modal
        open={!!editing}
        onClose={() => setEditing(null)}
        title={`Update Progress — ${editing?.student ?? ''}`}
        footer={
          <>
            <Button variant="outline" onClick={() => setEditing(null)}>Cancel</Button>
            <Button onClick={() => setEditing(null)}>Save</Button>
          </>
        }
      >
        {editing && (
          <div className="space-y-4">
            <Select id="edit-topic" label="Topic" defaultValue={editing.topic}>
              {topics.map((t) => <option key={t} value={t}>{t}</option>)}
            </Select>
            <Select id="edit-status" label="Status" defaultValue={editing.status}>
              <option>Not Started</option>
              <option>In Progress</option>
              <option>Completed</option>
              <option>Needs Improvement</option>
            </Select>
            <Textarea id="edit-notes" label="Notes" defaultValue={editing.notes} rows={3} />
          </div>
        )}
      </Modal>
    </DashboardLayout>
  )
}
