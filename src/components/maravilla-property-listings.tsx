import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Home, Bed, Bath, Square, MapPin, Calendar, Heart, Share2, Eye, Star, TrendingUp, Clock, Users, Car, TreePine } from "lucide-react"

interface MaravillaProperty {
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
  description: string
  yearBuilt: number
  lotSize: string
  garage: number
}

const maravillaProperties: MaravillaProperty[] = [
  {
    id: "1",
    title: "Luxury Single-Story Villa",
    price: "$485,000",
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1950,
    address: "123 Maravilla Drive",
    status: "available",
    image: "/api/placeholder/400/300",
    features: ["Granite Countertops", "Stainless Appliances", "Open Floor Plan", "Solar Ready"],
    description: "Beautiful single-story home featuring modern finishes and energy-efficient design.",
    yearBuilt: 2024,
    lotSize: "6,500 sq ft",
    garage: 2
  },
  {
    id: "2", 
    title: "Spacious Two-Story Family Home",
    price: "$525,000",
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 2250,
    address: "456 Desert Vista Lane",
    status: "available",
    image: "/api/placeholder/400/300",
    features: ["Master Suite", "Gourmet Kitchen", "Two-Car Garage", "Patio"],
    description: "Perfect for growing families with spacious rooms and modern amenities.",
    yearBuilt: 2024,
    lotSize: "7,200 sq ft",
    garage: 2
  },
  {
    id: "3",
    title: "Modern Executive Home", 
    price: "$595,000",
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 2650,
    address: "789 Canyon Ridge Court",
    status: "pending",
    image: "/api/placeholder/400/300",
    features: ["High Ceilings", "Premium Finishes", "Smart Home", "Waves Ready"],
    description: "Executive-level home with premium finishes and smart home technology.",
    yearBuilt: 2024,
    lotSize: "8,100 sq ft",
    garage: 3
  }
]

export function MaravillaPropertyCard({ property }: { property: MaravillaProperty }) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <CardHeader className="p-0 relative">
        <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <Home className="w-16 h-16 mx-auto mb-2 opacity-50" />
            <p className="text-sm">Maravilla Home</p>
          </div>
        </div>
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <Badge 
            variant={property.status === "available" ? "default" : property.status === "pending" ? "secondary" : "destructive"}
            className="bg-white/90 backdrop-blur-sm shadow-sm"
          >
            {property.status === "available" ? "Available" : property.status === "pending" ? "Pending" : "Sold"}
          </Badge>
        </div>
        
        {/* Action Buttons */}
        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex gap-2">
            <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
              <Heart className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Price and Title */}
          <div>
            <div className="text-2xl font-bold text-green-600 mb-1">
              {property.price}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {property.title}
            </h3>
            <div className="flex items-center text-gray-600 text-sm">
              <MapPin className="w-4 h-4 mr-1" />
              {property.address}
            </div>
          </div>
          
          {/* Property Details */}
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-2 text-gray-500" />
              {property.bedrooms} bed
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-2 text-gray-500" />
              {property.bathrooms} bath
            </div>
            <div className="flex items-center">
              <Square className="w-4 h-4 mr-2 text-gray-500" />
              {property.squareFeet.toLocaleString()} sq ft
            </div>
          </div>
          
          {/* Additional Details */}
          <div className="text-sm text-gray-600 space-y-1">
            <div>Built: {property.yearBuilt}</div>
            <div>Lot Size: {property.lotSize}</div>
            <div>Garage: {property.garage} car</div>
          </div>
          
          <Separator />
          
          {/* Description */}
          <p className="text-sm text-gray-600 line-clamp-2">
            {property.description}
          </p>
          
          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {property.features.map((feature, index) => (
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
            <Eye className="w-4 h-4 mr-2" />
            View Details
          </Button>
          <Button className="flex-1 bg-green-600 hover:bg-green-700">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Tour
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export function MaravillaPropertyListings() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Maravilla Homes Available Now
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover luxury living in Las Vegas with our beautifully designed homes. 
            Each property features modern amenities and energy-efficient design.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {maravillaProperties.map((property) => (
            <MaravillaPropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            View All Maravilla Properties
          </Button>
        </div>
      </div>
    </section>
  )
}
