import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, ArrowRight } from 'lucide-react'

const ManufacturerCard = ({ manufacturer }) => {
  return (
    <Link 
      to={`/manufacturers/${manufacturer.id}`}
      className="group block"
    >
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform group-hover:-translate-y-2 border border-gray-100">
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
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <span className="text-sm font-semibold text-gray-800">{manufacturer.rating}</span>
          </div>

          {/* Specialization Badge */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
            <span className="text-xs font-medium text-gray-700">{manufacturer.specialization}</span>
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
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-3 text-center">
              <div className="text-lg font-bold text-blue-600">{manufacturer.productsCount}</div>
              <div className="text-xs text-blue-700 font-medium">Products</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-3 text-center">
              <div className="text-lg font-bold text-emerald-600">{manufacturer.employees}</div>
              <div className="text-xs text-emerald-700 font-medium">Employees</div>
            </div>
          </div>

          {/* Company Details */}
          <div className="space-y-3 mb-6">
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