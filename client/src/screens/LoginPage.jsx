import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { loginSuperAdmin, isAuthenticated } from '../lib/auth'
import Button from '../components/ui/Button'

export default function LoginPage() {
  const navigate = useNavigate()
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')

  if (isAuthenticated()) {
    return <Navigate to="/" replace />
  }

  function handleSubmit(e) {
    e.preventDefault()
    const res = loginSuperAdmin({ phone, otp })
    if (!res.success) {
      setError(res.error || 'Login failed')
      return
    }
    navigate('/')
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-purple-200/40 blur-3xl"></div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl border bg-white shadow-xl">
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

          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <h1 className="text-2xl font-semibold tracking-tight">Super Admin Login</h1>
              <p className="mt-1 text-sm text-gray-600">Use mock mobile number and OTP to continue</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile number</label>
                <div className="flex rounded-xl border bg-white focus-within:ring-2 focus-within:ring-indigo-200">
                  <span className="px-3 inline-flex items-center text-gray-500 border-r select-none">+91</span>
                  <input
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-r-xl outline-none placeholder:text-gray-400"
                    placeholder="98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">OTP</label>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  autoComplete="one-time-code"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-200 placeholder:text-gray-400"
                  placeholder="Enter 6-digit OTP"
                />
                <p className="mt-1 text-xs text-gray-500">For demo, enter any 6 digits</p>
              </div>

              {error && (
                <div className="rounded-lg bg-red-50 text-red-700 text-sm px-3 py-2 border border-red-100">
                  {error}
                </div>
              )}

              <Button type="submit" className="w-full h-11 rounded-xl text-[15px]">Verify & Login</Button>

              <p className="text-xs text-gray-500 text-center">
                By continuing you agree to our <span className="underline underline-offset-2">Terms</span> and <span className="underline underline-offset-2">Privacy Policy</span>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}


