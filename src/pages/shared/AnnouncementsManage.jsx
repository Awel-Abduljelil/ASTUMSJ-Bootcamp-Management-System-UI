import { useState } from 'react'
import { Plus, Pencil, Trash2 } from 'lucide-react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { adminNav, mentorNav } from '../../lib/nav'
import { Card } from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import Modal from '../../components/ui/Modal'
import { SearchInput, Select, TextInput, Textarea } from '../../components/ui/Input'

const navByRole = { Admin: adminNav, Mentor: mentorNav }
const nameByRole = { Admin: 'Admin User', Mentor: 'Selam Alemayehu' }
const roleLabel = { Admin: 'Administrator', Mentor: 'Mentor' }

const announcements = [
  { id: 1, title: 'Week 4 Schedule Update', preview: 'Sessions this week move to the main auditorium starting Wednesday...', audience: 'All Students', batch: 'All Batches', date: 'Aug 12, 2026', author: 'Admin User' },
  { id: 2, title: 'Cybersecurity Track — CTF Night', preview: 'Join us for a hands-on capture-the-flag night this Friday...', audience: 'Batch 4', batch: 'Batch 4', date: 'Aug 10, 2026', author: 'Selam Alemayehu' },
  { id: 3, title: 'Mentor Office Hours Extended', preview: 'Office hours are now available Mon–Thu 4–6pm for all batches...', audience: 'All Students', batch: 'All Batches', date: 'Aug 8, 2026', author: 'Admin User' },
]

export default function AnnouncementsManage({ role = 'Admin' }) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <DashboardLayout sections={navByRole[role]} pageTitle="Announcements" userName={nameByRole[role]} userRole={roleLabel[role]}>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-h3 text-text-primary dark:text-dark-text">Announcements</h2>
        <Button icon={Plus} onClick={() => setModalOpen(true)}>New Announcement</Button>
      </div>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row">
        <SearchInput placeholder="Search announcements..." className="sm:w-72" />
        <Select id="audience-filter" defaultValue="" className="sm:w-48">
          <option value="">All Audiences</option>
          <option value="students">Students</option>
          <option value="mentors">Mentors</option>
        </Select>
      </div>

      <div className="space-y-4">
        {announcements.map((a) => (
          <Card key={a.id}>
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <h3 className="text-h4 text-text-primary dark:text-dark-text">{a.title}</h3>
                <p className="mt-1.5 text-body text-text-secondary dark:text-dark-text-secondary">{a.preview}</p>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-caption text-text-muted">
                  <span>{a.audience}</span>
                  <span>·</span>
                  <span>{a.batch}</span>
                  <span>·</span>
                  <span>{a.date}</span>
                  <span>·</span>
                  <span>by {a.author}</span>
                </div>
              </div>
              <div className="flex shrink-0 gap-1">
                <Button variant="icon" size="sm" icon={Pencil} iconOnly aria-label="Edit" />
                <Button variant="icon" size="sm" icon={Trash2} iconOnly aria-label="Delete" className="hover:text-absent" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="New Announcement"
        footer={
          <>
            <Button variant="outline" onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button onClick={() => setModalOpen(false)}>Publish</Button>
          </>
        }
      >
        <div className="space-y-4">
          <TextInput id="ann-title" label="Title" required />
          <Textarea id="ann-content" label="Content" rows={4} required />
          <Select id="ann-audience" label="Target Audience" defaultValue="all">
            <option value="all">All Students</option>
            <option value="mentors">Mentors</option>
            <option value="batch">Specific Batch</option>
          </Select>
          <Select id="ann-batch" label="Batch" defaultValue="">
            <option value="">All Batches</option>
            <option value="batch-1">Batch 1</option>
            <option value="batch-4">Batch 4</option>
          </Select>
          <TextInput id="ann-date" label="Publish Date" type="date" required />
        </div>
      </Modal>
    </DashboardLayout>
  )
}
