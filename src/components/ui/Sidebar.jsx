import { NavLink } from 'react-router-dom'
import { Moon, Sun, LogOut, Settings, GraduationCap } from 'lucide-react'
import { cn } from '../../lib/cn'

/**
 * sections: [{ label?: string, items: [{ label, to, icon }] }]
 */
const roleBase = { Administrator: '/admin', Mentor: '/mentor', Student: '/student' }

export default function Sidebar({ sections, darkMode, onToggleDark, userName, userRole, settingsPath, profilePath }) {
  const base = roleBase[userRole] || ''
  const resolvedSettingsPath = settingsPath || `${base}/settings`
  const resolvedProfilePath = profilePath || `${base}/settings`
  return (
    <aside className="flex h-screen w-sidebar shrink-0 flex-col border-r border-dark-border bg-navy text-text-sidebar">
      <div className="flex h-topbar items-center gap-2.5 px-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-brand">
          <GraduationCap className="h-5 w-5 text-white" />
        </div>
        <div>
          <p className="text-body font-semibold text-white leading-tight">ASTU MSJ</p>
          <p className="text-caption text-text-sidebar leading-tight">Bootcamp</p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-2">
        {sections.map((section, i) => (
          <div key={i} className="mb-5">
            {section.label && (
              <p className="mb-2 px-3 text-caption font-semibold uppercase tracking-wider text-text-sidebar/60">
                {section.label}
              </p>
            )}
            <ul className="space-y-0.5">
              {section.items.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      cn(
                        'flex items-center gap-3 rounded-md px-3 py-2.5 text-body font-medium transition-colors',
                        isActive
                          ? 'bg-brand text-white'
                          : 'text-text-sidebar hover:bg-white/5 hover:text-white',
                      )
                    }
                  >
                    <item.icon className="h-[18px] w-[18px] shrink-0" />
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="border-t border-white/10 p-3">
        <button
          onClick={onToggleDark}
          className="mb-1 flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-body font-medium text-text-sidebar hover:bg-white/5 hover:text-white"
        >
          {darkMode ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <NavLink
          to={resolvedSettingsPath}
          className="mb-1 flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-body font-medium text-text-sidebar hover:bg-white/5 hover:text-white"
        >
          <Settings className="h-[18px] w-[18px]" />
          Settings
        </NavLink>
        <NavLink
          to={resolvedProfilePath}
          className="mt-2 flex items-center gap-3 rounded-md px-3 py-2 hover:bg-white/5"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-soft text-small font-semibold text-brand">
            {userName?.split(' ').map((n) => n[0]).slice(0, 2).join('')}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-small font-semibold text-white">{userName}</p>
            <p className="truncate text-caption text-text-sidebar">{userRole}</p>
          </div>
          <button className="text-text-sidebar hover:text-white" title="Logout" onClick={(e) => e.preventDefault()}>
            <LogOut className="h-4 w-4" />
          </button>
        </NavLink>
      </div>
    </aside>
  )
}
