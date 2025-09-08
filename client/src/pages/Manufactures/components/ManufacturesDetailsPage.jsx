import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Phone,
  Mail,
  Globe,
  MapPin,
  Award,
  Users,
  TrendingUp,
  Building,
  Calendar,
  Info,
  Package,
  FileText,
  Star,
  Share2,
  Heart,
  MessageCircle,
  Download,
  ExternalLink,
  CheckCircle,
  Shield,
  Clock,
  Target,
  ShoppingCart,
  User,
  MapPin as LocationIcon,
  DollarSign,
  CheckCircle2,
  Clock3,
  AlertCircle,
} from 'lucide-react';
import { Card, CardHeader, CardContent } from '../../../components/ui/Card';
import Badge from '../../../components/ui/Badge';
import { getManufacturerById } from '../manufactures';

// StatCard Component
function StatCard({ icon, label, value, color, gradient }) {
  return (
    <div className={`bg-gradient-to-br ${gradient} rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
      <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-white/20 backdrop-blur-sm">
        {icon}
      </div>
      <h3 className={`font-bold text-2xl ${color}`}>{value}</h3>
      <p className={`text-sm font-medium ${color} opacity-80`}>{label}</p>
    </div>
  );
}

// TabButton Component
function TabButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 font-semibold rounded-xl transition-all duration-300 ${
        active
          ? 'bg-blue-500 text-white shadow-lg transform scale-105'
          : 'bg-white/50 text-gray-600 hover:bg-white/80 hover:text-blue-600'
      }`}
    >
      {children}
    </button>
  );
}

// ActionButton Component
function ActionButton({ icon, label, onClick, variant = 'primary' }) {
  const baseClasses = "flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 shadow-lg",
    secondary: "bg-white/80 text-gray-700 hover:bg-white border border-gray-200",
    success: "bg-green-500 text-white hover:bg-green-600 shadow-lg",
    outline: "bg-transparent text-blue-600 border-2 border-blue-500 hover:bg-blue-50"
  };
  
  return (
    <button onClick={onClick} className={`${baseClasses} ${variants[variant]}`}>
      {icon}
      {label}
    </button>
  );
}

