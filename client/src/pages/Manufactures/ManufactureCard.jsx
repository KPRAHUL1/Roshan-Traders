import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, ArrowRight, Star, Users, Package, TrendingUp, Award, Globe, ShoppingCart } from 'lucide-react'

const ManufacturerCard = ({ manufacturer, viewMode = 'grid' }) => {
  if (viewMode === 'list') {
    return (
      <Link 
        to={`/manufacturers/${manufacturer.id}`}
        className="group block"
      >
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200/50 hover:border-blue-200/50">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="relative md:w-80 h-48 md:h-auto overflow-hidden">
              <img 
                src={manufacturer.image} 
                alt={manufacturer.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${manufacturer.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              {/* Rating Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                <Star className="w-3 h-3 text-yellow-500 fill-current" />
                <span className="text-sm font-semibold text-gray-800">{manufacturer.rating}</span>
              </div>

              {/* Specialization Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="text-xs font-medium text-gray-700">{manufacturer.specialization}</span>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 p-6">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {manufacturer.name}
                  </h3>
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <MapPin className="w-4 h-4 mr-1 text-red-500" />
                    {manufacturer.location}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {manufacturer.description?.substring(0, 120)}...
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-5 gap-3 mb-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-3 text-center">
                    <Package className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                    <div className="text-lg font-bold text-blue-600">{manufacturer.productsCount}</div>
                    <div className="text-xs text-blue-700 font-medium">Products</div>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-3 text-center">
                    <Users className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                    <div className="text-lg font-bold text-emerald-600">{manufacturer.employees}</div>
                    <div className="text-xs text-emerald-700 font-medium">Employees</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-3 text-center">
                    <TrendingUp className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                    <div className="text-lg font-bold text-purple-600">{manufacturer.turnover}</div>
                    <div className="text-xs text-purple-700 font-medium">Turnover</div>
                  </div>
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-3 text-center">
                    <Globe className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                    <div className="text-lg font-bold text-amber-600">{manufacturer.exportCountries}+</div>
                    <div className="text-xs text-amber-700 font-medium">Countries</div>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-3 text-center">
                    <ShoppingCart className="w-5 h-5 text-indigo-600 mx-auto mb-1" />
                    <div className="text-lg font-bold text-indigo-600">{manufacturer.ordersCount || 0}</div>
                    <div className="text-xs text-indigo-700 font-medium">Orders</div>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Est. {manufacturer.established}</span>
                    <span>•</span>
                    <span>Verified Partner</span>
                  </div>
                  <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors duration-200">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  // Grid view (default)
  return (
    <Link 
      to={`/manufacturers/${manufacturer.id}`}
      className="group block"
    >
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform group-hover:-translate-y-2 border border-gray-200/50 hover:border-blue-200/50">
        {/* Image Section with Gradient Overlay */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={manufacturer.image} 
            alt={manufacturer.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${manufacturer.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
          
          {/* Rating Badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
            <Star className="w-3 h-3 text-yellow-500 fill-current" />
            <span className="text-sm font-semibold text-gray-800">{manufacturer.rating}</span>
          </div>

          {/* Specialization Badge */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
            <span className="text-xs font-medium text-gray-700">{manufacturer.specialization}</span>
          </div>

          {/* Verified Badge */}
          <div className="absolute bottom-4 right-4 bg-green-500/90 backdrop-blur-sm rounded-full px-2 py-1">
            <Award className="w-3 h-3 text-white" />
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Company Name & Location */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
              {manufacturer.name}
            </h3>
            <div className="flex items-center text-gray-600 text-sm">
              <MapPin className="w-4 h-4 mr-1 text-red-500" />
              {manufacturer.location}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-3 text-center">
              <Package className="w-4 h-4 text-blue-600 mx-auto mb-1" />
              <div className="text-lg font-bold text-blue-600">{manufacturer.productsCount}</div>
              <div className="text-xs text-blue-700 font-medium">Products</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-3 text-center">
              <Users className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
              <div className="text-lg font-bold text-emerald-600">{manufacturer.employees}</div>
              <div className="text-xs text-emerald-700 font-medium">Employees</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-3 text-center">
              <ShoppingCart className="w-4 h-4 text-indigo-600 mx-auto mb-1" />
              <div className="text-lg font-bold text-indigo-600">{manufacturer.ordersCount || 0}</div>
              <div className="text-xs text-indigo-700 font-medium">Orders</div>
            </div>
          </div>

          {/* Company Details */}
          <div className="space-y-2 mb-6">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Annual Turnover</span>
              <span className="font-semibold text-gray-900">{manufacturer.turnover}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Established</span>
              <span className="font-semibold text-gray-900">{manufacturer.established}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Export Countries</span>
              <span className="font-semibold text-gray-900">{manufacturer.exportCountries}+</span>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <span className="text-sm text-gray-500">View detailed profile</span>
            <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors duration-200">
              <span>Explore</span>
              <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ManufacturerCard