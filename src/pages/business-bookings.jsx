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
  MapPin, 
  Clock, 
  Users, 
  DollarSign, 
  FileText, 
  Search, 
  Filter, 
  Eye, 
  Star as StarIcon,
  CheckCircle,
  XCircle,
  AlertCircle,
  CalendarDays,
  Ticket,
  CreditCard,
  QrCode,
  Mail,
  Phone,
  ExternalLink
} from "lucide-react"

export default function BusinessBookingsPage() {
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const [bookings, setBookings] = useState([
    {
      id: 1,
      eventName: "Digital Marketing Conference 2024",
      eventType: "Conference",
      date: "2024-03-15",
      time: "09:00 AM - 05:00 PM",
      location: "Convention Center, New York",
      tickets: 2,
      totalAmount: 299.98,
      status: "confirmed",
      bookingId: "BK001234567",
      qrCode: "QR123456789",
      attendeeEmail: "contact@creativestudio.com",
      attendeePhone: "+1 (555) 123-4567",
      attendeeName: "Sarah Johnson",
      attendeeAddress: "123 Business Ave, New York, NY 10001",
      isRated: false,
      eventRating: 0,
      eventReview: ""
    },
    {
      id: 2,
      eventName: "Tech Innovation Summit",
      eventType: "Summit",
      date: "2024-03-20",
      time: "10:00 AM - 06:00 PM",
      location: "Tech Hub, San Francisco",
      tickets: 1,
      totalAmount: 149.99,
      status: "confirmed",
      bookingId: "BK001234568",
      qrCode: "QR123456790",
      attendeeEmail: "contact@creativestudio.com",
      attendeePhone: "+1 (555) 123-4567",
      attendeeName: "Sarah Johnson",
      attendeeAddress: "123 Business Ave, New York, NY 10001",
      isRated: true,
      eventRating: 9,
      eventReview: "Excellent event with great speakers and networking opportunities."
    },
    {
      id: 3,
      eventName: "Creative Workshop Series",
      eventType: "Workshop",
      date: "2024-02-28",
      time: "02:00 PM - 04:00 PM",
      location: "Art Studio, Los Angeles",
      tickets: 3,
      totalAmount: 89.97,
      status: "completed",
      bookingId: "BK001234569",
      qrCode: "QR123456791",
      attendeeEmail: "contact@creativestudio.com",
      attendeePhone: "+1 (555) 123-4567",
      attendeeName: "Sarah Johnson",
      attendeeAddress: "123 Business Ave, New York, NY 10001",
      isRated: true,
      eventRating: 8,
      eventReview: "Very informative and hands-on workshop."
    }
  ]);

  const handleRateEvent = (bookingId) => {
    const updatedBookings = bookings.map(booking => 
      booking.id === bookingId 
        ? { ...booking, isRated: true, eventRating: rating, eventReview: review }
        : booking
    );
    setBookings(updatedBookings);
    setSelectedBooking(null);
    setRating(0);
    setReview('');
    alert('Thank you for rating the event!');
  };

  const handleDownloadInvoice = (booking) => {
    // In a real app, this would generate and download the actual invoice
    alert(`Downloading invoice for ${booking.eventName}...`);
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.eventType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || booking.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'confirmed':
        return <Badge className="bg-green-100 text-green-700"><CheckCircle className="h-3 w-3 mr-1" />Confirmed</Badge>;
      case 'completed':
        return <Badge className="bg-blue-100 text-blue-700"><CheckCircle className="h-3 w-3 mr-1" />Completed</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-100 text-red-700"><XCircle className="h-3 w-3 mr-1" />Cancelled</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-700"><AlertCircle className="h-3 w-3 mr-1" />Pending</Badge>;
    }
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
              <p className="text-sm text-slate-500">Manage your event bookings and tickets</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6">
            <Button variant="outline" className="border-slate-200">
              <Download className="h-4 w-4 mr-2" />
              Export All
            </Button>
          </div>
        </header>

        <div className="flex flex-1 gap-4 p-4 bg-slate-50">
          <div className="flex-1 max-w-7xl mx-auto">
            <div className="space-y-6">
              {/* Search and Filters */}
              <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                        <Input
                          placeholder="Search events, booking ID, or event type..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="all">All Status</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                      <Button variant="outline" className="border-slate-200">
                        <Filter className="h-4 w-4 mr-2" />
                        More Filters
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Bookings List */}
              <div className="space-y-4">
                {filteredBookings.map((booking) => (
                  <Card key={booking.id} className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Event Info */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-lg font-semibold text-slate-900 mb-1">{booking.eventName}</h3>
                              <p className="text-slate-600 mb-2">{booking.eventType}</p>
                              {getStatusBadge(booking.status)}
                            </div>
                            <div className="text-right">
                              <p className="text-2xl font-bold text-slate-900">${booking.totalAmount}</p>
                              <p className="text-sm text-slate-500">{booking.tickets} ticket{booking.tickets > 1 ? 's' : ''}</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-slate-400" />
                              <span>{new Date(booking.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-slate-400" />
                              <span>{booking.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-slate-400" />
                              <span>{booking.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Ticket className="h-4 w-4 text-slate-400" />
                              <span>Booking ID: {booking.bookingId}</span>
                            </div>
                          </div>

                          {/* Rating Section */}
                          {booking.status === 'completed' && !booking.isRated && (
                            <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                              <h4 className="font-medium text-slate-900 mb-2">Rate this Event (1-10)</h4>
                              <div className="flex items-center gap-2 mb-3">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
                                  <button
                                    key={star}
                                    onClick={() => setRating(star)}
                                    className={`p-1 rounded ${
                                      star <= rating ? 'text-yellow-400' : 'text-slate-300'
                                    }`}
                                  >
                                    <StarIcon className="h-5 w-5" />
                                  </button>
                                ))}
                                <span className="ml-2 text-sm text-slate-600">{rating}/10</span>
                              </div>
                              <textarea
                                placeholder="Write a review about this event..."
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                                className="w-full p-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows={3}
                              />
                              <div className="flex gap-2 mt-3">
                                <Button 
                                  size="sm" 
                                  onClick={() => handleRateEvent(booking.id)}
                                  disabled={rating === 0}
                                >
                                  Submit Rating
                                </Button>
                                <Button variant="outline" size="sm" onClick={() => setRating(0)}>
                                  Clear
                                </Button>
                              </div>
                            </div>
                          )}

                          {booking.isRated && (
                            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                              <div className="flex items-center gap-2 mb-2">
                                <StarIcon className="h-4 w-4 text-yellow-400" />
                                <span className="font-medium">Your Rating: {booking.eventRating}/10</span>
                              </div>
                              <p className="text-sm text-slate-600">{booking.eventReview}</p>
                            </div>
                          )}
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-2 lg:w-48">
                          <Button 
                            variant="outline" 
                            className="w-full border-slate-200"
                            onClick={() => setSelectedBooking(booking)}
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                          <Button 
                            variant="outline" 
                            className="w-full border-slate-200"
                            onClick={() => handleDownloadInvoice(booking)}
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download Invoice
                          </Button>
                          <Button 
                            variant="outline" 
                            className="w-full border-slate-200"
                            onClick={() => window.open(`mailto:${booking.attendeeEmail}`, '_blank')}
                          >
                            <Mail className="h-4 w-4 mr-2" />
                            Email Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredBookings.length === 0 && (
                <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                  <CardContent className="p-12 text-center">
                    <Calendar className="h-12 w-12 mx-auto mb-4 text-slate-300" />
                    <h3 className="text-lg font-medium text-slate-900 mb-2">No bookings found</h3>
                    <p className="text-slate-500">Try adjusting your search or filter criteria.</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>

        {/* Booking Details Modal */}
        {selectedBooking && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="bg-white rounded-lg border border-slate-200 shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-slate-900">{selectedBooking.eventName}</CardTitle>
                    <CardDescription>Booking Details & Invoice</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setSelectedBooking(null)}>
                    <XCircle className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* Event Details */}
                <div>
                  <h4 className="font-medium text-slate-900 mb-3">Event Information</h4>
                  <div className="grid gap-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Event Type:</span>
                      <span className="font-medium">{selectedBooking.eventType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Date:</span>
                      <span className="font-medium">{new Date(selectedBooking.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Time:</span>
                      <span className="font-medium">{selectedBooking.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Location:</span>
                      <span className="font-medium">{selectedBooking.location}</span>
                    </div>
                  </div>
                </div>

                {/* Attendee Details */}
                <div>
                  <h4 className="font-medium text-slate-900 mb-3">Attendee Information</h4>
                  <div className="grid gap-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Name:</span>
                      <span className="font-medium">{selectedBooking.attendeeName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Email:</span>
                      <span className="font-medium">{selectedBooking.attendeeEmail}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Phone:</span>
                      <span className="font-medium">{selectedBooking.attendeePhone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Address:</span>
                      <span className="font-medium">{selectedBooking.attendeeAddress}</span>
                    </div>
                  </div>
                </div>

                {/* Ticket Details */}
                <div>
                  <h4 className="font-medium text-slate-900 mb-3">Ticket Information</h4>
                  <div className="grid gap-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Booking ID:</span>
                      <span className="font-medium">{selectedBooking.bookingId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">QR Code:</span>
                      <span className="font-medium">{selectedBooking.qrCode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Number of Tickets:</span>
                      <span className="font-medium">{selectedBooking.tickets}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Total Amount:</span>
                      <span className="font-medium text-lg">${selectedBooking.totalAmount}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-slate-200">
                  <Button 
                    className="flex-1"
                    onClick={() => handleDownloadInvoice(selectedBooking)}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Invoice
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => window.open(`mailto:${selectedBooking.attendeeEmail}`, '_blank')}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Email Details
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
