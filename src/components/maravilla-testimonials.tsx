"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Star, 
  Quote, 
  ThumbsUp, 
  MessageCircle, 
  Calendar, 
  MapPin, 
  Home, 
  Users, 
  Heart,
  CheckCircle,
  Award,
  TrendingUp,
  Shield,
  Zap
} from "lucide-react"

interface Testimonial {
  id: string
  name: string
  role: string
  location: string
  rating: number
  review: string
  date: string
  verified: boolean
  avatar?: string
  homeType: string
  moveInDate: string
  features: string[]
}

interface ReviewStats {
  totalReviews: number
  averageRating: number
  ratingBreakdown: { rating: number; count: number; percentage: number }[]
  verifiedPurchases: number
  responseRate: string
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah & Michael Johnson",
    role: "New Homeowners",
    location: "Maravilla Drive",
    rating: 5,
    review: "We absolutely love our new home at Maravilla! The quality is exceptional and the community is amazing. The pool complex and fitness center are incredible amenities. The sales team was professional and made the entire process smooth.",
    date: "2 weeks ago",
    verified: true,
    homeType: "Single-Story Villa",
    moveInDate: "December 2024",
    features: ["Pool Access", "Fitness Center", "Smart Home", "Energy Efficient"]
  },
  {
    id: "2",
    name: "Elena Rodriguez",
    role: "Family of Four",
    location: "Desert Vista Lane",
    rating: 5,
    review: "Perfect for our growing family! The schools nearby are excellent and the community is so family-friendly. Our kids love the playground and walking trails. The home itself is beautifully designed with modern finishes.",
    date: "1 month ago",
    verified: true,
    homeType: "Two-Story Family Home",
    moveInDate: "November 2024",
    features: ["Family Friendly", "Great Schools", "Walking Trails", "Modern Design"]
  },
  {
    id: "3",
    name: "David Chen",
    role: "Executive",
    location: "Canyon Ridge Court",
    rating: 5,
    review: "The executive home exceeded all our expectations. The smart home technology is impressive and the energy efficiency is remarkable. The location is perfect - close to everything but still peaceful and private.",
    date: "3 weeks ago",
    verified: true,
    homeType: "Executive Home",
    moveInDate: "January 2025",
    features: ["Smart Home", "Energy Efficient", "Prime Location", "Executive Level"]
  },
  {
    id: "4",
    name: "Lisa & Tom Wilson",
    role: "Retirees",
    location: "Garden View Place",
    rating: 5,
    review: "We downsized to a townhome and couldn't be happier! Low maintenance living with all the amenities we need. The community events are wonderful and we've made great friends. Highly recommend Maravilla!",
    date: "1 week ago",
    verified: true,
    homeType: "Townhome",
    moveInDate: "December 2024",
    features: ["Low Maintenance", "Community Events", "Great Neighbors", "Perfect Size"]
  },
  {
    id: "5",
    name: "Maria & Carlos Garcia",
    role: "First-Time Buyers",
    location: "Maravilla Drive",
    rating: 5,
    review: "As first-time homebuyers, we were nervous about the process. The Maravilla team made everything so easy and explained everything clearly. Our home is beautiful and we love the energy-efficient features.",
    date: "2 weeks ago",
    verified: true,
    homeType: "Single-Story Villa",
    moveInDate: "January 2025",
    features: ["First-Time Buyer Friendly", "Energy Efficient", "Beautiful Design", "Great Support"]
  },
  {
    id: "6",
    name: "Jennifer & Robert Kim",
    role: "Investors",
    location: "Desert Vista Lane",
    rating: 5,
    review: "We purchased this as an investment property and couldn't be more pleased. The rental market is strong in this area and the home's modern features attract quality tenants. Great investment opportunity!",
    date: "1 month ago",
    verified: true,
    homeType: "Two-Story Family Home",
    moveInDate: "Rental Property",
    features: ["Investment Property", "Strong Rental Market", "Modern Features", "Quality Tenants"]
  }
]

const reviewStats: ReviewStats = {
  totalReviews: 127,
  averageRating: 4.9,
  ratingBreakdown: [
    { rating: 5, count: 118, percentage: 93 },
    { rating: 4, count: 7, percentage: 6 },
    { rating: 3, count: 2, percentage: 1 },
    { rating: 2, count: 0, percentage: 0 },
    { rating: 1, count: 0, percentage: 0 }
  ],
  verifiedPurchases: 124,
  responseRate: "98%"
}

