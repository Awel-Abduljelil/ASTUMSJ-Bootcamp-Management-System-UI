import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { adminNav, mentorNav, studentNav } from '../../lib/nav'
import { Card } from '../../components/ui/Card'
import Tabs from '../../components/ui/Tabs'
import { cn } from '../../lib/cn'

const navByRole = { Admin: adminNav, Mentor: mentorNav, Student: studentNav }
const nameByRole = { Admin: 'Admin User', Mentor: 'Selam Alemayehu', Student: 'Betelhem Tesfaye' }

const eventTypeColor = {
  Deadline: 'bg-absent',
  Workshop: 'bg-brand',
  Event: 'bg-present',
  Important: 'bg-late',
}

const events = [
  { day: 5, title: 'React Router Project Due', type: 'Deadline' },
  { day: 8, title: 'CTF Night', type: 'Event' },
  { day: 12, title: 'Express Workshop', type: 'Workshop' },
  { day: 15, title: 'React Router Project Due', type: 'Deadline' },
  { day: 20, title: 'Mid-Bootcamp Review', type: 'Important' },
]

export default function CalendarPage({ role = 'Student' }) {
  const [view, setView] = useState('Monthly')
  const daysInMonth = 31
  const startOffset = 5 // Aug 1, 2026 is a Saturday

  return (
    <DashboardLayout sections={navByRole[role]} pageTitle="Calendar" userName={nameByRole[role]} userRole={role}>
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <button className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-text-secondary hover:bg-app dark:border-dark-border dark:hover:bg-dark-elevated">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <h2 className="text-h3 text-text-primary dark:text-dark-text">August 2026</h2>
          <button className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-text-secondary hover:bg-app dark:border-dark-border dark:hover:bg-dark-elevated">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <Tabs tabs={['Monthly', 'Weekly']} active={view} onChange={setView} />
      </div>

      <Card>
        <div className="grid grid-cols-7 gap-2 text-center text-caption font-semibold uppercase text-text-muted">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => <div key={d}>{d}</div>)}
        </div>
        <div className="mt-2 grid grid-cols-7 gap-2">
          {Array.from({ length: startOffset }).map((_, i) => <div key={`empty-${i}`} />)}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1
            const dayEvents = events.filter((e) => e.day === day)
            return (
              <div
                key={day}
                className={cn(
                  'min-h-[72px] rounded-md border border-border p-1.5 text-left dark:border-dark-border',
                  day === 13 && 'ring-2 ring-brand',
                )}
              >
                <span className="text-caption text-text-muted">{day}</span>
                <div className="mt-1 space-y-1">
                  {dayEvents.map((e, idx) => (
                    <div key={idx} className={cn('truncate rounded px-1.5 py-0.5 text-[10px] font-medium text-white', eventTypeColor[e.type])}>
                      {e.title}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </Card>

      <Card className="mt-5">
        <h3 className="mb-3 text-h4 text-text-primary dark:text-dark-text">Upcoming Events</h3>
        <ul className="divide-y divide-border dark:divide-dark-border">
          {events.map((e, i) => (
            <li key={i} className="flex items-center gap-3 py-2.5">
              <span className={cn('h-2.5 w-2.5 shrink-0 rounded-full', eventTypeColor[e.type])} />
              <span className="text-small font-medium text-text-primary dark:text-dark-text">{e.title}</span>
              <span className="ml-auto text-caption text-text-muted">Aug {e.day} · {e.type}</span>
            </li>
          ))}
        </ul>
      </Card>
    </DashboardLayout>
  )
}
