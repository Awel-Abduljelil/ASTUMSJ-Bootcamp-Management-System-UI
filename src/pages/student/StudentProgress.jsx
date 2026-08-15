import DashboardLayout from '../../components/layout/DashboardLayout'
import { studentNav } from '../../lib/nav'
import { Card, ProgressBar } from '../../components/ui/Card'
import StatusBadge from '../../components/ui/Badge'

const topics = [
  { name: 'HTML/CSS', status: 'Completed', value: 100 },
  { name: 'JavaScript', status: 'Completed', value: 100 },
  { name: 'React', status: 'In Progress', value: 65 },
  { name: 'Node.js', status: 'Not Started', value: 0 },
  { name: 'Express.js', status: 'Not Started', value: 0 },
  { name: 'MongoDB', status: 'Not Started', value: 0 },
  { name: 'Git/GitHub', status: 'Completed', value: 100 },
]

const progressColor = {
  Completed: 'bg-completed',
  'In Progress': 'bg-in-progress',
  'Needs Improvement': 'bg-needs-improvement',
  'Not Started': 'bg-not-started',
}

export default function StudentProgress() {
  return (
    <DashboardLayout sections={studentNav} pageTitle="My Progress" userName="Betelhem Tesfaye" userRole="Student">
      <p className="mb-6 text-body text-text-secondary dark:text-dark-text-secondary">Your learning roadmap for this bootcamp.</p>
      <div className="space-y-4">
        {topics.map((t) => (
          <Card key={t.name} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="sm:w-48">
              <p className="text-body font-medium text-text-primary dark:text-dark-text">{t.name}</p>
            </div>
            <div className="flex-1">
              <div className="mb-1.5 flex items-center justify-between">
                <StatusBadge status={t.status} />
                <span className="text-caption text-text-muted">{t.value}%</span>
              </div>
              <ProgressBar value={t.value} colorClass={progressColor[t.status]} />
            </div>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  )
}
