import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Calendar, 
  Download, 
  Star, 
  QrCode, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Users,
  FileText,
  CheckCircle,
  AlertCircle,
  Coins
} from "lucide-react"
import { useState } from "react"

export default function BookingsPage() {
  const [bookings] = useState([
    {
      id: "BK001",
      eventName: "Digital Art Workshop 2024",
      date: "2024-02-15",
      time: "10:00 AM - 4:00 PM",
      venue: "Creative Hub, New York",
      quantity: 2,
      totalAmount: 150.00,
      status: "confirmed",
      bookingDate: "2024-01-20",
      qrCode: "QR123456789",
      rating: null,
      attendees: [
        { name: "Eva Murphy", email: "eva@example.com", phone: "+1-555-0123" },
        { name: "John Smith", email: "john@example.com", phone: "+1-555-0124" }
      ]
    },
    {
      id: "BK002", 
      eventName: "Photography Masterclass",
      date: "2024-01-25",
      time: "2:00 PM - 6:00 PM",
      venue: "Art Gallery, Los Angeles",
      quantity: 1,
      totalAmount: 75.00,
      status: "completed",
      bookingDate: "2024-01-15",
      qrCode: "QR987654321",
      rating: 8,
      attendees: [
        { name: "Eva Murphy", email: "eva@example.com", phone: "+1-555-0123" }
      ]
    }
  ]);

  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [rating, setRating] = useState(0);

  const generateInvoice = (booking) => {
    // Simulate invoice generation
    const invoiceData = {
      bookingId: booking.id,
      eventName: booking.eventName,
      date: booking.date,
      time: booking.time,
      venue: booking.venue,
      quantity: booking.quantity,
      ticketPrice: booking.totalAmount / booking.quantity,
      platformFee: (booking.totalAmount * 0.15),
      gst: (booking.totalAmount * 0.15 * 0.18),
      totalAmount: booking.totalAmount,
      attendees: booking.attendees
    };
    
    // In a real app, this would generate and download a PDF
    console.log('Generating invoice:', invoiceData);
    alert('Invoice generated and downloaded successfully!');
  };

  const sendTicketDetails = (booking) => {
    // Simulate sending ticket details via email and SMS
    console.log('Sending ticket details to:', booking.attendees);
    alert('Ticket details sent to all attendees via email and SMS!');
  };

  const rateEvent = (bookingId, rating) => {
    // Update booking rating
    console.log(`Rating event ${bookingId} with ${rating}/10`);
    setShowRatingModal(false);
    alert(`Thank you for rating! You rated this event ${rating}/10`);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'confirmed':
        return <Badge className="bg-green-100 text-green-700"><CheckCircle className="h-3 w-3 mr-1" />Confirmed</Badge>;
      case 'completed':
        return <Badge className="bg-blue-100 text-blue-700"><CheckCircle className="h-3 w-3 mr-1" />Completed</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-100 text-red-700"><AlertCircle className="h-3 w-3 mr-1" />Cancelled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 bg-white border-b border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
            <h1 className="text-lg font-semibold">Bookings</h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-6 p-6 pt-0 bg-slate-50 min-h-screen">
          <Tabs defaultValue="upcoming" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
              <TabsTrigger value="invoices">Invoices</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-4">
              {bookings.filter(b => b.status === 'confirmed').map((booking) => (
                <Card key={booking.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-lg font-semibold">{booking.eventName}</h3>
                          {getStatusBadge(booking.status)}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Calendar className="h-4 w-4" />
                              <span>{new Date(booking.date).toISOString().split('T')[0]}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Clock className="h-4 w-4" />
                              <span>{booking.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <MapPin className="h-4 w-4" />
                              <span>{booking.venue}</span>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Users className="h-4 w-4" />
                              <span>{booking.quantity} ticket(s)</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <QrCode className="h-4 w-4" />
                              <span>ID: {booking.qrCode}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm font-semibold text-green-600">
                              <span>Total: ${booking.totalAmount}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <Button onClick={() => generateInvoice(booking)}>
                            <Download className="h-4 w-4 mr-2" />
                            Download Invoice
                          </Button>
                          <Button variant="outline" onClick={() => sendTicketDetails(booking)}>
                            <Mail className="h-4 w-4 mr-2" />
                            Send Details
                          </Button>
                          <Button variant="outline">
                            <QrCode className="h-4 w-4 mr-2" />
                            View QR Code
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="past" className="space-y-4">
              {bookings.filter(b => b.status === 'completed').map((booking) => (
                <Card key={booking.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-lg font-semibold">{booking.eventName}</h3>
                          {getStatusBadge(booking.status)}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Calendar className="h-4 w-4" />
                              <span>{new Date(booking.date).toISOString().split('T')[0]}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Clock className="h-4 w-4" />
                              <span>{booking.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <MapPin className="h-4 w-4" />
                              <span>{booking.venue}</span>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Users className="h-4 w-4" />
                              <span>{booking.quantity} ticket(s)</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <QrCode className="h-4 w-4" />
                              <span>ID: {booking.qrCode}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm font-semibold text-green-600">
                              <span>Total: ${booking.totalAmount}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 mb-4">
                          {booking.rating ? (
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium">Your Rating:</span>
                              <div className="flex items-center gap-1">
                                {[...Array(10)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`h-4 w-4 ${
                                      i < booking.rating 
                                        ? 'fill-yellow-400 text-yellow-400' 
                                        : 'text-slate-300'
                                    }`} 
                                  />
                                ))}
                                <span className="text-sm text-slate-600">({booking.rating}/10)</span>
                              </div>
                            </div>
                          ) : (
                            <Button 
                              variant="outline" 
                              onClick={() => {
                                setSelectedBooking(booking);
                                setShowRatingModal(true);
                              }}
                            >
                              <Star className="h-4 w-4 mr-2" />
                              Rate Event
                            </Button>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <Button onClick={() => generateInvoice(booking)}>
                            <Download className="h-4 w-4 mr-2" />
                            Download Invoice
                          </Button>
                          <Button variant="outline">
                            <QrCode className="h-4 w-4 mr-2" />
                            View QR Code
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="invoices" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Invoice History</CardTitle>
                  <CardDescription>Download your past invoices</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {bookings.map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <FileText className="h-8 w-8 text-slate-400" />
                          <div>
                            <h4 className="font-medium">{booking.eventName}</h4>
                            <p className="text-sm text-slate-600">
                              {new Date(booking.date).toISOString().split('T')[0]} • ${booking.totalAmount}
                            </p>
                          </div>
                        </div>
                        <Button onClick={() => generateInvoice(booking)}>
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Rating Modal */}
          {showRatingModal && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <Card className="w-full max-w-md">
                <CardHeader>
                  <CardTitle>Rate Event</CardTitle>
                  <CardDescription>How would you rate "{selectedBooking?.eventName}"?</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-center gap-1">
                    {[...Array(10)].map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setRating(i + 1)}
                        className="p-1"
                      >
                        <Star 
                          className={`h-8 w-8 ${
                            i < rating 
                              ? 'fill-yellow-400 text-yellow-400' 
                              : 'text-slate-300'
                          }`} 
                        />
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-center gap-2">
                    <Button 
                      onClick={() => rateEvent(selectedBooking.id, rating)}
                      disabled={rating === 0}
                    >
                      Submit Rating
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setShowRatingModal(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
