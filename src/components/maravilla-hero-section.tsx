import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { MapPin, Home, Users, Star, Play, Calendar, Phone, Mail, Search, ArrowRight, CheckCircle } from "lucide-react"

export function MaravillaHeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23059669" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-green-300 rounded-full opacity-20 animate-pulse delay-2000"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit animate-fade-in">
                <MapPin className="w-4 h-4 mr-2" />
                Las Vegas, NV • Prime Location
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight animate-slide-up">
                Maravilla{" "}
                <span className="text-green-600 bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                  Homes
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed animate-fade-in delay-300">
                Discover luxury living in Las Vegas with our beautifully designed homes and resort-style amenities. 
                Experience the perfect blend of comfort, style, and community in Maravilla.
              </p>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-500">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg group">
                <Home className="w-5 h-5 mr-2" />
                View Available Homes
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg group">
                <Play className="w-5 h-5 mr-2" />
                Take Virtual Tour
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            {/* Quick Search */}
            <Card className="animate-fade-in delay-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Find Your Dream Home</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Price Range</label>
                    <select className="w-full p-2 border rounded-md mt-1">
                      <option>$400K - $500K</option>
                      <option>$500K - $600K</option>
                      <option>$600K - $700K</option>
                      <option>$700K+</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Bedrooms</label>
                    <select className="w-full p-2 border rounded-md mt-1">
                      <option>Any</option>
                      <option>2+</option>
                      <option>3+</option>
                      <option>4+</option>
                    </select>
                  </div>
                  <div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <Search className="w-4 h-4 mr-2" />
                      Search Homes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-fade-in delay-1000">
              <div className="text-center group">
                <div className="text-4xl font-bold text-green-600 group-hover:scale-110 transition-transform">25+</div>
                <div className="text-sm text-gray-600">Available Homes</div>
                <div className="text-xs text-green-600 mt-1">New Listings Weekly</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-green-600 group-hover:scale-110 transition-transform">4.9</div>
                <div className="text-sm text-gray-600 flex items-center justify-center">
                  <Star className="w-4 h-4 mr-1 fill-current" />
                  Rating
                </div>
                <div className="text-xs text-green-600 mt-1">Based on 150+ Reviews</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-green-600 group-hover:scale-110 transition-transform">2024</div>
                <div className="text-sm text-gray-600">New Community</div>
                <div className="text-xs text-green-600 mt-1">Move-In Ready</div>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4 animate-fade-in delay-1200">
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                Award-Winning Builder
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                Energy Efficient
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                Gated Community
              </div>
            </div>
          </div>
          
          {/* Right Content - Enhanced Image Placeholder */}
          <div className="relative animate-slide-left">
            <Card className="overflow-hidden shadow-2xl group hover:shadow-3xl transition-all duration-500">
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center text-gray-500 z-10">
                    <Home className="w-20 h-20 mx-auto mb-4 opacity-50 group-hover:scale-110 transition-transform" />
                    <p className="text-xl font-semibold">Maravilla Model Home</p>
                    <p className="text-sm">Luxury Living Awaits</p>
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
                    <div className="font-semibold">Schedule Tour</div>
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
                    <div className="text-sm text-gray-600">(702) 555-MARAVILLA</div>
                    <div className="text-xs text-blue-600">Speak to Agent</div>
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
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-left {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
        .animate-slide-left { animation: slide-left 0.8s ease-out forwards; }
        .delay-300 { animation-delay: 0.3s; opacity: 0; }
        .delay-500 { animation-delay: 0.5s; opacity: 0; }
        .delay-700 { animation-delay: 0.7s; opacity: 0; }
        .delay-1000 { animation-delay: 1s; opacity: 0; }
        .delay-1200 { animation-delay: 1.2s; opacity: 0; }
      `}</style>
    </section>
  )
}
