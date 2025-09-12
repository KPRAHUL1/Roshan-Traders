import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ROLES = [
  { value: 'agent', label: 'Agent', icon: '🧑‍💼' },
  { value: 'manufacturer', label: 'Manufacturer', icon: '🏭' },
  { value: 'contractor', label: 'Contractor', icon: '👷' },
  { value: 'trader', label: 'Trader', icon: '📈' }
]

export default function RoleSelect() {
  const navigate = useNavigate()
  const [selectedRole, setSelectedRole] = useState('agent')

  const handleNext = () => {
    if (!selectedRole) return
    navigate(`/login/${selectedRole}`)
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-purple-200/40 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="overflow-hidden rounded-2xl border bg-white shadow-xl p-8">
          <div className="mb-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <img src="/logo.svg" alt="Roshan Traders" className="h-8 w-8" />
              <span className="text-lg font-semibold tracking-wide">Roshan Traders</span>
            </div>
            <h1 className="mt-4 text-2xl font-semibold tracking-tight">Who are you?</h1>
            <p className="mt-1 text-sm text-gray-600">Select your role to continue to login or registration</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ROLES.map((role) => (
              <button
                key={role.value}
                type="button"
                onClick={() => setSelectedRole(role.value)}
                className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-colors ${
                  selectedRole === role.value
                    ? 'border-indigo-300 bg-indigo-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <span className="text-2xl" aria-hidden>{role.icon}</span>
                <div>
                  <div className="font-medium">{role.label}</div>
                  <div className="text-xs text-gray-500">Login and manage your dashboard</div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-gray-500">
              New here? <button type="button" className="text-indigo-600 hover:underline" onClick={() => navigate(`/register/${selectedRole}`)}>Register as {selectedRole}</button>
            </div>
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 text-white hover:bg-indigo-700"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


