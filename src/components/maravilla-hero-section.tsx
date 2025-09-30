import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { MapPin, Home, Users, Star, Play, Calendar, Phone, Mail, Search, ArrowRight, CheckCircle } from "lucide-react"

export function MaravillaHeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23059669%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-green-300 rounded-full opacity-20 animate-pulse delay-2000"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit animate-in fade-in duration-1000">
                <MapPin className="w-4 h-4 mr-2" />
                Las Vegas, NV • Prime Location
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight animate-in slide-in-from-bottom-4 duration-1000">
                Find Your{" "}
                <span className="text-green-600 bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                  Dream Home
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed animate-in fade-in duration-1000 delay-300">
                Expert real estate services in Las Vegas. Whether you're buying, selling, or investing, 
                I'll help you navigate the market with confidence and find the perfect property.
              </p>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom-4 duration-1000 delay-500">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg group">
                <Search className="w-5 h-5 mr-2" />
                Search Homes
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg group">
                <Phone className="w-5 h-5 mr-2" />
                Get Home Valuation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            {/* Quick Search */}
            <Card className="animate-in fade-in duration-1000 delay-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Home Search</h3>
                <realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>
              </CardContent>
            </Card>
            
            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-in fade-in duration-1000 delay-1000">
              <div className="text-center group">
                <div className="text-4xl font-bold text-green-600 group-hover:scale-110 transition-transform">500+</div>
                <div className="text-sm text-gray-600">Homes Sold</div>
                <div className="text-xs text-green-600 mt-1">Trusted Experience</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-green-600 group-hover:scale-110 transition-transform">4.9</div>
                <div className="text-sm text-gray-600 flex items-center justify-center">
                  <Star className="w-4 h-4 mr-1 fill-current" />
                  Rating
                </div>
                <div className="text-xs text-green-600 mt-1">Based on 200+ Reviews</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-green-600 group-hover:scale-110 transition-transform">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
                <div className="text-xs text-green-600 mt-1">Las Vegas Market</div>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4 animate-in fade-in duration-1000 delay-1000">
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                Licensed Realtor
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                Free Consultation
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                Local Expert
              </div>
            </div>
          </div>
          
          {/* Right Content - Enhanced Image Placeholder */}
          <div className="relative animate-in slide-in-from-right-4 duration-1000">
            <Card className="overflow-hidden shadow-2xl group hover:shadow-3xl transition-all duration-500">
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center text-gray-500 z-10">
                    <Home className="w-20 h-20 mx-auto mb-4 opacity-50 group-hover:scale-110 transition-transform" />
                    <p className="text-xl font-semibold">Las Vegas Real Estate</p>
                    <p className="text-sm">Your Dream Home Awaits</p>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </CardContent>
            </Card>
            
            {/* Enhanced Floating Cards */}
            <Card className="absolute -bottom-6 -left-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Schedule Showing</div>
                    <div className="text-sm text-gray-600">Available Daily</div>
                    <div className="text-xs text-green-600">Book Online</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="absolute -top-6 -right-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Call Now</div>
                    <div className="text-sm text-gray-600">(702) 555-REALTOR</div>
                    <div className="text-xs text-blue-600">Free Consultation</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* New Floating Card */}
            <Card className="absolute top-1/2 -left-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <Mail className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Get Updates</div>
                    <div className="text-xs text-gray-600">New Listings</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
    </section>
  )
}
