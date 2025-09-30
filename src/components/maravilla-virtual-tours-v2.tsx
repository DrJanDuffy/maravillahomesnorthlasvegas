"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Play, 
  Camera, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  Clock,
  Star,
  Users,
  Home,
  Car,
  TreePine,
  Wifi,
  Shield,
  Dumbbell,
  Pool,
  Coffee,
  ShoppingBag,
  GraduationCap,
  Stethoscope,
  Plane,
  Gamepad2,
  UtensilsCrossed,
  Heart,
  Sparkles,
  Eye,
  Maximize,
  RotateCcw,
  Volume2,
  VolumeX,
  Settings,
  Download,
  Share2
} from "lucide-react"

interface VirtualTour {
  id: string
  title: string
  type: "360" | "video" | "photos" | "walkthrough"
  duration: string
  thumbnail: string
  description: string
  propertyId: string
  features: string[]
  rooms: string[]
  isInteractive: boolean
  quality: "HD" | "4K" | "8K"
}

interface TourRoom {
  id: string
  name: string
  thumbnail: string
  hotspots: number
  description: string
}

const virtualTours: VirtualTour[] = [
  {
    id: "1",
    title: "360° Virtual Tour - Model Home A",
    type: "360",
    duration: "5 min",
    thumbnail: "/api/placeholder/300/200",
    description: "Interactive 360° tour of our luxury single-story model home featuring modern finishes and smart home technology.",
    propertyId: "1",
    features: ["360° Views", "Interactive Hotspots", "Room-to-Room Navigation", "Property Details"],
    rooms: ["Living Room", "Kitchen", "Master Bedroom", "Bathroom", "Garage"],
    isInteractive: true,
    quality: "4K"
  },
  {
    id: "2", 
    title: "Video Walkthrough - Model Home B",
    type: "video",
    duration: "8 min",
    thumbnail: "/api/placeholder/300/200",
    description: "Professional video walkthrough showcasing the spacious two-story family home with premium amenities.",
    propertyId: "2",
    features: ["HD Video", "Narrated Tour", "Property Highlights", "Neighborhood Views"],
    rooms: ["All Rooms", "Backyard", "Garage", "Neighborhood"],
    isInteractive: false,
    quality: "HD"
  },
  {
    id: "3",
    title: "Photo Gallery - Community Amenities",
    type: "photos", 
    duration: "3 min",
    thumbnail: "/api/placeholder/300/200",
    description: "High-quality photo gallery showcasing community amenities including pool, fitness center, and walking trails.",
    propertyId: "community",
    features: ["High-Res Photos", "Zoom Functionality", "Amenity Details", "Community Life"],
    rooms: ["Pool Complex", "Fitness Center", "Walking Trails", "Game Room"],
    isInteractive: true,
    quality: "4K"
  },
  {
    id: "4",
    title: "Live Walkthrough - Executive Home",
    type: "walkthrough",
    duration: "12 min",
    thumbnail: "/api/placeholder/300/200",
    description: "Live agent walkthrough of the executive home with real-time Q&A and detailed property information.",
    propertyId: "3",
    features: ["Live Agent", "Real-time Q&A", "Detailed Information", "Custom Scheduling"],
    rooms: ["All Rooms", "Premium Features", "Smart Home Tech", "Outdoor Spaces"],
    isInteractive: true,
    quality: "HD"
  }
]

const tourRooms: TourRoom[] = [
  {
    id: "living",
    name: "Living Room",
    thumbnail: "/api/placeholder/200/150",
    hotspots: 5,
    description: "Spacious living room with high ceilings and modern finishes"
  },
  {
    id: "kitchen",
    name: "Gourmet Kitchen",
    thumbnail: "/api/placeholder/200/150",
    hotspots: 8,
    description: "Modern kitchen with granite countertops and stainless appliances"
  },
  {
    id: "master",
    name: "Master Suite",
    thumbnail: "/api/placeholder/200/150",
    hotspots: 4,
    description: "Luxurious master bedroom with walk-in closet and ensuite bathroom"
  },
  {
    id: "bathroom",
    name: "Master Bathroom",
    thumbnail: "/api/placeholder/200/150",
    hotspots: 3,
    description: "Spa-like bathroom with dual vanities and walk-in shower"
  },
  {
    id: "garage",
    name: "Two-Car Garage",
    thumbnail: "/api/placeholder/200/150",
    hotspots: 2,
    description: "Spacious garage with storage and direct home access"
  }
]

