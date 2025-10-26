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
  Plus,
  UserPlus,
  Settings,
  MessageCircle,
  Calendar,
  Shield,
  Crown,
  Eye,
  Share2,
  ArrowRight,
  Coins
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
              <h1 className="text-xl font-semibold text-slate-900">Groups</h1>
              <p className="text-sm text-slate-500">Connect and collaborate with communities</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <input 
                type="text" 
                placeholder="Search groups..." 
                className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              />
            </div>
            <Button variant="outline" size="sm" className="border-slate-200">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Create Group
            </Button>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-8 p-8 bg-slate-50">
          {/* Create Group Section */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">Create New Group</h2>
                  <p className="text-sm text-slate-600">Build a team and manage services together</p>
                </div>
              </div>
              
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Group Name</label>
                  <Input placeholder="e.g. Design Studio, Tech Innovators" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Category</label>
                  <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent">
                    <option>Select Category</option>
                    <option>Design</option>
                    <option>Technology</option>
                    <option>Business</option>
                    <option>Art & Creative</option>
                    <option>Education</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <Input placeholder="City or Remote" className="pl-10" />
                  </div>
                </div>
                <div className="md:col-span-3">
                  <label className="text-sm font-medium text-slate-700 mb-2 block">About the Group</label>
                  <textarea 
                    placeholder="Describe your group's purpose, goals, and what members can expect..."
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent resize-none"
                    rows={3}
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-6">
                <div className="flex gap-2">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Users className="h-4 w-4 mr-2" />
                    Create Group
                  </Button>
                  <Button variant="outline" className="border-slate-200">
                    Cancel
                  </Button>
                </div>
                <div className="text-sm text-slate-600">
                  <span className="font-medium">2</span> groups you manage
                </div>
              </div>
            </div>
          </div>

          {/* Groups List */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">Your Groups</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="border-slate-200">
                  <Crown className="h-4 w-4 mr-2" />
                  My Groups
                </Button>
                <Button variant="outline" size="sm" className="border-slate-200">
                  <Star className="h-4 w-4 mr-2" />
                  Popular
                </Button>
                <Button variant="outline" size="sm" className="border-slate-200">
                  <Users className="h-4 w-4 mr-2" />
                  Hire Artist Groups
                </Button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Group Card 1 */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                        <Users className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">Design Studio</h3>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Crown className="h-4 w-4" />
                          <span>You're Admin</span>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Active</Badge>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Users className="h-4 w-4" />
                      <span>24 members</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <MapPin className="h-4 w-4" />
                      <span>Bengaluru, India</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Star className="h-4 w-4" />
                      <span>4.8 rating</span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm mb-4">
                    A creative community of designers, artists, and creative professionals sharing ideas, collaborating on projects, and growing together.
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">Design</Badge>
                    <Badge variant="outline" className="text-xs">Creative</Badge>
                    <Badge variant="outline" className="text-xs">Collaboration</Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Settings className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                        Manage
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                      <Button size="sm" variant="outline" className="border-amber-200 text-amber-700 hover:bg-amber-50">
                        <Coins className="h-4 w-4 mr-1" />
                        Send Coins
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Group Card 2 */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-purple-50 rounded-xl group-hover:bg-purple-100 transition-colors">
                        <Users className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">Tech Innovators</h3>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Crown className="h-4 w-4" />
                          <span>You're Admin</span>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700">Growing</Badge>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Users className="h-4 w-4" />
                      <span>12 members</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <MapPin className="h-4 w-4" />
                      <span>Remote</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Star className="h-4 w-4" />
                      <span>4.5 rating</span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm mb-4">
                    A community of tech enthusiasts, developers, and entrepreneurs working on innovative projects and sharing knowledge.
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">Technology</Badge>
                    <Badge variant="outline" className="text-xs">Innovation</Badge>
                    <Badge variant="outline" className="text-xs">Startup</Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Settings className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                      Manage
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Group Card 3 - Join Group */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="p-6 text-center">
                  <div className="p-4 bg-slate-100 rounded-2xl w-fit mx-auto mb-4 group-hover:bg-slate-200 transition-colors">
                    <Plus className="h-8 w-8 text-slate-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Join a Group</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Discover and join existing groups in your area or field of interest
                  </p>
                  <Button className="w-full bg-slate-600 hover:bg-slate-700 text-white">
                    <Search className="h-4 w-4 mr-2" />
                    Browse Groups
                  </Button>
                </div>
              </div>
            </div>

            {/* Load More Button */}
            <div className="text-center pt-6">
              <Button variant="outline" className="border-slate-200 px-8">
                Load More Groups
              </Button>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

 
