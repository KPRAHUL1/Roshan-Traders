import React, { useState } from 'react'
import PageHeader from './components/PageHeader'
import ManufacturerCard from './ManufactureCard'
import CallToAction from './components/CallToAction'
import { getAllManufacturers } from './manufactures'
import { Search, Filter, Grid, List, MapPin, Star, TrendingUp } from 'lucide-react'

export default function ManufacturersPage() {
  const manufacturers = getAllManufacturers()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('rating')

  // Filter and sort manufacturers
  const filteredManufacturers = manufacturers
    .filter(manufacturer => {
      const matchesSearch = manufacturer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           manufacturer.specialization.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesLocation = !selectedLocation || manufacturer.location === selectedLocation
      return matchesSearch && matchesLocation
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating
        case 'products':
          return b.productsCount - a.productsCount
        case 'name':
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

  const locations = [...new Set(manufacturers.map(m => m.location))]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header Section */}
      <PageHeader />

      {/* Filters and Search Section */}
      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search manufacturers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 items-center">
              {/* Location Filter */}
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-3 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">All Locations</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="rating">Sort by Rating</option>
                <option value="products">Sort by Products</option>
                <option value="name">Sort by Name</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'grid' 
                      ? 'bg-blue-500 text-white shadow-md' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'list' 
                      ? 'bg-blue-500 text-white shadow-md' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
            <span>
              Showing {filteredManufacturers.length} of {manufacturers.length} manufacturers
            </span>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>Top Rated</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span>Growing Network</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Manufacturers Grid/List */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredManufacturers.map((manufacturer) => (
              <ManufacturerCard 
                key={manufacturer.id} 
                manufacturer={manufacturer} 
                viewMode="grid"
              />
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredManufacturers.map((manufacturer) => (
              <ManufacturerCard 
                key={manufacturer.id} 
                manufacturer={manufacturer} 
                viewMode="list"
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredManufacturers.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-12 max-w-md mx-auto">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No manufacturers found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search criteria or filters</p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedLocation('')
                }}
                className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <CallToAction />
      </div>
    </div>
  )
}