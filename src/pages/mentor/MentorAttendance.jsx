import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { mentorNav } from '../../lib/nav'
import { Card, Avatar } from '../../components/ui/Card'
import { Select, TextInput } from '../../components/ui/Input'
import Button from '../../components/ui/Button'
import { cn } from '../../lib/cn'

const students = [
  { id: 1, name: 'Betelhem Tesfaye' },
  { id: 2, name: 'Nathnael Girma' },
  { id: 3, name: 'Selamawit Fikru' },
  { id: 4, name: 'Yohannes Bekele' },
  { id: 5, name: 'Mihret Alemu' },
  { id: 6, name: 'Dawit Kassa' },
]

const statuses = [
  { key: 'present', label: 'Present', activeClass: 'bg-present text-white border-present' },
  { key: 'absent', label: 'Absent', activeClass: 'bg-absent text-white border-absent' },
  { key: 'late', label: 'Late', activeClass: 'bg-late text-white border-late' },
  { key: 'excused', label: 'Excused', activeClass: 'bg-excused text-white border-excused' },
]

export default function MentorAttendance() {
  const [marks, setMarks] = useState(() => Object.fromEntries(students.map((s) => [s.id, null])))

  const markAllPresent = () =>
    setMarks(Object.fromEntries(students.map((s) => [s.id, 'present'])))

  return (
    <DashboardLayout sections={mentorNav} pageTitle="Attendance" userName="Selam Alemayehu" userRole="Mentor">
      <Card>
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-1 flex-col gap-4 sm:flex-row">
            <Select id="batch" label="Batch" defaultValue="batch-4" className="sm:w-56">
              <option value="batch-4">Batch 4 — Cybersecurity</option>
              <option value="batch-1">Batch 1 — Frontend</option>
              <option value="batch-2">Batch 2 — Backend</option>
            </Select>
            <TextInput id="date" label="Date" type="date" defaultValue="2026-08-13" className="sm:w-48" />
          </div>
          <Button variant="outline" icon={CheckCircle2} onClick={markAllPresent}>
            Mark All Present
          </Button>
        </div>

        <ul className="divide-y divide-border dark:divide-dark-border">
          {students.map((s) => (
            <li key={s.id} className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <Avatar name={s.name} size="sm" />
                <span className="text-body font-medium text-text-primary dark:text-dark-text">{s.name}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {statuses.map((st) => (
                  <button
                    key={st.key}
                    onClick={() => setMarks((m) => ({ ...m, [s.id]: st.key }))}
                    className={cn(
                      'rounded-full border px-3.5 py-1.5 text-small font-medium transition-colors',
                      marks[s.id] === st.key
                        ? st.activeClass
                        : 'border-border text-text-secondary hover:bg-app dark:border-dark-border dark:text-dark-text-secondary dark:hover:bg-dark-elevated',
                    )}
                  >
                    {st.label}
                  </button>
                ))}
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex justify-end gap-3 border-t border-border pt-6 dark:border-dark-border">
          <Button variant="outline">Cancel</Button>
          <Button variant="primary">Save Attendance</Button>
        </div>
      </Card>
    </DashboardLayout>
  )
}
