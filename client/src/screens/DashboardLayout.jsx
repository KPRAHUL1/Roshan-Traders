import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import { getStoredTheme, setStoredTheme, applyTheme } from '../lib/theme'

export default function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [theme, setTheme] = useState(() => getStoredTheme())
  // apply theme on mount and when changed
  if (typeof document !== 'undefined') {
    applyTheme(theme)
  }

  const onToggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    setStoredTheme(next)
    applyTheme(next)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <div className="hidden md:block">
          <Sidebar isCollapsed={isSidebarCollapsed} />
        </div>
        {/* Mobile sheet-like sidebar */}
        {mobileOpen && (
          <div className="fixed inset-0 z-20 flex md:hidden" onClick={() => setMobileOpen(false)}>
            <div className="w-64 bg-card h-full border-r" onClick={(e) => e.stopPropagation()}>
              <Sidebar isCollapsed={false} onClose={() => setMobileOpen(false)} />
            </div>
            <div className="flex-1 bg-black/30" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <Navbar
            onToggleSidebar={() => setMobileOpen((s) => !s)}
            onToggleDesktopSidebar={() => setIsSidebarCollapsed(s => !s)}
            theme={theme}
            onToggleTheme={onToggleTheme}
          />
          <main className="">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}