export function MaravillaVirtualTours() {
  const [selectedTour, setSelectedTour] = useState<VirtualTour | null>(null)
  const [selectedRoom, setSelectedRoom] = useState<TourRoom | null>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentView, setCurrentView] = useState<"tour" | "rooms" | "amenities">("tour")

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Play className="w-4 h-4 mr-2" />
            Virtual Experience
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Maravilla From Anywhere
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take immersive virtual tours of our beautiful homes and community amenities. 
            Experience Maravilla living before you visit in person with our cutting-edge virtual reality technology.
          </p>
        </div>

        {/* Tour Navigation */}
        <div className="mb-12">
          <Tabs value={currentView} onValueChange={(value) => setCurrentView(value as any)}>
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
              <TabsTrigger value="tour">Home Tours</TabsTrigger>
              <TabsTrigger value="rooms">Room Details</TabsTrigger>
              <TabsTrigger value="amenities">Amenities</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Home Tours */}
        {currentView === "tour" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {virtualTours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center relative">
                    <div className="text-center text-gray-500">
                      <Camera className="w-16 h-16 mx-auto mb-2 opacity-50 group-hover:scale-110 transition-transform" />
                      <p className="text-sm font-medium">{tour.title}</p>
                    </div>
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                      <Button size="lg" className="rounded-full w-16 h-16">
                        <Play className="w-8 h-8" />
                      </Button>
                    </div>
                    
                    {/* Quality Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90">
                        {tour.quality}
                      </Badge>
                    </div>
                    
                    {/* Interactive Badge */}
                    {tour.isInteractive && (
                      <div className="absolute top-4 left-4">
                        <Badge variant="outline" className="bg-white/90">
                          <Eye className="w-3 h-3 mr-1" />
                          Interactive
                        </Badge>
                      </div>
                    )}
                    
                    {/* Duration Badge */}
                    <div className="absolute bottom-4 right-4">
                      <Badge variant="secondary" className="bg-white/90">
                        {tour.duration}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {tour.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {tour.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {tour.features.slice(0, 2).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {tour.features.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{tour.features.length - 2}
                      </Badge>
                    )}
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full">
                        <Play className="w-4 h-4 mr-2" />
                        Start Tour
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-6xl h-[80vh]">
                      <DialogHeader>
                        <div className="flex items-center justify-between">
                          <DialogTitle className="flex items-center">
                            <Camera className="w-5 h-5 mr-2" />
                            {tour.title}
                          </DialogTitle>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => setIsMuted(!isMuted)}>
                              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => setIsFullscreen(!isFullscreen)}>
                              <Maximize className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Settings className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </DialogHeader>
                      <div className="flex-1 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center relative">
                        <div className="text-center text-gray-500">
                          <Play className="w-20 h-20 mx-auto mb-4 opacity-50" />
                          <p className="text-xl font-semibold">Virtual Tour Player</p>
                          <p className="text-sm mb-4">{tour.description}</p>
                          <div className="flex gap-2 justify-center">
                            <Button>
                              <Play className="w-4 h-4 mr-2" />
                              Play Tour
                            </Button>
                            <Button variant="outline">
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </Button>
                            <Button variant="outline">
                              <Share2 className="w-4 h-4 mr-2" />
                              Share
                            </Button>
                          </div>
                        </div>
                        
                        {/* Tour Controls */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                          <Button size="sm" variant="secondary">
                            <RotateCcw className="w-4 h-4 mr-1" />
                            Reset View
                          </Button>
                          <Button size="sm" variant="secondary">
                            <Eye className="w-4 h-4 mr-1" />
                            Fullscreen
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Room Details */}
        {currentView === "rooms" && (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Explore Every Room
              </h3>
              <p className="text-gray-600">
                Click on any room to see detailed 360° views and interactive hotspots
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tourRooms.map((room) => (
                <Card 
                  key={room.id} 
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 group"
                  onClick={() => setSelectedRoom(room)}
                >
                  <CardHeader className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <Home className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p className="text-sm">{room.name}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{room.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{room.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        <Eye className="w-3 h-3 mr-1" />
                        {room.hotspots} hotspots
                      </Badge>
                      <Button size="sm" variant="outline">
                        <Play className="w-3 h-3 mr-1" />
                        Explore
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Amenities */}
        {currentView === "amenities" && (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Community Amenities Virtual Tours
              </h3>
              <p className="text-gray-600">
                Experience our resort-style amenities through immersive virtual tours
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Resort-Style Pool", icon: Pool, description: "Olympic-sized pool with cabanas" },
                { name: "Fitness Center", icon: Dumbbell, description: "State-of-the-art gym equipment" },
                { name: "Walking Trails", icon: TreePine, description: "Beautiful nature trails" },
                { name: "Game Room", icon: Gamepad2, description: "Entertainment and recreation" },
                { name: "Coffee Shop", icon: Coffee, description: "Community gathering space" },
                { name: "Security Gate", icon: Shield, description: "24/7 community security" }
              ].map((amenity, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                  <CardHeader className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <amenity.icon className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p className="text-sm">{amenity.name}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{amenity.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{amenity.description}</p>
                    <Button size="sm" className="w-full">
                      <Play className="w-3 h-3 mr-1" />
                      Virtual Tour
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready for an In-Person Tour?
              </h3>
              <p className="text-gray-600 mb-6">
                Experience Maravilla in person with a guided tour by our sales team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule In-Person Tour
                </Button>
                <Button size="lg" variant="outline">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (702) 555-MARAVILLA
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
