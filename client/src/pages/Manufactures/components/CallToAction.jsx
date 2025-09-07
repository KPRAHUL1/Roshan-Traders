import React from 'react'
import { ArrowRight, MessageCircle, Phone, Mail, Sparkles } from 'lucide-react'

const CallToAction = () => {
  const handleGetQuote = () => {
    // Add your quote request logic here
    console.log('Get Custom Quote clicked')
  }

  const handleContact = (method) => {
    console.log(`Contact via ${method}`)
  }

  return (
    <div className="mt-20">
      {/* Main CTA */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-12 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg  opacity-20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-8 right-8 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-8 left-8 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        
        <div className="relative text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
            Ready to Get Started?
          </div>
          
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Looking for Custom Solutions?
          </h3>
          
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Connect directly with our manufacturing partners for bespoke stone products and architectural solutions tailored to your specific requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button 
              onClick={handleGetQuote}
              className="group bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl transform hover:scale-105 flex items-center"
            >
              Get Custom Quote
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button 
              onClick={() => handleContact('call')}
              className="group bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30 flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </button>
          </div>
          
          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <MessageCircle className="w-8 h-8 text-blue-300 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Live Chat</h4>
              <p className="text-white/70 text-sm">Get instant answers</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Mail className="w-8 h-8 text-green-300 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Email Us</h4>
              <p className="text-white/70 text-sm">Detailed inquiries</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Phone className="w-8 h-8 text-purple-300 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Phone Support</h4>
              <p className="text-white/70 text-sm">Direct consultation</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trust Indicators */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-6">Trusted by leading companies worldwide</p>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="bg-gray-200 rounded-lg px-6 py-3 text-gray-700 font-semibold">Company A</div>
          <div className="bg-gray-200 rounded-lg px-6 py-3 text-gray-700 font-semibold">Company B</div>
          <div className="bg-gray-200 rounded-lg px-6 py-3 text-gray-700 font-semibold">Company C</div>
          <div className="bg-gray-200 rounded-lg px-6 py-3 text-gray-700 font-semibold">Company D</div>
        </div>
      </div>
    </div>
  )
}

export default CallToAction