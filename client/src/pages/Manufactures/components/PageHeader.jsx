import React from 'react'
import { Building2, Globe, Users, Award } from 'lucide-react'

const PageHeader = () => {
  return (
    <div className="relative overflow-hidden bg-white border-b border-gray-200">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-700 mb-6">
            <Building2 className="w-4 h-4 mr-2" />
            Trusted Manufacturing Partners
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Manufacturing</span> Network
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Connect with world-class manufacturers specializing in premium stone products and architectural solutions
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center text-gray-600">
              <Globe className="w-5 h-5 text-blue-600 mr-2" />
              <span className="font-semibold">50+</span> Countries Served
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="w-5 h-5 text-emerald-600 mr-2" />
              <span className="font-semibold">2000+</span> Employees
            </div>
            <div className="flex items-center text-gray-600">
              <Award className="w-5 h-5 text-amber-600 mr-2" />
              <span className="font-semibold">25+</span> Years Experience
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageHeader