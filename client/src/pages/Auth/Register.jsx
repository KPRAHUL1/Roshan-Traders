import { useState, useMemo } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import Button from '../../components/ui/Button'

export default function Register() {
  const navigate = useNavigate()
  const { role } = useParams()
  const userType = useMemo(() => {
    if (role === 'manufacturer' || role === 'contractor' || role === 'agent' || role === 'trader') return role
    return 'agent'
  }, [role])

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!name || !phone) {
      setError('Please fill your name and phone')
      return
    }
    setIsLoading(true)
    setTimeout(() => {
      navigate(`/login/${userType}`)
    }, 800)
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="mx-auto max-w-lg px-4 py-12">
        <div className="overflow-hidden rounded-2xl border bg-white shadow-xl p-8">
          <h1 className="text-2xl font-semibold tracking-tight capitalize">Register as {userType}</h1>
          <p className="mt-1 text-sm text-gray-600">Create your account to continue</p>

          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-200 placeholder:text-gray-400"
                placeholder="Your name"
                required
              />
            </div>

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

            {error && (
              <div className="rounded-lg bg-red-50 text-red-700 text-sm px-3 py-2 border border-red-100">
                {error}
              </div>
            )}

            <Button type="submit" className="w-full h-11 rounded-xl text-[15px]" disabled={isLoading}>
              {isLoading ? 'Creating...' : 'Create account'}
            </Button>
          </form>

          <div className="mt-4 text-sm text-gray-600">
            Already have an account? <Link to={`/login/${userType}`} className="text-indigo-600 hover:underline">Login</Link>
          </div>

          <div className="mt-2 text-sm text-gray-600">
            Not {userType}? <Link to="/login" className="text-indigo-600 hover:underline">Change role</Link>
          </div>
        </div>
      </div>
    </div>
  )
}


