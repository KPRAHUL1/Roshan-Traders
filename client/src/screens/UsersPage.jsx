import { useMemo, useState } from 'react'
import { Users, Building2, Factory, UserRound, Search } from 'lucide-react'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import { Card } from '../components/ui/Card'

const ROLE_OPTIONS = [
  { key: 'All', label: 'All People', icon: Users },
  { key: 'Agent', label: 'Agents', icon: UserRound },
  { key: 'Manufacturer', label: 'Manufacturers', icon: Factory },
  { key: 'Contractor', label: 'Contractors', icon: Building2 },
]

const MOCK_USERS = [
  { id: 'u1', userId: 'AGT-101', name: 'Ravi Patil', email: 'ravi.patil@example.com', phone: '+91 98765 11101', userType: 'Agent', status: 'Active', balance: 320.5, organization: 'RP Associates', lastUsed: new Date().toISOString(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'u2', userId: 'AGT-102', name: 'Neha Gupta', email: 'neha.gupta@example.com', phone: '+91 98765 11102', userType: 'Agent', status: 'Active', balance: 150.0, organization: 'NG Contracts', lastUsed: new Date(Date.now()-86400000).toISOString(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'u3', userId: 'MFR-201', name: 'Sharma Cement', email: 'sales@sharmacem.in', phone: '+91 98765 22201', userType: 'Manufacturer', status: 'Active', balance: 780.75, organization: 'Pune Plant', lastUsed: new Date().toISOString(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'u4', userId: 'MFR-202', name: 'Patel Steelworks', email: 'contact@patelsteel.com', phone: '+91 98765 22202', userType: 'Manufacturer', status: 'Inactive', balance: 0, organization: 'Nashik Unit', lastUsed: null, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'u5', userId: 'CTR-301', name: 'Vikram Constructions', email: 'vikram@constructs.in', phone: '+91 98765 33301', userType: 'Contractor', status: 'Active', balance: 90.0, organization: 'Site A - Expressway', lastUsed: new Date().toISOString(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'u6', userId: 'CTR-302', name: 'Mehta Infra', email: 'info@mehtainfra.in', phone: '+91 98765 33302', userType: 'Contractor', status: 'Active', balance: 410.0, organization: 'Metro Line 3', lastUsed: new Date().toISOString(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'u7', userId: 'AGT-103', name: 'Amit Sharma', email: 'amit.sharma@example.com', phone: '+91 98765 11103', userType: 'Agent', status: 'Active', balance: 54.2, organization: 'AS Trade Links', lastUsed: new Date().toISOString(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'u8', userId: 'MFR-203', name: 'Verma Bricks', email: 'hello@vermabricks.in', phone: '+91 98765 22203', userType: 'Manufacturer', status: 'Active', balance: 420.0, organization: 'Plant - Sector 9', lastUsed: new Date().toISOString(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'u9', userId: 'CTR-303', name: 'Arjun Builders', email: 'contact@arjunbuild.com', phone: '+91 98765 33303', userType: 'Contractor', status: 'Active', balance: 10.0, organization: 'Airport Expansion', lastUsed: new Date().toISOString(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'u10', userId: 'AGT-104', name: 'Priya Verma', email: 'priya.verma@example.com', phone: '+91 98765 11104', userType: 'Agent', status: 'Inactive', balance: 0, organization: 'PV Enterprises', lastUsed: null, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'u11', userId: 'MFR-204', name: 'Global Aggregates', email: 'sales@globalagg.in', phone: '+91 98765 22204', userType: 'Manufacturer', status: 'Active', balance: 990.0, organization: 'Thane Depot', lastUsed: new Date().toISOString(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'u12', userId: 'CTR-304', name: 'Sunrise Contractors', email: 'sunrise@contractors.in', phone: '+91 98765 33304', userType: 'Contractor', status: 'Active', balance: 210.45, organization: 'Bridge Package 5', lastUsed: new Date().toISOString(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
]
export default function UsersPage() {
  const [users] = useState(MOCK_USERS)
  const [activeRole, setActiveRole] = useState('All')
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('name')
  const visibleUsers = useMemo(() => {
    const needle = search.trim().toLowerCase()
    const filteredByRole = activeRole === 'All' ? users : users.filter(u => u.userType === activeRole)
    if (!needle) return filteredByRole
    return filteredByRole.filter(u => {
      return (
        (u.name && u.name.toLowerCase().includes(needle)) ||
        (u.email && u.email.toLowerCase().includes(needle)) ||
        (u.userId && String(u.userId).toLowerCase().includes(needle)) ||
        (u.phone && u.phone.toLowerCase().includes(needle))
      )
    })
  }, [users, activeRole, search])

  const grouped = useMemo(() => {
    if (activeRole !== 'All') return { [activeRole]: visibleUsers }
    return visibleUsers.reduce((acc, u) => {
      const key = u.userType || 'Unknown'
      acc[key] = acc[key] ? [...acc[key], u] : [u]
      return acc
    }, {})
  }, [visibleUsers, activeRole])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="px-6 pt-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-blue-700 text-xs font-semibold">
            <Users className="w-4 h-4" />
            Users Directory
          </div>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">People & Roles</h1>
          <p className="text-sm text-slate-600">Browse users by professional roles and details</p>
        </div>
      </div>

      {/* Filters (sticky) */}
      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm mt-4">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search users..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 items-center">
              {/* Role Filter */}
              <select
                value={activeRole}
                onChange={(e) => setActiveRole(e.target.value)}
                className="px-4 py-3 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                {ROLE_OPTIONS.map(r => (
                  <option key={r.key} value={r.key}>{r.label}</option>
                ))}
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="name">Sort by Name</option>
                <option value="balance">Sort by Balance</option>
                <option value="recent">Sort by Recent Activity</option>
              </select>

              <Button variant="secondary" onClick={() => setSearch('')}>Refresh</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Users Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-4 text-sm text-gray-600">Showing {visibleUsers.length} of {users.length} users</div>

        <div className="space-y-10">
            {Object.entries(grouped).map(([role, list]) => {
              const sorted = [...list].sort((a, b) => {
                if (sortBy === 'name') return (a.name || '').localeCompare(b.name || '')
                if (sortBy === 'balance') return (b.balance || 0) - (a.balance || 0)
                if (sortBy === 'recent') return new Date(b.updatedAt || b.createdAt || 0) - new Date(a.updatedAt || a.createdAt || 0)
                return 0
              })
              return (
                <div key={role}>
                  <div className="flex items-center gap-2 mb-3">
                    <h2 className="text-lg font-semibold">{role}</h2>
                    <Badge color="blue">{sorted.length}</Badge>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sorted.map((u) => (
                      <Card key={u.id} className="p-5 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="font-medium text-slate-900">{u.name || u.userId}</div>
                            <div className="text-sm text-slate-600">{u.email || u.phone || '—'}</div>
                          </div>
                          <Badge color={u.status === 'Active' ? 'green' : 'amber'}>{u.status}</Badge>
                        </div>
                        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                          <div className="bg-white/60 border border-gray-200 rounded-xl p-3">
                            <div className="text-[11px] font-medium text-slate-500">User ID</div>
                            <div className="font-semibold text-slate-900">{u.userId}</div>
                          </div>
                          <div className="bg-white/60 border border-gray-200 rounded-xl p-3">
                            <div className="text-[11px] font-medium text-slate-500">Organization</div>
                            <div className="font-semibold text-slate-900">{u.organization || '—'}</div>
                          </div>
                          <div className="bg-white/60 border border-gray-200 rounded-xl p-3">
                            <div className="text-[11px] font-medium text-slate-500">Role</div>
                            <div className="font-semibold text-slate-900">{u.userType}</div>
                          </div>
                          <div className="bg-white/60 border border-gray-200 rounded-xl p-3">
                            <div className="text-[11px] font-medium text-slate-500">Balance</div>
                            <div className="font-semibold text-slate-900">₹ {Number(u.balance || 0).toFixed(2)}</div>
                          </div>
                          <div className="bg-white/60 border border-gray-200 rounded-xl p-3">
                            <div className="text-[11px] font-medium text-slate-500">Last Used</div>
                            <div className="font-semibold text-slate-900">{u.lastUsed ? new Date(u.lastUsed).toLocaleString() : '—'}</div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )
            })}

            {!visibleUsers.length && (
              <div className="text-center py-16">
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-12 max-w-md mx-auto">
                  <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">No users found</h3>
                  <p className="text-gray-500 mb-6">Try adjusting your search or role filter</p>
                  <button
                    onClick={() => { setSearch(''); setActiveRole('All') }}
                    className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-200"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  )
}


