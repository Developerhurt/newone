import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  Building, 
  CheckCircle, 
  Award, 
  Heart, 
  MessageCircle, 
  Download, 
  Eye,
  Users,
  Globe,
  Phone,
  Mail,
  Calendar,
  Languages,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  ChevronDown,
  X,
  SlidersHorizontal,
  Shield,
  Coins,
  Send,
  Gift,
  CreditCard,
  FileText,
  Clock,
  Info,
  AlertCircle,
  Briefcase,
  TrendingUp,
  DollarSign,
  Users2,
  Crown,
  Zap
} from "lucide-react"
import { useState, useEffect } from "react"

export default function FindBusinessPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilters, setSelectedFilters] = useState({
    country: "",
    state: "",
    city: "",
    industry: "",
    verified: true
  })
  const [showFilters, setShowFilters] = useState(false)
  const [businesses, setBusinesses] = useState([])
  const [filteredBusinesses, setFilteredBusinesses] = useState([])

  // Sample business data
  const sampleBusinesses = [
    {
      id: 1,
      name: "Creative Studio Inc.",
      industry: "Design & Creative",
      location: { country: "USA", state: "NY", city: "New York" },
      verified: true,
      rating: 4.8,
      reviewCount: 32,
      logo: "/api/placeholder/80/80",
      description: "Leading creative agency specializing in brand design, digital marketing, and visual storytelling.",
      employees: "50-100",
      founded: "2018",
      website: "www.creativestudio.com",
      socialLinks: {
        instagram: "@creativestudio_inc",
        twitter: "@creativestudio",
        linkedin: "Creative Studio Inc"
      },
      services: ["Brand Design", "Digital Marketing", "Web Development", "Content Creation"],
      subscription: "Premium",
      canMessage: true,
      hourlyRate: "$100-150",
      availability: "Available"
    },
    {
      id: 2,
      name: "Tech Innovations Ltd",
      industry: "Technology",
      location: { country: "Canada", state: "ON", city: "Toronto" },
      verified: true,
      rating: 4.9,
      reviewCount: 28,
      logo: "/api/placeholder/80/80",
      description: "Cutting-edge technology solutions provider focused on AI, mobile apps, and digital transformation.",
      employees: "100-500",
      founded: "2015",
      website: "www.techinnovations.ca",
      socialLinks: {
        linkedin: "Tech Innovations Ltd",
        twitter: "@techinnovations"
      },
      services: ["Software Development", "AI Solutions", "Mobile Apps", "Cloud Services"],
      subscription: "Enterprise",
      canMessage: true,
      hourlyRate: "$150-200",
      availability: "Available"
    },
    {
      id: 3,
      name: "Art Gallery Co.",
      industry: "Arts & Culture",
      location: { country: "UK", state: "England", city: "London" },
      verified: true,
      rating: 4.7,
      reviewCount: 19,
      logo: "/api/placeholder/80/80",
      description: "Contemporary art gallery showcasing emerging and established artists from around the world.",
      employees: "10-50",
      founded: "2020",
      website: "www.artgallery.co.uk",
      socialLinks: {
        instagram: "@artgallery_london",
        facebook: "Art Gallery Co"
      },
      services: ["Art Curation", "Exhibition Management", "Artist Representation", "Art Consulting"],
      subscription: "Standard",
      canMessage: false,
      hourlyRate: "$75-125",
      availability: "Busy"
    }
  ]

  // Filter options
  const filterOptions = {
    country: ["USA", "Canada", "UK", "Australia", "Germany", "France", "Japan", "India"],
    state: {
      "USA": ["NY", "CA", "TX", "FL", "IL", "PA", "OH", "GA"],
      "Canada": ["ON", "BC", "AB", "QC", "MB", "SK", "NS", "NB"],
      "UK": ["England", "Scotland", "Wales", "Northern Ireland"],
      "Australia": ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"],
      "Germany": ["Bavaria", "North Rhine-Westphalia", "Baden-Württemberg", "Lower Saxony"],
      "France": ["Île-de-France", "Auvergne-Rhône-Alpes", "Occitanie", "Hauts-de-France"],
      "Japan": ["Tokyo", "Osaka", "Aichi", "Fukuoka", "Hokkaido"],
      "India": ["Maharashtra", "Karnataka", "Tamil Nadu", "Delhi", "Gujarat"]
    },
    city: {
      "NY": ["New York", "Buffalo", "Rochester", "Yonkers", "Syracuse"],
      "CA": ["Los Angeles", "San Francisco", "San Diego", "San Jose", "Fresno"],
      "ON": ["Toronto", "Ottawa", "Mississauga", "Hamilton", "London"],
      "England": ["London", "Birmingham", "Manchester", "Liverpool", "Leeds"],
      "NSW": ["Sydney", "Newcastle", "Wollongong", "Wagga Wagga", "Albury"]
    },
    industry: [
      "Design & Creative", "Technology", "Arts & Culture", "Marketing & Advertising",
      "Fashion & Beauty", "Entertainment", "Education", "Healthcare",
      "Finance", "Real Estate", "Food & Beverage", "Travel & Tourism",
      "Manufacturing", "Retail", "Consulting", "Non-Profit"
    ]
  }

  // Search and filter functionality
  useEffect(() => {
    let filtered = sampleBusinesses.filter(business => {
      // Search query (case-insensitive)
      const matchesSearch = searchQuery === "" || 
        business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.services.some(service => service.toLowerCase().includes(searchQuery.toLowerCase()))

      // Location filters
      const matchesCountry = selectedFilters.country === "" || business.location.country === selectedFilters.country
      const matchesState = selectedFilters.state === "" || business.location.state === selectedFilters.state
      const matchesCity = selectedFilters.city === "" || business.location.city === selectedFilters.city

      // Industry filter
      const matchesIndustry = selectedFilters.industry === "" || business.industry === selectedFilters.industry

      // Verified filter
      const matchesVerified = !selectedFilters.verified || business.verified

      return matchesSearch && matchesCountry && matchesState && 
             matchesCity && matchesIndustry && matchesVerified
    })

    setFilteredBusinesses(filtered)
  }, [searchQuery, selectedFilters])

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'country') {
      setSelectedFilters(prev => ({
        ...prev,
        [filterType]: value,
        state: "",
        city: ""
      }))
    } else if (filterType === 'state') {
      setSelectedFilters(prev => ({
        ...prev,
        [filterType]: value,
        city: ""
      }))
    } else {
      setSelectedFilters(prev => ({
        ...prev,
        [filterType]: value
      }))
    }
  }

  const clearFilters = () => {
    setSelectedFilters({
      country: "",
      state: "",
      city: "",
      industry: "",
      verified: true
    })
  }

  const getActiveFiltersCount = () => {
    let count = 0
    if (selectedFilters.country) count++
    if (selectedFilters.state) count++
    if (selectedFilters.city) count++
    if (selectedFilters.industry) count++
    if (!selectedFilters.verified) count++
    return count
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between bg-white border-b border-slate-200 shadow-sm">
          <div className="flex items-center gap-4 px-6">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
            <div>
              <h1 className="text-xl font-semibold text-slate-900">Find Business</h1>
              <p className="text-sm text-slate-500">Discover companies and business opportunities</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <input 
                type="text" 
                placeholder="Search businesses by name, industry, or services..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent w-80"
              />
            </div>
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              className="border-slate-200"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
              {getActiveFiltersCount() > 0 && (
                <Badge className="ml-2 bg-blue-600 text-white text-xs">
                  {getActiveFiltersCount()}
                </Badge>
              )}
            </Button>
          </div>
        </header>

        <div className="flex flex-1 gap-6 p-6 bg-slate-50">
          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Results Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  {filteredBusinesses.length} Businesses Found
                </h2>
                <p className="text-sm text-slate-500">
                  {searchQuery ? `Search results for "${searchQuery}"` : "Verified businesses and companies"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-600">Sort by:</span>
                <select className="border border-slate-200 rounded-lg px-3 py-1 text-sm">
                  <option>Rating (High to Low)</option>
                  <option>Rating (Low to High)</option>
                  <option>Company Size</option>
                  <option>Founded Year</option>
                  <option>Name (A-Z)</option>
                </select>
              </div>
            </div>

            {/* Businesses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBusinesses.map((business) => (
                <Card key={business.id} className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Building className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-slate-900 truncate">{business.name}</h3>
                          {business.verified && (
                            <Badge className="bg-green-100 text-green-700 text-xs px-2 py-0.5">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-slate-600 mb-2">{business.industry}</p>
                        <div className="flex items-center gap-1 mb-2">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{business.rating}</span>
                          <span className="text-sm text-slate-500">({business.reviewCount} reviews)</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-slate-500">
                          <MapPin className="h-3 w-3" />
                          <span>{business.location.city}, {business.location.state}, {business.location.country}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline" className="text-xs">
                            {business.employees} employees
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {business.subscription}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-slate-700 mb-4 line-clamp-2">{business.description}</p>

                    <div className="space-y-3">
                      {/* Services */}
                      <div>
                        <h4 className="text-xs font-medium text-slate-600 mb-2">Services</h4>
                        <div className="flex flex-wrap gap-1">
                          {business.services.slice(0, 3).map((service, index) => (
                            <Badge key={index} variant="outline" className="text-xs px-2 py-1">
                              {service}
                            </Badge>
                          ))}
                          {business.services.length > 3 && (
                            <Badge variant="outline" className="text-xs px-2 py-1">
                              +{business.services.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Business Info */}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4">
                          <span className="text-slate-600">Founded {business.founded}</span>
                          <span className="text-slate-600">{business.hourlyRate}/hr</span>
                        </div>
                        <Badge 
                          className={`text-xs ${
                            business.availability === 'Available' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-orange-100 text-orange-700'
                          }`}
                        >
                          {business.availability}
                        </Badge>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                          <Eye className="h-3 w-3 mr-1" />
                          View Profile
                        </Button>
                        {business.canMessage ? (
                          <Button size="sm" variant="outline" className="border-slate-200">
                            <MessageCircle className="h-3 w-3" />
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline" className="border-slate-200 opacity-50" disabled>
                            <Crown className="h-3 w-3" />
                          </Button>
                        )}
                        <Button size="sm" variant="outline" className="border-slate-200">
                          <Heart className="h-3 w-3" />
                        </Button>
                      </div>

                      {!business.canMessage && (
                        <div className="text-xs text-slate-500 bg-slate-50 p-2 rounded">
                          <Crown className="h-3 w-3 inline mr-1" />
                          Premium subscription required for messaging
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
                </div>

            {filteredBusinesses.length === 0 && (
              <div className="text-center py-12">
                <Building className="h-12 w-12 mx-auto text-slate-300 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">No businesses found</h3>
                <p className="text-slate-500 mb-4">Try adjusting your search criteria or filters</p>
                <Button onClick={clearFilters} variant="outline">
                  Clear Filters
                </Button>
              </div>
            )}
          </div>

          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-80 space-y-6">
              <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-slate-100">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-slate-900">
                      <Filter className="h-5 w-5 text-blue-600" />
                      Filters
                    </CardTitle>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setShowFilters(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  {/* Verified Filter */}
                  <div>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedFilters.verified}
                        onChange={(e) => handleFilterChange('verified', e.target.checked)}
                        className="rounded border-slate-300"
                      />
                      <span className="text-sm font-medium text-slate-700">Verified Businesses Only</span>
                    </label>
                  </div>

                  {/* Industry Filter */}
                  <div>
                    <h4 className="text-sm font-medium text-slate-700 mb-3">Industry</h4>
                    <select
                      value={selectedFilters.industry}
                      onChange={(e) => handleFilterChange('industry', e.target.value)}
                      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                    >
                      <option value="">All Industries</option>
                      {filterOptions.industry.map((industry) => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </div>

                  {/* Country Filter */}
                  <div>
                    <h4 className="text-sm font-medium text-slate-700 mb-3">Country</h4>
                    <select
                      value={selectedFilters.country}
                      onChange={(e) => handleFilterChange('country', e.target.value)}
                      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                    >
                      <option value="">All Countries</option>
                      {filterOptions.country.map((country) => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>

                  {/* State Filter */}
                  {selectedFilters.country && filterOptions.state[selectedFilters.country] && (
                    <div>
                      <h4 className="text-sm font-medium text-slate-700 mb-3">State/Province</h4>
                      <select
                        value={selectedFilters.state}
                        onChange={(e) => handleFilterChange('state', e.target.value)}
                        className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                      >
                        <option value="">All States</option>
                        {filterOptions.state[selectedFilters.country].map((state) => (
                          <option key={state} value={state}>{state}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* City Filter */}
                  {selectedFilters.state && filterOptions.city[selectedFilters.state] && (
                    <div>
                      <h4 className="text-sm font-medium text-slate-700 mb-3">City</h4>
                      <select
                        value={selectedFilters.city}
                        onChange={(e) => handleFilterChange('city', e.target.value)}
                        className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                      >
                        <option value="">All Cities</option>
                        {filterOptions.city[selectedFilters.state].map((city) => (
                          <option key={city} value={city}>{city}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Clear Filters */}
                  <Button 
                    onClick={clearFilters} 
                    variant="outline" 
                    className="w-full"
                  >
                    Clear All Filters
                  </Button>
                </CardContent>
              </Card>

              {/* Subscription Info */}
              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-slate-900 text-sm">
                    <Crown className="h-4 w-4 text-purple-600" />
                    Messaging Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 space-y-3">
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-3 w-3 text-blue-600" />
                      <span className="text-slate-700">Real-time messaging with businesses</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="h-3 w-3 text-yellow-600" />
                      <span className="text-slate-700">Instant notifications</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users2 className="h-3 w-3 text-green-600" />
                      <span className="text-slate-700">Connect with team members</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Crown className="h-3 w-3 text-purple-600" />
                      <span className="text-slate-700">Premium subscription required</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-purple-200">
                    <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700 text-white text-xs">
                      <Crown className="h-3 w-3 mr-1" />
                      Upgrade to Premium
                    </Button>
                  </div>
            </CardContent>
          </Card>
            </div>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}