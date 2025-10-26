import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
  QrCode, 
  Mail, 
  Phone, 
  Share2, 
  Download, 
  Coins, 
  CreditCard, 
  Plus, 
  Minus, 
  CheckCircle, 
  AlertCircle,
  Ticket,
  DollarSign,
  Percent,
  Calculator,
  Send,
  Copy,
  Eye,
  Edit3,
  Trash2
} from "lucide-react"
import { useState } from "react"

export default function EventPage() {
  const [ticketQuantity, setTicketQuantity] = useState(1)
  const [extraCharges, setExtraCharges] = useState(0)
  const [useHubCoins, setUseHubCoins] = useState(false)
  const [availableHubCoins, setAvailableHubCoins] = useState(2500)
  const [showExtraCharges, setShowExtraCharges] = useState(false)

  // Event data
  const eventData = {
    name: "Digital Art Masterclass 2024",
    date: "2024-03-15",
    time: "10:00 AM",
    venue: "Creative Hub, Mumbai",
    address: "123 Art Street, Bandra West, Mumbai - 400050",
    organizer: "Eva Murphy",
    description: "Join us for an intensive digital art masterclass covering advanced techniques in digital illustration, concept art, and creative workflows.",
    image: "/api/placeholder/600/300",
    price: 1500,
    maxAttendees: 50,
    currentAttendees: 23
  }

  // Calculate pricing
  const basePrice = eventData.price * ticketQuantity
  const platformFee = Math.round(basePrice * 0.15) // 15% platform fee
  const gstAmount = Math.round(platformFee * 0.18) // 18% GST on platform fee
  const subtotal = basePrice + platformFee + gstAmount + extraCharges
  const hubCoinsToUse = useHubCoins ? Math.min(availableHubCoins, subtotal) : 0
  const finalAmount = subtotal - hubCoinsToUse

  // Generate booking ID
  const bookingId = `EVT${Date.now().toString().slice(-8)}`

  const handleQuantityChange = (change) => {
    const newQuantity = ticketQuantity + change
    if (newQuantity >= 1 && newQuantity <= (eventData.maxAttendees - eventData.currentAttendees)) {
      setTicketQuantity(newQuantity)
    }
  }

  const handleExtraCharges = () => {
    const amount = prompt("Enter extra charges amount:")
    if (amount && !isNaN(amount) && amount >= 0) {
      setExtraCharges(parseFloat(amount))
    }
  }

  const handlePayment = () => {
    // Payment processing logic
    alert("Payment processed successfully!")
  }

  const handleShareEvent = () => {
    const eventLink = `${window.location.origin}/event/${bookingId}`
    navigator.clipboard.writeText(eventLink)
    alert("Event link copied to clipboard!")
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between bg-white border-b border-slate-200 shadow-sm">
          <div className="flex items-center gap-4 px-6">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
            <div>
              <h1 className="text-xl font-semibold text-slate-900">Event Details</h1>
              <p className="text-sm text-slate-500">Book your tickets and manage event details</p>
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
            <Button variant="outline" className="border-slate-200">
              <Share2 className="h-4 w-4 mr-2" />
              Share Event
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Download className="h-4 w-4 mr-2" />
              Download Ticket
            </Button>
          </div>
        </header>

        <div className="flex flex-1 gap-6 p-6 bg-slate-50">
          {/* Main Content */}
          <div className="flex-1 max-w-4xl space-y-6">
            {/* Event Header */}
            <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="w-full lg:w-80 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Calendar className="h-16 w-16 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h1 className="text-2xl font-bold text-slate-900 mb-2">{eventData.name}</h1>
                        <p className="text-slate-600 mb-4">{eventData.description}</p>
                      </div>
                      <Badge className="bg-green-100 text-green-700 px-3 py-1">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Live
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-4 w-4 text-slate-400" />
                        <span className="text-slate-600">{new Date(eventData.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-4 w-4 text-slate-400" />
                        <span className="text-slate-600">{eventData.time} IST</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-4 w-4 text-slate-400" />
                        <span className="text-slate-600">{eventData.venue}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="h-4 w-4 text-slate-400" />
                        <span className="text-slate-600">{eventData.currentAttendees}/{eventData.maxAttendees} attendees</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ticket Booking */}
            <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-slate-100">
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <Ticket className="h-5 w-5 text-blue-600" />
                  Book Your Tickets
                </CardTitle>
                <CardDescription>Select quantity and complete your booking</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* Quantity Selection */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Number of Tickets</h3>
                    <p className="text-sm text-slate-500">Available: {eventData.maxAttendees - eventData.currentAttendees} tickets</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleQuantityChange(-1)}
                      disabled={ticketQuantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-xl font-semibold w-12 text-center">{ticketQuantity}</span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleQuantityChange(1)}
                      disabled={ticketQuantity >= (eventData.maxAttendees - eventData.currentAttendees)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Pricing Breakdown */}
                <div className="bg-slate-50 rounded-lg p-4 space-y-3">
                  <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                    <Calculator className="h-4 w-4 text-green-600" />
                    Pricing Breakdown
                  </h4>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Base Price ({ticketQuantity} × ₹{eventData.price})</span>
                      <span className="font-medium">₹{basePrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Platform Fee (15%)</span>
                      <span className="font-medium">₹{platformFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">GST (18% on platform fee)</span>
                      <span className="font-medium">₹{gstAmount}</span>
                    </div>
                    {extraCharges > 0 && (
                      <div className="flex justify-between">
                        <span className="text-slate-600">Extra Charges</span>
                        <span className="font-medium">₹{extraCharges}</span>
                      </div>
                    )}
                    <Separator />
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Subtotal</span>
                      <span>₹{subtotal}</span>
                    </div>
                  </div>

                  {/* Extra Charges Button */}
                  <Button 
                    variant="outline" 
                    onClick={handleExtraCharges}
                    className="w-full border-dashed"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Extra Charges
                  </Button>
                </div>

                {/* Hub Coins Section */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 border border-yellow-200">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Coins className="h-5 w-5 text-yellow-600" />
                      <span className="font-semibold text-slate-900">Hub Coins</span>
                    </div>
                    <span className="text-sm text-slate-600">Available: {availableHubCoins} coins</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={useHubCoins}
                        onChange={(e) => setUseHubCoins(e.target.checked)}
                        className="rounded border-slate-300"
                      />
                      <span className="text-sm">Use Hub Coins for payment</span>
                    </label>
                  </div>
                  
                  {useHubCoins && (
                    <div className="mt-3 p-3 bg-white rounded border">
                      <div className="flex justify-between text-sm">
                        <span>Coins to use:</span>
                        <span className="font-medium">{hubCoinsToUse} coins</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Coins value:</span>
                        <span className="font-medium">₹{hubCoinsToUse}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Final Amount */}
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-slate-900">Total Amount</span>
                    <span className="text-2xl font-bold text-blue-600">₹{finalAmount}</span>
                  </div>
                  {useHubCoins && (
                    <p className="text-sm text-slate-600 mt-1">
                      After using {hubCoinsToUse} Hub Coins
                    </p>
                  )}
                </div>

                {/* Payment Button */}
                <Button 
                  onClick={handlePayment}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                >
                  <CreditCard className="h-5 w-5 mr-2" />
                  Proceed to Payment
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 space-y-6">
            {/* Event Details */}
            <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
              <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 border-b border-slate-100">
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <Eye className="h-5 w-5 text-green-600" />
                  Event Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">Organizer</h4>
                  <p className="text-sm text-slate-600">{eventData.organizer}</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">Venue Address</h4>
                  <p className="text-sm text-slate-600">{eventData.address}</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">Attendees</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${(eventData.currentAttendees / eventData.maxAttendees) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-slate-600">{eventData.currentAttendees}/{eventData.maxAttendees}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-slate-100">
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <Share2 className="h-5 w-5 text-purple-600" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={handleShareEvent}
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Event Link
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send to Email
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Send to Phone
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                >
                  <QrCode className="h-4 w-4 mr-2" />
                  Generate QR Code
                </Button>
              </CardContent>
            </Card>

            {/* Booking Summary */}
            <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50 border-b border-slate-100">
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <Ticket className="h-5 w-5 text-orange-600" />
                  Booking Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Booking ID</span>
                  <span className="font-mono text-xs">{bookingId}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Tickets</span>
                  <span className="font-medium">{ticketQuantity}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Date & Time</span>
                  <span className="font-medium">{eventData.date} {eventData.time}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Total Amount</span>
                  <span className="font-bold text-green-600">₹{finalAmount}</span>
                </div>
                {useHubCoins && (
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Hub Coins Used</span>
                    <span className="font-medium text-yellow-600">{hubCoinsToUse}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
