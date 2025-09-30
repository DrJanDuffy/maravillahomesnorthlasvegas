import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
  Sparkles
} from "lucide-react"

interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  category: "amenities" | "lifestyle" | "location"
}

const features: Feature[] = [
  {
    icon: TreePine,
    title: "Green Spaces",
    description: "Beautiful parks and walking trails throughout the community",
    category: "amenities"
  },
  {
    icon: Car,
    title: "Easy Commute",
    description: "Minutes from major highways and downtown Las Vegas",
    category: "location"
  },
  {
    icon: Users,
    title: "Community Events",
    description: "Regular social gatherings and neighborhood activities",
    category: "lifestyle"
  },
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Gated community with professional security services",
    category: "amenities"
  },
  {
    icon: Wifi,
    title: "High-Speed Internet",
    description: "Fiber optic internet available throughout the community",
    category: "amenities"
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "State-of-the-art gym with modern equipment",
    category: "amenities"
  },
  {
    icon: UtensilsCrossed,
    title: "Dining Options",
    description: "Nearby restaurants and shopping centers",
    category: "location"
  },
  {
    icon: GraduationCap,
    title: "Top Schools",
    description: "Access to highly-rated schools in the area",
    category: "location"
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Close proximity to medical facilities and hospitals",
    category: "location"
  }
]

export function CommunityFeatures() {
  const amenities = features.filter(f => f.category === "amenities")
  const lifestyle = features.filter(f => f.category === "lifestyle")
  const location = features.filter(f => f.category === "location")

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Community Features
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need, Right Here
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Villages At Tule Springs offers more than just beautiful homes. 
            Experience a complete lifestyle with world-class amenities and conveniences.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Amenities */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Amenities</h3>
              <p className="text-gray-600">Premium facilities for your comfort and convenience</p>
            </div>
            <div className="space-y-4">
              {amenities.map((feature, index) => (
                <Card key={index} className="border-l-4 border-l-green-500">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <feature.icon className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Lifestyle */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Lifestyle</h3>
              <p className="text-gray-600">Connect with neighbors and build lasting relationships</p>
            </div>
            <div className="space-y-4">
              {lifestyle.map((feature, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <feature.icon className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">Prime location with everything you need nearby</p>
            </div>
            <div className="space-y-4">
              {location.map((feature, index) => (
                <Card key={index} className="border-l-4 border-l-purple-500">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <feature.icon className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Experience Villages At Tule Springs?
              </h3>
              <p className="text-gray-600 mb-6">
                Join our community and discover why families choose Villages At Tule Springs for their new home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge variant="secondary" className="px-4 py-2">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Energy Efficient Homes
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Shield className="w-4 h-4 mr-2" />
                  Secure Community
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Heart className="w-4 h-4 mr-2" />
                  Family Friendly
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
