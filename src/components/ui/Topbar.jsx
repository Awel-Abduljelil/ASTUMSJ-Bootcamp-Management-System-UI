import { useState } from 'react'
import { Menu, Bell, ChevronDown } from 'lucide-react'
import { SearchInput } from './Input'
import { Avatar } from './Card'

export default function Topbar({ title, showSearch = false, userName, onMenuClick }) {
  const [notifOpen, setNotifOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  return (
    <header className="flex h-topbar items-center justify-between border-b border-border bg-surface px-8 dark:border-dark-border dark:bg-dark-surface">
      <div className="flex items-center gap-4">
        <button className="text-text-secondary hover:text-text-primary lg:hidden" onClick={onMenuClick}>
          <Menu className="h-5 w-5" />
        </button>
        <h1 className="text-h3 text-text-primary dark:text-dark-text">{title}</h1>
      </div>

      <div className="flex items-center gap-4">
        {showSearch && <SearchInput placeholder="Search..." className="hidden w-64 md:block" />}

        <div className="relative">
          <button
            onClick={() => setNotifOpen((v) => !v)}
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-text-secondary hover:bg-app dark:text-dark-text-secondary dark:hover:bg-dark-elevated"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-absent" />
          </button>
          {notifOpen && (
            <div className="absolute right-0 top-12 w-80 rounded-md border border-border bg-surface p-2 shadow-modal dark:border-dark-border dark:bg-dark-elevated">
              <p className="px-3 py-2 text-small font-semibold text-text-primary dark:text-dark-text">Notifications</p>
              <div className="rounded-md px-3 py-2.5 hover:bg-app dark:hover:bg-dark-surface">
                <p className="text-small font-medium text-text-primary dark:text-dark-text">New assignment posted</p>
                <p className="text-caption text-text-muted">React Fundamentals — due Friday</p>
              </div>
              <div className="rounded-md px-3 py-2.5 hover:bg-app dark:hover:bg-dark-surface">
                <p className="text-small font-medium text-text-primary dark:text-dark-text">Grade posted</p>
                <p className="text-caption text-text-muted">JavaScript Basics — 92/100</p>
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <button onClick={() => setProfileOpen((v) => !v)} className="flex items-center gap-2">
            <Avatar name={userName} size="sm" />
            <ChevronDown className="h-4 w-4 text-text-secondary dark:text-dark-text-secondary" />
          </button>
          {profileOpen && (
            <div className="absolute right-0 top-12 w-48 rounded-md border border-border bg-surface p-1.5 shadow-modal dark:border-dark-border dark:bg-dark-elevated">
              <button className="w-full rounded-md px-3 py-2 text-left text-small text-text-primary hover:bg-app dark:text-dark-text dark:hover:bg-dark-surface">
                My Profile
              </button>
              <button className="w-full rounded-md px-3 py-2 text-left text-small text-text-primary hover:bg-app dark:text-dark-text dark:hover:bg-dark-surface">
                Settings
              </button>
              <button className="w-full rounded-md px-3 py-2 text-left text-small text-absent hover:bg-app dark:hover:bg-dark-surface">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
