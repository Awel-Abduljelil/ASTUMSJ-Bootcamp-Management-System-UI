import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { mentorNav } from '../../lib/nav'
import DataTable from '../../components/ui/DataTable'
import StatusBadge from '../../components/ui/Badge'
import { Avatar } from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import { SearchInput, Select } from '../../components/ui/Input'

const submissions = [
  { id: 1, student: 'Nathnael Girma', assignment: 'React Router Project', date: 'Aug 13, 2026', status: 'Submitted', score: '—' },
  { id: 2, student: 'Selamawit Fikru', assignment: 'Express API Assignment', date: 'Aug 13, 2026', status: 'Submitted', score: '—' },
  { id: 3, student: 'Betelhem Tesfaye', assignment: 'JavaScript Basics', date: 'Aug 1, 2026', status: 'Graded', score: '92/100' },
  { id: 4, student: 'Dawit Kassa', assignment: 'React Router Project', date: 'Aug 12, 2026', status: 'Submitted', score: '—' },
  { id: 5, student: 'Yohannes Bekele', assignment: 'JavaScript Basics', date: 'Aug 2, 2026', status: 'Resubmission Requested', score: '—' },
]

export default function Submissions() {
  const navigate = useNavigate()

  const columns = [
    {
      key: 'student',
      header: 'Student',
      render: (row) => (
        <div className="flex items-center gap-3">
          <Avatar name={row.student} size="sm" />
          <span className="font-medium">{row.student}</span>
        </div>
      ),
    },
    { key: 'assignment', header: 'Assignment' },
    { key: 'date', header: 'Submitted' },
    { key: 'status', header: 'Status', render: (row) => <StatusBadge status={row.status} /> },
    { key: 'score', header: 'Score' },
    {
      key: 'actions',
      header: '',
      render: () => (
        <Button variant="text" size="sm" onClick={(e) => { e.stopPropagation(); navigate('/mentor/grading') }}>
          Review
        </Button>
      ),
    },
  ]

  return (
    <DashboardLayout sections={mentorNav} pageTitle="Submissions" userName="Selam Alemayehu" userRole="Mentor">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row">
        <SearchInput placeholder="Search submissions..." className="sm:w-72" />
        <Select id="status-filter" defaultValue="" className="sm:w-48">
          <option value="">All Statuses</option>
          <option value="submitted">Submitted</option>
          <option value="graded">Graded</option>
          <option value="resubmission">Resubmission Requested</option>
        </Select>
      </div>
      <DataTable columns={columns} rows={submissions} page={1} totalPages={1} onRowClick={() => navigate('/mentor/grading')} />
    </DashboardLayout>
  )
}
