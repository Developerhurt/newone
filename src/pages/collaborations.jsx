import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  Handshake, 
  MapPin, 
  Calendar, 
  Filter,
  Plus,
  Users,
  Clock,
  Star,
  Eye,
  Share2,
  ArrowRight,
  Coins,
  User,
  Briefcase,
  Target
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
              <h1 className="text-xl font-semibold text-slate-900">Collaborations</h1>
              <p className="text-sm text-slate-500">Connect and work together on projects</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <input 
                type="text" 
                placeholder="Search collaborations..." 
                className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              />
            </div>
            <Button variant="outline" size="sm" className="border-slate-200">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Create Collab
            </Button>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-8 p-8 bg-slate-50">
          {/* Create Collaboration Section */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Handshake className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">Create New Collaboration</h2>
                  <p className="text-sm text-slate-600">Start a project and invite talented professionals</p>
                </div>
                <div className="ml-auto flex items-center gap-2 text-sm text-amber-600 bg-amber-50 px-3 py-1 rounded-lg">
                  <Coins className="h-4 w-4" />
                  <span>Costs 500 Hub Coins (refundable)</span>
                </div>
              </div>
              
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Project Title</label>
                  <Input placeholder="e.g. Mobile App Design, Brand Identity" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Industry</label>
                  <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent">
                    <option>Select Industry</option>
                    <option>Technology</option>
                    <option>Design</option>
                    <option>Marketing</option>
                    <option>Education</option>
                    <option>Healthcare</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Languages</label>
                  <Input placeholder="e.g. English, Hindi" />
                </div>
                <div className="md:col-span-3">
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Project Description</label>
                  <textarea 
                    placeholder="Describe your project, goals, timeline, and what you're looking for in collaborators..."
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent resize-none"
                    rows={3}
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-6">
                <div className="flex gap-2">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Handshake className="h-4 w-4 mr-2" />
                    Create Collaboration
                  </Button>
                  <Button variant="outline" className="border-slate-200">
                    Save Draft
                  </Button>
                </div>
                <div className="text-sm text-slate-600">
                  <span className="font-medium">3</span> active collaborations
                </div>
              </div>
            </div>
          </div>

          {/* Collaborations List */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">Active Collaborations</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="border-slate-200">
                  <Clock className="h-4 w-4 mr-2" />
                  Upcoming
                </Button>
                <Button variant="outline" size="sm" className="border-slate-200">
                  <Star className="h-4 w-4 mr-2" />
                  Featured
                </Button>
                <Button variant="outline" size="sm" className="border-slate-200">
                  <MapPin className="h-4 w-4 mr-2" />
                  Nearby Collabs
                </Button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Collaboration Card 1 */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                        <Handshake className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">Mobile App Design</h3>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <User className="h-4 w-4" />
                          <span>You're Manager</span>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Active</Badge>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <MapPin className="h-4 w-4" />
                      <span>Remote</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Calendar className="h-4 w-4" />
                      <span>Starts: Dec 15, 2024</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Clock className="h-4 w-4" />
                      <span>Time: Morning (9AM-12PM)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Users className="h-4 w-4" />
                      <span>5 collaborators</span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm mb-4">
                    Designing a modern mobile application for food delivery with focus on user experience and intuitive interface design.
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">UI/UX</Badge>
                    <Badge variant="outline" className="text-xs">Mobile</Badge>
                    <Badge variant="outline" className="text-xs">Design</Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                      Manage
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Collaboration Card 2 */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-purple-50 rounded-xl group-hover:bg-purple-100 transition-colors">
                        <Handshake className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">Brand Identity</h3>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <User className="h-4 w-4" />
                          <span>You're Member</span>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700">In Progress</Badge>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <MapPin className="h-4 w-4" />
                      <span>Mumbai, India</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Calendar className="h-4 w-4" />
                      <span>Due: Jan 20, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Users className="h-4 w-4" />
                      <span>3 collaborators</span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm mb-4">
                    Creating a complete brand identity package including logo, color palette, typography, and brand guidelines for a startup.
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">Branding</Badge>
                    <Badge variant="outline" className="text-xs">Logo</Badge>
                    <Badge variant="outline" className="text-xs">Identity</Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                      View Details
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Collaboration Card 3 */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-emerald-50 rounded-xl group-hover:bg-emerald-100 transition-colors">
                        <Handshake className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">Website Redesign</h3>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <User className="h-4 w-4" />
                          <span>You're Member</span>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-orange-100 text-orange-700">Planning</Badge>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <MapPin className="h-4 w-4" />
                      <span>Hybrid</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Calendar className="h-4 w-4" />
                      <span>Starts: Jan 5, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Users className="h-4 w-4" />
                      <span>4 collaborators</span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm mb-4">
                    Complete redesign of a corporate website with modern UI/UX principles, responsive design, and improved user experience.
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">Web Design</Badge>
                    <Badge variant="outline" className="text-xs">UI/UX</Badge>
                    <Badge variant="outline" className="text-xs">Frontend</Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                      View Details
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Load More Button */}
            <div className="text-center pt-6">
              <Button variant="outline" className="border-slate-200 px-8">
                Load More Collaborations
              </Button>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

 
