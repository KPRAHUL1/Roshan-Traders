import { NavLink } from 'react-router-dom'
import { Factory, Building2, Store, UserRound, Users, LogOut, X } from 'lucide-react'
import { logout } from '../../lib/auth'
import Button from '../ui/Button'

const linkBase = "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group relative"
const active = ({ isActive }) =>
  isActive 
    ? `${linkBase} bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25` 
    : `${linkBase} text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:shadow-sm`

export default function Sidebar({ isCollapsed, onClose }) {
  return (
    <aside
      className={`h-screen bg-white border-r border-slate-200 sticky top-0 hidden md:flex flex-col transition-all duration-300 shadow-sm ${
        isCollapsed ? 'w-20' : 'w-72'
      }`}>
      
      {/* Header */}
      <div
        className={`h-16 border-b border-slate-200 flex items-center px-6 bg-gradient-to-r from-slate-50 to-white ${
          isCollapsed ? 'justify-center' : 'justify-between'
        }`}>
        <div className={`flex items-center gap-3 ${
          isCollapsed ? 'justify-center' : ''
        }`}>
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-sm">
            <img src="/logo.svg" alt="RT" className="h-5 w-5 text-white" />
          </div>
          {!isCollapsed && (
            <div>
              <h1 className="text-lg font-bold text-slate-900">Roshan Traders</h1>
              <p className="text-xs text-slate-500 -mt-1">Business Management</p>
            </div>
          )}
        </div>
        {!isCollapsed && (
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <X className="size-4" />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className={`flex-1 p-4 space-y-2 ${
        isCollapsed ? 'flex flex-col items-center' : ''
      }`}>
        {!isCollapsed && (
          <div className="mb-6">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-4 mb-3">
              Main Navigation
            </p>
          </div>
        )}
        
        <NavLink to="/manufacturers" className={active}>
          <Factory className="size-5 flex-shrink-0" />
          {!isCollapsed && (
            <span className="group-hover:translate-x-0.5 transition-transform">
              Manufacturers
            </span>
          )}
          {!isCollapsed && (
            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
            </div>
          )}
        </NavLink>

        <NavLink to="/companies" className={active}>
          <Building2 className="size-5 flex-shrink-0" />
          {!isCollapsed && (
            <span className="group-hover:translate-x-0.5 transition-transform">
              Companies
            </span>
          )}
          {!isCollapsed && (
            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
            </div>
          )}
        </NavLink>

        <NavLink to="/traders" className={active}>
          <Store className="size-5 flex-shrink-0" />
          {!isCollapsed && (
            <span className="group-hover:translate-x-0.5 transition-transform">
              Traders
            </span>
          )}
          {!isCollapsed && (
            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
            </div>
          )}
        </NavLink>

        <NavLink to="/agents" className={active}>
          <UserRound className="size-5 flex-shrink-0" />
          {!isCollapsed && (
            <span className="group-hover:translate-x-0.5 transition-transform">
              Agents
            </span>
          )}
          {!isCollapsed && (
            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
            </div>
          )}
        </NavLink>

        <NavLink to="/employees" className={active}>
          <Users className="size-5 flex-shrink-0" />
          {!isCollapsed && (
            <span className="group-hover:translate-x-0.5 transition-transform">
              Employees
            </span>
          )}
          {!isCollapsed && (
            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
            </div>
          )}
        </NavLink>

        <NavLink to="/users" className={active}>
          <Users className="size-5 flex-shrink-0" />
          {!isCollapsed && (
            <span className="group-hover:translate-x-0.5 transition-transform">
              Users
            </span>
          )}
          {!isCollapsed && (
            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
            </div>
          )}
        </NavLink>
      </nav>

      {/* Logout Section */}
      <div className={`p-4 border-t border-slate-200 bg-slate-50/50 ${
        isCollapsed ? 'flex justify-center' : ''
      }`}>
        <Button
          variant="primary"
          className={`w-full flex items-center gap-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-200 font-medium ${
            isCollapsed ? 'justify-center px-3' : 'px-4'
          }`}
          onClick={() => {
            logout();
            window.location.href = "/login";
          }}
        >
          <LogOut className="size-4 flex-shrink-0" />
          {!isCollapsed && <span>Logout</span>}
        </Button>
      </div>
    </aside>
  )
}