export function MaravillaTestimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null)
  const [filterBy, setFilterBy] = useState<"all" | "verified" | "recent">("all")

  const filteredTestimonials = testimonials.filter(testimonial => {
    if (filterBy === "verified") return testimonial.verified
    if (filterBy === "recent") return testimonial.date.includes("week")
    return true
  })

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Star className="w-4 h-4 mr-2" />
            Customer Reviews
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Homeowners Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from real Maravilla homeowners about their 
            experience living in our community.
          </p>
        </div>

        {/* Review Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">{reviewStats.averageRating}</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>
              <div className="text-sm text-gray-600">Average Rating</div>
              <div className="text-xs text-gray-500 mt-1">Based on {reviewStats.totalReviews} reviews</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">{reviewStats.totalReviews}</div>
              <div className="text-sm text-gray-600">Total Reviews</div>
              <div className="text-xs text-gray-500 mt-1">From verified homeowners</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">{reviewStats.verifiedPurchases}</div>
              <div className="text-sm text-gray-600">Verified Purchases</div>
              <div className="text-xs text-gray-500 mt-1">Real homeowner reviews</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">{reviewStats.responseRate}</div>
              <div className="text-sm text-gray-600">Response Rate</div>
              <div className="text-xs text-gray-500 mt-1">We respond to all reviews</div>
            </CardContent>
          </Card>
        </div>

        {/* Rating Breakdown */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Rating Breakdown</h3>
          <div className="max-w-2xl mx-auto space-y-3">
            {reviewStats.ratingBreakdown.map((rating) => (
              <div key={rating.rating} className="flex items-center space-x-4">
                <div className="flex items-center w-16">
                  <span className="text-sm font-medium text-gray-700">{rating.rating}</span>
                  <Star className="w-4 h-4 fill-current text-yellow-400 ml-1" />
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${rating.percentage}%` }}
                  ></div>
                </div>
                <div className="text-sm text-gray-600 w-12 text-right">
                  {rating.count} ({rating.percentage}%)
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <Button 
            variant={filterBy === "all" ? "default" : "outline"}
            onClick={() => setFilterBy("all")}
          >
            All Reviews
          </Button>
          <Button 
            variant={filterBy === "verified" ? "default" : "outline"}
            onClick={() => setFilterBy("verified")}
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Verified Only
          </Button>
          <Button 
            variant={filterBy === "recent" ? "default" : "outline"}
            onClick={() => setFilterBy("recent")}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Recent Reviews
          </Button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedTestimonial(testimonial)}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback className="bg-green-100 text-green-600">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        {testimonial.verified && (
                          <Badge variant="outline" className="text-xs">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <MapPin className="w-3 h-3 mr-1" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < testimonial.rating 
                              ? 'fill-current text-yellow-400' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{testimonial.rating}/5</span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-500">{testimonial.date}</span>
                  </div>

                  {/* Review */}
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-green-200" />
                    <p className="text-sm text-gray-700 pl-4 line-clamp-4">
                      {testimonial.review}
                    </p>
                  </div>

                  {/* Home Details */}
                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                      <span className="flex items-center">
                        <Home className="w-3 h-3 mr-1" />
                        {testimonial.homeType}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {testimonial.moveInDate}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {testimonial.features.slice(0, 2).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {testimonial.features.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{testimonial.features.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <button className="flex items-center hover:text-green-600 transition-colors">
                        <ThumbsUp className="w-3 h-3 mr-1" />
                        Helpful
                      </button>
                      <button className="flex items-center hover:text-green-600 transition-colors">
                        <MessageCircle className="w-3 h-3 mr-1" />
                        Reply
                      </button>
                    </div>
                    <Button size="sm" variant="ghost" className="text-xs">
                      Read More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Write Your Own Success Story?
              </h3>
              <p className="text-gray-600 mb-6">
                Join our community of happy homeowners and experience the Maravilla difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <Home className="w-5 h-5 mr-2" />
                  View Available Homes
                </Button>
                <Button size="lg" variant="outline">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Tour
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
