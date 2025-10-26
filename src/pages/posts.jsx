import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  Image, 
  Video, 
  Plus,
  Filter,
  Heart,
  MessageCircle,
  Share2,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  Calendar,
  User,
  MapPin,
  Star,
  Bookmark,
  Download,
  Upload,
  UserPlus,
  ChevronRight,
  TrendingUp,
  Gift
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
              <h1 className="text-xl font-semibold text-slate-900">Posts</h1>
              <p className="text-sm text-slate-500">Share your creative work and discover others</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <input 
                type="text" 
                placeholder="Search posts..." 
                className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              />
            </div>
            <Button variant="outline" size="sm" className="border-slate-200">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Create Post
            </Button>
          </div>
        </header>
        <div className="flex flex-1 gap-4 p-4 bg-slate-50">
          {/* Main Content */}
          <div className="flex-1 max-w-4xl">
          {/* Create Post Section - Facebook-like */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
            <div className="p-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <textarea 
                    placeholder="What's on your mind?"
                    className="w-full px-3 py-2 border-0 rounded-lg text-sm focus:outline-none resize-none bg-slate-50 placeholder-slate-500"
                    rows={2}
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="text-slate-600 hover:text-blue-500 hover:bg-blue-50">
                    <Image className="h-4 w-4 mr-1" />
                    Photo
                  </Button>
                  <Button variant="ghost" size="sm" className="text-slate-600 hover:text-green-500 hover:bg-green-50">
                    <Video className="h-4 w-4 mr-1" />
                    Video
                  </Button>
                  <Button variant="ghost" size="sm" className="text-slate-600 hover:text-orange-500 hover:bg-orange-50">
                    <Calendar className="h-4 w-4 mr-1" />
                    Event
                  </Button>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                  Post
                </Button>
              </div>
            </div>
          </div>

          {/* Posts Feed */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">Posts</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="border-slate-200 text-xs">
                  <Calendar className="h-3 w-3 mr-1" />
                  Recent
                </Button>
                <Button variant="outline" size="sm" className="border-slate-200 text-xs">
                  <Star className="h-3 w-3 mr-1" />
                  Popular
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              {/* Post 1 */}
              <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
                <div className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 text-sm">Sarah Chen</h3>
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                          <span>2h</span>
                          <span>•</span>
                          <MapPin className="h-3 w-3" />
                          <span>Mumbai, India</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Badge className="bg-blue-100 text-blue-700 text-xs px-2 py-1">Design</Badge>
                      <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-600 p-1">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-slate-700 text-sm mb-3 leading-relaxed">
                    Just finished working on this brand identity project for a local startup. The logo represents growth and innovation, with a modern color palette that reflects their tech-forward approach. What do you think? #branding #logo #design
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                        <Image className="h-6 w-6 text-slate-400" />
                      </div>
                    </div>
                    <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                        <Image className="h-6 w-6 text-slate-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-6">
                      <Button variant="ghost" size="sm" className="text-slate-600 hover:text-red-500 hover:bg-red-50 px-2 py-1 h-8">
                        <Heart className="h-4 w-4 mr-1" />
                        <span className="text-sm">24</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="text-slate-600 hover:text-blue-500 hover:bg-blue-50 px-2 py-1 h-8">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        <span className="text-sm">8</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="text-slate-600 hover:text-green-500 hover:bg-green-50 px-2 py-1 h-8">
                        <Share2 className="h-4 w-4 mr-1" />
                        <span className="text-sm">Share</span>
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-600 p-1">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Post 2 */}
              <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
                <div className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 text-sm">Alex Rodriguez</h3>
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                          <span>5h</span>
                          <span>•</span>
                          <MapPin className="h-3 w-3" />
                          <span>Delhi, India</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Badge className="bg-purple-100 text-purple-700 text-xs px-2 py-1">Photography</Badge>
                      <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-600 p-1">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-slate-700 text-sm mb-3 leading-relaxed">
                    Captured this stunning sunset during my recent trip to Goa. The colors were absolutely breathtaking! Sometimes the best shots happen when you least expect them. #photography #sunset #goa #travel
                  </p>
                  
                  <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden mb-3">
                    <div className="w-full h-full bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center">
                      <Video className="h-8 w-8 text-slate-400" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-6">
                      <Button variant="ghost" size="sm" className="text-slate-600 hover:text-red-500 hover:bg-red-50 px-2 py-1 h-8">
                        <Heart className="h-4 w-4 mr-1" />
                        <span className="text-sm">47</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="text-slate-600 hover:text-blue-500 hover:bg-blue-50 px-2 py-1 h-8">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        <span className="text-sm">12</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="text-slate-600 hover:text-green-500 hover:bg-green-50 px-2 py-1 h-8">
                        <Share2 className="h-4 w-4 mr-1" />
                        <span className="text-sm">Share</span>
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-600 p-1">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Post 3 */}
              <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
                <div className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 text-sm">Priya Sharma</h3>
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                          <span>1d</span>
                          <span>•</span>
                          <MapPin className="h-3 w-3" />
                          <span>Bangalore, India</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Badge className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1">UI/UX</Badge>
                      <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-600 p-1">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-slate-700 text-sm mb-3 leading-relaxed">
                    Working on a mobile app redesign for a fintech startup. The challenge was to make complex financial data accessible and user-friendly. Here's a sneak peek at the wireframes! #uiux #mobile #fintech #wireframes
                  </p>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                        <Image className="h-6 w-6 text-slate-400" />
                      </div>
                    </div>
                    <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                        <Image className="h-6 w-6 text-slate-400" />
                      </div>
                    </div>
                    <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                        <Image className="h-6 w-6 text-slate-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-6">
                      <Button variant="ghost" size="sm" className="text-slate-600 hover:text-red-500 hover:bg-red-50 px-2 py-1 h-8">
                        <Heart className="h-4 w-4 mr-1" />
                        <span className="text-sm">31</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="text-slate-600 hover:text-blue-500 hover:bg-blue-50 px-2 py-1 h-8">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        <span className="text-sm">6</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="text-slate-600 hover:text-green-500 hover:bg-green-50 px-2 py-1 h-8">
                        <Share2 className="h-4 w-4 mr-1" />
                        <span className="text-sm">Share</span>
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-600 p-1">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Load More Button */}
            <div className="text-center pt-4">
              <Button variant="outline" className="border-slate-200 px-6 text-sm">
                Load More Posts
              </Button>
            </div>
          </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-72 space-y-4">
            {/* Friend Suggestions */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-slate-900">Friend Suggestions</h3>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 text-xs">
                    See All
                    <ChevronRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 text-sm">Julia Smith</p>
                        <p className="text-xs text-slate-500">@juliasmith</p>
                      </div>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 h-7">
                      <UserPlus className="h-3 w-3 mr-1" />
                      Add
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 text-sm">Vermillion D. Gray</p>
                        <p className="text-xs text-slate-500">@vermilliongray</p>
                      </div>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 h-7">
                      <UserPlus className="h-3 w-3 mr-1" />
                      Add
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 text-sm">Mai Senpai</p>
                        <p className="text-xs text-slate-500">@maisenpai</p>
                      </div>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 h-7">
                      <UserPlus className="h-3 w-3 mr-1" />
                      Add
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 text-sm">Azunyan U. Wu</p>
                        <p className="text-xs text-slate-500">@azunyanwu</p>
                      </div>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 h-7">
                      <UserPlus className="h-3 w-3 mr-1" />
                      Add
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 text-sm">Oarack Babama</p>
                        <p className="text-xs text-slate-500">@oarackbabama</p>
                      </div>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 h-7">
                      <UserPlus className="h-3 w-3 mr-1" />
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Activity */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-slate-900">Profile Activity</h3>
                  <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-600 p-1">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <User className="h-3 w-3 text-white" />
                    </div>
                    <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <User className="h-3 w-3 text-white" />
                    </div>
                    <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
                      <User className="h-3 w-3 text-white" />
                    </div>
                    <div className="w-6 h-6 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
                      <User className="h-3 w-3 text-white" />
                    </div>
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                      <User className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-slate-900">+1,158</span>
                    <span className="text-sm text-slate-600">Followers</span>
                    <div className="flex items-center gap-1 text-green-600 text-xs">
                      <TrendingUp className="h-3 w-3" />
                      <span>23% vs last month</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-slate-600">
                    You gained a substantial amount of followers this month!
                  </p>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-slate-900">Upcoming Events</h3>
                  <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-600 p-1">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
                      <Gift className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 text-sm">Friend's Birthday</p>
                      <p className="text-xs text-slate-500">Jun 25, 2028</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
