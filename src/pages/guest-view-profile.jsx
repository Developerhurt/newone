import React, { useState } from 'react';
import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
  CreditCard
} from "lucide-react"

export default function GuestViewProfilePage() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [hubCoins, setHubCoins] = useState(1500);

  const [profileData, setProfileData] = useState({
    fullName: "John Smith",
    designation: "Job Seeker",
    about: "Passionate professional seeking opportunities in digital marketing and project management. Experienced in social media marketing, content creation, and team collaboration. Always eager to learn and grow in dynamic work environments.",
    skills: ['Digital Marketing', 'Social Media Management', 'Content Creation', 'Project Management', 'Microsoft Office', 'Google Analytics', 'Figma', 'Canva'],
    languages: [
      { name: "English", level: "Native" },
      { name: "Spanish", level: "Fluent" },
      { name: "French", level: "Intermediate" }
    ],
    location: {
      country: "USA",
      state: "CA",
      city: "Los Angeles"
    },
    dateOfBirth: "1992-05-20",
    gender: "Male",
    socialLinks: {
      instagram: "@johnsmith_jobs",
      twitter: "@johnsmith",
      youtube: "John Smith Career",
      linkedin: "John Smith",
      threads: "@johnsmith_threads",
      website: "www.johnsmithcareer.com"
    },
    profileLink: "artisthub.com/guest/johnsmith",
    rating: 4.5,
    totalReviews: 12,
    followers: 450,
    connections: 320,
    isVerified: false,
    verificationBadge: "Job Seeker",
    hubCoins: 1500,
    canSendMessages: false,
    mapLink: "https://maps.google.com/?q=Los+Angeles,+CA",
    jobPreferences: {
      desiredPosition: "Digital Marketing Manager",
      salaryRange: "$50,000 - $70,000",
      workType: "Full-time",
      availability: "Immediately",
      willingToRelocate: true
    },
    education: [
      {
        degree: "Bachelor of Business Administration",
        institution: "University of California",
        year: "2014",
        field: "Marketing"
      }
    ],
    experience: [
      {
        id: 1,
        company: "Digital Solutions Inc.",
        position: "Marketing Coordinator",
        duration: "2020 - 2023",
        description: "Managed social media campaigns and content creation for various clients"
      },
      {
        id: 2,
        company: "Creative Agency Co.",
        position: "Social Media Specialist",
        duration: "2018 - 2020",
        description: "Developed and executed social media strategies for small businesses"
      }
    ]
  });

  const [achievements] = useState([
    { id: 1, title: "Google Analytics Certified", issuer: "Google", image: null },
    { id: 2, title: "Digital Marketing Certificate", issuer: "HubSpot", image: null }
  ]);

  const [reviews] = useState([
    {
      id: 1,
      reviewer: "Sarah Johnson",
      rating: 5,
      comment: "Great communication skills and very professional.",
      date: "2024-01-15"
    },
    {
      id: 2,
      reviewer: "Mike Chen",
      rating: 4,
      comment: "Reliable and hardworking team member.",
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

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between bg-white border-b border-slate-200 shadow-sm">
          <div className="flex items-center gap-4 px-6">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
            <div>
              <h1 className="text-xl font-semibold text-slate-900">Guest Profile</h1>
              <p className="text-sm text-slate-500">Job seeker profile view</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6">
            <Button variant="outline" className="border-slate-200">
              <Share2 className="h-4 w-4 mr-2" />
              Share Profile
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <MessageCircle className="h-4 w-4 mr-2" />
              Message
            </Button>
          </div>
        </header>

        <div className="flex flex-1 gap-4 p-4 bg-slate-50">
          <div className="flex-1 max-w-7xl mx-auto">
            <div className="space-y-8">
              {/* Profile Header */}
              <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Section - Profile Info */}
                    <div className="flex-1">
                      <div className="flex items-start gap-6">
                        {/* Avatar */}
                        <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                          <User className="h-12 w-12 text-white" />
                        </div>

                        {/* Basic Info */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h1 className="text-2xl font-bold text-slate-900">{profileData.fullName}</h1>
                            <Badge className="bg-blue-100 text-blue-700 text-xs px-2 py-1">
                              <Briefcase className="h-3 w-3 mr-1" />
                              {profileData.verificationBadge}
                            </Badge>
                          </div>

                          <p className="text-lg text-slate-600 mb-3">{profileData.designation}</p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-slate-400" />
                              <span>Born: {new Date(profileData.dateOfBirth).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4 text-slate-400" />
                              <span>{profileData.gender}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-slate-400" />
                              <span>{profileData.location.city}, {profileData.location.state}, {profileData.location.country}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Briefcase className="h-4 w-4 text-slate-400" />
                              <span>Seeking: {profileData.jobPreferences.desiredPosition}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* About Section */}
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <Globe className="h-5 w-5 text-blue-600" />
                          About
                        </h3>
                        <p className="text-slate-700 leading-relaxed">
                          {profileData.about}
                        </p>
                      </div>

                      {/* Skills */}
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <Award className="h-5 w-5 text-purple-600" />
                          Skills
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {profileData.skills.slice(0, 6).map((skill) => (
                            <Badge key={skill} className="bg-green-100 text-green-700 px-3 py-1">
                              {skill}
                            </Badge>
                          ))}
                          {profileData.skills.length > 6 && (
                            <Badge className="bg-slate-100 text-slate-600 px-3 py-1">
                              +{profileData.skills.length - 6} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Languages */}
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <Languages className="h-5 w-5 text-green-600" />
                          Languages Known
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {profileData.languages.map((lang, index) => (
                            <Badge key={index} variant="outline" className="px-3 py-1">
                              {lang.name} ({lang.level})
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Job Preferences */}
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <Briefcase className="h-5 w-5 text-orange-600" />
                          Job Preferences
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
                          <div className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4 text-slate-400" />
                            <span><strong>Position:</strong> {profileData.jobPreferences.desiredPosition}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Coins className="h-4 w-4 text-slate-400" />
                            <span><strong>Salary:</strong> {profileData.jobPreferences.salaryRange}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-slate-400" />
                            <span><strong>Type:</strong> {profileData.jobPreferences.workType}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-slate-400" />
                            <span><strong>Available:</strong> {profileData.jobPreferences.availability}</span>
                          </div>
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

                      {/* Followers & Connections */}
                      <div className="bg-slate-50 rounded-lg p-4 mb-4">
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

                      {/* Action Buttons */}
                      <div className="space-y-3">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          <Download className="h-4 w-4 mr-2" />
                          Download Resume
                        </Button>
                        {profileData.canSendMessages ? (
                          <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Send & Receive Messages
                          </Button>
                        ) : (
                          <Button variant="outline" className="w-full border-slate-200" disabled>
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Subscribe to Message
                          </Button>
                        )}
                        <Button
                          variant={isFollowing ? "secondary" : "default"}
                          onClick={() => setIsFollowing(!isFollowing)}
                          className="w-full"
                        >
                          <Heart className={`h-4 w-4 mr-2 ${isFollowing ? 'fill-current' : ''}`} />
                          {isFollowing ? 'Following' : 'Follow'}
                        </Button>
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

                      {/* Map Location */}
                      <div className="bg-slate-50 rounded-lg p-4">
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-green-600" />
                          Exact Address
                        </h4>
                        <p className="text-sm text-slate-600 mb-2">{profileData.location.city}, {profileData.location.state}, {profileData.location.country}</p>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full"
                          onClick={() => window.open(profileData.mapLink, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View on Google Maps
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Main Content Tabs */}
              <Tabs defaultValue="experience" className="space-y-8">
                <TabsList className="grid w-full grid-cols-3 bg-slate-100">
                  <TabsTrigger value="experience" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Experience</TabsTrigger>
                  <TabsTrigger value="education" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Education</TabsTrigger>
                  <TabsTrigger value="reviews" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Ratings & Reviews</TabsTrigger>
                </TabsList>

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
                      {profileData.experience.map((exp) => (
                        <div key={exp.id} className="border-l-4 border-green-500 pl-4">
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

                {/* Education Tab */}
                <TabsContent value="education" className="space-y-8">
                  <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                    <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-slate-100">
                      <CardTitle className="flex items-center gap-2 text-slate-900">
                        <Award className="h-5 w-5 text-purple-600" />
                        Education
                      </CardTitle>
                      <CardDescription>Academic background and qualifications</CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 space-y-6">
                      {profileData.education.map((edu, index) => (
                        <div key={index} className="border-l-4 border-purple-500 pl-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold text-lg">{edu.degree}</h3>
                              <p className="text-slate-600 font-medium">{edu.institution}</p>
                              <p className="text-slate-500 text-sm">{edu.year} • {edu.field}</p>
                            </div>
                            <Award className="h-6 w-6 text-slate-400" />
                          </div>
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
                      <CardDescription>What others say about working with this job seeker</CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 space-y-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-slate-900">{profileData.rating}</div>
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <div className="text-sm text-slate-500">Based on {profileData.totalReviews} reviews</div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {reviews.map((review) => (
                          <div key={review.id} className="border rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <span className="font-medium">{review.reviewer}</span>
                                <div className="flex items-center gap-1">
                                  {[1, 2, 3, 4, 5].map((star) => (
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
