import { useState } from 'react'
import { Plus, Calendar, Award, Inbox } from 'lucide-react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { mentorNav } from '../../lib/nav'
import { Card } from '../../components/ui/Card'
import StatusBadge from '../../components/ui/Badge'
import Tabs from '../../components/ui/Tabs'
import Button from '../../components/ui/Button'
import Modal from '../../components/ui/Modal'
import { TextInput, Textarea, Select } from '../../components/ui/Input'

const assignments = [
  { id: 1, title: 'React Router Project', batch: 'Batch 4', deadline: 'Aug 15, 2026', maxScore: 100, submissions: 22, status: 'Active' },
  { id: 2, title: 'Express API Assignment', batch: 'Batch 4', deadline: 'Aug 18, 2026', maxScore: 100, submissions: 14, status: 'Active' },
  { id: 3, title: 'JavaScript Basics', batch: 'Batch 4', deadline: 'Aug 2, 2026', maxScore: 100, submissions: 36, status: 'Past' },
  { id: 4, title: 'Portfolio Site Draft', batch: 'Batch 4', deadline: 'Aug 22, 2026', maxScore: 50, submissions: 0, status: 'Draft' },
]

export default function MentorAssignments() {
  const [tab, setTab] = useState('Active')
  const [modalOpen, setModalOpen] = useState(false)

  const filtered = assignments.filter((a) => a.status === tab)

  return (
    <DashboardLayout sections={mentorNav} pageTitle="Assignments" userName="Selam Alemayehu" userRole="Mentor">
      <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-h3 text-text-primary dark:text-dark-text">Assignments</h2>
        <Button icon={Plus} onClick={() => setModalOpen(true)}>Create Assignment</Button>
      </div>

      <Tabs tabs={['Active', 'Past', 'Draft']} active={tab} onChange={setTab} />

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((a) => (
          <Card key={a.id}>
            <div className="mb-3 flex items-start justify-between">
              <h3 className="text-h4 text-text-primary dark:text-dark-text">{a.title}</h3>
              <StatusBadge status={a.status === 'Active' ? 'In Progress' : a.status === 'Past' ? 'Completed' : 'Not Started'} />
            </div>
            <p className="text-caption text-text-muted">{a.batch}</p>
            <div className="mt-3 flex items-center gap-1.5 text-small text-text-secondary dark:text-dark-text-secondary">
              <Calendar className="h-4 w-4" /> {a.deadline}
            </div>
            <div className="mt-1.5 flex items-center gap-1.5 text-small text-text-secondary dark:text-dark-text-secondary">
              <Award className="h-4 w-4" /> Max score {a.maxScore}
            </div>
            <div className="mt-1.5 flex items-center gap-1.5 text-small text-text-secondary dark:text-dark-text-secondary">
              <Inbox className="h-4 w-4" /> {a.submissions} submissions
            </div>
          </Card>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full py-8 text-center text-body text-text-muted">No {tab.toLowerCase()} assignments.</p>
        )}
      </div>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Create Assignment"
        footer={
          <>
            <Button variant="outline" onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button onClick={() => setModalOpen(false)}>Create</Button>
          </>
        }
      >
        <div className="space-y-4">
          <TextInput id="a-title" label="Title" required />
          <Textarea id="a-desc" label="Description" rows={3} required />
          <Textarea id="a-instructions" label="Instructions" rows={3} />
          <Select id="a-batch" label="Batch" defaultValue="batch-4">
            <option value="batch-4">Batch 4 — Cybersecurity</option>
          </Select>
          <div className="grid grid-cols-2 gap-4">
            <TextInput id="a-deadline" label="Deadline" type="date" required />
            <TextInput id="a-score" label="Maximum Score" type="number" defaultValue={100} required />
          </div>
        </div>
      </Modal>
    </DashboardLayout>
  )
}
