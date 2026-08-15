import { Github, ExternalLink } from 'lucide-react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { mentorNav } from '../../lib/nav'
import { Card, Avatar } from '../../components/ui/Card'
import { TextInput, Textarea } from '../../components/ui/Input'
import Button from '../../components/ui/Button'

export default function GradeSubmission() {
  return (
    <DashboardLayout sections={mentorNav} pageTitle="Grade Submission" userName="Selam Alemayehu" userRole="Mentor">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-5">
        {/* Left: submission */}
        <Card className="xl:col-span-3">
          <div className="mb-4 flex items-center gap-3">
            <Avatar name="Nathnael Girma" />
            <div>
              <p className="text-h4 text-text-primary dark:text-dark-text">Nathnael Girma</p>
              <p className="text-small text-text-secondary dark:text-dark-text-secondary">React Router Project · Submitted Aug 13, 2026</p>
            </div>
          </div>

          <div className="space-y-4">
            <a
              href="#"
              className="flex items-center justify-between rounded-md border border-border p-3.5 text-small hover:bg-app dark:border-dark-border dark:hover:bg-dark-elevated"
            >
              <span className="flex items-center gap-2 text-text-primary dark:text-dark-text">
                <Github className="h-4 w-4" /> github.com/nathg/react-router-project
              </span>
              <ExternalLink className="h-4 w-4 text-text-muted" />
            </a>
            <a
              href="#"
              className="flex items-center justify-between rounded-md border border-border p-3.5 text-small hover:bg-app dark:border-dark-border dark:hover:bg-dark-elevated"
            >
              <span className="flex items-center gap-2 text-text-primary dark:text-dark-text">
                <ExternalLink className="h-4 w-4" /> nathg-router-project.vercel.app
              </span>
              <ExternalLink className="h-4 w-4 text-text-muted" />
            </a>

            <div>
              <p className="mb-1.5 text-small font-medium text-text-secondary dark:text-dark-text-secondary">Student Notes</p>
              <p className="rounded-md bg-app p-3.5 text-small text-text-primary dark:bg-dark-elevated dark:text-dark-text">
                Implemented nested routes and a protected route guard. Ran out of time on the loading
                skeleton for the dashboard — will follow up if resubmission is needed.
              </p>
            </div>
          </div>
        </Card>

        {/* Right: grading panel */}
        <Card className="xl:col-span-2">
          <h3 className="mb-4 text-h4 text-text-primary dark:text-dark-text">Grade</h3>
          <div className="space-y-4">
            <div className="flex items-end gap-3">
              <TextInput id="score" label="Score" type="number" placeholder="0" className="flex-1" />
              <span className="pb-2.5 text-body text-text-muted">/ 100</span>
            </div>
            <Textarea id="feedback" label="Feedback" rows={6} placeholder="Share what went well and what to improve..." />
          </div>

          <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6 dark:border-dark-border">
            <Button variant="primary">Save Grade</Button>
            <Button variant="outline">Request Resubmission</Button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}
