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
  Users, 
  CheckCircle, 
  Award, 
  Heart, 
  MessageCircle, 
  Download, 
  Eye,
  Building,
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
  Zap,
  Plus,
  Settings,
  UserPlus,
  Share2,
  Copy,
  Edit3,
  Trash2,
  Upload,
  Image as ImageIcon,
  Link as LinkIcon,
  ExternalLink,
  ChevronRight,
  MoreVertical,
  Crown as PremiumIcon
} from "lucide-react"
import { useState, useEffect } from "react"

export default function HireArtistsGroupsPage() {
  const [activeTab, setActiveTab] = useState("find-groups")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilters, setSelectedFilters] = useState({
    username: "",
    language: "",
    location: "",
    category: "",
    industry: "",
    rating: ""
  })
  const [showFilters, setShowFilters] = useState(false)
  const [showCreateGroup, setShowCreateGroup] = useState(false)
  const [groups, setGroups] = useState([])
  const [filteredGroups, setFilteredGroups] = useState([])
  const [myGroups, setMyGroups] = useState([])
  const [myMemberships, setMyMemberships] = useState([])

  // Sample group data
  const sampleGroups = [
    {
      id: 1,
      name: "Digital Art Collective",
      category: "Design & Creative",
      industry: "Creative Services",
      location: { country: "USA", state: "NY", city: "New York" },
      language: "English",
      admin: "Eva Murphy",
      members: 24,
      rating: 4.8,
      reviewCount: 15,
      banner: "/api/placeholder/400/200",
      profile: "/api/placeholder/80/80",
      about: "A collaborative group of digital artists specializing in concept art, illustration, and visual storytelling. We work together on projects and share knowledge.",
      services: ["Digital Illustration", "Concept Art", "Brand Design", "UI/UX Design"],
      groupLink: "artisthub.com/groups/digital-art-collective",
      socialLinks: {
        instagram: "@digitalartcollective",
        twitter: "@digitalartgroup",
        linkedin: "Digital Art Collective"
      },
      isAdmin: false,
      isMember: false,
      hubCoinsDeduction: 30
    },
    {
      id: 2,
      name: "Tech Creatives Hub",
      category: "Technology",
      industry: "Software Development",
      location: { country: "Canada", state: "ON", city: "Toronto" },
      language: "English",
      admin: "Alex Chen",
      members: 18,
      rating: 4.9,
      reviewCount: 12,
      banner: "/api/placeholder/400/200",
      profile: "/api/placeholder/80/80",
      about: "Technology-focused creative group working on innovative projects combining art and technology. We explore AI, VR, and digital experiences.",
      services: ["Web Development", "Mobile Apps", "AI Integration", "Digital Experiences"],
      groupLink: "artisthub.com/groups/tech-creatives-hub",
      socialLinks: {
        linkedin: "Tech Creatives Hub",
        twitter: "@techcreatives"
      },
      isAdmin: true,
      isMember: true,
      hubCoinsDeduction: 30
    }
  ]

  // Filter options
  const filterOptions = {
    language: ["English", "Spanish", "French", "German", "Japanese", "Chinese", "Portuguese", "Italian"],
    location: {
      country: ["USA", "Canada", "UK", "Australia", "Germany", "France", "Japan", "India"],
      state: {
        "USA": ["NY", "CA", "TX", "FL", "IL", "PA", "OH", "GA"],
        "Canada": ["ON", "BC", "AB", "QC", "MB", "SK", "NS", "NB"],
        "UK": ["England", "Scotland", "Wales", "Northern Ireland"],
        "Australia": ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"]
      },
      city: {
        "NY": ["New York", "Buffalo", "Rochester", "Yonkers", "Syracuse"],
        "CA": ["Los Angeles", "San Francisco", "San Diego", "San Jose", "Fresno"],
        "ON": ["Toronto", "Ottawa", "Mississauga", "Hamilton", "London"],
        "England": ["London", "Birmingham", "Manchester", "Liverpool", "Leeds"]
      }
    },
    category: [
      "Design & Creative", "Technology", "Arts & Culture", "Marketing & Advertising",
      "Fashion & Beauty", "Entertainment", "Education", "Healthcare",
      "Finance", "Real Estate", "Food & Beverage", "Travel & Tourism"
    ],
    industry: [
      "Creative Services", "Software Development", "Digital Marketing", "Content Creation",
      "Brand Design", "Web Development", "Mobile Apps", "Photography",
      "Video Production", "Animation", "3D Modeling", "Consulting"
    ],
    rating: ["4.5+", "4.0+", "3.5+", "3.0+", "All Ratings"]
  }

  // Search and filter functionality
  useEffect(() => {
    let filtered = sampleGroups.filter(group => {
      const matchesSearch = searchQuery === "" || 
        group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        group.admin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        group.about.toLowerCase().includes(searchQuery.toLowerCase()) ||
        group.services.some(service => service.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesUsername = selectedFilters.username === "" || 
        group.admin.toLowerCase().includes(selectedFilters.username.toLowerCase())

      const matchesLanguage = selectedFilters.language === "" || group.language === selectedFilters.language
      const matchesCategory = selectedFilters.category === "" || group.category === selectedFilters.category
      const matchesIndustry = selectedFilters.industry === "" || group.industry === selectedFilters.industry
      const matchesLocation = selectedFilters.location === "" || 
        group.location.city.toLowerCase().includes(selectedFilters.location.toLowerCase()) ||
        group.location.state.toLowerCase().includes(selectedFilters.location.toLowerCase()) ||
        group.location.country.toLowerCase().includes(selectedFilters.location.toLowerCase())

      const matchesRating = selectedFilters.rating === "" || 
        (selectedFilters.rating === "4.5+" && group.rating >= 4.5) ||
        (selectedFilters.rating === "4.0+" && group.rating >= 4.0) ||
        (selectedFilters.rating === "3.5+" && group.rating >= 3.5) ||
        (selectedFilters.rating === "3.0+" && group.rating >= 3.0) ||
        selectedFilters.rating === "All Ratings"

      return matchesSearch && matchesUsername && matchesLanguage && matchesCategory && 
             matchesIndustry && matchesLocation && matchesRating
    })

    setFilteredGroups(filtered)
  }, [searchQuery, selectedFilters])

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
  }

  const clearFilters = () => {
    setSelectedFilters({
      username: "",
      language: "",
      location: "",
      category: "",
      industry: "",
      rating: ""
    })
  }

  const getActiveFiltersCount = () => {
    let count = 0
    Object.values(selectedFilters).forEach(value => {
      if (value !== "") count++
    })
    return count
  }

  const handleSocialLinkClick = (groupName, platform) => {
    const confirmed = window.confirm(
      `Clicking this ${platform} link will deduct 30 Hub Coins from your wallet. Continue?`
    )
    if (confirmed) {
      // Deduct Hub Coins logic here
      alert(`30 Hub Coins deducted! Opening ${platform} link for ${groupName}`)
    }
  }

  const handleSendHubCoins = (groupId) => {
    const amount = prompt("Enter amount of Hub Coins to send:")
    if (amount && !isNaN(amount) && amount > 0) {
      alert(`Sending ${amount} Hub Coins to group ${groupId}`)
    }
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
              <h1 className="text-xl font-semibold text-slate-900">Hire Artists Groups</h1>
              <p className="text-sm text-slate-500">Find and manage creative artist groups</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <input 
                type="text" 
                placeholder="Search groups by name, admin, or services..." 
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
            <Button 
              onClick={() => setShowCreateGroup(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create Group
            </Button>
          </div>
        </header>

        <div className="flex flex-1 gap-6 p-6 bg-slate-50">
          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Tabs */}
            <div className="flex space-x-1 bg-slate-100 p-1 rounded-lg w-fit">
              <button
                onClick={() => setActiveTab("find-groups")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "find-groups"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Find Groups
              </button>
              <button
                onClick={() => setActiveTab("my-groups")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "my-groups"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                My Groups
              </button>
              <button
                onClick={() => setActiveTab("my-memberships")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "my-memberships"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                My Memberships
              </button>
            </div>

            {/* Find Groups Tab */}
            {activeTab === "find-groups" && (
              <>
                {/* Results Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                      {filteredGroups.length} Groups Found
                    </h2>
                    <p className="text-sm text-slate-500">
                      {searchQuery ? `Search results for "${searchQuery}"` : "Discover creative artist groups"}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-600">Sort by:</span>
                    <select className="border border-slate-200 rounded-lg px-3 py-1 text-sm">
                      <option>Rating (High to Low)</option>
                      <option>Rating (Low to High)</option>
                      <option>Members (High to Low)</option>
                      <option>Name (A-Z)</option>
                    </select>
                  </div>
                </div>

                {/* Groups Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredGroups.map((group) => (
                    <Card key={group.id} className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-0">
                        {/* Group Banner */}
                        <div className="relative h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-lg">
                          <div className="absolute inset-0 bg-black/20 rounded-t-lg"></div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="font-semibold text-white text-lg">{group.name}</h3>
                            <p className="text-white/90 text-sm">{group.category}</p>
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                              <Users className="h-6 w-6 text-slate-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm text-slate-600">Admin:</span>
                                <span className="text-sm font-medium">{group.admin}</span>
                              </div>
                              <div className="flex items-center gap-1 mb-2">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm font-medium">{group.rating}</span>
                                <span className="text-sm text-slate-500">({group.reviewCount} reviews)</span>
                              </div>
                              <div className="flex items-center gap-1 text-sm text-slate-500">
                                <MapPin className="h-3 w-3" />
                                <span>{group.location.city}, {group.location.state}</span>
                              </div>
                            </div>
                          </div>

                          <p className="text-sm text-slate-700 mb-4 line-clamp-2">{group.about}</p>

                          <div className="space-y-3">
                            {/* Services */}
                            <div>
                              <h4 className="text-xs font-medium text-slate-600 mb-2">Services</h4>
                              <div className="flex flex-wrap gap-1">
                                {group.services.slice(0, 3).map((service, index) => (
                                  <Badge key={index} variant="outline" className="text-xs px-2 py-1">
                                    {service}
                                  </Badge>
                                ))}
                                {group.services.length > 3 && (
                                  <Badge variant="outline" className="text-xs px-2 py-1">
                                    +{group.services.length - 3} more
                                  </Badge>
                                )}
                              </div>
                            </div>

                            {/* Group Info */}
                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-4">
                                <span className="text-slate-600">{group.members} members</span>
                                <span className="text-slate-600">{group.language}</span>
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {group.industry}
                              </Badge>
                            </div>

                            {/* Social Links */}
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-slate-600">Social:</span>
                              {group.socialLinks.instagram && (
                                <button
                                  onClick={() => handleSocialLinkClick(group.name, "Instagram")}
                                  className="text-pink-500 hover:text-pink-600 transition-colors"
                                >
                                  <Instagram className="h-4 w-4" />
                                </button>
                              )}
                              {group.socialLinks.twitter && (
                                <button
                                  onClick={() => handleSocialLinkClick(group.name, "Twitter")}
                                  className="text-blue-500 hover:text-blue-600 transition-colors"
                                >
                                  <Twitter className="h-4 w-4" />
                                </button>
                              )}
                              {group.socialLinks.linkedin && (
                                <button
                                  onClick={() => handleSocialLinkClick(group.name, "LinkedIn")}
                                  className="text-blue-600 hover:text-blue-700 transition-colors"
                                >
                                  <Linkedin className="h-4 w-4" />
                                </button>
                              )}
                              <div className="flex items-center gap-1 text-xs text-slate-500 ml-auto">
                                <Coins className="h-3 w-3" />
                                <span>-30 coins</span>
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-2 pt-2">
                              <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                                <Eye className="h-3 w-3 mr-1" />
                                View Group
                              </Button>
                              <Button size="sm" variant="outline" className="border-slate-200">
                                <UserPlus className="h-3 w-3" />
                              </Button>
                              <Button size="sm" variant="outline" className="border-slate-200">
                                <Heart className="h-3 w-3" />
                              </Button>
                            </div>

                            {/* Group Link */}
                            <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                              <LinkIcon className="h-3 w-3 text-slate-400" />
                              <span className="text-xs text-slate-500 truncate">{group.groupLink}</span>
                              <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                                <Copy className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {filteredGroups.length === 0 && (
                  <div className="text-center py-12">
                    <Users className="h-12 w-12 mx-auto text-slate-300 mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">No groups found</h3>
                    <p className="text-slate-500 mb-4">Try adjusting your search criteria or filters</p>
                    <Button onClick={clearFilters} variant="outline">
                      Clear Filters
                    </Button>
                  </div>
                )}
              </>
            )}

            {/* My Groups Tab */}
            {activeTab === "my-groups" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-slate-900">My Groups</h2>
                  <Button onClick={() => setShowCreateGroup(true)} className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Plus className="h-4 w-4 mr-2" />
                    Create New Group
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sampleGroups.filter(group => group.isAdmin).map((group) => (
                    <Card key={group.id} className="bg-white rounded-lg border border-slate-200 shadow-sm">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <Users className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold text-slate-900">{group.name}</h3>
                              <Badge className="bg-green-100 text-green-700 text-xs">
                                Admin
                              </Badge>
                            </div>
                            <p className="text-sm text-slate-600 mb-2">{group.category}</p>
                            <div className="flex items-center gap-1 mb-2">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{group.rating}</span>
                              <span className="text-sm text-slate-500">({group.reviewCount} reviews)</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-600">{group.members} members</span>
                            <Button size="sm" variant="outline" className="text-xs">
                              <UserPlus className="h-3 w-3 mr-1" />
                              Add Member
                            </Button>
                          </div>

                          <div className="flex gap-2">
                            <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                              <Settings className="h-3 w-3 mr-1" />
                              Manage
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => handleSendHubCoins(group.id)}>
                              <Coins className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* My Memberships Tab */}
            {activeTab === "my-memberships" && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-slate-900">My Memberships</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sampleGroups.filter(group => group.isMember && !group.isAdmin).map((group) => (
                    <Card key={group.id} className="bg-white rounded-lg border border-slate-200 shadow-sm">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                            <Users className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-slate-900 mb-1">{group.name}</h3>
                            <p className="text-sm text-slate-600 mb-2">{group.category}</p>
                            <div className="flex items-center gap-1 mb-2">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{group.rating}</span>
                              <span className="text-sm text-slate-500">({group.reviewCount} reviews)</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-600">Member since Jan 2024</span>
                            <Badge className="bg-green-100 text-green-700 text-xs">
                              Active
                            </Badge>
                          </div>

                          <div className="flex gap-2">
                            <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                              <Eye className="h-3 w-3 mr-1" />
                              View Group
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => handleSendHubCoins(group.id)}>
                              <Coins className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
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
                  {/* Username Filter */}
                  <div>
                    <h4 className="text-sm font-medium text-slate-700 mb-3">Search by Username</h4>
                    <Input
                      placeholder="Enter admin username"
                      value={selectedFilters.username}
                      onChange={(e) => handleFilterChange('username', e.target.value)}
                      className="text-sm"
                    />
                  </div>

                  {/* Language Filter */}
                  <div>
                    <h4 className="text-sm font-medium text-slate-700 mb-3">Language</h4>
                    <select
                      value={selectedFilters.language}
                      onChange={(e) => handleFilterChange('language', e.target.value)}
                      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                    >
                      <option value="">All Languages</option>
                      {filterOptions.language.map((language) => (
                        <option key={language} value={language}>{language}</option>
                      ))}
                    </select>
                  </div>

                  {/* Location Filter */}
                  <div>
                    <h4 className="text-sm font-medium text-slate-700 mb-3">Location</h4>
                    <Input
                      placeholder="Enter city, state, or country"
                      value={selectedFilters.location}
                      onChange={(e) => handleFilterChange('location', e.target.value)}
                      className="text-sm"
                    />
                  </div>

                  {/* Category Filter */}
                  <div>
                    <h4 className="text-sm font-medium text-slate-700 mb-3">Category</h4>
                    <select
                      value={selectedFilters.category}
                      onChange={(e) => handleFilterChange('category', e.target.value)}
                      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                    >
                      <option value="">All Categories</option>
                      {filterOptions.category.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
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

                  {/* Rating Filter */}
                  <div>
                    <h4 className="text-sm font-medium text-slate-700 mb-3">Rating</h4>
                    <select
                      value={selectedFilters.rating}
                      onChange={(e) => handleFilterChange('rating', e.target.value)}
                      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                    >
                      <option value="">All Ratings</option>
                      {filterOptions.rating.map((rating) => (
                        <option key={rating} value={rating}>{rating}</option>
                      ))}
                    </select>
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

              {/* Hub Coins Info */}
              <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-slate-900 text-sm">
                    <Coins className="h-4 w-4 text-yellow-600" />
                    Hub Coins System
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 space-y-3">
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <ExternalLink className="h-3 w-3 text-blue-600" />
                      <span className="text-slate-700">Social links cost 30 coins</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Send className="h-3 w-3 text-green-600" />
                      <span className="text-slate-700">Send coins to groups</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Settings className="h-3 w-3 text-purple-600" />
                      <span className="text-slate-700">Manage deductions in backend</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Create Group Modal */}
        {showCreateGroup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-slate-100">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-slate-900">
                    <Plus className="h-5 w-5 text-blue-600" />
                    Create New Group
                  </CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setShowCreateGroup(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">Group Profile Image</label>
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center">
                      <Upload className="h-8 w-8 mx-auto text-slate-400 mb-2" />
                      <p className="text-sm text-slate-600">Upload group profile</p>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">Group Banner</label>
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center">
                      <ImageIcon className="h-8 w-8 mx-auto text-slate-400 mb-2" />
                      <p className="text-sm text-slate-600">Upload group banner</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">Group Name</label>
                    <Input placeholder="Enter group name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">Group Category</label>
                    <select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm">
                      <option value="">Select category</option>
                      {filterOptions.category.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">About Group</label>
                  <textarea 
                    placeholder="Describe your group, its purpose, and what members can expect..."
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm h-24 resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">Location</label>
                    <Input placeholder="Enter specific location" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">Industry</label>
                    <select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm">
                      <option value="">Select industry</option>
                      {filterOptions.industry.map((industry) => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Services Offered</label>
                  <div className="border border-slate-200 rounded-lg p-3">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge className="bg-blue-100 text-blue-700">Digital Design</Badge>
                      <Badge className="bg-blue-100 text-blue-700">Web Development</Badge>
                    </div>
                    <Input placeholder="Add services (press Enter to add)" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Social Media Links</label>
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <Instagram className="h-4 w-4 text-pink-500 mt-2" />
                      <Input placeholder="Instagram handle" />
                    </div>
                    <div className="flex gap-2">
                      <Twitter className="h-4 w-4 text-blue-500 mt-2" />
                      <Input placeholder="Twitter handle" />
                    </div>
                    <div className="flex gap-2">
                      <Linkedin className="h-4 w-4 text-blue-600 mt-2" />
                      <Input placeholder="LinkedIn profile" />
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    <Coins className="h-3 w-3 inline mr-1" />
                    Each social link click will deduct 30 Hub Coins
                  </p>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button 
                    onClick={() => setShowCreateGroup(false)}
                    variant="outline" 
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                    Create Group
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </SidebarInset>
    </SidebarProvider>
  )
}
