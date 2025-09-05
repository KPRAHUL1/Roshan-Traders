import React from 'react'

const CallToAction = () => {
  const handleGetQuote = () => {
    // Add your quote request logic here
    console.log('Get Custom Quote clicked')
  }

  return (
    <div className="mt-16 text-center">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Looking for Custom Solutions?</h3>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Connect directly with our manufacturing partners for bespoke stone products and architectural solutions tailored to your specific requirements.
        </p>
        <button 
          onClick={handleGetQuote}
          className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
        >
          Get Custom Quote
        </button>
      </div>
    </div>
  )
}

export default CallToAction