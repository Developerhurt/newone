import React, { useState } from 'react';
import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  User, 
  MapPin, 
  Calendar, 
  Globe, 
  Download, 
  MessageCircle, 
  Heart, 
  Star, 
  Award, 
  Briefcase, 
  Instagram, 
  Twitter, 
  Youtube, 
  Linkedin, 
  Upload,
  X,
  Plus,
  ExternalLink,
  Share2,
  Bell,
  Mail,
  Phone,
  Building,
  Languages,
  CheckCircle,
  Coins,
  Edit3,
  Trash2,
  Github,
  Facebook,
  Copy,
  Eye,
  Search,
  Filter,
  TrendingUp,
  Gift,
  CalendarDays,
  Users,
  Handshake,
  FileText,
  Image,
  Settings,
  Shield,
  HelpCircle,
  FileCheck,
  CreditCard,
  DollarSign,
  Factory,
  Store
} from "lucide-react"

export default function BusinessViewProfilePage() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [hubCoins, setHubCoins] = useState(2500);

  const [profileData, setProfileData] = useState({
    companyName: "Creative Studio Inc.",
    businessEmail: "contact@creativestudio.com",
    businessPhone: "+1 (555) 123-4567",
    industry: "IT Industry",
    category: "Digital Services",
    foundedDate: "2018-03-15",
    companyType: "Private Limited",
    location: {
      country: "United States",
      state: "New York",
      city: "New York"
    },
    address: "123 Business Ave, New York, NY 10001",
    employeeRange: "50-100",
    about: "We are a leading digital creative agency specializing in innovative design solutions, digital marketing, and cutting-edge technology services. Our team of talented professionals delivers exceptional results for clients worldwide.",
    services: [
      "Digital Marketing",
      "Web Development", 
      "UI/UX Design",
      "Brand Identity",
      "Content Creation",
      "Social Media Management"
    ],
    socialLinks: {
      instagram: "@creativestudio_inc",
      twitter: "@creativestudio",
      youtube: "Creative Studio Official",
      linkedin: "Creative Studio Inc.",
      website: "www.creativestudio.com",
      threads: "@creativestudio_threads",
      x: "@creativestudio_x"
    },
    profileLink: "artisthub.com/business/creativestudio",
    rating: 4.8,
    totalReviews: 156,
    followers: 1250,
    connections: 890,
    isSubscribed: true,
    canSendMessages: true,
    mapLink: "https://maps.google.com/?q=123+Business+Ave,+New+York,+NY+10001",
    ownerDetails: {
      firstName: "Sarah",
      lastName: "Johnson",
      gender: "Female",
      about: "Passionate entrepreneur with 10+ years in digital marketing and creative services.",
      industry: "IT Industry",
      personalMobile: "+1 (555) 987-6543",
      personalEmail: "sarah.johnson@creativestudio.com",
      category: "Digital Services",
      dateOfBirth: "1985-06-15",
      languages: ["English (Native)", "Spanish (Fluent)", "French (Intermediate)"],
      resume: "sarah_johnson_resume.pdf",
      location: {
        country: "USA",
        state: "NY",
        city: "New York"
      },
      experience: [
        {
          id: 1,
          company: "Creative Studio Inc.",
          position: "CEO & Founder",
          duration: "2018 - Present",
          description: "Founded and led the company to become a leading digital agency"
        },
        {
          id: 2,
          company: "Tech Solutions Ltd.",
          position: "Marketing Director",
          duration: "2015 - 2018",
          description: "Led digital marketing initiatives and team management"
        }
      ]
    }
  });

  const [experience] = useState([
    {
      id: 1,
      company: "Creative Studio Inc.",
      position: "CEO & Founder",
      duration: "2018 - Present",
      description: "Leading the company's strategic direction and overseeing all operations."
    },
    {
      id: 2,
      company: "Digital Marketing Co.",
      position: "Senior Marketing Director",
      duration: "2015 - 2018",
      description: "Managed marketing campaigns for Fortune 500 companies."
    }
  ]);

  const [reviews] = useState([
    {
      id: 1,
      reviewer: "John Smith",
      rating: 5,
      comment: "Exceptional service! The team delivered exactly what we needed and more.",
      date: "2024-01-15"
    },
    {
      id: 2,
      reviewer: "Emily Davis",
      rating: 5,
      comment: "Professional, creative, and reliable. Highly recommend their services.",
      date: "2024-01-10"
    }
  ]);

  const handleSocialClick = (platform) => {
    const confirmDeduction = window.confirm(
      `Clicking this ${platform} link will deduct 30 Hub Coins. Your current balance: ${hubCoins} coins. Do you want to continue?`
    );
    
    if (confirmDeduction && hubCoins >= 30) {
      setHubCoins(prev => prev - 30);
      alert(`30 Hub Coins deducted! Opening ${platform} link...`);
      // In a real app, this would open the actual social media link
    } else if (hubCoins < 30) {
      alert('Insufficient Hub Coins! Please recharge your wallet.');
    }
  };

  const getIndustryIcon = (industry) => {
    switch (industry.toLowerCase()) {
      case 'it industry':
        return <Building className="h-5 w-5 text-blue-600" />;
      case 'manufacturing':
        return <Factory className="h-5 w-5 text-green-600" />;
      case 'retail':
        return <Store className="h-5 w-5 text-purple-600" />;
      default:
        return <Building className="h-5 w-5 text-slate-600" />;
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between bg-white border-b border-slate-200 shadow-sm">
          <div className="flex items-center gap-4 px-6">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
            <div>
              <h1 className="text-xl font-semibold text-slate-900">View Profile</h1>
              <p className="text-sm text-slate-500">Business profile</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <input 
                type="text" 
                placeholder="Search profile..." 
                className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              />
            </div>
            <Button variant="outline" size="sm" className="border-slate-200">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button variant="outline" className="border-slate-200">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <MessageCircle className="h-4 w-4 mr-2" />
              Message
            </Button>
          </div>
        </header>
        
        <div className="flex flex-1 gap-4 p-4 bg-slate-50">
          {/* Main Content */}
          <div className="flex-1 max-w-7xl mx-auto">
            <div className="space-y-8">
              {/* Profile Header */}
              <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Section - Profile Info */}
                    <div className="flex-1">
                      <div className="flex items-start gap-6">
                        {/* Company Logo */}
                        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                          <Building className="h-12 w-12 text-white" />
                        </div>
                        
                        {/* Basic Info */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h1 className="text-2xl font-bold text-slate-900">{profileData.companyName}</h1>
                            <Badge className="bg-green-100 text-green-700 text-xs px-2 py-1">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Verified
                            </Badge>
                          </div>
                          
                          <p className="text-lg text-slate-600 mb-3">{profileData.category}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
                            <div className="flex items-center gap-2">
                              {getIndustryIcon(profileData.industry)}
                              <span>{profileData.industry}</span>
                            </div>
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4 text-slate-400" />
                                  <span>Founded: {new Date(profileData.foundedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                                </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-slate-400" />
                              <span>{profileData.location.city}, {profileData.location.state}, {profileData.location.country}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4 text-slate-400" />
                              <span>{profileData.employeeRange} employees</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Building className="h-4 w-4 text-slate-400" />
                              <span>{profileData.companyType}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Award className="h-4 w-4 text-slate-400" />
                              <span>{profileData.category}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* About Section */}
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <Globe className="h-5 w-5 text-blue-600" />
                          About Company
                        </h3>
                        <p className="text-slate-700 leading-relaxed">
                          {profileData.about}
                        </p>
                      </div>
                      
                      {/* Services */}
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <Award className="h-5 w-5 text-purple-600" />
                          Services
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {profileData.services.slice(0, 6).map((service) => (
                            <Badge key={service} className="bg-blue-100 text-blue-700 px-3 py-1">
                              {service}
                            </Badge>
                          ))}
                          {profileData.services.length > 6 && (
                            <Badge className="bg-slate-100 text-slate-600 px-3 py-1">
                              +{profileData.services.length - 6} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Section - Actions & Social */}
                    <div className="lg:w-80 space-y-6">
                      {/* Ratings & Reviews */}
                      <div className="bg-slate-50 rounded-lg p-4 mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-slate-900">Ratings & Reviews</h4>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="font-semibold text-slate-900">{profileData.rating}</span>
                          </div>
                        </div>
                        <p className="text-sm text-slate-600">{profileData.totalReviews} reviews</p>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-3">
                        <Button 
                          variant={isFollowing ? "secondary" : "default"}
                          onClick={() => setIsFollowing(!isFollowing)}
                          className="w-full"
                        >
                          <Heart className={`h-4 w-4 mr-2 ${isFollowing ? 'fill-current' : ''}`} />
                          {isFollowing ? 'Following' : 'Follow'}
                        </Button>
                        {profileData.canSendMessages ? (
                          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Send & Receive Messages
                          </Button>
                        ) : (
                          <Button variant="outline" className="w-full border-slate-200" disabled>
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Subscribe to Message
                          </Button>
                        )}
                        {isSubscribed ? (
                          <Button variant="secondary" className="w-full" disabled>
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Subscribed
                          </Button>
                        ) : (
                          <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                            <CreditCard className="h-4 w-4 mr-2" />
                            Subscribe
                          </Button>
                        )}
                      </div>
                      
                      {/* Social Links */}
                      <div className="bg-slate-50 rounded-lg p-4">
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <Globe className="h-4 w-4 text-pink-600" />
                          Social Links
                          <Badge className="bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5">
                            <Coins className="h-3 w-3 mr-1" />
                            30 coins per click
                          </Badge>
                        </h4>
                        <div className="space-y-2">
                          {profileData.socialLinks.instagram && (
                            <a 
                              href="#" 
                              onClick={() => handleSocialClick('Instagram')}
                              className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors"
                            >
                              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center">
                                <Instagram className="h-4 w-4 text-white" />
                              </div>
                              <span className="text-sm font-medium">{profileData.socialLinks.instagram}</span>
                            </a>
                          )}
                          {profileData.socialLinks.twitter && (
                            <a 
                              href="#" 
                              onClick={() => handleSocialClick('Twitter')}
                              className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors"
                            >
                              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                                <Twitter className="h-4 w-4 text-white" />
                              </div>
                              <span className="text-sm font-medium">{profileData.socialLinks.twitter}</span>
                            </a>
                          )}
                          {profileData.socialLinks.youtube && (
                            <a 
                              href="#" 
                              onClick={() => handleSocialClick('YouTube')}
                              className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors"
                            >
                              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                                <Youtube className="h-4 w-4 text-white" />
                              </div>
                              <span className="text-sm font-medium">{profileData.socialLinks.youtube}</span>
                            </a>
                          )}
                          {profileData.socialLinks.linkedin && (
                            <a 
                              href="#" 
                              onClick={() => handleSocialClick('LinkedIn')}
                              className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors"
                            >
                              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                                <Linkedin className="h-4 w-4 text-white" />
                              </div>
                              <span className="text-sm font-medium">{profileData.socialLinks.linkedin}</span>
                            </a>
                          )}
                          {profileData.socialLinks.x && (
                            <a 
                              href="#" 
                              onClick={() => handleSocialClick('X (Twitter)')}
                              className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors"
                            >
                              <div className="w-8 h-8 bg-gradient-to-br from-slate-600 to-slate-800 rounded-lg flex items-center justify-center">
                                <X className="h-4 w-4 text-white" />
                              </div>
                              <span className="text-sm font-medium">{profileData.socialLinks.x}</span>
                            </a>
                          )}
                          {profileData.socialLinks.threads && (
                            <a 
                              href="#" 
                              onClick={() => handleSocialClick('Threads')}
                              className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors"
                            >
                              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                                <X className="h-4 w-4 text-white" />
                              </div>
                              <span className="text-sm font-medium">{profileData.socialLinks.threads}</span>
                            </a>
                          )}
                          {profileData.socialLinks.website && (
                            <a 
                              href="#" 
                              onClick={() => handleSocialClick('Website')}
                              className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors"
                            >
                              <div className="w-8 h-8 bg-gradient-to-br from-slate-600 to-slate-800 rounded-lg flex items-center justify-center">
                                <Globe className="h-4 w-4 text-white" />
                              </div>
                              <span className="text-sm font-medium">{profileData.socialLinks.website}</span>
                            </a>
                          )}
                        </div>
                      </div>
                      
                      {/* Profile Link */}
                      <div className="bg-slate-50 rounded-lg p-4">
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <Copy className="h-4 w-4 text-blue-600" />
                          Profile Link
                        </h4>
                        <div className="flex items-center gap-2">
                          <Input 
                            value={profileData.profileLink} 
                            readOnly 
                            className="text-xs bg-white"
                          />
                          <Button variant="outline" size="sm">
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>

                      {/* Followers & Connections */}
                      <div className="bg-slate-50 rounded-lg p-4">
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <Users className="h-4 w-4 text-green-600" />
                          Followers & Connections
                        </h4>
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-slate-900">{profileData.followers}</div>
                            <div className="text-sm text-slate-600">Followers</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-slate-900">{profileData.connections}</div>
                            <div className="text-sm text-slate-600">Connections</div>
                          </div>
                        </div>
                      </div>

                      {/* Map Location */}
                      <div className="bg-slate-50 rounded-lg p-4">
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-green-600" />
                          Exact Address
                        </h4>
                        <p className="text-sm text-slate-600 mb-2">{profileData.address}</p>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full"
                          onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(profileData.address)}`, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View on Map
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Main Content Tabs */}
              <Tabs defaultValue="owner" className="space-y-8">
                <TabsList className="grid w-full grid-cols-3 bg-slate-100">
                  <TabsTrigger value="owner" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Owner Details</TabsTrigger>
                  <TabsTrigger value="experience" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Experience</TabsTrigger>
                  <TabsTrigger value="reviews" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Ratings & Reviews</TabsTrigger>
                </TabsList>

                {/* Owner Details Tab */}
                <TabsContent value="owner" className="space-y-8">
                  <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                    <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50 border-b border-slate-100">
                      <CardTitle className="flex items-center gap-2 text-slate-900">
                        <User className="h-5 w-5 text-indigo-600" />
                        Owner Details
                      </CardTitle>
                      <CardDescription>Information about the business owner</CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 space-y-6">
                      <div className="flex items-start gap-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                          <User className="h-10 w-10 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-slate-900 mb-2">
                            {profileData.ownerDetails.firstName} {profileData.ownerDetails.lastName}
                          </h3>
                          <p className="text-slate-600 mb-4">{profileData.ownerDetails.about}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4 text-slate-400" />
                              <span>{profileData.ownerDetails.personalEmail}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4 text-slate-400" />
                              <span>{profileData.ownerDetails.personalPhone}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-slate-400" />
                              <span>Born: {new Date(profileData.ownerDetails.dateOfBirth).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-slate-400" />
                              <span>{profileData.ownerDetails.location.city}, {profileData.ownerDetails.location.state}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Building className="h-4 w-4 text-slate-400" />
                              <span>Industry: {profileData.ownerDetails.industry}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Award className="h-4 w-4 text-slate-400" />
                              <span>Category: {profileData.ownerDetails.category}</span>
                            </div>
                          </div>
                          
                          <div className="mt-4">
                            <h4 className="font-medium text-slate-900 mb-2">Languages</h4>
                            <div className="flex flex-wrap gap-2">
                              {profileData.ownerDetails.languages.map((lang, index) => (
                                <Badge key={index} variant="outline" className="px-3 py-1">
                                  {lang}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {profileData.ownerDetails.resume && (
                            <div className="mt-4">
                              <h4 className="font-medium text-slate-900 mb-2">Resume</h4>
                              <div className="flex items-center gap-2">
                                <FileText className="h-4 w-4 text-slate-400" />
                                <span className="text-sm text-slate-600">{profileData.ownerDetails.resume}</span>
                                <Button variant="outline" size="sm">
                                  <Download className="h-3 w-3 mr-1" />
                                  Download
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Experience Tab */}
                <TabsContent value="experience" className="space-y-8">
                  <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                    <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50 border-b border-slate-100">
                      <CardTitle className="flex items-center gap-2 text-slate-900">
                        <Briefcase className="h-5 w-5 text-indigo-600" />
                        Work Experience
                      </CardTitle>
                      <CardDescription>Professional journey and career highlights</CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 space-y-6">
                      {/* Current Working Details */}
                      <div className="bg-blue-50 rounded-lg p-4 mb-6">
                        <h4 className="font-medium text-slate-900 mb-3 flex items-center gap-2">
                          <Briefcase className="h-4 w-4 text-blue-600" />
                          Current Working Details
                        </h4>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <label className="text-sm font-medium text-slate-700">Company</label>
                            <p className="text-slate-600">Creative Studio Inc.</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-slate-700">Designation</label>
                            <p className="text-slate-600">CEO & Founder</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-slate-700">Salary Range</label>
                            <p className="text-slate-600">$120,000 - $150,000</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-slate-700">Duration</label>
                            <p className="text-slate-600">2018 - Present</p>
                          </div>
                        </div>
                      </div>

                      {experience.map((exp) => (
                        <div key={exp.id} className="border-l-4 border-blue-500 pl-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold text-lg">{exp.position}</h3>
                              <p className="text-slate-600 font-medium">{exp.company}</p>
                              <p className="text-slate-500 text-sm">{exp.duration}</p>
                            </div>
                            <Briefcase className="h-6 w-6 text-slate-400" />
                          </div>
                          <p className="text-slate-700 mt-2">{exp.description}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Reviews Tab */}
                <TabsContent value="reviews" className="space-y-8">
                  <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                    <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50 border-b border-slate-100">
                      <CardTitle className="flex items-center gap-2 text-slate-900">
                        <Star className="h-5 w-5 text-yellow-600" />
                        Ratings & Reviews
                      </CardTitle>
                      <CardDescription>What clients say about working with this business</CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 space-y-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-slate-900">4.9</div>
                          <div className="flex items-center gap-1">
                            {[1,2,3,4,5].map((star) => (
                              <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <div className="text-sm text-slate-500">Based on 24 reviews</div>
                        </div>
                        <Separator orientation="vertical" className="h-20" />
                        <div className="flex-1">
                          <div className="space-y-2">
                            {[5,4,3,2,1].map((rating) => (
                              <div key={rating} className="flex items-center gap-2">
                                <span className="text-sm w-8">{rating}</span>
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <div className="flex-1 bg-slate-200 rounded-full h-2">
                                  <div 
                                    className="bg-yellow-400 h-2 rounded-full" 
                                    style={{ width: `${rating === 5 ? 90 : rating === 4 ? 10 : 0}%` }}
                                  />
                                </div>
                                <span className="text-sm text-slate-500 w-8">
                                  {rating === 5 ? 22 : rating === 4 ? 2 : 0}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        {reviews.map((review) => (
                          <div key={review.id} className="border rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <span className="font-medium">{review.reviewer}</span>
                                <div className="flex items-center gap-1">
                                  {[1,2,3,4,5].map((star) => (
                                    <Star 
                                      key={star} 
                                      className={`h-4 w-4 ${
                                        star <= review.rating 
                                          ? 'fill-yellow-400 text-yellow-400' 
                                          : 'text-slate-300'
                                      }`} 
                                    />
                                  ))}
                                </div>
                              </div>
                              <span className="text-sm text-slate-500">{review.date}</span>
                            </div>
                            <p className="text-slate-700">{review.comment}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
