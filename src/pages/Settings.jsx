import { useState } from 'react'
import DashboardLayout from '../components/layout/DashboardLayout'
import { adminNav, mentorNav, studentNav } from '../lib/nav'
import { Card, Avatar } from '../components/ui/Card'
import { TextInput, PasswordInput, Select } from '../components/ui/Input'
import Button from '../components/ui/Button'
import Tabs from '../components/ui/Tabs'

const navByRole = { Admin: adminNav, Mentor: mentorNav, Student: studentNav }
const nameByRole = { Admin: 'Admin User', Mentor: 'Selam Alemayehu', Student: 'Betelhem Tesfaye' }

export default function Settings({ role = 'Admin' }) {
  const [tab, setTab] = useState('Account')
  const [emailNotifs, setEmailNotifs] = useState(true)
  const [assignmentNotifs, setAssignmentNotifs] = useState(true)
  const [announcementNotifs, setAnnouncementNotifs] = useState(true)

  return (
    <DashboardLayout sections={navByRole[role]} pageTitle="Settings" userName={nameByRole[role]} userRole={role}>
      <div className="mb-4 flex items-center gap-4">
        <Avatar name={nameByRole[role]} />
        <div>
          <h2 className="text-h3 text-text-primary dark:text-dark-text">{nameByRole[role]}</h2>
          <p className="text-small text-text-secondary dark:text-dark-text-secondary">{role}</p>
        </div>
      </div>

      <Card className="p-0">
        <div className="px-6 pt-2">
          <Tabs tabs={['Account', 'Notifications', 'Security']} active={tab} onChange={setTab} />
        </div>
        <div className="p-6">
          {tab === 'Account' && (
            <div className="max-w-lg space-y-4">
              <TextInput id="s-name" label="Full Name" defaultValue={nameByRole[role]} />
              <TextInput id="s-email" label="Email" type="email" defaultValue={`${nameByRole[role].split(' ')[0].toLowerCase()}@astu.edu.et`} />
              <Select id="s-theme" label="Theme">
                <option>Follow System</option>
                <option>Light</option>
                <option>Dark</option>
              </Select>
              <Button className="mt-2">Save Changes</Button>
            </div>
          )}

          {tab === 'Notifications' && (
            <div className="max-w-lg space-y-5">
              <ToggleRow
                label="Email notifications"
                description="Receive a summary email for important updates."
                checked={emailNotifs}
                onChange={setEmailNotifs}
              />
              <ToggleRow
                label="Assignment reminders"
                description="Get notified about new assignments and approaching deadlines."
                checked={assignmentNotifs}
                onChange={setAssignmentNotifs}
              />
              <ToggleRow
                label="Announcement alerts"
                description="Get notified when a new announcement is published."
                checked={announcementNotifs}
                onChange={setAnnouncementNotifs}
              />
            </div>
          )}

          {tab === 'Security' && (
            <div className="max-w-lg space-y-4">
              <PasswordInput id="s-current" label="Current Password" />
              <PasswordInput id="s-new" label="New Password" />
              <PasswordInput id="s-confirm" label="Confirm New Password" />
              <Button className="mt-2">Update Password</Button>
            </div>
          )}
        </div>
      </Card>
    </DashboardLayout>
  )
}

function ToggleRow({ label, description, checked, onChange }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-small font-medium text-text-primary dark:text-dark-text">{label}</p>
        <p className="text-caption text-text-muted">{description}</p>
      </div>
      <button
        onClick={() => onChange(!checked)}
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${checked ? 'bg-brand' : 'bg-border dark:bg-dark-border'}`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${checked ? 'translate-x-[22px]' : 'translate-x-0.5'}`}
        />
      </button>
    </div>
  )
}
