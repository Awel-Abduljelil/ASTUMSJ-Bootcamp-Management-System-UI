import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { studentNav } from '../../lib/nav'
import { Card } from '../../components/ui/Card'
import StatusBadge from '../../components/ui/Badge'
import Tabs from '../../components/ui/Tabs'
import Button from '../../components/ui/Button'
import { TextInput, Textarea } from '../../components/ui/Input'

const assignments = [
  { id: 1, title: 'React Router Project', deadline: 'Aug 15, 2026', remaining: '2 days left', maxScore: 100, status: 'Pending', description: 'Build a multi-page app using React Router with nested routes and a protected route guard.', instructions: 'Submit your GitHub repo and a live demo link. Include a README with setup steps.' },
  { id: 2, title: 'Express API Assignment', deadline: 'Aug 18, 2026', remaining: '5 days left', maxScore: 100, status: 'Pending', description: 'Build a REST API with Express covering CRUD for a single resource.', instructions: 'Include Postman collection or example requests in your README.' },
  { id: 3, title: 'JavaScript Basics', deadline: 'Aug 2, 2026', remaining: 'Closed', maxScore: 100, status: 'Graded', description: 'Fundamentals exercises covering closures, array methods, and async/await.', instructions: 'Submitted and graded — see My Grades for feedback.' },
  { id: 4, title: 'CSS Grid Layout', deadline: 'Jul 28, 2026', remaining: 'Closed', maxScore: 60, status: 'Submitted', description: 'Recreate the given layout mock using CSS Grid.', instructions: 'Submit repo link only.' },
]

const tabFilter = { All: () => true, Pending: (a) => a.status === 'Pending', Submitted: (a) => a.status === 'Submitted', Graded: (a) => a.status === 'Graded', Overdue: (a) => a.status === 'Overdue' }

export default function StudentAssignments() {
  const [tab, setTab] = useState('All')
  const [selected, setSelected] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const filtered = assignments.filter(tabFilter[tab])

  if (selected) {
    if (submitted) {
      return (
        <DashboardLayout sections={studentNav} pageTitle="Assignment Submitted" userName="Betelhem Tesfaye" userRole="Student">
          <Card className="mx-auto max-w-md text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-present/10 text-present">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h2 className="text-h3 text-text-primary dark:text-dark-text">Assignment submitted</h2>
            <p className="mt-2 text-body text-text-secondary dark:text-dark-text-secondary">
              Your submission for "{selected.title}" was sent to your mentor for review.
            </p>
            <Button className="mt-6" onClick={() => { setSelected(null); setSubmitting(false); setSubmitted(false) }}>
              Back to Assignments
            </Button>
          </Card>
        </DashboardLayout>
      )
    }

    if (submitting) {
      return (
        <DashboardLayout sections={studentNav} pageTitle="Submit Assignment" userName="Betelhem Tesfaye" userRole="Student">
          <button onClick={() => setSubmitting(false)} className="mb-4 text-small font-medium text-brand hover:text-brand-hover">
            ← Back to Assignment
          </button>
          <Card className="mx-auto max-w-lg">
            <h2 className="mb-1 text-h4 text-text-primary dark:text-dark-text">{selected.title}</h2>
            <p className="mb-6 text-small text-text-secondary dark:text-dark-text-secondary">Submit your work below.</p>
            <form
              className="space-y-4"
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
            >
              <TextInput id="repo" label="GitHub Repository URL" placeholder="https://github.com/username/repo" required />
              <TextInput id="demo" label="Live Demo URL (Optional)" placeholder="https://your-demo.vercel.app" />
              <Textarea id="notes" label="Notes" rows={4} placeholder="Anything your mentor should know about your submission..." />
              <div className="flex justify-end gap-3 pt-2">
                <Button type="button" variant="outline" onClick={() => setSubmitting(false)}>Cancel</Button>
                <Button type="submit">Submit Assignment</Button>
              </div>
            </form>
          </Card>
        </DashboardLayout>
      )
    }

    return (
      <DashboardLayout sections={studentNav} pageTitle="Assignment Details" userName="Betelhem Tesfaye" userRole="Student">
        <button onClick={() => setSelected(null)} className="mb-4 text-small font-medium text-brand hover:text-brand-hover">
          ← Back to Assignments
        </button>
        <Card className="mx-auto max-w-2xl">
          <div className="mb-4 flex items-start justify-between">
            <h2 className="text-h3 text-text-primary dark:text-dark-text">{selected.title}</h2>
            <StatusBadge status={selected.status} />
          </div>
          <p className="text-body text-text-secondary dark:text-dark-text-secondary">{selected.description}</p>

          <div className="mt-5 rounded-md bg-app p-4 dark:bg-dark-elevated">
            <p className="mb-1 text-small font-medium text-text-primary dark:text-dark-text">Instructions</p>
            <p className="text-small text-text-secondary dark:text-dark-text-secondary">{selected.instructions}</p>
          </div>

          <div className="mt-5 flex gap-8 text-small">
            <div><p className="text-caption text-text-muted">Deadline</p><p className="font-medium text-text-primary dark:text-dark-text">{selected.deadline}</p></div>
            <div><p className="text-caption text-text-muted">Max Score</p><p className="font-medium text-text-primary dark:text-dark-text">{selected.maxScore}</p></div>
          </div>

          {selected.status === 'Pending' && (
            <Button className="mt-6 w-full" onClick={() => setSubmitting(true)}>Submit Assignment</Button>
          )}
        </Card>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout sections={studentNav} pageTitle="My Assignments" userName="Betelhem Tesfaye" userRole="Student">
      <Tabs tabs={Object.keys(tabFilter)} active={tab} onChange={setTab} />
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((a) => (
          <Card key={a.id}>
            <div className="mb-2 flex items-start justify-between">
              <h3 className="text-h4 text-text-primary dark:text-dark-text">{a.title}</h3>
              <StatusBadge status={a.status} />
            </div>
            <p className="text-small text-text-secondary dark:text-dark-text-secondary">{a.deadline} · {a.remaining}</p>
            <p className="mt-1 text-caption text-text-muted">Max score {a.maxScore}</p>
            <Button variant="outline" size="sm" className="mt-4 w-full" onClick={() => setSelected(a)}>View Assignment</Button>
          </Card>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full py-8 text-center text-body text-text-muted">No assignments here.</p>
        )}
      </div>
    </DashboardLayout>
  )
}
