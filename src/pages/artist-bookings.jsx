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
  Calendar, 
  Download, 
  Star, 
  Search, 
  Filter, 
  Eye,
  QrCode,
  FileText,
  Clock,
  MapPin,
  User,
  CreditCard,
  CheckCircle,
  XCircle,
  AlertCircle,
  ExternalLink,
  Share2,
  MessageCircle,
  Phone,
  Mail
} from "lucide-react"

export default function ArtistBookingsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedBooking, setSelectedBooking] = useState(null);

  const [bookings] = useState([
    {
      id: 1,
      eventName: "Digital Art Workshop 2024",
      candidateName: "John Smith",
      address: "123 Main St, New York, NY 10001",
      quantity: 2,
      date: "2024-02-15",
      time: "10:00 AM - 2:00 PM",
      bookingId: "BK001234567",
      qrCode: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmZiIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSIjMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5RUjwvdGV4dD48L3N2Zz4=",
      totalAmount: 150.00,
      platformFee: 22.50,
      gst: 4.05,
      status: "confirmed",
      email: "john.smith@example.com",
      phone: "+1 (555) 123-4567",
      rating: null
    },
    {
      id: 2,
      eventName: "Creative Photography Masterclass",
      candidateName: "Sarah Johnson",
      address: "456 Oak Ave, Los Angeles, CA 90210",
      quantity: 1,
      date: "2024-02-20",
      time: "2:00 PM - 6:00 PM",
      bookingId: "BK001234568",
      qrCode: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmZiIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSIjMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5RUjwvdGV4dD48L3N2Zz4=",
      totalAmount: 89.00,
      platformFee: 13.35,
      gst: 2.40,
      status: "completed",
      email: "sarah.johnson@example.com",
      phone: "+1 (555) 987-6543",
      rating: 5
    },
    {
      id: 3,
      eventName: "UI/UX Design Bootcamp",
      candidateName: "Mike Chen",
      address: "789 Pine St, San Francisco, CA 94102",
      quantity: 3,
      date: "2024-02-25",
      time: "9:00 AM - 5:00 PM",
      bookingId: "BK001234569",
      qrCode: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmZiIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSIjMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5RUjwvdGV4dD48L3N2Zz4=",
      totalAmount: 300.00,
      platformFee: 45.00,
      gst: 8.10,
      status: "pending",
      email: "mike.chen@example.com",
      phone: "+1 (555) 456-7890",
      rating: null
    }
  ]);

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.bookingId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || booking.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-green-100 text-green-700"><CheckCircle className="h-3 w-3 mr-1" />Confirmed</Badge>;
      case "completed":
        return <Badge className="bg-blue-100 text-blue-700"><CheckCircle className="h-3 w-3 mr-1" />Completed</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-700"><Clock className="h-3 w-3 mr-1" />Pending</Badge>;
      case "cancelled":
        return <Badge className="bg-red-100 text-red-700"><XCircle className="h-3 w-3 mr-1" />Cancelled</Badge>;
      default:
        return <Badge className="bg-slate-100 text-slate-700">{status}</Badge>;
    }
  };

  const handleRateEvent = (bookingId, rating) => {
    // Update rating for the booking
    console.log(`Rating booking ${bookingId} with ${rating} stars`);
    alert(`Thank you for rating this event ${rating} stars!`);
  };

  const handleDownloadInvoice = (booking) => {
    // Generate and download invoice
    console.log('Downloading invoice for booking:', booking.bookingId);
    alert('Invoice download started!');
  };

  const handleViewDetails = (booking) => {
    setSelectedBooking(booking);
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
              <h1 className="text-xl font-semibold text-slate-900">Bookings</h1>
              <p className="text-sm text-slate-500">Your event ticket history and invoices</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input 
                type="text" 
                placeholder="Search bookings..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent w-64"
              />
            </div>
            <select 
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
            >
              <option value="all">All Status</option>
              <option value="confirmed">Confirmed</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </header>
        
        <div className="flex flex-1 gap-6 p-6 bg-slate-50">
          {/* Main Content */}
          <div className="flex-1 max-w-7xl space-y-6">
            
            {/* Bookings List */}
            <div className="space-y-4">
              {filteredBookings.map((booking) => (
                <Card key={booking.id} className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-lg font-semibold text-slate-900">{booking.eventName}</h3>
                          {getStatusBadge(booking.status)}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-slate-600">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-slate-400" />
                            <span>{booking.candidateName}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-slate-400" />
                            <span>{new Date(booking.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-slate-400" />
                            <span>{booking.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CreditCard className="h-4 w-4 text-slate-400" />
                            <span>${booking.totalAmount.toFixed(2)}</span>
                          </div>
                        </div>
                        
                        <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                          <span>Booking ID: {booking.bookingId}</span>
                          <span>•</span>
                          <span>Quantity: {booking.quantity}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 ml-4">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleViewDetails(booking)}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleDownloadInvoice(booking)}
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Invoice
                        </Button>
                        {booking.status === "completed" && !booking.rating && (
                          <div className="flex items-center gap-1">
                            <span className="text-sm text-slate-600">Rate:</span>
                            {[1,2,3,4,5,6,7,8,9,10].map((star) => (
                              <button
                                key={star}
                                onClick={() => handleRateEvent(booking.id, star)}
                                className="text-yellow-400 hover:text-yellow-500 transition-colors"
                              >
                                <Star className="h-4 w-4" />
                              </button>
                            ))}
                          </div>
                        )}
                        {booking.rating && (
                          <div className="flex items-center gap-1">
                            <span className="text-sm text-slate-600">Rated:</span>
                            <div className="flex items-center gap-1">
                              {[1,2,3,4,5,6,7,8,9,10].map((star) => (
                                <Star 
                                  key={star}
                                  className={`h-4 w-4 ${
                                    star <= booking.rating 
                                      ? 'text-yellow-400 fill-current' 
                                      : 'text-slate-300'
                                  }`} 
                                />
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {filteredBookings.length === 0 && (
                <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                  <CardContent className="p-12 text-center">
                    <Calendar className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">No bookings found</h3>
                    <p className="text-slate-500">You haven't purchased any event tickets yet.</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>

        {/* Booking Details Modal */}
        {selectedBooking && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-slate-100">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold text-slate-900">
                    Booking Details
                  </CardTitle>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSelectedBooking(null)}
                  >
                    <XCircle className="h-4 w-4" />
                  </Button>
                </div>
                <CardDescription>Complete information about your booking</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                
                {/* Event Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900">Event Information</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium text-slate-700">Event Name</label>
                      <p className="text-slate-900 font-medium">{selectedBooking.eventName}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700">Booking ID</label>
                      <p className="text-slate-900 font-mono">{selectedBooking.bookingId}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700">Date</label>
                      <p className="text-slate-900">{new Date(selectedBooking.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700">Time</label>
                      <p className="text-slate-900">{selectedBooking.time}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700">Quantity</label>
                      <p className="text-slate-900">{selectedBooking.quantity}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700">Status</label>
                      <div className="mt-1">{getStatusBadge(selectedBooking.status)}</div>
                    </div>
                  </div>
                </div>

                {/* Attendee Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900">Attendee Information</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium text-slate-700">Name</label>
                      <p className="text-slate-900">{selectedBooking.candidateName}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700">Email</label>
                      <p className="text-slate-900">{selectedBooking.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700">Phone</label>
                      <p className="text-slate-900">{selectedBooking.phone}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700">Address</label>
                      <p className="text-slate-900">{selectedBooking.address}</p>
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900">Payment Information</h3>
                  <div className="bg-slate-50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Ticket Price</span>
                      <span className="text-slate-900">${(selectedBooking.totalAmount - selectedBooking.platformFee - selectedBooking.gst).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Platform Fee (15%)</span>
                      <span className="text-slate-900">${selectedBooking.platformFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">GST (18%)</span>
                      <span className="text-slate-900">${selectedBooking.gst.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold">
                      <span className="text-slate-900">Total Amount</span>
                      <span className="text-slate-900">${selectedBooking.totalAmount.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* QR Code */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900">QR Code</h3>
                  <div className="flex items-center justify-center">
                    <div className="w-32 h-32 bg-white border border-slate-200 rounded-lg flex items-center justify-center">
                      <img 
                        src={selectedBooking.qrCode} 
                        alt="QR Code" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 text-center">Present this QR code at the event entrance</p>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => handleDownloadInvoice(selectedBooking)}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Invoice
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => {
                      navigator.share({
                        title: selectedBooking.eventName,
                        text: `I'm attending ${selectedBooking.eventName} on ${new Date(selectedBooking.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}`,
                        url: window.location.href
                      });
                    }}
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
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
