import { Menu, PanelLeftClose, PanelLeftOpen, Bell, Search, Settings, LogOut } from 'lucide-react'
import { getCurrentUser, logout } from '../../lib/auth'
import Button from '../ui/Button'

export default function Navbar({ onToggleSidebar, onToggleDesktopSidebar, isDesktopSidebarCollapsed }) {
  const user = getCurrentUser()
  
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-10 shadow-sm">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors" 
          onClick={onToggleSidebar}
        >
          <Menu className="size-5" />
        </button>
        
        {/* Desktop Sidebar Toggle */}
        <button 
          className="hidden md:block p-2 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors" 
          onClick={onToggleDesktopSidebar}
        >
          {isDesktopSidebarCollapsed ? (
            <PanelLeftOpen className="size-5" />
          ) : (
            <PanelLeftClose className="size-5" />
          )}
        </button>
        
        {/* Page Title */}
        <div className="hidden sm:block">
          <h2 className="text-xl font-bold text-slate-900">Dashboard</h2>
          <p className="text-sm text-slate-500 -mt-1">Welcome back to your workspace</p>
        </div>
      </div>

      {/* Center Section - Search Bar */}
      <div className="hidden lg:flex flex-1 max-w-md mx-8">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Search Button (Mobile) */}
        <button className="lg:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors">
          <Search className="size-5" />
        </button>
        
        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors">
          <Bell className="size-5" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
          </span>
        </button>
        
        {/* Settings */}
        <button className="hidden sm:block p-2 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors">
          <Settings className="size-5" />
        </button>
        
        {/* User Info */}
        <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
          <div className="hidden sm:block text-right">
            <p className="text-sm font-medium text-slate-900">{user?.name || 'User'}</p>
            <p className="text-xs text-slate-500">Administrator</p>
          </div>
          
          {/* User Avatar */}
          <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white font-semibold text-sm shadow-sm">
            {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
          </div>
        </div>
        
        {/* Logout Button */}
        <Button
          variant="primary"
          className="ml-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 shadow-sm hover:shadow-md transition-all duration-200 font-medium px-4 py-2"
          onClick={() => {
            logout();
            window.location.href = "/login";
          }}
        >
          <span className="hidden sm:inline">Logout</span>
          <span className="sm:hidden">
            <LogOut className="size-4" />
          </span>
        </Button>
      </div>
    </header>
  )
}