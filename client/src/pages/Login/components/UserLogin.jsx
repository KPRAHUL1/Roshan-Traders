import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../../lib/auth'
import Button from '../../../components/ui/Button'

export default function UserLogin() {
  const navigate = useNavigate()
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [userType, setUserType] = useState('agent') // 'agent', 'manufacturer', 'contractor'
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!phone || !otp) {
      setError('Please enter both mobile number and OTP')
      return
    }
    
    setIsLoading(true)
    setError('')
    
    const res = loginUser({ phone, otp, userType })
    if (!res.success) {
      setError(res.error || 'Login failed')
      setIsLoading(false)
      return
    }
    navigate('/')
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">User Login</h1>
        <p className="mt-1 text-sm text-gray-600">Sign in with your mobile number and OTP</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* User Type Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">I am a</label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { value: 'agent', label: 'Agent' },
              { value: 'manufacturer', label: 'Manufacturer' },
              { value: 'contractor', label: 'Contractor' }
            ].map((type) => (
              <button
                key={type.value}
                type="button"
                onClick={() => setUserType(type.value)}
                className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                  userType === type.value
                    ? 'bg-indigo-100 text-indigo-700 border border-indigo-200'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Number */}
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
              required
            />
          </div>
        </div>

        {/* OTP Field */}
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
            placeholder="Enter OTP (any 4+ digits)"
            required
          />
          <p className="text-xs text-gray-500 mt-1">For demo, enter any 4+ digit OTP</p>
        </div>

        {error && (
          <div className="rounded-lg bg-red-50 text-red-700 text-sm px-3 py-2 border border-red-100">
            {error}
          </div>
        )}

        <Button 
          type="submit" 
          className="w-full h-11 rounded-xl text-[15px]"
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </Button>
      </form>

      <p className="text-xs text-gray-500 text-center mt-4">
        By continuing you agree to our <span className="underline underline-offset-2">Terms</span> and <span className="underline underline-offset-2">Privacy Policy</span>.
      </p>
    </div>
  )
}
