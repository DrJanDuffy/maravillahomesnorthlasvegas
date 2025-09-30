import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Home, Bed, Bath, Square, MapPin, Calendar } from "lucide-react"

interface Home {
  id: string
  title: string
  price: string
  bedrooms: number
  bathrooms: number
  squareFeet: number
  address: string
  status: "available" | "pending" | "sold"
  image: string
  features: string[]
}

const sampleHomes: Home[] = [
  {
    id: "1",
    title: "Modern Family Home",
    price: "$450,000",
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1850,
    address: "123 Tule Springs Dr",
    status: "available",
    image: "/api/placeholder/400/300",
    features: ["Solar Ready", "Energy Efficient", "Open Floor Plan"]
  },
  {
    id: "2", 
    title: "Spacious Two-Story",
    price: "$520,000",
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 2200,
    address: "456 Desert View Ave",
    status: "available",
    image: "/api/placeholder/400/300",
    features: ["Master Suite", "Gourmet Kitchen", "Two-Car Garage"]
  },
  {
    id: "3",
    title: "Cozy Starter Home", 
    price: "$380,000",
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1450,
    address: "789 Canyon Ridge Ln",
    status: "pending",
    image: "/api/placeholder/400/300",
    features: ["Low Maintenance", "Modern Appliances", "Patio"]
  }
]

export function HomeListings() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Available Homes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted homes designed for modern living. 
            Each home features energy-efficient design and premium finishes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleHomes.map((home) => (
            <Card key={home.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <CardHeader className="p-0">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Home className="w-16 h-16 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Home Image</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant={home.status === "available" ? "default" : home.status === "pending" ? "secondary" : "destructive"}
                    className="bg-white/90 backdrop-blur-sm"
                  >
                    {home.status === "available" ? "Available" : home.status === "pending" ? "Pending" : "Sold"}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {home.title}
                    </h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {home.address}
                    </div>
                  </div>
                  
                  <div className="text-2xl font-bold text-green-600">
                    {home.price}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-2 text-gray-500" />
                      {home.bedrooms} bed
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-2 text-gray-500" />
                      {home.bathrooms} bath
                    </div>
                    <div className="flex items-center">
                      <Square className="w-4 h-4 mr-2 text-gray-500" />
                      {home.squareFeet.toLocaleString()} sq ft
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {home.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0">
                <div className="flex gap-2 w-full">
                  <Button className="flex-1" variant="outline">
                    View Details
                  </Button>
                  <Button className="flex-1 bg-green-600 hover:bg-green-700">
                    <Calendar className="w-4 h-4 mr-2" />
                    Tour
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            View All Homes
          </Button>
        </div>
      </div>
    </section>
  )
}
