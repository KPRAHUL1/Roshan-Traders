import React from 'react'
import { Building2, Globe, Users, Award, Sparkles, TrendingUp, Shield } from 'lucide-react'

const PageHeader = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg  opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
            Trusted Manufacturing Partners
            <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Discover Our{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Manufacturing
            </span>{' '}
            Network
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
            Connect with world-class manufacturers specializing in premium stone products and architectural solutions
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-white/70 font-medium">Countries Served</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-emerald-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">2000+</div>
              <div className="text-white/70 font-medium">Expert Employees</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-amber-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">25+</div>
              <div className="text-white/70 font-medium">Years Experience</div>
            </div>
          </div>
          
          {/* Additional Features */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/70">
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-green-400 mr-2" />
              <span className="font-medium">Quality Assured</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-5 h-5 text-blue-400 mr-2" />
              <span className="font-medium">Growing Network</span>
            </div>
            <div className="flex items-center">
              <Building2 className="w-5 h-5 text-purple-400 mr-2" />
              <span className="font-medium">Verified Partners</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 via-blue-50 to-transparent"></div>
    </div>
  )
}

export default PageHeader