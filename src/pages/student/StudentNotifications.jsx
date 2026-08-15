import { useState } from 'react'
import { FileText, Clock, Award, MessageSquare, Megaphone, CheckCheck } from 'lucide-react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { studentNav } from '../../lib/nav'
import { Card } from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import { cn } from '../../lib/cn'

const typeIcon = {
  'New Assignment': FileText,
  'Deadline Approaching': Clock,
  'Grade Posted': Award,
  'Feedback Posted': MessageSquare,
  'Important Announcement': Megaphone,
}

const initialNotifications = [
  { id: 1, type: 'Grade Posted', title: 'JavaScript Basics graded', time: '10 min ago', read: false },
  { id: 2, type: 'Deadline Approaching', title: 'React Router Project due in 2 days', time: '2 hours ago', read: false },
  { id: 3, type: 'New Assignment', title: 'Express API Assignment posted', time: 'Yesterday', read: false },
  { id: 4, type: 'Feedback Posted', title: 'Mentor left feedback on CSS Grid Layout', time: '2 days ago', read: true },
  { id: 5, type: 'Important Announcement', title: 'Week 4 Schedule Update', time: '2 days ago', read: true },
]

export default function StudentNotifications() {
  const [notifications, setNotifications] = useState(initialNotifications)
  const markAllRead = () => setNotifications((n) => n.map((x) => ({ ...x, read: true })))

  return (
    <DashboardLayout sections={studentNav} pageTitle="Notifications" userName="Betelhem Tesfaye" userRole="Student">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-h3 text-text-primary dark:text-dark-text">Notifications</h2>
        <Button variant="text" size="sm" icon={CheckCheck} onClick={markAllRead}>Mark all as read</Button>
      </div>

      <Card className="p-0">
        <ul className="divide-y divide-border dark:divide-dark-border">
          {notifications.map((n) => {
            const Icon = typeIcon[n.type]
            return (
              <li
                key={n.id}
                className={cn('flex items-start gap-3 p-4', !n.read && 'bg-brand-bg/40 dark:bg-brand/5')}
                onClick={() => setNotifications((prev) => prev.map((x) => (x.id === n.id ? { ...x, read: true } : x)))}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-bg text-brand dark:bg-brand/10">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-small font-medium text-text-primary dark:text-dark-text">{n.title}</p>
                  <p className="text-caption text-text-muted">{n.type} · {n.time}</p>
                </div>
                {!n.read && <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand" />}
              </li>
            )
          })}
        </ul>
      </Card>
    </DashboardLayout>
  )
}
