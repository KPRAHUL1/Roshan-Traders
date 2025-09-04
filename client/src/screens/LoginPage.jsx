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
    <div className="min-h-screen grid place-items-center bg-gray-50 p-4">
      <div className="w-full max-w-sm bg-white border rounded-xl p-6 shadow-sm">
        <h1 className="text-xl font-semibold mb-1">Super Admin Login</h1>
        <p className="text-sm text-gray-600 mb-4">Use mock phone and OTP</p>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm mb-1">Phone</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="e.g. 9876543210"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">OTP</label>
            <input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="123456"
            />
          </div>
          {error && <div className="text-sm text-red-600">{error}</div>}
          <Button type="submit" className="w-full">Login</Button>
        </form>
      </div>
    </div>
  )
}


