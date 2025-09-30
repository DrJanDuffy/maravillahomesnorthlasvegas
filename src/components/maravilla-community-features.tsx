import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  TreePine, 
  Car, 
  Users, 
  Shield, 
  Wifi, 
  Dumbbell, 
  UtensilsCrossed, 
  GraduationCap,
  Heart,
  Sparkles,
  Waves,
  Gamepad2,
  Coffee,
  ShoppingBag,
  Stethoscope,
  Plane
} from "lucide-react"

interface MaravillaAmenity {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  category: "lifestyle" | "recreation" | "convenience" | "health"
  featured?: boolean
}

const maravillaAmenities: MaravillaAmenity[] = [
  {
    icon: Waves,
    title: "Resort-Style Waves",
    description: "Olympic-sized pool with cabanas and poolside bar",
    category: "recreation",
    featured: true
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "State-of-the-art gym with personal training available",
    category: "health",
    featured: true
  },
  {
    icon: TreePine,
    title: "Parks & Trails",
    description: "Beautiful walking trails and community parks",
    category: "lifestyle"
  },
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Gated community with professional security team",
    category: "convenience",
    featured: true
  },
  {
    icon: Gamepad2,
    title: "Game Room",
    description: "Community game room with billiards and arcade games",
    category: "recreation"
  },
  {
    icon: Coffee,
    title: "Coffee Shop",
    description: "On-site coffee shop and community gathering space",
    category: "convenience"
  },
  {
    icon: ShoppingBag,
    title: "Shopping Center",
    description: "Nearby shopping with grocery stores and restaurants",
    category: "convenience"
  },
  {
    icon: Stethoscope,
    title: "Medical Center",
    description: "On-site medical facility with urgent care",
    category: "health"
  },
  {
    icon: Plane,
    title: "Airport Access",
    description: "Just 15 minutes from McCarran International Airport",
    category: "convenience"
  }
]

export function MaravillaCommunityFeatures() {
  const featuredAmenities = maravillaAmenities.filter(a => a.featured)
  const lifestyleAmenities = maravillaAmenities.filter(a => a.category === "lifestyle")
  const recreationAmenities = maravillaAmenities.filter(a => a.category === "recreation")
  const convenienceAmenities = maravillaAmenities.filter(a => a.category === "convenience")
  const healthAmenities = maravillaAmenities.filter(a => a.category === "health")

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Maravilla Community
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Luxury Living at Its Finest
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience resort-style living with world-class amenities and a vibrant community 
            in the heart of Las Vegas.
          </p>
        </div>

        {/* Featured Amenities */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Featured Amenities
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredAmenities.map((amenity, index) => (
              <Card key={index} className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <amenity.icon className="w-6 h-6 text-green-600 mr-3" />
                    {amenity.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Amenities Grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Lifestyle */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lifestyle</h3>
              <p className="text-gray-600 text-sm">Community living at its best</p>
            </div>
            <div className="space-y-4">
              {lifestyleAmenities.map((amenity, index) => (
                <Card key={index} className="border-l-4 border-l-green-500">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <amenity.icon className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{amenity.title}</h4>
                        <p className="text-xs text-gray-600">{amenity.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recreation */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Recreation</h3>
              <p className="text-gray-600 text-sm">Fun and entertainment</p>
            </div>
            <div className="space-y-4">
              {recreationAmenities.map((amenity, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <amenity.icon className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{amenity.title}</h4>
                        <p className="text-xs text-gray-600">{amenity.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Convenience */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Convenience</h3>
              <p className="text-gray-600 text-sm">Everything you need nearby</p>
            </div>
            <div className="space-y-4">
              {convenienceAmenities.map((amenity, index) => (
                <Card key={index} className="border-l-4 border-l-purple-500">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <amenity.icon className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{amenity.title}</h4>
                        <p className="text-xs text-gray-600">{amenity.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Health */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Health</h3>
              <p className="text-gray-600 text-sm">Your wellness matters</p>
            </div>
            <div className="space-y-4">
              {healthAmenities.map((amenity, index) => (
                <Card key={index} className="border-l-4 border-l-red-500">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <amenity.icon className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{amenity.title}</h4>
                        <p className="text-xs text-gray-600">{amenity.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Experience Maravilla Living?
              </h3>
              <p className="text-gray-600 mb-6">
                Join our exclusive community and discover why Maravilla is Las Vegas' premier destination for luxury living.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge variant="secondary" className="px-4 py-2">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Resort-Style Amenities
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Shield className="w-4 h-4 mr-2" />
                  Gated Security
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Heart className="w-4 h-4 mr-2" />
                  Community Living
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
