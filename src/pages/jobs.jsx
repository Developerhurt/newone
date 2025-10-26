import { AppSidebar } from "@/components/app-sidebar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  MapPin, 
  Briefcase, 
  Clock, 
  DollarSign, 
  Filter, 
  Star, 
  Building2, 
  Users, 
  Calendar,
  ArrowRight,
  Bookmark,
  Share2,
  Eye,
  Coins,
  Shield
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
              <h1 className="text-xl font-semibold text-slate-900">Jobs</h1>
              <p className="text-sm text-slate-500">Find your next opportunity</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <input 
                type="text" 
                placeholder="Search jobs..." 
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
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Job Title or Keywords</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <Input placeholder="e.g. Product Designer, React Developer" className="pl-10" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <Input placeholder="City or Remote" className="pl-10" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Job Type</label>
                  <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent">
                    <option>All Types</option>
                    <option>Artist Jobs (Creative)</option>
                    <option>Guest Jobs (Non-Artist)</option>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Remote</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="flex gap-2">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Search className="h-4 w-4 mr-2" />
                    Search Jobs
                  </Button>
                  <Button variant="outline" className="border-slate-200">
                    Clear Filters
                  </Button>
                </div>
                <div className="text-sm text-slate-600">
                  <span className="font-medium">24</span> jobs found
                </div>
              </div>
            </div>
          </div>

          {/* Post Job Section for Businesses */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 shadow-sm">
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">Post a Job</h2>
                  <p className="text-sm text-slate-600">Hire talented artists or post non-artist positions</p>
                </div>
                <div className="ml-auto flex items-center gap-2 text-sm text-amber-600 bg-amber-50 px-3 py-1 rounded-lg">
                  <Coins className="h-4 w-4" />
                  <span>Costs 700 Hub Coins</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Briefcase className="h-4 w-4 mr-2" />
                  Post Artist Job
                </Button>
                <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                  <Users className="h-4 w-4 mr-2" />
                  Post Guest Job
                </Button>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">Open Positions</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="border-slate-200">
                  <Clock className="h-4 w-4 mr-2" />
                  Recent
                </Button>
                <Button variant="outline" size="sm" className="border-slate-200">
                  <Star className="h-4 w-4 mr-2" />
                  Featured
                </Button>
              </div>
            </div>

            <div className="grid gap-6">
              {/* Job Card 1 */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                        <Briefcase className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-slate-900">Product Designer</h3>
                          <Badge className="bg-green-100 text-green-700">Full-time</Badge>
                          <Badge className="bg-blue-100 text-blue-700">
                            <Shield className="h-3 w-3 mr-1" />
                            Artist Job
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                          <div className="flex items-center gap-1">
                            <Building2 className="h-4 w-4" />
                            <span>Acme Inc.</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>Bengaluru, India</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            <span>₹12L - ₹18L</span>
                          </div>
                        </div>
                        <p className="text-slate-600 text-sm mb-4">
                          We're looking for a creative Product Designer to join our team and help shape the future of our products. You'll work closely with engineering and product teams to create beautiful, functional designs.
                        </p>
                        <div className="flex items-center gap-2 mb-4">
                          <Badge variant="outline" className="text-xs">UI/UX</Badge>
                          <Badge variant="outline" className="text-xs">Figma</Badge>
                          <Badge variant="outline" className="text-xs">Prototyping</Badge>
                          <Badge variant="outline" className="text-xs">User Research</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>Posted 2 days ago</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            <span>12 applicants</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                        Apply Now
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Card 2 */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-purple-50 rounded-xl group-hover:bg-purple-100 transition-colors">
                        <Briefcase className="h-6 w-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-slate-900">3D Artist</h3>
                          <Badge className="bg-blue-100 text-blue-700">Contract</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                          <div className="flex items-center gap-1">
                            <Building2 className="h-4 w-4" />
                            <span>PixelWorks</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>Remote</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            <span>₹80k - ₹120k/month</span>
                          </div>
                        </div>
                        <p className="text-slate-600 text-sm mb-4">
                          Join our creative team as a 3D Artist to work on exciting game projects. You'll create stunning 3D models, textures, and environments that bring our games to life.
                        </p>
                        <div className="flex items-center gap-2 mb-4">
                          <Badge variant="outline" className="text-xs">Blender</Badge>
                          <Badge variant="outline" className="text-xs">Maya</Badge>
                          <Badge variant="outline" className="text-xs">Substance</Badge>
                          <Badge variant="outline" className="text-xs">Unity</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>Posted 1 day ago</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            <span>8 applicants</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                        Apply Now
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Card 3 */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-emerald-50 rounded-xl group-hover:bg-emerald-100 transition-colors">
                        <Briefcase className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-slate-900">Video Editor</h3>
                          <Badge className="bg-green-100 text-green-700">Full-time</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                          <div className="flex items-center gap-1">
                            <Building2 className="h-4 w-4" />
                            <span>FilmCo</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>Mumbai, India</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            <span>₹9L - ₹14L</span>
                          </div>
                        </div>
                        <p className="text-slate-600 text-sm mb-4">
                          We're seeking a talented Video Editor to join our production team. You'll work on various projects including commercials, documentaries, and digital content.
                        </p>
                        <div className="flex items-center gap-2 mb-4">
                          <Badge variant="outline" className="text-xs">Premiere Pro</Badge>
                          <Badge variant="outline" className="text-xs">After Effects</Badge>
                          <Badge variant="outline" className="text-xs">DaVinci Resolve</Badge>
                          <Badge variant="outline" className="text-xs">Motion Graphics</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>Posted 3 days ago</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            <span>15 applicants</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                        Apply Now
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Card 4 */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-orange-50 rounded-xl group-hover:bg-orange-100 transition-colors">
                        <Briefcase className="h-6 w-6 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-slate-900">Frontend Engineer</h3>
                          <Badge className="bg-blue-100 text-blue-700">Hybrid</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                          <div className="flex items-center gap-1">
                            <Building2 className="h-4 w-4" />
                            <span>TechLab</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>Hyderabad, India</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            <span>₹16L - ₹24L</span>
                          </div>
                        </div>
                        <p className="text-slate-600 text-sm mb-4">
                          Join our engineering team as a Frontend Engineer to build scalable web applications. You'll work with modern technologies and collaborate with cross-functional teams.
                        </p>
                        <div className="flex items-center gap-2 mb-4">
                          <Badge variant="outline" className="text-xs">React</Badge>
                          <Badge variant="outline" className="text-xs">TypeScript</Badge>
                          <Badge variant="outline" className="text-xs">Next.js</Badge>
                          <Badge variant="outline" className="text-xs">Tailwind CSS</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>Posted 5 days ago</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            <span>23 applicants</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="border-slate-200">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white">
                        Apply Now
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Load More Button */}
            <div className="text-center pt-6">
              <Button variant="outline" className="border-slate-200 px-8">
                Load More Jobs
              </Button>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}


