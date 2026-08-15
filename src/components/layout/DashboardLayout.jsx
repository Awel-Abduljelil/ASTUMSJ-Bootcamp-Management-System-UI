import { useEffect, useState } from 'react'
import Sidebar from '../ui/Sidebar'
import Topbar from '../ui/Topbar'

export default function DashboardLayout({ sections, pageTitle, userName, userRole, showSearch, settingsPath, profilePath, children }) {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <div className="flex min-h-screen bg-app dark:bg-dark-bg">
      <Sidebar
        sections={sections}
        darkMode={darkMode}
        onToggleDark={() => setDarkMode((d) => !d)}
        userName={userName}
        userRole={userRole}
        settingsPath={settingsPath}
        profilePath={profilePath}
      />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar title={pageTitle} showSearch={showSearch} userName={userName} />
        <main className="flex-1 overflow-y-auto p-8">{children}</main>
      </div>
    </div>
  )
}
