import { useState } from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { mentorNav } from '../../lib/nav'
import DataTable from '../../components/ui/DataTable'
import StatusBadge from '../../components/ui/Badge'
import { Card, Avatar, ProgressBar } from '../../components/ui/Card'
import { SearchInput } from '../../components/ui/Input'
import Tabs from '../../components/ui/Tabs'

const students = [
  { id: 1, name: 'Betelhem Tesfaye', attendance: '94%', progress: 78, grade: '90%', status: 'On Track' },
  { id: 2, name: 'Nathnael Girma', attendance: '89%', progress: 65, grade: '85%', status: 'On Track' },
  { id: 3, name: 'Selamawit Fikru', attendance: '96%', progress: 82, grade: '93%', status: 'On Track' },
  { id: 4, name: 'Yohannes Bekele', attendance: '58%', progress: 30, grade: '61%', status: 'At Risk' },
  { id: 5, name: 'Mihret Alemu', attendance: '77%', progress: 55, grade: '74%', status: 'At Risk' },
  { id: 6, name: 'Dawit Kassa', attendance: '85%', progress: 60, grade: '80%', status: 'On Track' },
]

export default function MyStudents() {
  const [selected, setSelected] = useState(null)
  const [tab, setTab] = useState('Overview')

  if (selected) {
    return (
      <DashboardLayout sections={mentorNav} pageTitle="Student Details" userName="Selam Alemayehu" userRole="Mentor">
        <button onClick={() => setSelected(null)} className="mb-4 text-small font-medium text-brand hover:text-brand-hover">
          ← Back to My Students
        </button>
        <div className="mb-4 flex items-center gap-4">
          <Avatar name={selected.name} size="lg" />
          <div>
            <h2 className="text-h3 text-text-primary dark:text-dark-text">{selected.name}</h2>
            <p className="text-small text-text-secondary dark:text-dark-text-secondary">Batch 4 — Cybersecurity</p>
          </div>
          <StatusBadge status={selected.status === 'At Risk' ? 'High' : 'Low'} className="ml-auto" />
        </div>

        <Card className="p-0">
          <div className="px-6 pt-2">
            <Tabs tabs={['Overview', 'Attendance', 'Progress', 'Assignments', 'Mentor Notes']} active={tab} onChange={setTab} />
          </div>
          <div className="p-6">
            {tab === 'Overview' && (
              <div className="grid grid-cols-3 gap-6">
                <div><p className="text-caption text-text-muted">Attendance</p><p className="text-h3 text-text-primary dark:text-dark-text">{selected.attendance}</p></div>
                <div><p className="text-caption text-text-muted">Progress</p><p className="text-h3 text-text-primary dark:text-dark-text">{selected.progress}%</p></div>
                <div><p className="text-caption text-text-muted">Average Grade</p><p className="text-h3 text-text-primary dark:text-dark-text">{selected.grade}</p></div>
              </div>
            )}
            {tab !== 'Overview' && (
              <p className="text-body text-text-secondary dark:text-dark-text-secondary">{tab} detail for {selected.name}.</p>
            )}
          </div>
        </Card>
      </DashboardLayout>
    )
  }

  const columns = [
    {
      key: 'student',
      header: 'Student',
      render: (row) => (
        <div className="flex items-center gap-3">
          <Avatar name={row.name} size="sm" />
          <span className="font-medium">{row.name}</span>
        </div>
      ),
    },
    { key: 'attendance', header: 'Attendance' },
    {
      key: 'progress',
      header: 'Progress',
      render: (row) => (
        <div className="w-32">
          <ProgressBar value={row.progress} colorClass={row.progress > 60 ? 'bg-in-progress' : 'bg-needs-improvement'} />
        </div>
      ),
    },
    { key: 'grade', header: 'Avg. Grade' },
    { key: 'status', header: 'Status', render: (row) => <StatusBadge status={row.status === 'At Risk' ? 'High' : 'Low'} /> },
  ]

  return (
    <DashboardLayout sections={mentorNav} pageTitle="My Students" userName="Selam Alemayehu" userRole="Mentor">
      <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-h3 text-text-primary dark:text-dark-text">My Students</h2>
        <SearchInput placeholder="Search students..." className="sm:w-72" />
      </div>
      <DataTable columns={columns} rows={students} page={1} totalPages={1} onRowClick={setSelected} />
      <p className="mt-2 text-caption text-text-muted">Click a row to open student details.</p>
    </DashboardLayout>
  )
}
