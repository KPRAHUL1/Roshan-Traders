import React from 'react'
import PageHeader from './components/PageHeader'
import ManufacturerCard from './ManufactureCard'
import CallToAction from './components/CallToAction'
import { getAllManufacturers } from './manufactures'

export default function ManufacturersPage() {
  const manufacturers = getAllManufacturers()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header Section */}
      <PageHeader />

      {/* Manufacturers Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {manufacturers.map((manufacturer) => (
            <ManufacturerCard 
              key={manufacturer.id} 
              manufacturer={manufacturer} 
            />
          ))}
        </div>

        {/* Call to Action */}
        <CallToAction />
      </div>
    </div>
  )
}