export default function ManufacturerDetailsPage() {
  const { manufacturerId } = useParams();
  const manufacturer = getManufacturerById(manufacturerId);
  const [activeTab, setActiveTab] = useState('about');
  const [isFavorited, setIsFavorited] = useState(false);

  if (!manufacturer) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center p-12 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl max-w-md mx-auto">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Award className="w-10 h-10 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Manufacturer Not Found
          </h2>
          <p className="text-gray-600 mb-8">The manufacturer you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/manufacturers"
            className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-200 font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Manufacturers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={manufacturer.image}
            alt={manufacturer.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>

        {/* Navigation */}
        <div className="relative z-10 bg-white/10 backdrop-blur-md border-b border-white/20">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <Link
              to="/manufacturers"
              className="inline-flex items-center text-white hover:text-blue-200 font-semibold transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Manufacturers
            </Link>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-end gap-8">
            {/* Company Info */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={manufacturer.logo}
                  alt={`${manufacturer.name} logo`}
                  className="w-20 h-20 rounded-2xl object-cover border-4 border-white/20 shadow-2xl"
                />
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-white/90 font-semibold">{manufacturer.rating}</span>
                </div>
              </div>
              
              <h1 className="text-5xl font-bold text-white mb-4">
                {manufacturer.name}
              </h1>
              
              <div className="flex items-center text-white/90 mb-6">
                <MapPin className="w-5 h-5 mr-2 text-blue-300" />
                <span className="text-lg">{manufacturer.location}</span>
                <span className="mx-3">•</span>
                <span className="text-lg">{manufacturer.specialization}</span>
              </div>

              <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
                {manufacturer.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <ActionButton
                icon={<MessageCircle className="w-5 h-5" />}
                label="Contact Now"
                onClick={() => console.log('Contact clicked')}
                variant="primary"
              />
              <ActionButton
                icon={<Heart className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} />}
                label={isFavorited ? 'Favorited' : 'Add to Favorites'}
                onClick={() => setIsFavorited(!isFavorited)}
                variant={isFavorited ? 'success' : 'secondary'}
              />
              <ActionButton
                icon={<Share2 className="w-5 h-5" />}
                label="Share"
                onClick={() => console.log('Share clicked')}
                variant="outline"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          <StatCard
            icon={<Package className="w-6 h-6 text-blue-600" />}
            label="Products"
            value={manufacturer.productsCount}
            color="text-blue-600"
            gradient="from-blue-50 to-blue-100"
          />
          <StatCard
            icon={<Users className="w-6 h-6 text-emerald-600" />}
            label="Employees"
            value={manufacturer.employees}
            color="text-emerald-600"
            gradient="from-emerald-50 to-emerald-100"
          />
          <StatCard
            icon={<TrendingUp className="w-6 h-6 text-purple-600" />}
            label="Annual Turnover"
            value={manufacturer.turnover}
            color="text-purple-600"
            gradient="from-purple-50 to-purple-100"
          />
          <StatCard
            icon={<Globe className="w-6 h-6 text-amber-600" />}
            label="Export Countries"
            value={`${manufacturer.exportCountries}+`}
            color="text-amber-600"
            gradient="from-amber-50 to-amber-100"
          />
          <StatCard
            icon={<ShoppingCart className="w-6 h-6 text-indigo-600" />}
            label="Total Orders"
            value={manufacturer.orders ? manufacturer.orders.length : 0}
            color="text-indigo-600"
            gradient="from-indigo-50 to-indigo-100"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Information
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors duration-200">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">Phone</p>
                      <a href={`tel:${manufacturer.contact.phone}`} className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                        {manufacturer.contact.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors duration-200">
                      <Mail className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">Email</p>
                      <a href={`mailto:${manufacturer.contact.email}`} className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                        {manufacturer.contact.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-purple-200 transition-colors duration-200">
                      <Globe className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">Website</p>
                      <a
                        href={`https://${manufacturer.contact.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center"
                      >
                        {manufacturer.contact.website}
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-red-200 transition-colors duration-200">
                      <Building className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">Address</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {manufacturer.contact.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Highlights */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Company Highlights
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">ISO 9001:2015 Certified</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">Quality Assured Products</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-purple-500 mr-3" />
                    <span className="text-gray-700">Est. {manufacturer.established}</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-5 h-5 text-orange-500 mr-3" />
                    <span className="text-gray-700">Export to {manufacturer.exportCountries}+ Countries</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tabs Navigation */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6">
                <nav className="flex flex-wrap gap-3" aria-label="Tabs">
                  <TabButton
                    active={activeTab === 'about'}
                    onClick={() => setActiveTab('about')}
                  >
                    <Info className="w-5 h-5 mr-2" />
                    About Company
                  </TabButton>
                  <TabButton
                    active={activeTab === 'products'}
                    onClick={() => setActiveTab('products')}
                  >
                    <Package className="w-5 h-5 mr-2" />
                    Products
                  </TabButton>
                  <TabButton
                    active={activeTab === 'certifications'}
                    onClick={() => setActiveTab('certifications')}
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Certifications
                  </TabButton>
                  <TabButton
                    active={activeTab === 'orders'}
                    onClick={() => setActiveTab('orders')}
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Orders ({manufacturer.orders ? manufacturer.orders.length : 0})
                  </TabButton>
                </nav>
              </div>

              <div className="p-8">
                {activeTab === 'about' && (
                  <div className="space-y-8">
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {manufacturer.description}
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200/50">
                        <h4 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                          <Target className="w-5 h-5 mr-2" />
                          Specializations
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {manufacturer.specializations.map((spec, index) => (
                            <span
                              key={index}
                              className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 border border-emerald-200/50">
                        <h4 className="text-xl font-bold text-emerald-800 mb-4 flex items-center">
                          <Award className="w-5 h-5 mr-2" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {manufacturer.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-emerald-700 font-medium">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'products' && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Product Portfolio</h3>
                      <p className="text-gray-600">High-quality products designed to meet your specific requirements</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {manufacturer.products.map((product) => (
                        <div
                          key={product.id}
                          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                          <div className="relative overflow-hidden rounded-xl mb-4">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                            />
                            <div className="absolute top-4 right-4">
                              <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700">
                                {product.category}
                              </span>
                            </div>
                          </div>
                          
                          <h4 className="font-bold text-xl text-gray-800 mb-3">
                            {product.name}
                          </h4>
                          
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-2xl font-bold text-blue-600">
                              {product.priceRange}
                            </span>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm font-medium">
                              View Details
                            </button>
                          </div>
                          
                          <p className="text-gray-600 text-sm leading-relaxed">
                            Premium quality {product.name.toLowerCase()} designed for durability and aesthetic appeal.
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'certifications' && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Certifications & Standards</h3>
                      <p className="text-gray-600">Our commitment to quality and international standards</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {manufacturer.companyInfo.certifications.map((cert, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200/50 flex items-center"
                        >
                          <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
                            <Shield className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-purple-800 text-lg">{cert}</h4>
                            <p className="text-purple-600 text-sm">Quality Assurance Certified</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200/50">
                      <div className="flex items-center mb-4">
                        <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                        <h4 className="text-xl font-bold text-green-800">Quality Commitment</h4>
                      </div>
                      <p className="text-green-700 leading-relaxed">
                        All our products undergo rigorous quality testing and meet international standards. 
                        We maintain strict quality control processes to ensure customer satisfaction and product reliability.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'orders' && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Order Management</h3>
                      <p className="text-gray-600">Track and manage all customer orders and their details</p>
                    </div>
                    
                    {/* Order Statistics */}
                    <div className="grid md:grid-cols-4 gap-4 mb-8">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <ShoppingCart className="w-4 h-4 text-white" />
                        </div>
                        <h4 className="font-bold text-blue-800 text-lg">{manufacturer.orders ? manufacturer.orders.length : 0}</h4>
                        <p className="text-blue-600 text-sm">Total Orders</p>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center">
                        <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <h4 className="font-bold text-green-800 text-lg">
                          {manufacturer.orders ? manufacturer.orders.filter(order => order.status === 'completed').length : 0}
                        </h4>
                        <p className="text-green-600 text-sm">Completed</p>
                      </div>
                      <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 text-center">
                        <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <Clock3 className="w-4 h-4 text-white" />
                        </div>
                        <h4 className="font-bold text-yellow-800 text-lg">
                          {manufacturer.orders ? manufacturer.orders.filter(order => order.status === 'in_progress').length : 0}
                        </h4>
                        <p className="text-yellow-600 text-sm">In Progress</p>
                      </div>
                      <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 text-center">
                        <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <AlertCircle className="w-4 h-4 text-white" />
                        </div>
                        <h4 className="font-bold text-red-800 text-lg">
                          {manufacturer.orders ? manufacturer.orders.filter(order => order.status === 'pending').length : 0}
                        </h4>
                        <p className="text-red-600 text-sm">Pending</p>
                      </div>
                    </div>

                    {/* Orders List */}
                    <div className="space-y-4">
                      {manufacturer.orders && manufacturer.orders.length > 0 ? (
                        manufacturer.orders.map((order) => (
                          <div
                            key={order.id}
                            className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 overflow-hidden hover:shadow-xl transition-all duration-300"
                          >
                            {/* Order Header */}
                            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b border-gray-200/50">
                              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                                <div className="flex items-center gap-4">
                                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                                    <ShoppingCart className="w-6 h-6 text-white" />
                                  </div>
                                  <div>
                                    <h4 className="font-bold text-gray-800 text-lg">{order.id}</h4>
                                    <p className="text-gray-600 text-sm">{order.orderDate}</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4">
                                  <div className="text-right">
                                    <p className="font-bold text-gray-800 text-lg">₹{order.totalAmount.toLocaleString()}</p>
                                    <p className="text-gray-600 text-sm">Total Amount</p>
                                  </div>
                                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                                    order.status === 'completed' 
                                      ? 'bg-green-100 text-green-800' 
                                      : order.status === 'in_progress'
                                      ? 'bg-yellow-100 text-yellow-800'
                                      : 'bg-red-100 text-red-800'
                                  }`}>
                                    {order.status === 'completed' ? 'Completed' : 
                                     order.status === 'in_progress' ? 'In Progress' : 'Pending'}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Order Details */}
                            <div className="p-6">
                              <div className="grid lg:grid-cols-2 gap-6">
                                {/* Customer Info */}
                                <div className="space-y-4">
                                  <h5 className="font-semibold text-gray-800 flex items-center">
                                    <User className="w-5 h-5 mr-2 text-blue-500" />
                                    Customer Information
                                  </h5>
                                  <div className="bg-gray-50 rounded-xl p-4">
                                    <p className="font-medium text-gray-800">{order.customerName}</p>
                                    <p className="text-gray-600 text-sm">{order.customerEmail}</p>
                                    <div className="flex items-start mt-2">
                                      <LocationIcon className="w-4 h-4 text-gray-400 mr-2 mt-1" />
                                      <p className="text-gray-600 text-sm">{order.deliveryAddress}</p>
                                    </div>
                                  </div>
                                </div>

                                {/* Order Items */}
                                <div className="space-y-4">
                                  <h5 className="font-semibold text-gray-800 flex items-center">
                                    <Package className="w-5 h-5 mr-2 text-green-500" />
                                    Order Items
                                  </h5>
                                  <div className="space-y-3">
                                    {order.items.map((item, index) => (
                                      <div key={index} className="bg-gray-50 rounded-xl p-4">
                                        <div className="flex justify-between items-start mb-2">
                                          <h6 className="font-medium text-gray-800">{item.productName}</h6>
                                          <span className="font-bold text-green-600">₹{item.totalPrice.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-600">
                                          <span>Quantity: {item.quantity.toLocaleString()}</span>
                                          <span>Unit Price: ₹{item.unitPrice}</span>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              {/* Order Notes */}
                              {order.notes && (
                                <div className="mt-4 bg-blue-50 rounded-xl p-4">
                                  <h6 className="font-medium text-blue-800 mb-1">Special Notes</h6>
                                  <p className="text-blue-700 text-sm">{order.notes}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-12">
                          <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                          <h3 className="text-xl font-semibold text-gray-700 mb-2">No Orders Found</h3>
                          <p className="text-gray-500">This manufacturer doesn't have any orders yet.</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

