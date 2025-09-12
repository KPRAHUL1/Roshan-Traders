import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import { getStoredTheme, setStoredTheme, applyTheme } from '../lib/theme'

export default function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [theme, setTheme] = useState(() => getStoredTheme())

  // Apply theme on mount and when changed
  useEffect(() => {
    if (typeof document !== 'undefined') {
      applyTheme(theme)
    }
  }, [theme])

  // Close mobile sidebar when screen gets larger
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileOpen) {
        setMobileOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [mobileOpen])

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileOpen])

  const onToggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    setStoredTheme(next)
    applyTheme(next)
  }

  const handleToggleMobileSidebar = () => {
    setMobileOpen(prev => !prev)
  }

  const handleToggleDesktopSidebar = () => {
    setIsSidebarCollapsed(prev => !prev)
  }

  const closeMobileSidebar = () => {
    setMobileOpen(false)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex h-screen overflow-hidden">
        {/* Desktop Sidebar */}
        <Sidebar 
          isCollapsed={isSidebarCollapsed} 
          onToggle={handleToggleDesktopSidebar}
        />

        {/* Mobile Sidebar Overlay */}
        {mobileOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black/50 z-40 md:hidden" 
              onClick={closeMobileSidebar}
            />
            <Sidebar 
              mobile 
              onClose={closeMobileSidebar}
              isOpen={mobileOpen}
            />
          </>
        )}

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <Navbar
            onToggleSidebar={handleToggleMobileSidebar}
            onToggleDesktopSidebar={handleToggleDesktopSidebar}
            theme={theme}
            onToggleTheme={onToggleTheme}
            isDesktopSidebarCollapsed={isSidebarCollapsed}
            isMobileSidebarOpen={mobileOpen}
          />
          <main className="flex-1 overflow-auto p-3 sm:p-4 lg:p-6 xl:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}