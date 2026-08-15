import { useState } from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { studentNav } from '../../lib/nav'
import { Card } from '../../components/ui/Card'
import StatusBadge from '../../components/ui/Badge'
import Button from '../../components/ui/Button'

const grades = [
  { id: 1, title: 'JavaScript Basics', score: 92, max: 100, status: 'Graded', feedback: 'Clean, well-organized solutions. Great use of array methods — watch for edge cases with empty arrays next time.', submission: 'github.com/betelhem/js-basics' },
  { id: 2, title: 'CSS Grid Layout', score: 88, max: 100, status: 'Graded', feedback: 'Layout matches the mock closely. Consider using grid-template-areas for readability.', submission: 'github.com/betelhem/css-grid-layout' },
  { id: 3, title: 'HTML Semantics Quiz', score: 100, max: 100, status: 'Graded', feedback: 'Perfect score — excellent understanding of semantic HTML.', submission: 'github.com/betelhem/html-semantics' },
]

export default function StudentGrades() {
  const [selected, setSelected] = useState(null)
  const average = Math.round(grades.reduce((sum, g) => sum + (g.score / g.max) * 100, 0) / grades.length)

  if (selected) {
    return (
      <DashboardLayout sections={studentNav} pageTitle="Grade Feedback" userName="Betelhem Tesfaye" userRole="Student">
        <button onClick={() => setSelected(null)} className="mb-4 text-small font-medium text-brand hover:text-brand-hover">
          ← Back to My Grades
        </button>
        <Card className="mx-auto max-w-lg text-center">
          <p className="text-body text-text-secondary dark:text-dark-text-secondary">{selected.title}</p>
          <p className="mt-2 text-display text-brand">{selected.score}<span className="text-h3 text-text-muted">/{selected.max}</span></p>
          <div className="mt-6 rounded-md bg-app p-4 text-left dark:bg-dark-elevated">
            <p className="mb-1 text-small font-medium text-text-primary dark:text-dark-text">Mentor Feedback</p>
            <p className="text-small text-text-secondary dark:text-dark-text-secondary">{selected.feedback}</p>
          </div>
          <a href="#" className="mt-4 inline-block text-small font-medium text-brand hover:text-brand-hover">
            View Submission — {selected.submission}
          </a>
        </Card>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout sections={studentNav} pageTitle="My Grades" userName="Betelhem Tesfaye" userRole="Student">
      <Card className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-small text-text-secondary dark:text-dark-text-secondary">Overall Average Grade</p>
          <p className="mt-1 text-h1 text-text-primary dark:text-dark-text">{average}%</p>
        </div>
      </Card>

      <div className="space-y-3">
        {grades.map((g) => (
          <Card key={g.id} className="flex items-center justify-between">
            <div>
              <p className="text-body font-medium text-text-primary dark:text-dark-text">{g.title}</p>
              <p className="text-caption text-text-muted">Feedback available</p>
            </div>
            <div className="flex items-center gap-4">
              <StatusBadge status={g.status} />
              <span className="text-h4 text-present">{g.score}/{g.max}</span>
              <Button variant="text" size="sm" onClick={() => setSelected(g)}>View Details</Button>
            </div>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  )
}
