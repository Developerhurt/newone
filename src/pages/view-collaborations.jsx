import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { CalendarDays, CalendarPlus, MapPin, Clock, IndianRupee, Users, User, Eye, Star } from "lucide-react"

const upcomingCollabs = [
  {
    id: "COL-2025-001",
    title: "Music Video Shoot",
    date: "2025-10-05",
    time: "10:00 AM - 5:00 PM",
    location: "Mumbai, India",
    acceptedAmount: 35000,
    manager: { name: "Aarav Singh", role: "Artist Manager" },
    members: ["Eva", "Liam", "Noah"],
    description: "High-energy music video shoot with choreography and performance shots.",
  },
  {
    id: "COL-2025-002",
    title: "Live Concert Collaboration",
    date: "2025-10-18",
    time: "6:30 PM - 10:00 PM",
    location: "Bengaluru, India",
    acceptedAmount: 50000,
    manager: { name: "Priya Patel", role: "Artist Manager" },
    members: ["Eva", "Mia", "Ethan", "Olivia"],
    description: "Collaborative live concert featuring multiple artists on stage.",
  },
]

const previousCollabs = [
  {
    id: "COL-2025-000",
    title: "Brand Photoshoot",
    date: "2025-09-02",
    time: "11:00 AM - 3:00 PM",
    location: "Hyderabad, India",
    acceptedAmount: 22000,
    manager: { name: "Rahul Verma", role: "Artist Manager" },
    members: [
      { name: "Eva", rating: 5, review: "Great coordination and on-time delivery." },
      { name: "Mia", rating: 4, review: "Creative inputs elevated the shoot." },
      { name: "Ethan", rating: 5, review: "Professional and efficient." },
      { name: "Rahul (Manager)", rating: 5, review: "Smooth execution and timely payout." },
    ],
    description: "Lifestyle brand shoot including indoor and outdoor sets.",
  },
]

function getGoogleCalendarUrl(collab) {
  const start = new Date(`${collab.date}T10:00:00`).toISOString().replace(/[-:]|\.\d{3}/g, "")
  const end = new Date(`${collab.date}T12:00:00`).toISOString().replace(/[-:]|\.\d{3}/g, "")
  const text = encodeURIComponent(collab.title)
  const details = encodeURIComponent(collab.description || "")
  const location = encodeURIComponent(collab.location || "")
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${start}/${end}&details=${details}&location=${location}`
}

export default function ViewCollaborationsPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 bg-white border-b border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
            <h1 className="text-lg font-semibold">View Collabs</h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-6 p-6 pt-0 bg-slate-50 min-h-screen">
          <Tabs defaultValue="upcoming" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="upcoming">Upcoming collabs</TabsTrigger>
              <TabsTrigger value="previous">Previous collabs</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-4">
              {upcomingCollabs.map((c) => (
                <Card key={c.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{c.id}</Badge>
                          <h3 className="text-lg font-semibold">{c.title}</h3>
                        </div>
                        <p className="text-sm text-slate-600 mb-4">{c.description}</p>
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-4">
                          <div className="flex items-center gap-2 text-sm text-slate-700">
                            <CalendarDays className="h-4 w-4" />
                            <span>{new Date(c.date).toDateString()}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-700">
                            <Clock className="h-4 w-4" />
                            <span>{c.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-700">
                            <MapPin className="h-4 w-4" />
                            <span>{c.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-700">
                            <IndianRupee className="h-4 w-4" />
                            <span>Accepted amount: ₹{c.acceptedAmount.toLocaleString()}</span>
                          </div>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="rounded-lg border p-3 bg-white">
                            <div className="text-xs text-slate-500 mb-2">Artist manager</div>
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarFallback>{c.manager.name[0]}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="text-sm font-medium">{c.manager.name}</div>
                                <div className="text-xs text-slate-500">{c.manager.role}</div>
                              </div>
                            </div>
                          </div>
                          <div className="rounded-lg border p-3 bg-white">
                            <div className="text-xs text-slate-500 mb-2">Collaboration members</div>
                            <div className="flex items-center gap-2 flex-wrap">
                              {c.members.map((m) => (
                                <Badge key={m} variant="secondary" className="text-xs">{m}</Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button asChild>
                          <a href={getGoogleCalendarUrl(c)} target="_blank" rel="noreferrer">
                            <CalendarPlus className="h-4 w-4 mr-2" />
                            Add to Google Calendar
                          </a>
                        </Button>
                        <Button variant="outline" asChild>
                          <a href="/view-profile">
                            <Eye className="h-4 w-4 mr-2" />
                            View profile
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {upcomingCollabs.length === 0 && (
                <Card>
                  <CardContent className="p-6">
                    <p className="text-slate-600">After accepting a collaboration request, it will appear here as an upcoming collab.</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="previous" className="space-y-4">
              {previousCollabs.map((c) => (
                <Card key={c.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{c.id}</Badge>
                          <h3 className="text-lg font-semibold">{c.title}</h3>
                          <Badge className="bg-emerald-100 text-emerald-700">Amount released</Badge>
                        </div>
                        <p className="text-sm text-slate-600 mb-4">{c.description}</p>
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-4">
                          <div className="flex items-center gap-2 text-sm text-slate-700">
                            <CalendarDays className="h-4 w-4" />
                            <span>{new Date(c.date).toDateString()}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-700">
                            <Clock className="h-4 w-4" />
                            <span>{c.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-700">
                            <MapPin className="h-4 w-4" />
                            <span>{c.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-700">
                            <IndianRupee className="h-4 w-4" />
                            <span>Accepted amount: ₹{c.acceptedAmount.toLocaleString()}</span>
                          </div>
                        </div>
                        <div className="rounded-lg border p-3 bg-white">
                          <div className="text-sm font-medium mb-3">Ratings & Reviews</div>
                          <div className="grid gap-3 md:grid-cols-2">
                            {c.members.map((m) => (
                              <div key={m.name} className="border rounded-lg p-3">
                                <div className="flex items-center justify-between mb-2">
                                  <div className="flex items-center gap-2">
                                    <Avatar className="h-8 w-8">
                                      <AvatarFallback>{m.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <span className="text-sm font-medium">{m.name}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    {[1,2,3,4,5].map((i) => (
                                      <Star key={i} className={`h-4 w-4 ${i <= m.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`} />
                                    ))}
                                  </div>
                                </div>
                                <p className="text-sm text-slate-600">{m.review}</p>
                              </div>
                            ))}
                          </div>
                          <p className="text-xs text-slate-500 mt-3">Reviews are posted to each participant's portfolio automatically.</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button variant="outline" asChild>
                          <a href="/view-profile">
                            <Eye className="h-4 w-4 mr-2" />
                            View profile
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {previousCollabs.length === 0 && (
                <Card>
                  <CardContent className="p-6">
                    <p className="text-slate-600">After completion, collabs move here. Participants and the artist manager can provide ratings and reviews, and the amount will be released.</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

