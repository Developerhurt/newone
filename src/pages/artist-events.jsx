import React, { useState } from 'react';
import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Search, 
  Filter, 
  Eye,
  Calendar,
  MapPin,
  Clock,
  Users,
  Star,
  Share2,
  Download,
  QrCode,
  CreditCard,
  Coins,
  Plus,
  Edit3,
  Trash2,
  ExternalLink,
  Phone,
  Mail,
  Building,
  Globe,
  TrendingUp,
  BarChart3,
  DollarSign,
  CheckCircle,
  XCircle,
  AlertCircle
} from "lucide-react"

export default function ArtistEventsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeTab, setActiveTab] = useState("events-near-me");

  const [eventsNearMe] = useState([
    {
      id: 1,
      title: "Digital Art Workshop 2024",
      description: "Learn advanced digital art techniques from industry professionals. Perfect for artists looking to enhance their skills.",
      category: "Workshop",
      type: "physical",
      location: "123 Main St, New York, NY 10001",
      startDate: "2024-02-15",
      startTime: "10:00 AM",
      endTime: "2:00 PM",
      endDate: "2024-02-15",
      price: 75.00,
      platformFee: 11.25,
      gst: 2.03,
      totalPrice: 88.28,
      attendees: 45,
      maxAttendees: 50,
      organizer: "Creative Studio Inc.",
      organizerEmail: "events@creativestudio.com",
      organizerPhone: "+1 (555) 123-4567",
      rating: 4.8,
      reviews: 24,
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=200&fit=crop",
      qrCode: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmZiIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSIjMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5RUjwvdGV4dD48L3N2Zz4=",
      industry: "Entertainment",
      languages: ["English", "Spanish"],
      ageLimit: "18+",
      isBooked: false
    },
    {
      id: 2,
      title: "Creative Photography Masterclass",
      description: "Master the art of creative photography with hands-on sessions and expert guidance.",
      category: "Masterclass",
      type: "physical",
      location: "456 Oak Ave, Los Angeles, CA 90210",
      startDate: "2024-02-20",
      startTime: "2:00 PM",
      endTime: "6:00 PM",
      endDate: "2024-02-20",
      price: 120.00,
      platformFee: 18.00,
      gst: 3.24,
      totalPrice: 141.24,
      attendees: 28,
      maxAttendees: 30,
      organizer: "Photo Academy",
      organizerEmail: "info@photoacademy.com",
      organizerPhone: "+1 (555) 987-6543",
      rating: 4.9,
      reviews: 18,
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=200&fit=crop",
      qrCode: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmZiIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSIjMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5RUjwvdGV4dD48L3N2Zz4=",
      industry: "Entertainment",
      languages: ["English"],
      ageLimit: "16+",
      isBooked: true
    },
    {
      id: 3,
      title: "UI/UX Design Bootcamp",
      description: "Comprehensive bootcamp covering user interface and user experience design principles.",
      category: "Bootcamp",
      type: "virtual",
      location: "Online",
      startDate: "2024-02-25",
      startTime: "9:00 AM",
      endTime: "5:00 PM",
      endDate: "2024-02-25",
      price: 200.00,
      platformFee: 30.00,
      gst: 5.40,
      totalPrice: 235.40,
      attendees: 67,
      maxAttendees: 100,
      organizer: "Tech Academy",
      organizerEmail: "bootcamp@techacademy.com",
      organizerPhone: "+1 (555) 456-7890",
      rating: 4.7,
      reviews: 32,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=200&fit=crop",
      qrCode: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmZiIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSIjMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5RUjwvdGV4dD48L3N2Zz4=",
      industry: "Technology",
      languages: ["English"],
      ageLimit: "18+",
      isBooked: false,
      streamingUrl: "https://zoom.us/j/123456789"
    }
  ]);

  const [myEvents] = useState([
    {
      id: 4,
      title: "My Digital Art Exhibition",
      description: "Showcase of my latest digital artwork collection featuring abstract and surreal pieces.",
      category: "Exhibition",
      type: "physical",
      location: "Gallery Space, 789 Art St, New York, NY 10002",
      startDate: "2024-03-01",
      startTime: "6:00 PM",
      endTime: "9:00 PM",
      endDate: "2024-03-01",
      price: 25.00,
      platformFee: 3.75,
      gst: 0.68,
      totalPrice: 29.43,
      attendees: 0,
      maxAttendees: 100,
      ticketsSold: 0,
      totalRevenue: 0,
      status: "live",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=200&fit=crop",
      qrCode: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmZiIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSIjMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5RUjwvdGV4dD48L3N2Zz4=",
      industry: "Entertainment",
      languages: ["English"],
      ageLimit: "All Ages",
      isMyEvent: true
    }
  ]);

  const filteredEvents = eventsNearMe.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.organizer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || event.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const getTypeBadge = (type) => {
    switch (type) {
      case "physical":
        return <Badge className="bg-blue-100 text-blue-700"><MapPin className="h-3 w-3 mr-1" />Physical</Badge>;
      case "virtual":
        return <Badge className="bg-green-100 text-green-700"><Globe className="h-3 w-3 mr-1" />Virtual</Badge>;
      default:
        return <Badge className="bg-slate-100 text-slate-700">{type}</Badge>;
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "live":
        return <Badge className="bg-green-100 text-green-700"><CheckCircle className="h-3 w-3 mr-1" />Live</Badge>;
      case "upcoming":
        return <Badge className="bg-blue-100 text-blue-700"><Clock className="h-3 w-3 mr-1" />Upcoming</Badge>;
      case "ended":
        return <Badge className="bg-slate-100 text-slate-700"><XCircle className="h-3 w-3 mr-1" />Ended</Badge>;
      default:
        return <Badge className="bg-slate-100 text-slate-700">{status}</Badge>;
    }
  };

  const handleBookEvent = (event) => {
    console.log('Booking event:', event.title);
    alert(`Booking ${event.title} for $${event.totalPrice.toFixed(2)}`);
  };

  const handleViewEvent = (event) => {
    setSelectedEvent(event);
  };

  const handleShareEvent = (event) => {
    navigator.share({
      title: event.title,
      text: event.description,
      url: window.location.href
    });
  };

  const handleEditEvent = (event) => {
    console.log('Editing event:', event.title);
    alert('Edit event functionality would open here');
  };

  const handleViewAnalytics = (event) => {
    console.log('Viewing analytics for:', event.title);
    alert('Analytics dashboard would open here');
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
              <h1 className="text-xl font-semibold text-slate-900">Events</h1>
              <p className="text-sm text-slate-500">Discover and manage events</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input 
                type="text" 
                placeholder="Search events..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent w-64"
              />
            </div>
            <select 
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
            >
              <option value="all">All Types</option>
              <option value="physical">Physical</option>
              <option value="virtual">Virtual</option>
            </select>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Create Event
            </Button>
          </div>
        </header>
        
        <div className="flex flex-1 gap-6 p-6 bg-slate-50">
          {/* Main Content */}
          <div className="flex-1 max-w-7xl space-y-6">
            
            {/* Events Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 bg-slate-100">
                <TabsTrigger value="events-near-me" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  Events Near Me
                </TabsTrigger>
                <TabsTrigger value="my-events" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  My Events
                </TabsTrigger>
                <TabsTrigger value="create-event" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  Create Event
                </TabsTrigger>
              </TabsList>

              {/* Events Near Me Tab */}
              <TabsContent value="events-near-me" className="space-y-6">
                <div className="space-y-4">
                  {filteredEvents.map((event) => (
                    <Card key={event.id} className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex gap-6">
                          <div className="w-48 h-32 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0">
                            <img 
                              src={event.image} 
                              alt={event.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3 className="text-lg font-semibold text-slate-900 mb-1">{event.title}</h3>
                                <div className="flex items-center gap-2 mb-2">
                                  {getTypeBadge(event.type)}
                                  <Badge variant="outline">{event.category}</Badge>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-slate-900">${event.totalPrice.toFixed(2)}</div>
                                <div className="text-sm text-slate-500">per ticket</div>
                              </div>
                            </div>
                            
                            <p className="text-slate-600 mb-4 line-clamp-2">{event.description}</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-600 mb-4">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-slate-400" />
                                <span>{new Date(event.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-slate-400" />
                                <span>{event.startTime} - {event.endTime}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-slate-400" />
                                <span>{event.location}</span>
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4 text-sm text-slate-600">
                                <div className="flex items-center gap-1">
                                  <Users className="h-4 w-4" />
                                  <span>{event.attendees}/{event.maxAttendees} attendees</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                  <span>{event.rating} ({event.reviews} reviews)</span>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-2">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => handleViewEvent(event)}
                                >
                                  <Eye className="h-4 w-4 mr-1" />
                                  View Details
                                </Button>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => handleShareEvent(event)}
                                >
                                  <Share2 className="h-4 w-4 mr-1" />
                                  Share
                                </Button>
                                {event.isBooked ? (
                                  <Button 
                                    variant="secondary" 
                                    size="sm"
                                    disabled
                                  >
                                    <CheckCircle className="h-4 w-4 mr-1" />
                                    Booked
                                  </Button>
                                ) : (
                                  <Button 
                                    className="bg-blue-600 hover:bg-blue-700 text-white"
                                    onClick={() => handleBookEvent(event)}
                                  >
                                    <CreditCard className="h-4 w-4 mr-1" />
                                    Book Tickets
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  
                  {filteredEvents.length === 0 && (
                    <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                      <CardContent className="p-12 text-center">
                        <Calendar className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">No events found</h3>
                        <p className="text-slate-500">Try adjusting your search or filters.</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </TabsContent>

              {/* My Events Tab */}
              <TabsContent value="my-events" className="space-y-6">
                <div className="space-y-4">
                  {myEvents.map((event) => (
                    <Card key={event.id} className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex gap-6">
                          <div className="w-48 h-32 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0">
                            <img 
                              src={event.image} 
                              alt={event.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3 className="text-lg font-semibold text-slate-900 mb-1">{event.title}</h3>
                                <div className="flex items-center gap-2 mb-2">
                                  {getTypeBadge(event.type)}
                                  {getStatusBadge(event.status)}
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-slate-900">${event.totalPrice.toFixed(2)}</div>
                                <div className="text-sm text-slate-500">per ticket</div>
                              </div>
                            </div>
                            
                            <p className="text-slate-600 mb-4 line-clamp-2">{event.description}</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-600 mb-4">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-slate-400" />
                                <span>{new Date(event.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-slate-400" />
                                <span>{event.startTime} - {event.endTime}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-slate-400" />
                                <span>{event.location}</span>
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4 text-sm text-slate-600">
                                <div className="flex items-center gap-1">
                                  <Users className="h-4 w-4" />
                                  <span>{event.ticketsSold} tickets sold</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <DollarSign className="h-4 w-4" />
                                  <span>${event.totalRevenue.toFixed(2)} revenue</span>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-2">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => handleViewEvent(event)}
                                >
                                  <Eye className="h-4 w-4 mr-1" />
                                  View Details
                                </Button>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => handleEditEvent(event)}
                                >
                                  <Edit3 className="h-4 w-4 mr-1" />
                                  Edit
                                </Button>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => handleViewAnalytics(event)}
                                >
                                  <BarChart3 className="h-4 w-4 mr-1" />
                                  Analytics
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  
                  {myEvents.length === 0 && (
                    <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                      <CardContent className="p-12 text-center">
                        <Calendar className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">No events created</h3>
                        <p className="text-slate-500">Create your first event to get started.</p>
                        <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                          <Plus className="h-4 w-4 mr-2" />
                          Create Event
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </TabsContent>

              {/* Create Event Tab */}
              <TabsContent value="create-event" className="space-y-6">
                <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-slate-100">
                    <CardTitle className="text-xl font-semibold text-slate-900">Create New Event</CardTitle>
                    <CardDescription>Set up your event and start selling tickets</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="text-center py-12">
                      <Calendar className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Event Creation Form</h3>
                      <p className="text-slate-500 mb-6">This would contain a comprehensive form for creating events with all the required fields.</p>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        <Plus className="h-4 w-4 mr-2" />
                        Start Creating Event
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Event Details Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-semibold text-slate-900">
                      {selectedEvent.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      {selectedEvent.organizer} • {selectedEvent.location}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    {getTypeBadge(selectedEvent.type)}
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setSelectedEvent(null)}
                    >
                      <XCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                
                {/* Event Image */}
                <div className="w-full h-64 bg-slate-100 rounded-lg overflow-hidden">
                  <img 
                    src={selectedEvent.image} 
                    alt={selectedEvent.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Event Details */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900">Event Information</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-slate-700">Date</label>
                        <p className="text-slate-900">{new Date(selectedEvent.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-700">Time</label>
                        <p className="text-slate-900">{selectedEvent.startTime} - {selectedEvent.endTime}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-700">Location</label>
                        <p className="text-slate-900">{selectedEvent.location}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-700">Category</label>
                        <p className="text-slate-900">{selectedEvent.category}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900">Pricing</h3>
                    <div className="bg-slate-50 rounded-lg p-4 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Ticket Price</span>
                        <span className="text-slate-900">${selectedEvent.price.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Platform Fee (15%)</span>
                        <span className="text-slate-900">${selectedEvent.platformFee.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">GST (18%)</span>
                        <span className="text-slate-900">${selectedEvent.gst.toFixed(2)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-semibold">
                        <span className="text-slate-900">Total Price</span>
                        <span className="text-slate-900">${selectedEvent.totalPrice.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Description</h3>
                  <p className="text-slate-700 leading-relaxed">{selectedEvent.description}</p>
                </div>

                {/* Event Stats */}
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="bg-slate-50 rounded-lg p-4 text-center">
                    <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-900">{selectedEvent.attendees}</div>
                    <div className="text-sm text-slate-600">Attendees</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 text-center">
                    <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-900">{selectedEvent.rating}</div>
                    <div className="text-sm text-slate-600">Rating</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 text-center">
                    <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-900">{selectedEvent.reviews}</div>
                    <div className="text-sm text-slate-600">Reviews</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-slate-200">
                  {selectedEvent.isBooked ? (
                    <Button 
                      variant="secondary" 
                      className="flex-1"
                      disabled
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Already Booked
                    </Button>
                  ) : (
                    <Button 
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => handleBookEvent(selectedEvent)}
                    >
                      <CreditCard className="h-4 w-4 mr-2" />
                      Book Tickets
                    </Button>
                  )}
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => handleShareEvent(selectedEvent)}
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share Event
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </SidebarInset>
    </SidebarProvider>
  );
}
