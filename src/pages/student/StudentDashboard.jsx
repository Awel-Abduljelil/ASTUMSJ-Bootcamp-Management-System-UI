import { CalendarCheck, Percent, GraduationCap, ListChecks, Award } from 'lucide-react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { studentNav } from '../../lib/nav'
import { Card, StatCard, ProgressBar } from '../../components/ui/Card'
import StatusBadge from '../../components/ui/Badge'
import Button from '../../components/ui/Button'

const topics = [
  { name: 'HTML/CSS', status: 'Completed', value: 100 },
  { name: 'JavaScript', status: 'Completed', value: 100 },
  { name: 'React', status: 'In Progress', value: 65 },
  { name: 'Node.js', status: 'Not Started', value: 0 },
]

const deadlines = [
  { title: 'React Router Project', due: 'Due in 2 days' },
  { title: 'Express API Assignment', due: 'Due in 5 days' },
]

const grades = [
  { title: 'JavaScript Basics', score: '92/100', feedback: 'Feedback available' },
  { title: 'CSS Grid Layout', score: '88/100', feedback: 'Feedback available' },
]

const progressColor = { Completed: 'bg-completed', 'In Progress': 'bg-in-progress', 'Not Started': 'bg-not-started' }

export default function StudentDashboard() {
  return (
    <DashboardLayout sections={studentNav} pageTitle="Dashboard" userName="Betelhem Tesfaye" userRole="Student">
      <div className="mb-6">
        <h2 className="text-h2 text-text-primary dark:text-dark-text">Welcome back, Betelhem 👋</h2>
        <p className="mt-1 text-body text-text-secondary dark:text-dark-text-secondary">Keep learning. Keep building.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Attendance" value="94%" icon={CalendarCheck} accent="present" />
        <StatCard label="Overall Progress" value="68%" icon={Percent} accent="brand" />
        <StatCard label="Average Grade" value="90%" icon={GraduationCap} accent="present" />
        <StatCard label="Pending Assignments" value="2" icon={ListChecks} accent="late" />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <h3 className="mb-4 text-h4 text-text-primary dark:text-dark-text">My Progress</h3>
          <div className="space-y-5">
            {topics.map((t) => (
              <div key={t.name}>
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-small font-medium text-text-primary dark:text-dark-text">{t.name}</span>
                  <StatusBadge status={t.status} />
                </div>
                <ProgressBar value={t.value} colorClass={progressColor[t.status]} />
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="mb-4 text-h4 text-text-primary dark:text-dark-text">Upcoming Deadlines</h3>
          <ul className="space-y-3">
            {deadlines.map((d) => (
              <li key={d.title} className="rounded-md border border-border p-3 dark:border-dark-border">
                <p className="text-small font-medium text-text-primary dark:text-dark-text">{d.title}</p>
                <p className="text-caption text-late">{d.due}</p>
              </li>
            ))}
          </ul>
          <Button variant="text" className="mt-3 w-full">View All Assignments</Button>
        </Card>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <h3 className="mb-4 text-h4 text-text-primary dark:text-dark-text">Recent Grades</h3>
          <ul className="divide-y divide-border dark:divide-dark-border">
            {grades.map((g) => (
              <li key={g.title} className="flex items-center justify-between py-3">
                <div>
                  <p className="text-small font-medium text-text-primary dark:text-dark-text">{g.title}</p>
                  <p className="text-caption text-text-muted">{g.feedback}</p>
                </div>
                <span className="text-body font-semibold text-present">{g.score}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h3 className="mb-4 flex items-center gap-2 text-h4 text-text-primary dark:text-dark-text">
            <Award className="h-5 w-5 text-brand" /> Achievements
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {['🔥', '⭐', '🏆'].map((emoji, i) => (
              <div key={i} className="flex aspect-square flex-col items-center justify-center rounded-md bg-brand-bg text-2xl dark:bg-brand/10">
                {emoji}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}
