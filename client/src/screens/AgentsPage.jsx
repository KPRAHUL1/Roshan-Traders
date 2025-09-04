import Badge from '../components/ui/Badge'
import { Users, TrendingUp, Award, Phone, Mail, MapPin } from 'lucide-react'

export default function AgentsPage() {
  const data = [
    { 
      id: 'a1', 
      name: 'Ravi Patil', 
      referrals: 14, 
      image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop',
      phone: '+91 98765 43210',
      email: 'ravi.patil@example.com',
      location: 'Mumbai, Maharashtra',
      joinDate: 'Jan 2024',
      status: 'active'
    },
    { 
      id: 'a2', 
      name: 'Neha Gupta', 
      referrals: 9, 
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
      phone: '+91 87654 32109',
      email: 'neha.gupta@example.com',
      location: 'Pune, Maharashtra',
      joinDate: 'Feb 2024',
      status: 'active'
    },
    { 
      id: 'a3', 
      name: 'Amit Sharma', 
      referrals: 18, 
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
      phone: '+91 76543 21098',
      email: 'amit.sharma@example.com',
      location: 'Delhi, NCR',
      joinDate: 'Dec 2023',
      status: 'active'
    },
    { 
      id: 'a4', 
      name: 'Priya Verma', 
      referrals: 6, 
      image: 'https://images.unsplash.com/photo-1494790108755-2616c9d08dd5?q=80&w=800&auto=format&fit=crop',
      phone: '+91 65432 10987',
      email: 'priya.verma@example.com',
      location: 'Bangalore, Karnataka',
      joinDate: 'Mar 2024',
      status: 'inactive'
    }
  ]

  const totalReferrals = data.reduce((sum, agent) => sum + agent.referrals, 0)
  const activeAgents = data.filter(agent => agent.status === 'active').length
  const topPerformer = data.reduce((prev, current) => (prev.referrals > current.referrals) ? prev : current)

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
            <Users className="size-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Agents</h1>
            <p className="text-slate-600">Manage your agent network and track performance</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="size-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{data.length}</p>
              <p className="text-sm text-slate-600">Total Agents</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="size-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{totalReferrals}</p>
              <p className="text-sm text-slate-600">Total Referrals</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Award className="size-6 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{activeAgents}</p>
              <p className="text-sm text-slate-600">Active Agents</p>
            </div>
          </div>
        </div>
      </div>

      {/* Agents Grid */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">Agent Directory</h2>
          <p className="text-sm text-slate-600 mt-1">View and manage all registered agents</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {data.map((agent) => (
            <div key={agent.id} className="bg-slate-50 rounded-xl p-6 hover:shadow-md transition-all duration-200 border border-slate-200 hover:border-slate-300">
              {/* Agent Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="relative">
                  <img 
                    src={agent.image} 
                    alt={agent.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                    agent.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
                  }`}></div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 text-lg">{agent.name}</h3>
                  <p className="text-sm text-slate-500">Joined {agent.joinDate}</p>
                  <div className="mt-2">
                    <Badge variant={agent.referrals > 10 ? 'success' : agent.referrals > 5 ? 'warning' : 'default'}>
                      {agent.referrals} referrals
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Agent Details */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Phone className="size-4 text-slate-400" />
                  <span>{agent.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Mail className="size-4 text-slate-400" />
                  <span className="truncate">{agent.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <MapPin className="size-4 text-slate-400" />
                  <span>{agent.location}</span>
                </div>
              </div>

              {/* Performance Indicator */}
              {agent.id === topPerformer.id && (
                <div className="mt-4 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Award className="size-4 text-yellow-600" />
                    <span className="text-sm font-medium text-yellow-800">Top Performer</span>
                  </div>
                </div>
              )}

              {/* Action Button */}
              <div className="mt-4 pt-4 border-t border-slate-200">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Table View (Optional - for larger screens) */}
        <div className="hidden xl:block border-t border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left py-4 px-6 font-medium text-slate-900">Agent</th>
                  <th className="text-left py-4 px-6 font-medium text-slate-900">Contact</th>
                  <th className="text-left py-4 px-6 font-medium text-slate-900">Location</th>
                  <th className="text-left py-4 px-6 font-medium text-slate-900">Referrals</th>
                  <th className="text-left py-4 px-6 font-medium text-slate-900">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((agent) => (
                  <tr key={agent.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <img 
                          src={agent.image} 
                          alt={agent.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium text-slate-900">{agent.name}</p>
                          <p className="text-sm text-slate-500">Joined {agent.joinDate}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="space-y-1">
                        <p className="text-sm text-slate-900">{agent.phone}</p>
                        <p className="text-sm text-slate-500">{agent.email}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm text-slate-600">{agent.location}</td>
                    <td className="py-4 px-6">
                      <Badge variant={agent.referrals > 10 ? 'success' : agent.referrals > 5 ? 'warning' : 'default'}>
                        {agent.referrals} referrals
                      </Badge>
                    </td>
                    <td className="py-4 px-6">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                        agent.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        <div className={`w-2 h-2 rounded-full ${
                          agent.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
                        }`}></div>
                        {agent.status === 'active' ? 'Active' : 'Inactive'}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}