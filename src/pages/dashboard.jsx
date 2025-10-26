import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Search, UsersRound, Building2, CalendarDays, ArrowRight, Eye, Briefcase, Handshake, DollarSign, Shield, Coins, BarChart3, Clock, CheckCircle, FileText, Plus, Search as SearchIcon, Calendar, TrendingUp, Activity, Target, Zap, Star, Award, MessageCircle, Bell, Settings, User, MapPin, Globe, Heart, Share2, Download, Upload, Filter, MoreHorizontal } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

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
              <h1 className="text-xl font-semibold text-slate-900">Dashboard</h1>
              <p className="text-sm text-slate-500">Welcome back, Eva Murphy</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              />
            </div>
            <Button variant="outline" size="sm" className="border-slate-200">
              <Activity className="h-4 w-4 mr-2" />
              Activity
            </Button>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-8 p-8 bg-slate-50 min-h-screen">
          {/* Welcome Section */}
          <div className="bg-white rounded-xl p-6 text-slate-900 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold mb-1">Welcome back, Eva Murphy</h1>
                <p className="text-slate-500 text-sm">Here's what's happening with your creative journey today</p>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-slate-500 text-xs">Current Status</p>
                  <Badge className="bg-emerald-100 text-emerald-700">
                    <Shield className="h-3 w-3 mr-1" />
                    Verified Artist
                  </Badge>
                </div>
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-slate-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Top stats */}
          <div className="grid gap-6 md:grid-cols-4">
            <div className="bg-white rounded-xl border border-slate-200 shadow hover:shadow-md transition-colors group overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <Eye className="h-5 w-5 text-blue-600" />
                    </div>
                <div>
                      <p className="text-sm font-medium text-slate-600">Profile Views</p>
                      <p className="text-2xl font-semibold text-slate-900">2.3k</p>
                      <p className="text-xs text-slate-500">This month</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 bg-green-50 px-2.5 py-0.5 rounded-full">
                    <TrendingUp className="h-3.5 w-3.5 text-green-600" />
                    <span className="text-xs font-medium text-green-700">+12%</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full bg-slate-100 rounded-full h-1.5">
                    <div className="bg-blue-500 h-1.5 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-slate-200 shadow hover:shadow-md transition-colors group overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-emerald-100 rounded-xl">
                      <Briefcase className="h-5 w-5 text-emerald-600" />
                    </div>
                <div>
                      <p className="text-sm font-medium text-slate-600">Job Invites</p>
                      <p className="text-2xl font-semibold text-slate-900">56</p>
                      <p className="text-xs text-slate-500">Pending review</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 bg-green-50 px-2.5 py-0.5 rounded-full">
                    <TrendingUp className="h-3.5 w-3.5 text-green-600" />
                    <span className="text-xs font-medium text-green-700">+6%</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full bg-slate-100 rounded-full h-1.5">
                    <div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-slate-200 shadow hover:shadow-md transition-colors group overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-purple-100 rounded-xl">
                      <Handshake className="h-5 w-5 text-purple-600" />
                    </div>
                <div>
                      <p className="text-sm font-medium text-slate-600">Collaborations</p>
                      <p className="text-2xl font-semibold text-slate-900">24</p>
                      <p className="text-xs text-slate-500">Active projects</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 bg-green-50 px-2.5 py-0.5 rounded-full">
                    <TrendingUp className="h-3.5 w-3.5 text-green-600" />
                    <span className="text-xs font-medium text-green-700">+18%</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full bg-slate-100 rounded-full h-1.5">
                    <div className="bg-purple-500 h-1.5 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-slate-200 shadow hover:shadow-md transition-colors group overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-amber-100 rounded-xl">
                      <DollarSign className="h-5 w-5 text-amber-600" />
                    </div>
                <div>
                      <p className="text-sm font-medium text-slate-600">Earnings</p>
                      <p className="text-2xl font-semibold text-slate-900">₹48,300</p>
                      <p className="text-xs text-slate-500">This month</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 bg-green-50 px-2.5 py-0.5 rounded-full">
                    <TrendingUp className="h-3.5 w-3.5 text-green-600" />
                    <span className="text-xs font-medium text-green-700">+15%</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full bg-slate-100 rounded-full h-1.5">
                    <div className="bg-amber-500 h-1.5 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Verification + Wallet */}
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 md:col-span-2 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">Verification Status</h3>
                      <p className="text-sm text-slate-600">Submit a government ID to unlock payments and collaborations</p>
                      <div className="mt-2">
                        <Badge className="bg-green-100 text-green-700">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Verified Artist
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
                    <Shield className="h-4 w-4 mr-2" />
                    View Status
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl shadow-lg">
                    <Coins className="h-6 w-6 text-white" />
                  </div>
                <div>
                    <h3 className="text-lg font-semibold text-slate-900">Hub Coins</h3>
                    <p className="text-sm text-slate-600">Balance and recharge</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-slate-900">2,450</div>
                  <Button variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 shadow-md">
                    <Coins className="h-4 w-4 mr-2" />
                    Recharge
                  </Button>
                </div>
                <div className="mt-4">
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full" style={{width: '70%'}}></div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">70% of monthly limit used</p>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics + Time tracker + Onboarding tasks */}
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white rounded-xl border border-slate-200 shadow hover:shadow-md transition-colors overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-purple-100 rounded-xl">
                      <BarChart3 className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">Sales Analytics</h3>
                      <p className="text-xs text-slate-600">This week</p>
                    </div>
                  </div>
                  <Badge className="bg-green-50 text-green-700">+15%</Badge>
                </div>
                <div className="h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={[{d:"SUN",v:25},{d:"MON",v:40},{d:"TUE",v:62},{d:"WED",v:48},{d:"THU",v:30},{d:"FRI",v:72},{d:"SAT",v:81}]}
                      margin={{left:0,right:0,top:8,bottom:0}}>
                      <XAxis dataKey="d" axisLine={false} tickLine={false} tick={{fontSize:12, fill:'#64748b'}} />
                      <YAxis hide />
                      <Tooltip cursor={{fill:'#f1f5f9'}} contentStyle={{borderRadius:12}} />
                      <Bar dataKey="v" radius={[6,6,6,6]} fill="#8b5cf6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-slate-200 shadow hover:shadow-md transition-colors overflow-hidden">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-orange-100 rounded-xl">
                    <Clock className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">Time Tracker</h3>
                    <p className="text-xs text-slate-600">Active session</p>
                  </div>
                </div>
                <div className="text-center mb-6">
                  <div className="text-3xl font-semibold text-slate-900 mb-1">02:35</div>
                  <div className="text-xs text-slate-500">hours:minutes</div>
                  <div className="mt-2">
                    <Badge className="bg-green-50 text-green-700">
                      <Activity className="h-3 w-3 mr-1" />
                      Running
                    </Badge>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 border-slate-200 text-orange-700 hover:bg-orange-50 shadow-none">
                    <Clock className="h-4 w-4 mr-2" />
                    Pause
                  </Button>
                  <Button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white shadow">
                    <Target className="h-4 w-4 mr-2" />
                    Stop
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-slate-200 shadow hover:shadow-md transition-colors overflow-hidden">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">Onboarding Tasks</h3>
                    <p className="text-xs text-slate-600">2 of 8 completed</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-slate-700">Complete profile</span>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Done</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-4 w-4 text-slate-400" />
                      <span className="text-sm font-medium text-slate-700">Upload portfolio</span>
                    </div>
                    <Badge className="bg-slate-100 text-slate-600">Todo</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-4 w-4 text-slate-400" />
                      <span className="text-sm font-medium text-slate-700">Apply to jobs</span>
                    </div>
                    <Badge className="bg-slate-100 text-slate-600">Todo</Badge>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full bg-slate-100 rounded-full h-1.5">
                    <div className="bg-green-500 h-1.5 rounded-full" style={{width: '25%'}}></div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">25% completed</p>
                </div>
              </div>
            </div>
          </div>
          {/* Applied Jobs Table */}
          <div className="bg-white rounded-xl border border-slate-200 shadow hover:shadow-md transition-colors overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Briefcase className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">Applied Jobs</h3>
                    <p className="text-xs text-slate-600">Track your job applications</p>
                  </div>
                </div>
                <Button variant="outline" className="border-slate-200 text-blue-700 hover:bg-blue-50 shadow-none">
                  <SearchIcon className="h-4 w-4 mr-2" />
                  View All
                </Button>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-slate-200">
                      <TableHead className="text-slate-700 font-medium">Role</TableHead>
                      <TableHead className="text-slate-700 font-medium">Company</TableHead>
                      <TableHead className="text-slate-700 font-medium">Date</TableHead>
                      <TableHead className="text-right text-slate-700 font-medium">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {t:'Product Designer', c:'Acme', d:'17 Sep', s:'Processing'},
                      {t:'3D Artist', c:'PixelWorks', d:'16 Sep', s:'Resume Viewed'},
                      {t:'Video Editor', c:'FilmCo', d:'14 Sep', s:'Shortlisted'},
                    ].map((r,i) => (
                      <TableRow key={i} className="border-slate-100 hover:bg-slate-50">
                        <TableCell className="font-medium text-slate-800">{r.t}</TableCell>
                        <TableCell className="text-slate-600">{r.c}</TableCell>
                        <TableCell className="text-slate-600">{r.d}</TableCell>
                        <TableCell className="text-right">
                          <Badge className={
                            r.s==='Shortlisted' ? 'bg-green-100 text-green-700' : 
                            r.s==='Resume Viewed' ? 'bg-blue-100 text-blue-700' : 
                            'bg-amber-100 text-amber-700'
                          }>
                            {r.s}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid gap-6 md:grid-cols-4">
            <div className="bg-white rounded-xl border border-slate-200 shadow hover:shadow-md transition-colors group cursor-pointer overflow-hidden">
              <div className="p-6 text-center">
                <div className="p-3 bg-blue-100 rounded-xl w-fit mx-auto mb-4">
                  <FileText className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-1">Post Content</h3>
                <p className="text-xs text-slate-600 mb-3">Share images & videos</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Post
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-slate-200 shadow hover:shadow-md transition-colors group cursor-pointer overflow-hidden">
              <div className="p-6 text-center">
                <div className="p-3 bg-purple-100 rounded-xl w-fit mx-auto mb-4">
                  <Handshake className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-1">Create Collab</h3>
                <p className="text-xs text-slate-600 mb-3">Invite artists</p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white shadow">
                  <Plus className="h-4 w-4 mr-2" />
                  Start Collab
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-slate-200 shadow hover:shadow-md transition-colors group cursor-pointer overflow-hidden">
              <div className="p-6 text-center">
                <div className="p-3 bg-emerald-100 rounded-xl w-fit mx-auto mb-4">
                  <SearchIcon className="h-7 w-7 text-emerald-600" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-1">Search Jobs</h3>
                <p className="text-xs text-slate-600 mb-3">Find roles</p>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white shadow">
                  <SearchIcon className="h-4 w-4 mr-2" />
                  Browse Jobs
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-slate-200 shadow hover:shadow-md transition-colors group cursor-pointer overflow-hidden">
              <div className="p-6 text-center">
                <div className="p-3 bg-orange-100 rounded-xl w-fit mx-auto mb-4">
                  <Calendar className="h-7 w-7 text-orange-600" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-1">Create Event</h3>
                <p className="text-xs text-slate-600 mb-3">Sell tickets</p>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white shadow">
                  <Plus className="h-4 w-4 mr-2" />
                  New Event
                </Button>
              </div>
            </div>
          </div>

          {/* Recent Activity & Notifications */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-xl border border-slate-200 shadow hover:shadow-md transition-colors overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-indigo-100 rounded-xl">
                      <Bell className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">Recent Activity</h3>
                      <p className="text-xs text-slate-600">Your latest updates</p>
                    </div>
                  </div>
                  <Badge className="bg-blue-50 text-blue-700">3 new</Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-800">New job application received</p>
                      <p className="text-xs text-slate-500">2 minutes ago</p>
                    </div>
                    <Badge className="bg-green-100 text-green-700">New</Badge>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-800">Collaboration request accepted</p>
                      <p className="text-xs text-slate-500">1 hour ago</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700">Accepted</Badge>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-800">Event booking confirmed</p>
                      <p className="text-xs text-slate-500">3 hours ago</p>
                    </div>
                    <Badge className="bg-purple-100 text-purple-700">Confirmed</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl shadow-lg">
                      <Heart className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">Quick Stats</h3>
                      <p className="text-sm text-slate-600">Your performance metrics</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-slate-200">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-50 rounded-xl">
                    <div className="text-2xl font-bold text-slate-900">98%</div>
                    <div className="text-xs text-slate-500">Profile Complete</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-xl">
                    <div className="text-2xl font-bold text-slate-900">4.8</div>
                    <div className="text-xs text-slate-500">Average Rating</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-xl">
                    <div className="text-2xl font-bold text-slate-900">24</div>
                    <div className="text-xs text-slate-500">Projects Done</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-xl">
                    <div className="text-2xl font-bold text-slate-900">156</div>
                    <div className="text-xs text-slate-500">Connections</div>
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


