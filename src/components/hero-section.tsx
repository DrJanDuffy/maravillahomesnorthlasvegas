import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Home, Users, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23059669" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                <MapPin className="w-4 h-4 mr-2" />
                North Las Vegas, NV
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Villages At{" "}
                <span className="text-green-600">Tule Springs</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover modern, energy-efficient homes designed for contemporary living. 
                Experience the perfect blend of comfort, style, and sustainability in North Las Vegas.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                <Home className="w-5 h-5 mr-2" />
                View Homes
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3">
                <Users className="w-5 h-5 mr-2" />
                Schedule Tour
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">50+</div>
                <div className="text-sm text-gray-600">Available Homes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">4.8</div>
                <div className="text-sm text-gray-600 flex items-center justify-center">
                  <Star className="w-4 h-4 mr-1 fill-current" />
                  Rating
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">2024</div>
                <div className="text-sm text-gray-600">New Community</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Image Placeholder */}
          <div className="relative">
            <Card className="overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Home className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Beautiful Home Image</p>
                    <p className="text-sm">Coming Soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Floating Cards */}
            <Card className="absolute -bottom-6 -left-6 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Home className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Energy Efficient</div>
                    <div className="text-sm text-gray-600">Solar Ready</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="absolute -top-6 -right-6 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Prime Location</div>
                    <div className="text-sm text-gray-600">Near Amenities</div>
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
