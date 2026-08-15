import { Eye } from 'lucide-react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { mentorNav } from '../../lib/nav'
import { Card, Avatar } from '../../components/ui/Card'
import StatusBadge from '../../components/ui/Badge'
import Button from '../../components/ui/Button'

const students = [
  { id: 1, name: 'Yohannes Bekele', risk: 'High', reasons: ['Attendance 58%', 'Avg grade 61%', '1 missing assignment'] },
  { id: 2, name: 'Mihret Alemu', risk: 'Medium', reasons: ['2 missing assignments'] },
  { id: 3, name: 'Dawit Kassa', risk: 'Medium', reasons: ['Avg grade 68%'] },
  { id: 4, name: 'Selamawit Fikru', risk: 'Low', reasons: ['Attendance dipped to 80% this week'] },
]

const riskOrder = { High: 0, Medium: 1, Low: 2 }

export default function AtRiskStudents() {
  const sorted = [...students].sort((a, b) => riskOrder[a.risk] - riskOrder[b.risk])

  return (
    <DashboardLayout sections={mentorNav} pageTitle="At-Risk Students" userName="Selam Alemayehu" userRole="Mentor">
      <p className="mb-6 text-body text-text-secondary dark:text-dark-text-secondary">
        Students flagged for low attendance, low progress, low grades, or missing assignments — sorted by priority.
      </p>

      <div className="space-y-4">
        {sorted.map((s) => (
          <Card key={s.id} className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Avatar name={s.name} />
              <div>
                <p className="text-body font-medium text-text-primary dark:text-dark-text">{s.name}</p>
                <p className="text-small text-text-secondary dark:text-dark-text-secondary">{s.reasons.join(' · ')}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <StatusBadge status={s.risk} />
              <Button variant="outline" size="sm" icon={Eye}>View Student</Button>
            </div>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  )
}
