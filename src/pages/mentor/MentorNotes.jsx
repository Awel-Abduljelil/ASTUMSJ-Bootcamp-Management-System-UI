import { useState } from 'react'
import { Lock, Plus, Pencil, Trash2 } from 'lucide-react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { mentorNav } from '../../lib/nav'
import { Card } from '../../components/ui/Card'
import { Select, Textarea } from '../../components/ui/Input'
import Button from '../../components/ui/Button'
import Modal from '../../components/ui/Modal'

const students = ['Betelhem Tesfaye', 'Nathnael Girma', 'Yohannes Bekele']

const initialNotes = [
  { id: 1, student: 'Yohannes Bekele', date: 'Aug 10, 2026', content: 'Discussed attendance concerns — family situation affecting mornings. Following up next week.' },
  { id: 2, student: 'Yohannes Bekele', date: 'Aug 3, 2026', content: 'Recommended pairing with Betelhem for the JS assignment — struggling with async patterns.' },
  { id: 3, student: 'Betelhem Tesfaye', date: 'Jul 29, 2026', content: 'Strong progress, could take on a stretch project for the last two weeks.' },
]

export default function MentorNotes() {
  const [student, setStudent] = useState('Yohannes Bekele')
  const [modalOpen, setModalOpen] = useState(false)
  const filtered = initialNotes.filter((n) => n.student === student)

  return (
    <DashboardLayout sections={mentorNav} pageTitle="Mentor Notes" userName="Selam Alemayehu" userRole="Mentor">
      <div className="mb-2 flex items-center gap-2 text-caption text-text-muted">
        <Lock className="h-3.5 w-3.5" /> Private — visible only to you
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Select id="student-select" defaultValue={student} onChange={(e) => setStudent(e.target.value)} className="sm:w-64">
          {students.map((s) => <option key={s} value={s}>{s}</option>)}
        </Select>
        <Button icon={Plus} onClick={() => setModalOpen(true)}>Add Note</Button>
      </div>

      <div className="space-y-4">
        {filtered.map((n) => (
          <Card key={n.id}>
            <div className="flex items-start justify-between">
              <p className="text-caption text-text-muted">{n.date}</p>
              <div className="flex gap-1">
                <Button variant="icon" size="sm" icon={Pencil} iconOnly aria-label="Edit" />
                <Button variant="icon" size="sm" icon={Trash2} iconOnly aria-label="Delete" className="hover:text-absent" />
              </div>
            </div>
            <p className="mt-1.5 text-body text-text-primary dark:text-dark-text">{n.content}</p>
          </Card>
        ))}
        {filtered.length === 0 && (
          <p className="py-8 text-center text-body text-text-muted">No notes for {student} yet.</p>
        )}
      </div>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={`Add Note — ${student}`}
        footer={
          <>
            <Button variant="outline" onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button onClick={() => setModalOpen(false)}>Save Note</Button>
          </>
        }
      >
        <Textarea id="note-content" label="Note" rows={5} placeholder="Only visible to you..." />
      </Modal>
    </DashboardLayout>
  )
}
