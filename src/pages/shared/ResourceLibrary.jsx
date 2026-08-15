import { useState } from 'react'
import { FileText, Link2, Video, BookOpen, ExternalLink } from 'lucide-react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { adminNav, mentorNav, studentNav } from '../../lib/nav'
import { Card } from '../../components/ui/Card'
import { SearchInput } from '../../components/ui/Input'
import Button from '../../components/ui/Button'

const navByRole = { Admin: adminNav, Mentor: mentorNav, Student: studentNav }
const nameByRole = { Admin: 'Admin User', Mentor: 'Selam Alemayehu', Student: 'Betelhem Tesfaye' }

const typeIcon = { Document: FileText, Link: Link2, Video: Video }

const resources = [
  { id: 1, type: 'Document', title: 'React Hooks Cheat Sheet', description: 'Quick reference for useState, useEffect, useContext, and custom hooks.', category: 'React', author: 'Selam Alemayehu', date: 'Aug 5, 2026' },
  { id: 2, type: 'Video', title: 'Express Middleware Deep Dive', description: '40-minute walkthrough of writing and composing middleware.', category: 'Node.js', author: 'ASTU MSJ Staff', date: 'Aug 1, 2026' },
  { id: 3, type: 'Link', title: 'MDN — Async/Await Guide', description: 'Official reference on asynchronous JavaScript patterns.', category: 'JavaScript', author: 'ASTU MSJ Staff', date: 'Jul 28, 2026' },
  { id: 4, type: 'Document', title: 'OWASP Top 10 Summary', description: 'Condensed overview of the most critical web security risks.', category: 'Cybersecurity', author: 'Selam Alemayehu', date: 'Jul 25, 2026' },
  { id: 5, type: 'Video', title: 'Git Branching Strategies', description: 'Trunk-based vs. GitFlow, and when to use each.', category: 'Git/GitHub', author: 'ASTU MSJ Staff', date: 'Jul 20, 2026' },
  { id: 6, type: 'Link', title: 'MongoDB Aggregation Pipeline Docs', description: 'Official documentation with runnable examples.', category: 'MongoDB', author: 'ASTU MSJ Staff', date: 'Jul 18, 2026' },
]

const categories = ['All', 'React', 'Node.js', 'JavaScript', 'Cybersecurity', 'Git/GitHub', 'MongoDB']

export default function ResourceLibrary({ role = 'Student' }) {
  const [category, setCategory] = useState('All')
  const filtered = category === 'All' ? resources : resources.filter((r) => r.category === category)

  return (
    <DashboardLayout sections={navByRole[role]} pageTitle="Resources" userName={nameByRole[role]} userRole={role}>
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SearchInput placeholder="Search resources..." className="sm:w-72" />
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full border px-3 py-1.5 text-small font-medium transition-colors ${
                category === c
                  ? 'border-brand bg-brand-bg text-brand dark:bg-brand/10'
                  : 'border-border text-text-secondary hover:bg-app dark:border-dark-border dark:text-dark-text-secondary dark:hover:bg-dark-elevated'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((r) => {
          const Icon = typeIcon[r.type]
          return (
            <Card key={r.id}>
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-bg text-brand dark:bg-brand/10">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-caption font-medium uppercase tracking-wide text-text-muted">{r.type}</span>
              </div>
              <h3 className="text-h4 text-text-primary dark:text-dark-text">{r.title}</h3>
              <p className="mt-1.5 text-small text-text-secondary dark:text-dark-text-secondary">{r.description}</p>
              <div className="mt-3 text-caption text-text-muted">{r.category} · {r.author} · {r.date}</div>
              <Button variant="outline" size="sm" icon={ExternalLink} className="mt-4 w-full">Open</Button>
            </Card>
          )
        })}
      </div>
    </DashboardLayout>
  )
}
