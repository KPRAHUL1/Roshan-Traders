import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Phone, Mail, Globe, MapPin, Award, Users, TrendingUp } from 'lucide-react'
import { Card, CardHeader, CardContent } from '../../../components/ui/Card'
import Badge from '../../../components/ui/Badge'
import { getManufacturerById } from '../manufactures'

export default function ManufacturerDetailsPage() {
  const { manufacturerId } = useParams()
  const manufacturer = getManufacturerById(manufacturerId)

  if (!manufacturer) {
    return (
      <div className="p-6">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900">Manufacturer Not Found</h2>
          <Link to="/manufacturers" className="text-blue-600 hover:text-blue-800 mt-2 inline-block">
            ← Back to Manufacturers
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link to="/manufacturers" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Manufacturers
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <img 
              src={manufacturer.logo} 
              alt={`${manufacturer.name} logo`}
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900">{manufacturer.name}</h1>
              <p className="text-gray-600 mt-2 flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {manufacturer.location}
              </p>
              <p className="text-gray-700 mt-3">{manufacturer.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Company Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-lg">{manufacturer.companyInfo.employees}</h3>
              <p className="text-gray-600 text-sm">Employees</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-lg">{manufacturer.companyInfo.annualTurnover}</h3>
              <p className="text-gray-600 text-sm">Annual Turnover</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Globe className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold text-lg">{manufacturer.companyInfo.exportCountries}</h3>
              <p className="text-gray-600 text-sm">Export Countries</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Award className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <h3 className="font-semibold text-lg">{manufacturer.establishedYear}</h3>
              <p className="text-gray-600 text-sm">Established</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Founder Information */}
            <Card>
              <CardHeader title="Founder & Leadership" />
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900">{manufacturer.founder.name}</h4>
                    <p className="text-gray-600">{manufacturer.founder.qualification}</p>
                  </div>
                  <p className="text-sm text-gray-600">
                    Experience: <span className="font-medium">{manufacturer.founder.experience}</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Products */}
            <Card>
              <CardHeader title="Products & Services" />
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {manufacturer.products.map((product) => (
                    <div key={product.id} className="border rounded-lg p-4">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-32 object-cover rounded-md mb-3"
                      />
                      <h4 className="font-medium text-gray-900 mb-2">{product.name}</h4>
                      <Badge color="blue" className="mb-2">{product.category}</Badge>
                      <p className="text-sm text-gray-600 mb-2">
                        Price: <span className="font-medium">{product.priceRange}</span>
                      </p>
                      <div className="space-y-1">
                        {product.sizes && (
                          <p className="text-xs text-gray-500">Sizes: {product.sizes.join(', ')}</p>
                        )}
                        {product.finishes && (
                          <p className="text-xs text-gray-500">Finishes: {product.finishes.join(', ')}</p>
                        )}
                        {product.thickness && (
                          <p className="text-xs text-gray-500">Thickness: {product.thickness.join(', ')}</p>
                        )}
                        {product.types && (
                          <p className="text-xs text-gray-500">Types: {product.types.join(', ')}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Specializations */}
            <Card>
              <CardHeader title="Specializations" />
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {manufacturer.specializations.map((spec, index) => (
                    <Badge key={index} color="green">{spec}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader title="Achievements & Awards" />
              <CardContent>
                <ul className="space-y-2">
                  {manufacturer.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center">
                      <Award className="w-4 h-4 text-yellow-600 mr-2" />
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader title="Contact Information" />
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="w-4 h-4 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">{manufacturer.contact.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-4 h-4 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">{manufacturer.contact.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Globe className="w-4 h-4 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Website</p>
                      <a 
                        href={`https://${manufacturer.contact.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {manufacturer.contact.website}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600 text-sm">{manufacturer.contact.address}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader title="Certifications" />
              <CardContent>
                <div className="space-y-2">
                  {manufacturer.companyInfo.certifications.map((cert, index) => (
                    <Badge key={index} color="purple" className="w-full justify-center">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}