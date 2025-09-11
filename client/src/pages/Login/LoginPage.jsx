import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { isAuthenticated } from '../../lib/auth'
import SuperAdminLogin from './components/SuperAdminLogin'
import UserLogin from './components/UserLogin'

export default function LoginPage() {
  const [loginType, setLoginType] = useState('user') // 'superadmin' or 'user'

  if (isAuthenticated()) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-purple-200/40 blur-3xl"></div>
      </div>
      
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl border bg-white shadow-xl">
          {/* Left Side - Branding */}
          <div className="relative hidden md:flex flex-col justify-between p-8 bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 text-white">
            <div>
              <div className="flex items-center gap-3">
                <img src="/logo.svg" alt="Roshan Traders" className="h-8 w-8" />
                <span className="text-lg font-semibold tracking-wide">Roshan Traders</span>
              </div>
              <h2 className="mt-10 text-2xl font-semibold leading-snug">Marketplace + Workforce Platform</h2>
              <p className="mt-2 text-white/80 text-sm">IndiaMART for suppliers. Amazon for customers. One dashboard for operations.</p>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white"></span> OTP login for all roles</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white"></span> Orders, jobs, tracking, and payments</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white"></span> Referral growth engine</li>
              </ul>
            </div>
            <div className="text-xs text-white/80">
              © {new Date().getFullYear()} Roshan Traders. All rights reserved.
            </div>
          </div>

          {/* Right Side - Login Forms */}
          <div className="p-6 sm:p-8">
            {/* Login Type Selector */}
            <div className="mb-6">
              <div className="flex bg-gray-100 rounded-lg p-1 mb-4">
                <button
                  type="button"
                  onClick={() => setLoginType('user')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    loginType === 'user'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Agents, Manufacturers & Contractors
                </button>
                <button
                  type="button"
                  onClick={() => setLoginType('superadmin')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    loginType === 'superadmin'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Super Admin
                </button>
              </div>
            </div>

            {/* Render appropriate login form */}
            {loginType === 'superadmin' ? (
              <SuperAdminLogin />
            ) : (
              <UserLogin />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
