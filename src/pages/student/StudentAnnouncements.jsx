import { useState } from 'react'
import { Megaphone } from 'lucide-react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { studentNav } from '../../lib/nav'
import { Card } from '../../components/ui/Card'
import Tabs from '../../components/ui/Tabs'

const announcements = [
  { id: 1, title: 'Week 4 Schedule Update', preview: 'Sessions this week move to the main auditorium starting Wednesday. Please check the calendar for updated room assignments.', date: 'Aug 12, 2026', author: 'Admin User', target: 'All Students', important: true },
  { id: 2, title: 'Cybersecurity Track — CTF Night', preview: 'Join us for a hands-on capture-the-flag night this Friday at 6pm. Teams of 2-3, prizes for top finishers.', date: 'Aug 10, 2026', author: 'Selam Alemayehu', target: 'Batch 4', important: false },
  { id: 3, title: 'Mentor Office Hours Extended', preview: 'Office hours are now available Mon–Thu 4–6pm for all batches. Book a slot through the calendar.', date: 'Aug 8, 2026', author: 'Admin User', target: 'All Students', important: false },
]

export default function StudentAnnouncements() {
  const [tab, setTab] = useState('All')
  const filtered = tab === 'Important' ? announcements.filter((a) => a.important) : tab === 'Recent' ? announcements.slice(0, 2) : announcements

  return (
    <DashboardLayout sections={studentNav} pageTitle="Announcements" userName="Betelhem Tesfaye" userRole="Student">
      <Tabs tabs={['All', 'Important', 'Recent']} active={tab} onChange={setTab} />
      <div className="mt-5 space-y-4">
        {filtered.map((a) => (
          <Card key={a.id}>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-bg text-brand dark:bg-brand/10">
                <Megaphone className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-h4 text-text-primary dark:text-dark-text">{a.title}</h3>
                <p className="mt-1.5 text-body text-text-secondary dark:text-dark-text-secondary">{a.preview}</p>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-caption text-text-muted">
                  <span>{a.date}</span><span>·</span><span>{a.author}</span><span>·</span><span>{a.target}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  )
}
