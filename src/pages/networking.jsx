import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  Users, 
  MapPin, 
  Star, 
  Filter,
  MessageCircle,
  UserPlus,
  Eye,
  Share2,
  ArrowRight,
  Building2,
  Briefcase,
  Globe,
  Phone,
  Mail,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  Crown,
  Shield,
  Coins,
  Heart,
  Bookmark,
  User
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
              <h1 className="text-xl font-semibold text-slate-900">Networking</h1>
              <p className="text-sm text-slate-500">Connect with artists and businesses</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <input 
                type="text" 
                placeholder="Search people..." 
                className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              />
            </div>
            <Button variant="outline" size="sm" className="border-slate-200">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-8 p-8 bg-slate-50">
          {/* Search and Filters */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="p-6">
              <div className="grid gap-4 md:grid-cols-4">
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Name / Username</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <Input placeholder="Search by name or username" className="pl-10" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <Input placeholder="City or State" className="pl-10" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Skills / Industry</label>
                  <Input placeholder="e.g. Design, Photography, Tech" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">User Type</label>
                  <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent">
                    <option>All Users</option>
                    <option>Artists</option>
                    <option>Businesses</option>
                    <option>Guests</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="flex gap-2">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Search className="h-4 w-4 mr-2" />
                    Search People
                  </Button>
                  <Button variant="outline" className="border-slate-200">
                    Clear Filters
                  </Button>
                </div>
                <div className="text-sm text-slate-600">
                  <span className="font-medium">1,247</span> people found
                </div>
              </div>
            </div>
          </div>

          {/* People List */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">Discover People</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="border-slate-200">
                  <Users className="h-4 w-4 mr-2" />
                  Artists
                </Button>
                <Button variant="outline" size="sm" className="border-slate-200">
                  <Building2 className="h-4 w-4 mr-2" />
                  Businesses
                </Button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Artist Profile 1 */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">Sarah Chen</h3>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Briefcase className="h-4 w-4" />
                          <span>UI/UX Designer</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-700">
                        <Shield className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <MapPin className="h-4 w-4" />
                      <span>Mumbai, India</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Star className="h-4 w-4" />
                      <span>4.8 rating (127 reviews)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Users className="h-4 w-4" />
                      <span>2.3k followers</span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm mb-4">
                    Creative designer with 5+ years of experience in UI/UX design. Passionate about creating user-centered digital experiences.
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">UI/UX</Badge>
                    <Badge variant="outline" className="text-xs">Figma</Badge>
                    <Badge variant="outline" className="text-xs">Adobe</Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="border-slate-200">
                        <UserPlus className="h-4 w-4 mr-1" />
                        Follow
                      </Button>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Message
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Profile 1 */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                        <Building2 className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">TechCorp Studios</h3>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Briefcase className="h-4 w-4" />
                          <span>Software Company</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-blue-100 text-blue-700">
                        <Crown className="h-3 w-3 mr-1" />
                        Premium
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <MapPin className="h-4 w-4" />
                      <span>Bangalore, India</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Star className="h-4 w-4" />
                      <span>4.6 rating (89 reviews)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Users className="h-4 w-4" />
                      <span>50-100 employees</span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm mb-4">
                    Leading software development company specializing in mobile apps and web solutions. Looking for talented designers and developers.
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">Technology</Badge>
                    <Badge variant="outline" className="text-xs">Mobile Apps</Badge>
                    <Badge variant="outline" className="text-xs">Web Dev</Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="border-slate-200">
                        <UserPlus className="h-4 w-4 mr-1" />
                        Follow
                      </Button>
                      <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Message
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Load More Button */}
              <div className="col-span-full text-center pt-6">
                <Button variant="outline" className="border-slate-200 px-8">
                  Load More People
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

 
