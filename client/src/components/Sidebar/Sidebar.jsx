import { NavLink } from 'react-router-dom'
import { Factory, Building2, Store, UserRound, Users, LogOut, X } from 'lucide-react'
import { logout } from '../../lib/auth'
import Button from '../ui/Button'

const linkBase = "flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm font-medium transition-all duration-200 group relative"
const active = ({ isActive }) =>
  isActive 
    ? `${linkBase} bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25` 
    : `${linkBase} text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:shadow-sm`

export default function Sidebar({ isCollapsed, onClose, mobile }) {
  return (
    <>
      {/* Mobile Overlay */}
      {mobile && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 md:hidden" 
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      
      <aside
        className={`
          ${mobile 
            ? 'fixed inset-y-0 left-0 z-50 w-64 sm:w-72 bg-white border-r border-slate-200 flex flex-col shadow-2xl transform transition-transform duration-300 md:hidden'
            : `h-screen bg-white border-r border-slate-200 sticky top-0 hidden md:flex flex-col transition-all duration-300 shadow-sm ${
                isCollapsed ? 'w-16 lg:w-20' : 'w-64 lg:w-72'
              }`
          }
        `}
      >
        {/* Header */}
        <div
          className={`h-14 sm:h-16 border-b border-slate-200 flex items-center px-3 sm:px-6 bg-gradient-to-r from-slate-50 to-white ${
            isCollapsed && !mobile ? 'justify-center' : 'justify-between'
          }`}>
          <div className={`flex items-center gap-2 sm:gap-3 ${
            isCollapsed && !mobile ? 'justify-center' : ''
          }`}>
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-sm">
              <img src="/logo.svg" alt="RT" className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
            {(!isCollapsed || mobile) && (
              <div>
                <h1 className="text-base sm:text-lg font-bold text-slate-900">Roshan Traders</h1>
                <p className="text-xs text-slate-500 -mt-0.5 sm:-mt-1">Business Management</p>
              </div>
            )}
          </div>
          {(mobile || (!isCollapsed && onClose)) && (
            <button
              className="p-1.5 sm:p-2 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors"
              onClick={onClose}
              aria-label="Close sidebar"
            >
              <X className="size-4 sm:size-5" />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className={`flex-1 p-3 sm:p-4 space-y-1 sm:space-y-2 overflow-y-auto ${
          isCollapsed && !mobile ? 'flex flex-col items-center' : ''
        }`}>
          {(!isCollapsed || mobile) && (
            <div className="mb-4 sm:mb-6">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 sm:px-4 mb-2 sm:mb-3">
                Main Navigation
              </p>
            </div>
          )}
          
          <NavLink 
            to="/manufacturers" 
            className={active}
            onClick={mobile ? onClose : undefined}
          >
            <Factory className="size-4 sm:size-5 flex-shrink-0" />
            {(!isCollapsed || mobile) && (
              <span className="group-hover:translate-x-0.5 transition-transform truncate">
                Manufacturers
              </span>
            )}
            {(!isCollapsed || mobile) && (
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
              </div>
            )}
          </NavLink>

          <NavLink 
            to="/companies" 
            className={active}
            onClick={mobile ? onClose : undefined}
          >
            <Building2 className="size-4 sm:size-5 flex-shrink-0" />
            {(!isCollapsed || mobile) && (
              <span className="group-hover:translate-x-0.5 transition-transform truncate">
                Companies
              </span>
            )}
            {(!isCollapsed || mobile) && (
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
              </div>
            )}
          </NavLink>

          <NavLink 
            to="/traders" 
            className={active}
            onClick={mobile ? onClose : undefined}
          >
            <Store className="size-4 sm:size-5 flex-shrink-0" />
            {(!isCollapsed || mobile) && (
              <span className="group-hover:translate-x-0.5 transition-transform truncate">
                Traders
              </span>
            )}
            {(!isCollapsed || mobile) && (
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
              </div>
            )}
          </NavLink>

          <NavLink 
            to="/agents" 
            className={active}
            onClick={mobile ? onClose : undefined}
          >
            <UserRound className="size-4 sm:size-5 flex-shrink-0" />
            {(!isCollapsed || mobile) && (
              <span className="group-hover:translate-x-0.5 transition-transform truncate">
                Agents
              </span>
            )}
            {(!isCollapsed || mobile) && (
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
              </div>
            )}
          </NavLink>

          <NavLink 
            to="/employees" 
            className={active}
            onClick={mobile ? onClose : undefined}
          >
            <Users className="size-4 sm:size-5 flex-shrink-0" />
            {(!isCollapsed || mobile) && (
              <span className="group-hover:translate-x-0.5 transition-transform truncate">
                Employees
              </span>
            )}
            {(!isCollapsed || mobile) && (
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
              </div>
            )}
          </NavLink>

          <NavLink 
            to="/users" 
            className={active}
            onClick={mobile ? onClose : undefined}
          >
            <Users className="size-4 sm:size-5 flex-shrink-0" />
            {(!isCollapsed || mobile) && (
              <span className="group-hover:translate-x-0.5 transition-transform truncate">
                Users
              </span>
            )}
            {(!isCollapsed || mobile) && (
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
              </div>
            )}
          </NavLink>
        </nav>

        {/* Logout Section */}
        <div className={`p-3 sm:p-4 border-t border-slate-200 bg-slate-50/50 ${
          isCollapsed && !mobile ? 'flex justify-center' : ''
        }`}>
          <Button
            variant="primary"
            className={`w-full flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-200 font-medium text-sm ${
              isCollapsed && !mobile ? 'justify-center px-2 py-2' : 'px-3 sm:px-4 py-2 sm:py-2.5'
            }`}
            onClick={() => {
              logout();
              window.location.href = "/login";
            }}
          >
            <LogOut className="size-4 flex-shrink-0" />
            {(!isCollapsed || mobile) && <span className="truncate">Logout</span>}
          </Button>
        </div>
      </aside>
      </>
  )
}