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
  User, 
  CheckCircle, 
  Award, 
  Heart, 
  MessageCircle, 
  Download, 
  Eye,
  Users,
  MapPin as Location,
  Briefcase,
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
  AlertCircle
} from "lucide-react"
import { useState, useEffect } from "react"

export default function FindArtistPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilters, setSelectedFilters] = useState({
    gender: "",
    country: "",
    state: "",
    city: "",
    skills: [],
    designation: "",
    verified: true
  })
  const [showFilters, setShowFilters] = useState(false)
  const [artists, setArtists] = useState([])
  const [filteredArtists, setFilteredArtists] = useState([])

  // Sample artist data
  const sampleArtists = [
    {
      id: 1,
      name: "Eva Murphy",
      designation: "Senior Digital Artist",
      location: { country: "USA", state: "NY", city: "New York" },
      gender: "Female",
      skills: ["Digital Illustration", "Concept Art", "UI/UX Design", "Adobe Creative Suite"],
      verified: true,
      rating: 4.9,
      reviewCount: 24,
      avatar: "/api/placeholder/80/80",
      bio: "Passionate digital artist with over 5 years of experience in creating stunning visual content.",
      socialLinks: {
        instagram: "@evamurphy_art",
        twitter: "@evamurphy",
        youtube: "Eva Murphy Art",
        linkedin: "Eva Murphy"
      },
      languages: ["English", "Spanish", "French"],
      experience: "5+ years",
      hourlyRate: "$50-75",
      availability: "Available"
    },
    {
      id: 2,
      name: "Alex Chen",
      designation: "Creative Director",
      location: { country: "Canada", state: "ON", city: "Toronto" },
      gender: "Male",
      skills: ["Brand Design", "Creative Direction", "Team Leadership", "Adobe Creative Suite"],
      verified: true,
      rating: 4.8,
      reviewCount: 18,
      avatar: "/api/placeholder/80/80",
      bio: "Creative director with expertise in brand strategy and visual storytelling.",
      socialLinks: {
        instagram: "@alexchen_design",
        linkedin: "Alex Chen"
      },
      languages: ["English", "Mandarin"],
      experience: "8+ years",
      hourlyRate: "$75-100",
      availability: "Available"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      designation: "Illustrator",
      location: { country: "UK", state: "England", city: "London" },
      gender: "Female",
      skills: ["Illustration", "Children's Books", "Character Design", "Procreate"],
      verified: true,
      rating: 4.7,
      reviewCount: 15,
      avatar: "/api/placeholder/80/80",
      bio: "Specialized in children's book illustration and character design.",
      socialLinks: {
        instagram: "@sarahj_illustration",
        twitter: "@sarahj_art"
      },
      languages: ["English", "French"],
      experience: "6+ years",
      hourlyRate: "$40-60",
      availability: "Busy"
    }
  ]

  // Filter options
  const filterOptions = {
    gender: ["Male", "Female"],
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
    skills: [
      "Digital Illustration", "Concept Art", "UI/UX Design", "Brand Design", 
      "Character Design", "Logo Design", "Web Design", "Mobile App Design",
      "Adobe Creative Suite", "Figma", "Sketch", "Procreate", "Blender",
      "3D Modeling", "Animation", "Video Editing", "Photography",
      "Creative Direction", "Art Direction", "Team Leadership", "Project Management"
    ],
    designation: [
      "Digital Artist", "Illustrator", "Graphic Designer", "UI/UX Designer",
      "Creative Director", "Art Director", "Brand Designer", "Character Designer",
      "Concept Artist", "3D Artist", "Animator", "Photographer", "Video Editor"
    ]
  }

  // Search and filter functionality
  useEffect(() => {
    let filtered = sampleArtists.filter(artist => {
      // Search query (case-insensitive)
      const matchesSearch = searchQuery === "" || 
        artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        artist.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        artist.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))

      // Gender filter
      const matchesGender = selectedFilters.gender === "" || artist.gender === selectedFilters.gender

      // Location filters
      const matchesCountry = selectedFilters.country === "" || artist.location.country === selectedFilters.country
      const matchesState = selectedFilters.state === "" || artist.location.state === selectedFilters.state
      const matchesCity = selectedFilters.city === "" || artist.location.city === selectedFilters.city

      // Skills filter
      const matchesSkills = selectedFilters.skills.length === 0 || 
        selectedFilters.skills.some(skill => artist.skills.includes(skill))

      // Designation filter
      const matchesDesignation = selectedFilters.designation === "" || 
        artist.designation.toLowerCase().includes(selectedFilters.designation.toLowerCase())

      // Verified filter
      const matchesVerified = !selectedFilters.verified || artist.verified

      return matchesSearch && matchesGender && matchesCountry && matchesState && 
             matchesCity && matchesSkills && matchesDesignation && matchesVerified
    })

    setFilteredArtists(filtered)
  }, [searchQuery, selectedFilters])

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'skills') {
      setSelectedFilters(prev => ({
        ...prev,
        skills: prev.skills.includes(value) 
          ? prev.skills.filter(skill => skill !== value)
          : [...prev.skills, value]
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
      gender: "",
      country: "",
      state: "",
      city: "",
      skills: [],
      designation: "",
      verified: true
    })
  }

  const getActiveFiltersCount = () => {
    let count = 0
    if (selectedFilters.gender) count++
    if (selectedFilters.country) count++
    if (selectedFilters.state) count++
    if (selectedFilters.city) count++
    if (selectedFilters.skills.length > 0) count++
    if (selectedFilters.designation) count++
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
              <h1 className="text-xl font-semibold text-slate-900">Find Artist</h1>
              <p className="text-sm text-slate-500">Discover talented artists and creative professionals</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <input 
                type="text" 
                placeholder="Search artists by name, designation, or skills..." 
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
            {/* Verification Info Banner */}
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200">
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Verified Artists Only
                    </h3>
                    <p className="text-sm text-slate-600 mb-3">
                      All artists shown here are verified through government ID verification. 
                      Get verified to unlock exclusive benefits and connect with global artists.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>48-hour verification</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="h-3 w-3" />
                        <span>Submit any govt ID</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="h-3 w-3" />
                        <span>Exclusive benefits</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <FileText className="h-4 w-4 mr-2" />
                    Get Verified
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Results Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  {filteredArtists.length} Verified Artists Found
                </h2>
                <p className="text-sm text-slate-500">
                  {searchQuery ? `Search results for "${searchQuery}"` : "All verified artists with exclusive benefits"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-600">Sort by:</span>
                <select className="border border-slate-200 rounded-lg px-3 py-1 text-sm">
                  <option>Rating (High to Low)</option>
                  <option>Rating (Low to High)</option>
                  <option>Experience</option>
                  <option>Hourly Rate</option>
                  <option>Name (A-Z)</option>
                </select>
              </div>
            </div>

            {/* Artists Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArtists.map((artist) => (
                <Card key={artist.id} className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <User className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-slate-900 truncate">{artist.name}</h3>
                          {artist.verified && (
                            <Badge className="bg-green-100 text-green-700 text-xs px-2 py-0.5">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-slate-600 mb-2">{artist.designation}</p>
                        <div className="flex items-center gap-1 mb-2">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{artist.rating}</span>
                          <span className="text-sm text-slate-500">({artist.reviewCount} reviews)</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-slate-500">
                          <MapPin className="h-3 w-3" />
                          <span>{artist.location.city}, {artist.location.state}, {artist.location.country}</span>
                        </div>
                        {artist.verified && (
                          <div className="mt-2">
                            <div className="flex items-center gap-1 text-xs text-green-600">
                              <Coins className="h-3 w-3" />
                              <span>Hub Coins enabled</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-slate-700 mb-4 line-clamp-2">{artist.bio}</p>

                    <div className="space-y-3">
                      {/* Skills */}
                      <div>
                        <h4 className="text-xs font-medium text-slate-600 mb-2">Skills</h4>
                        <div className="flex flex-wrap gap-1">
                          {artist.skills.slice(0, 3).map((skill, index) => (
                            <Badge key={index} variant="outline" className="text-xs px-2 py-1">
                              {skill}
                            </Badge>
                          ))}
                          {artist.skills.length > 3 && (
                            <Badge variant="outline" className="text-xs px-2 py-1">
                              +{artist.skills.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Experience & Rate */}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4">
                          <span className="text-slate-600">{artist.experience}</span>
                          <span className="text-slate-600">{artist.hourlyRate}/hr</span>
                        </div>
                        <Badge 
                          className={`text-xs ${
                            artist.availability === 'Available' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-orange-100 text-orange-700'
                          }`}
                        >
                          {artist.availability}
                        </Badge>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                          <Eye className="h-3 w-3 mr-1" />
                          View Profile
                        </Button>
                        <Button size="sm" variant="outline" className="border-slate-200">
                          <MessageCircle className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline" className="border-slate-200">
                          <Heart className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredArtists.length === 0 && (
              <div className="text-center py-12">
                <Users className="h-12 w-12 mx-auto text-slate-300 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">No artists found</h3>
                <p className="text-slate-500 mb-4">Try adjusting your search criteria or filters</p>
                <Button onClick={clearFilters} variant="outline">
                  Clear Filters
                </Button>
              </div>
            )}

            {/* Verification Process Info */}
            <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
              <CardHeader className="bg-gradient-to-r from-slate-50 to-gray-50 border-b border-slate-100">
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <Info className="h-5 w-5 text-blue-600" />
                  How to Get Verified
                </CardTitle>
                <CardDescription>Join the verified artist community in just 3 steps</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">1. Submit Documents</h4>
                    <p className="text-sm text-slate-600">
                      Go to Account → Documents and upload any government-issued ID (Driver's License, Passport, etc.)
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">2. Wait for Review</h4>
                    <p className="text-sm text-slate-600">
                      Our admin team will review your documents within 48 hours and notify you of the status.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">3. Get Verified</h4>
                    <p className="text-sm text-slate-600">
                      Once approved, you'll receive your verified badge and unlock all exclusive benefits.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h5 className="font-medium text-slate-900 mb-1">Why Verification Matters</h5>
                      <p className="text-sm text-slate-600">
                        Verification ensures a safe, trustworthy community where artists can collaborate globally, 
                        transact securely with Hub Coins, and build meaningful professional relationships. 
                        Only verified artists can access premium features and exclusive opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-80 space-y-6">
              {/* Verification Benefits */}
              <Card className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-slate-900 text-sm">
                    <Award className="h-4 w-4 text-green-600" />
                    Verification Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 space-y-3">
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <Globe className="h-3 w-3 text-blue-600" />
                      <span className="text-slate-700">Unlock global collaborations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Coins className="h-3 w-3 text-yellow-600" />
                      <span className="text-slate-700">Send & receive Hub Coins</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-3 w-3 text-purple-600" />
                      <span className="text-slate-700">Message connections</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-3 w-3 text-green-600" />
                      <span className="text-slate-700">Unique verified badge</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Gift className="h-3 w-3 text-orange-600" />
                      <span className="text-slate-700">Exclusive offers & discounts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-3 w-3 text-yellow-600" />
                      <span className="text-slate-700">Send & receive ratings</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-green-200">
                    <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white text-xs">
                      <FileText className="h-3 w-3 mr-1" />
                      Verify Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

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
                      <span className="text-sm font-medium text-slate-700">Verified Artists Only</span>
                    </label>
                  </div>

                  {/* Gender Filter */}
                  <div>
                    <h4 className="text-sm font-medium text-slate-700 mb-3">Gender</h4>
                    <div className="space-y-2">
                      {filterOptions.gender.map((gender) => (
                        <label key={gender} className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="gender"
                            checked={selectedFilters.gender === gender}
                            onChange={() => handleFilterChange('gender', gender)}
                            className="border-slate-300"
                          />
                          <span className="text-sm text-slate-600">{gender}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Country Filter */}
                  <div>
                    <h4 className="text-sm font-medium text-slate-700 mb-3">Country</h4>
                    <select
                      value={selectedFilters.country}
                      onChange={(e) => {
                        handleFilterChange('country', e.target.value)
                        handleFilterChange('state', '')
                        handleFilterChange('city', '')
                      }}
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
                        onChange={(e) => {
                          handleFilterChange('state', e.target.value)
                          handleFilterChange('city', '')
                        }}
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

                  {/* Designation Filter */}
                  <div>
                    <h4 className="text-sm font-medium text-slate-700 mb-3">Designation</h4>
                    <select
                      value={selectedFilters.designation}
                      onChange={(e) => handleFilterChange('designation', e.target.value)}
                      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                    >
                      <option value="">All Designations</option>
                      {filterOptions.designation.map((designation) => (
                        <option key={designation} value={designation}>{designation}</option>
                      ))}
                    </select>
                  </div>

                  {/* Skills Filter */}
                  <div>
                    <h4 className="text-sm font-medium text-slate-700 mb-3">Skills</h4>
                    <div className="space-y-2 max-h-40 overflow-y-auto">
                      {filterOptions.skills.map((skill) => (
                        <label key={skill} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedFilters.skills.includes(skill)}
                            onChange={() => handleFilterChange('skills', skill)}
                            className="rounded border-slate-300"
                          />
                          <span className="text-sm text-slate-600">{skill}</span>
                        </label>
                      ))}
                    </div>
                  </div>

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
            </div>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}