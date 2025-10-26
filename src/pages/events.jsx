import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Filter,
  Star,
  Bookmark,
  Share2,
  ArrowRight,
  Plus,
  Ticket,
  Video,
  Building2,
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
              <h1 className="text-xl font-semibold text-slate-900">Events</h1>
              <p className="text-sm text-slate-500">Discover and join amazing events</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <input 
                type="text" 
                placeholder="Search events..." 
                className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              />
            </div>
            <Button variant="outline" size="sm" className="border-slate-200">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Create Event
            </Button>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-8 p-8 bg-slate-50">
          {/* Search and Filters */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="p-6">
              <div className="grid gap-4 md:grid-cols-4">
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Event Title</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <Input placeholder="e.g. Design Meetup, Tech Conference" className="pl-10" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <Input placeholder="City or Online" className="pl-10" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Category</label>
                  <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent">
                    <option>All Categories</option>
                    <option>Design</option>
                    <option>Technology</option>
                    <option>Business</option>
                    <option>Art & Culture</option>
                    <option>Networking</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <Input placeholder="This month" className="pl-10" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="flex gap-2">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Search className="h-4 w-4 mr-2" />
                    Search Events
                  </Button>
                  <Button variant="outline" className="border-slate-200">
                    Clear Filters
                  </Button>
                </div>
                <div className="text-sm text-slate-600">
                  <span className="font-medium">18</span> events found
                </div>
              </div>
            </div>
          </div>

          {/* Events List */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">Upcoming Events</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="border-slate-200">
                  <Clock className="h-4 w-4 mr-2" />
                  This Week
                </Button>
                <Button variant="outline" size="sm" className="border-slate-200">
                  <Star className="h-4 w-4 mr-2" />
                  Featured
                </Button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Event Card 1 */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                        <Calendar className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">Design Meetup 2024</h3>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Clock className="h-4 w-4" />
                          <span>Sat, 7:00 PM</span>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Virtual</Badge>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Video className="h-4 w-4" />
                      <span>Online Event</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Users className="h-4 w-4" />
                      <span>120 attendees</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Ticket className="h-4 w-4" />
                      <span>₹299 per ticket</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span>Platform fee: 15% + 18% IGST</span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm mb-4">
                    Join us for an exciting design meetup where we'll discuss the latest trends in UI/UX design, share experiences, and network with fellow designers.
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">Design</Badge>
                    <Badge variant="outline" className="text-xs">UI/UX</Badge>
                    <Badge variant="outline" className="text-xs">Networking</Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                        Book Now
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                      <Button size="sm" variant="outline" className="border-amber-200 text-amber-700 hover:bg-amber-50">
                        <Coins className="h-4 w-4 mr-1" />
                        Pay with Coins
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Card 2 */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-purple-50 rounded-xl group-hover:bg-purple-100 transition-colors">
                        <Calendar className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">Tech Conference</h3>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Clock className="h-4 w-4" />
                          <span>Sun, 9:00 AM</span>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700">Physical</Badge>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Building2 className="h-4 w-4" />
                      <span>Convention Center, Mumbai</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Users className="h-4 w-4" />
                      <span>500 attendees</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Ticket className="h-4 w-4" />
                      <span>₹1,299 per ticket</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span>Platform fee: 15% + 18% IGST</span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm mb-4">
                    A comprehensive tech conference featuring industry leaders, workshops, and networking opportunities for developers and tech enthusiasts.
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">Technology</Badge>
                    <Badge variant="outline" className="text-xs">AI/ML</Badge>
                    <Badge variant="outline" className="text-xs">Workshop</Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                      Book Now
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Event Card 3 */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-emerald-50 rounded-xl group-hover:bg-emerald-100 transition-colors">
                        <Calendar className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">Art Exhibition</h3>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Clock className="h-4 w-4" />
                          <span>Fri, 6:00 PM</span>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-orange-100 text-orange-700">Free</Badge>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Building2 className="h-4 w-4" />
                      <span>Art Gallery, Delhi</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Users className="h-4 w-4" />
                      <span>80 attendees</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Ticket className="h-4 w-4" />
                      <span>Free Entry</span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm mb-4">
                    Explore contemporary art from emerging artists. A perfect evening for art lovers and creative minds to connect and appreciate modern artistic expressions.
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">Art</Badge>
                    <Badge variant="outline" className="text-xs">Culture</Badge>
                    <Badge variant="outline" className="text-xs">Exhibition</Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                      Join Event
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Load More Button */}
            <div className="text-center pt-6">
              <Button variant="outline" className="border-slate-200 px-8">
                Load More Events
              </Button>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

 
