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
  Sparkles
} from "lucide-react"

interface VirtualTour {
  id: string
  title: string
  type: "360" | "video" | "photos"
  duration: string
  thumbnail: string
}

interface MaravillaContactInfo {
  salesOffice: {
    phone: string
    email: string
    address: string
    hours: string
  }
  salesTeam: {
    name: string
    title: string
    phone: string
    email: string
    specialties: string[]
  }[]
}

const virtualTours: VirtualTour[] = [
  {
    id: "1",
    title: "360° Virtual Tour - Model Home A",
    type: "360",
    duration: "5 min",
    thumbnail: "/api/placeholder/300/200"
  },
  {
    id: "2", 
    title: "Video Walkthrough - Model Home B",
    type: "video",
    duration: "8 min",
    thumbnail: "/api/placeholder/300/200"
  },
  {
    id: "3",
    title: "Photo Gallery - Community Amenities",
    type: "photos", 
    duration: "3 min",
    thumbnail: "/api/placeholder/300/200"
  }
]

const maravillaContact: MaravillaContactInfo = {
  salesOffice: {
    phone: "(702) 555-MARAVILLA",
    email: "sales@maravillahomes.com",
    address: "123 Maravilla Boulevard, Las Vegas, NV 89134",
    hours: "Mon-Sun: 9AM-6PM"
  },
  salesTeam: [
    {
      name: "Sarah Johnson",
      title: "Senior Sales Consultant",
      phone: "(702) 555-0101",
      email: "sarah.johnson@maravillahomes.com",
      specialties: ["First-time Buyers", "Family Homes", "Investment Properties"]
    },
    {
      name: "Michael Chen",
      title: "Luxury Sales Specialist", 
      phone: "(702) 555-0102",
      email: "michael.chen@maravillahomes.com",
      specialties: ["Executive Homes", "Custom Builds", "Relocation Services"]
    },
    {
      name: "Elena Rodriguez",
      title: "Community Relations Manager",
      phone: "(702) 555-0103", 
      email: "elena.rodriguez@maravillahomes.com",
      specialties: ["Community Events", "Amenities Tours", "New Resident Services"]
    }
  ]
}

export function MaravillaVirtualTours() {
  const [selectedTour, setSelectedTour] = useState<VirtualTour | null>(null)

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
            Take a virtual tour of our beautiful homes and community amenities. 
            Experience Maravilla living before you visit in person.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {virtualTours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <CardHeader className="p-0">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center relative">
                  <div className="text-center text-gray-500">
                    <Camera className="w-16 h-16 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">{tour.title}</p>
                  </div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                    <Button size="lg" className="rounded-full w-16 h-16">
                      <Play className="w-8 h-8" />
                    </Button>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90">
                      {tour.duration}
                    </Badge>
                  </div>
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="outline" className="bg-white/90">
                      {tour.type === "360" ? "360°" : tour.type === "video" ? "Video" : "Photos"}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tour.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {tour.type === "360" 
                    ? "Interactive 360° tour of our model home"
                    : tour.type === "video" 
                    ? "Professional video walkthrough"
                    : "High-quality photo gallery of community features"
                  }
                </p>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full">
                      <Play className="w-4 h-4 mr-2" />
                      Start Tour
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <DialogHeader>
                      <DialogTitle>{tour.title}</DialogTitle>
                    </DialogHeader>
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p className="text-lg">Virtual Tour Player</p>
                        <p className="text-sm">Coming Soon</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export function MaravillaContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Connect With Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our experienced sales team is here to help you find your perfect Maravilla home. 
            Contact us today to schedule a tour or get more information.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-green-600" />
                  Sales Office
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Maravilla Sales Center</p>
                    <p className="text-gray-600">{maravillaContact.salesOffice.address}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-green-600" />
                    <span className="font-semibold">{maravillaContact.salesOffice.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-green-600" />
                    <span>{maravillaContact.salesOffice.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-green-600" />
                    <span>{maravillaContact.salesOffice.hours}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sales Team */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Meet Our Sales Team</h3>
              {maravillaContact.salesTeam.map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{member.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{member.title}</p>
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <Phone className="w-3 h-3 mr-1" />
                          {member.phone}
                        </div>
                        <div className="flex items-center text-sm text-gray-600 mb-3">
                          <Mail className="w-3 h-3 mr-1" />
                          {member.email}
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {member.specialties.map((specialty, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Contact
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Schedule Your Visit</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="tour" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="tour">Schedule Tour</TabsTrigger>
                    <TabsTrigger value="info">Get Info</TabsTrigger>
                    <TabsTrigger value="consultation">Consultation</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="tour" className="space-y-4">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium">Preferred Date</label>
                          <input type="date" className="w-full p-2 border rounded-md" />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Preferred Time</label>
                          <select className="w-full p-2 border rounded-md">
                            <option>9:00 AM</option>
                            <option>10:00 AM</option>
                            <option>11:00 AM</option>
                            <option>2:00 PM</option>
                            <option>3:00 PM</option>
                            <option>4:00 PM</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Your Name</label>
                        <input type="text" className="w-full p-2 border rounded-md" />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Phone Number</label>
                        <input type="tel" className="w-full p-2 border rounded-md" />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Email</label>
                        <input type="email" className="w-full p-2 border rounded-md" />
                      </div>
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule Tour
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="info" className="space-y-4">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Your Name</label>
                        <input type="text" className="w-full p-2 border rounded-md" />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Email</label>
                        <input type="email" className="w-full p-2 border rounded-md" />
                      </div>
                      <div>
                        <label className="text-sm font-medium">What information are you looking for?</label>
                        <textarea className="w-full p-2 border rounded-md h-20" placeholder="Tell us about your home buying needs..."></textarea>
                      </div>
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        <Mail className="w-4 h-4 mr-2" />
                        Send Request
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="consultation" className="space-y-4">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Your Name</label>
                        <input type="text" className="w-full p-2 border rounded-md" />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Phone Number</label>
                        <input type="tel" className="w-full p-2 border rounded-md" />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Best time to call</label>
                        <select className="w-full p-2 border rounded-md">
                          <option>Morning (9AM-12PM)</option>
                          <option>Afternoon (12PM-5PM)</option>
                          <option>Evening (5PM-8PM)</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Budget Range</label>
                        <select className="w-full p-2 border rounded-md">
                          <option>$400K - $500K</option>
                          <option>$500K - $600K</option>
                          <option>$600K - $700K</option>
                          <option>$700K+</option>
                        </select>
                      </div>
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        <Phone className="w-4 h-4 mr-2" />
                        Request Consultation
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
