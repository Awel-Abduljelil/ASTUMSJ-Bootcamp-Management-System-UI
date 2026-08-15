import DashboardLayout from '../../components/layout/DashboardLayout'
import { studentNav } from '../../lib/nav'
import { Card } from '../../components/ui/Card'
import StatusBadge from '../../components/ui/Badge'
import { Select } from '../../components/ui/Input'

const history = [
  { date: 'Aug 12, 2026', status: 'Present' },
  { date: 'Aug 11, 2026', status: 'Present' },
  { date: 'Aug 10, 2026', status: 'Late' },
  { date: 'Aug 9, 2026', status: 'Present' },
  { date: 'Aug 8, 2026', status: 'Excused' },
  { date: 'Aug 7, 2026', status: 'Present' },
  { date: 'Aug 6, 2026', status: 'Absent' },
]

export default function StudentAttendance() {
  const present = 42, absent = 2, late = 3, excused = 1
  const total = present + absent + late + excused
  const pct = Math.round((present / total) * 100)

  return (
    <DashboardLayout sections={studentNav} pageTitle="My Attendance" userName="Betelhem Tesfaye" userRole="Student">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="flex flex-col items-center justify-center lg:col-span-1">
          <div className="relative flex h-40 w-40 items-center justify-center rounded-full" style={{ background: `conic-gradient(#16A34A ${pct * 3.6}deg, #E2E8F0 0deg)` }}>
            <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-surface dark:bg-dark-surface">
              <span className="text-h1 text-text-primary dark:text-dark-text">{pct}%</span>
              <span className="text-caption text-text-muted">Attendance</span>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-4 lg:col-span-2">
          <Card>
            <p className="text-caption text-text-muted">Present</p>
            <p className="mt-1 text-h2 text-present">{present}</p>
          </Card>
          <Card>
            <p className="text-caption text-text-muted">Absent</p>
            <p className="mt-1 text-h2 text-absent">{absent}</p>
          </Card>
          <Card>
            <p className="text-caption text-text-muted">Late</p>
            <p className="mt-1 text-h2 text-late">{late}</p>
          </Card>
          <Card>
            <p className="text-caption text-text-muted">Excused</p>
            <p className="mt-1 text-h2 text-excused">{excused}</p>
          </Card>
        </div>
      </div>

      <Card className="mt-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-h4 text-text-primary dark:text-dark-text">Attendance History</h3>
          <Select id="month-filter" defaultValue="aug" className="w-40">
            <option value="aug">August 2026</option>
            <option value="jul">July 2026</option>
          </Select>
        </div>
        <ul className="divide-y divide-border dark:divide-dark-border">
          {history.map((h, i) => (
            <li key={i} className="flex items-center justify-between py-3">
              <span className="text-small text-text-primary dark:text-dark-text">{h.date}</span>
              <StatusBadge status={h.status} />
            </li>
          ))}
        </ul>
      </Card>
    </DashboardLayout>
  )
}
