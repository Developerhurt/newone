import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Calendar,
  Building,
  Languages,
  Award,
  Upload,
  Plus,
  X,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Github,
  Facebook,
  CheckCircle,
  AlertCircle,
  Coins,
  Trash2,
  Edit3
} from "lucide-react"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between bg-white border-b border-slate-200 shadow-sm">
          <div className="flex items-center gap-4 px-6">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
            <div>
              <h1 className="text-xl font-semibold text-slate-900">Edit Profile</h1>
              <p className="text-sm text-slate-500">Update your professional information</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6">
            <Button variant="outline" className="border-slate-200">
              <Edit3 className="h-4 w-4 mr-2" />
              Preview
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Save Changes
            </Button>
          </div>
        </header>
        
        <div className="flex flex-1 gap-6 p-6 bg-slate-50">
          {/* Main Content */}
          <div className="flex-1 max-w-7xl space-y-8">
            
            {/* Basic Information */}
            <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-slate-100">
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <User className="h-5 w-5 text-blue-600" />
                  Basic Information
                </CardTitle>
                <CardDescription>Your personal details and verification status</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                      Full Name
                      <Badge className="bg-green-100 text-green-700 text-xs px-2 py-0.5">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    </label>
                    <Input 
                      placeholder="Enter your full name" 
                      defaultValue="Eva Murphy"
                      className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                    <p className="text-xs text-slate-500">Must match your government ID for verification</p>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                      Date of Birth
                      <Badge className="bg-green-100 text-green-700 text-xs px-2 py-0.5">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    </label>
                    <Input 
                      type="date" 
                      className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                    <p className="text-xs text-slate-500">Must match your government ID for verification</p>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Current Designation</label>
                    <Input 
                      placeholder="e.g., Senior Digital Artist" 
                      defaultValue="Senior Digital Artist"
                      className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Company Name</label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                      <Input 
                        placeholder="Search company name" 
                        className="pl-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <p className="text-xs text-slate-500">Search for verified companies or add your own</p>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                      <Input 
                        type="email" 
                        placeholder="your.email@example.com" 
                        defaultValue="eva.murphy@example.com"
                        className="pl-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Mobile Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                      <Input 
                        type="tel" 
                        placeholder="+1 (555) 123-4567" 
                        defaultValue="+1 (555) 123-4567"
                        className="pl-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <Button variant="outline" size="sm" className="text-xs">
                      Verify with OTP
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location & Languages */}
            <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-slate-100">
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <MapPin className="h-5 w-5 text-green-600" />
                  Location & Languages
                </CardTitle>
                <CardDescription>Where you're based and languages you speak</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid gap-8 md:grid-cols-3">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Country</label>
                    <select className="w-full p-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                      <option>India</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">State</label>
                    <select className="w-full p-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>New York</option>
                      <option>California</option>
                      <option>Texas</option>
                      <option>Florida</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">City</label>
                    <Input 
                      placeholder="Enter city name" 
                      defaultValue="New York"
                      className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="mt-8">
                  <label className="text-sm font-medium text-slate-700 flex items-center gap-2 mb-4">
                    <Languages className="h-4 w-4" />
                    Languages
                  </label>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-700 px-3 py-1">
                      English (Native)
                      <X className="h-3 w-3 ml-1 cursor-pointer" />
                    </Badge>
                    <Badge className="bg-green-100 text-green-700 px-3 py-1">
                      Spanish (Fluent)
                      <X className="h-3 w-3 ml-1 cursor-pointer" />
                    </Badge>
                    <Badge className="bg-purple-100 text-purple-700 px-3 py-1">
                      French (Intermediate)
                      <X className="h-3 w-3 ml-1 cursor-pointer" />
                    </Badge>
                    <Button variant="outline" size="sm" className="text-xs">
                      <Plus className="h-3 w-3 mr-1" />
                      Add Language
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About & Skills */}
            <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-slate-100">
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <Globe className="h-5 w-5 text-purple-600" />
                  About & Skills
                </CardTitle>
                <CardDescription>Tell others about yourself and your expertise</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">About</label>
                    <textarea 
                      placeholder="Tell us about yourself, your experience, and what makes you unique..."
                      className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-24"
                      defaultValue="Passionate digital artist with over 5 years of experience in creating stunning visual content. Specialized in digital illustration, concept art, and brand design."
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Skills</label>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-100 text-blue-700 px-3 py-1">
                        Digital Illustration
                        <X className="h-3 w-3 ml-1 cursor-pointer" />
                      </Badge>
                      <Badge className="bg-green-100 text-green-700 px-3 py-1">
                        Concept Art
                        <X className="h-3 w-3 ml-1 cursor-pointer" />
                      </Badge>
                      <Badge className="bg-purple-100 text-purple-700 px-3 py-1">
                        Brand Design
                        <X className="h-3 w-3 ml-1 cursor-pointer" />
                      </Badge>
                      <Badge className="bg-orange-100 text-orange-700 px-3 py-1">
                        UI/UX Design
                        <X className="h-3 w-3 ml-1 cursor-pointer" />
                      </Badge>
                      <Badge className="bg-pink-100 text-pink-700 px-3 py-1">
                        Adobe Creative Suite
                        <X className="h-3 w-3 ml-1 cursor-pointer" />
                      </Badge>
                      <Button variant="outline" size="sm" className="text-xs">
                        <Plus className="h-3 w-3 mr-1" />
                        Add Skill
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Links */}
            <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
              <CardHeader className="bg-gradient-to-r from-pink-50 to-rose-50 border-b border-slate-100">
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <Globe className="h-5 w-5 text-pink-600" />
                  Social Media Links
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                  Connect your social profiles
                  <Badge className="bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5">
                    <Coins className="h-3 w-3 mr-1" />
                    30 coins per click
                  </Badge>
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                      <Instagram className="h-4 w-4 text-pink-500" />
                      Instagram
                    </label>
                    <Input 
                      placeholder="@yourusername" 
                      defaultValue="@evamurphy_art"
                      className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                      <Twitter className="h-4 w-4 text-blue-500" />
                      Twitter
                    </label>
                    <Input 
                      placeholder="@yourusername" 
                      defaultValue="@evamurphy"
                      className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                      <Linkedin className="h-4 w-4 text-blue-600" />
                      LinkedIn
                    </label>
                    <Input 
                      placeholder="linkedin.com/in/yourprofile" 
                      defaultValue="linkedin.com/in/evamurphy"
                      className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                      <Youtube className="h-4 w-4 text-red-500" />
                      YouTube
                    </label>
                    <Input 
                      placeholder="youtube.com/@yourchannel" 
                      defaultValue="youtube.com/@evamurphyart"
                      className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                      <Github className="h-4 w-4 text-slate-600" />
                      GitHub
                    </label>
                    <Input 
                      placeholder="github.com/yourusername" 
                      defaultValue="github.com/evamurphy"
                      className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                      <Facebook className="h-4 w-4 text-blue-600" />
                      Facebook
                    </label>
                    <Input 
                      placeholder="facebook.com/yourpage" 
                      defaultValue="facebook.com/evamurphyart"
                      className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience Details */}
            <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
              <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50 border-b border-slate-100">
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <Building className="h-5 w-5 text-indigo-600" />
                  Experience Details
                </CardTitle>
                <CardDescription>Your professional work experience</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="border border-slate-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-medium text-slate-900">Senior Digital Artist</h4>
                        <p className="text-sm text-slate-600">Creative Studio Inc.</p>
                        <p className="text-xs text-slate-500">Jan 2022 - Present</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit3 className="h-3 w-3 mr-1" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600">
                      Led digital art projects for major clients, managed a team of 5 artists, and increased project efficiency by 40%.
                    </p>
                  </div>
                  
                  <Button variant="outline" className="w-full border-dashed border-slate-300 text-slate-600 hover:text-slate-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Experience
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Achievements & Certifications */}
            <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-yellow-50 border-b border-slate-100">
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <Award className="h-5 w-5 text-amber-600" />
                  Achievements & Certifications
                </CardTitle>
                <CardDescription>Upload your certificates and achievements (Max 5MB per file)</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="border border-slate-200 rounded-lg p-4 text-center">
                      <div className="w-16 h-16 bg-slate-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <Award className="h-8 w-8 text-slate-400" />
                      </div>
                      <p className="text-sm font-medium text-slate-900">Adobe Certified Expert</p>
                      <p className="text-xs text-slate-500">2023</p>
                      <Button variant="outline" size="sm" className="mt-2 text-xs">
                        <Trash2 className="h-3 w-3 mr-1" />
                        Remove
                      </Button>
                    </div>
                    
                    <div className="border border-slate-200 rounded-lg p-4 text-center">
                      <div className="w-16 h-16 bg-slate-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <Award className="h-8 w-8 text-slate-400" />
                      </div>
                      <p className="text-sm font-medium text-slate-900">UI/UX Design Master</p>
                      <p className="text-xs text-slate-500">2022</p>
                      <Button variant="outline" size="sm" className="mt-2 text-xs">
                        <Trash2 className="h-3 w-3 mr-1" />
                        Remove
                      </Button>
                    </div>
                    
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center hover:border-blue-400 hover:bg-blue-50 transition-colors cursor-pointer">
                      <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                      <p className="text-sm text-slate-600">Upload Certificate</p>
                      <p className="text-xs text-slate-500">Max 5MB</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 pt-8">
              <Button variant="outline" className="border-slate-200">
                Cancel
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

 
