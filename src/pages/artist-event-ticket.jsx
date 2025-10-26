import React, { useMemo, useState } from 'react';
import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import {
  Calendar, MapPin, Users, QrCode, Share2, Ticket, Mail, Phone, Copy, DollarSign, Plus, Minus,
} from "lucide-react";

export default function ArtistEventTicketPage() {
  const [extraCharges, setExtraCharges] = useState(0);
  const [ticketsQty, setTicketsQty] = useState(2);
  const [hubCoinsAvailable, setHubCoinsAvailable] = useState(1200);
  const [coinsToApply, setCoinsToApply] = useState(0);
  const [useCoinsOnly, setUseCoinsOnly] = useState(false);

  const event = {
    name: "Creative Night Live",
    candidateName: "Sarah Johnson",
    address: "123 Business Ave, New York, NY 10001",
    dateTimeIST: "FRI/09/MAY/2025 • 07:00 PM IST",
    location: "Madison Square Garden, New York",
    bookingId: "EVT-ABCD-98765",
    qrCode: "QR-2345-6789",
    shareLink: "https://artisthub.com/events/creative-night-live",
    ticketPrice: 499.0,
    attendeeEmail: "sarah.johnson@creativestudio.com",
    attendeePhone: "+1 (555) 987-6543",
    attendees: 128,
    attendeeAvatars: [
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=faces",
    ],
  };

  const calculations = useMemo(() => {
    const ticketsTotal = event.ticketPrice * ticketsQty;
    const platformFee = +(ticketsTotal * 0.15).toFixed(2);
    const gstOnPlatformFee = +(platformFee * 0.18).toFixed(2);
    const extras = +(+extraCharges || 0).toFixed(2);
    const subtotal = +(ticketsTotal + platformFee + gstOnPlatformFee + extras).toFixed(2);
    const coinsApplied = Math.min(coinsToApply || 0, hubCoinsAvailable, subtotal);
    const totalPayable = useCoinsOnly
      ? Math.max(0, +(subtotal - Math.min(hubCoinsAvailable, subtotal)).toFixed(2))
      : Math.max(0, +(subtotal - coinsApplied).toFixed(2));
    const coinsUsed = useCoinsOnly ? Math.min(hubCoinsAvailable, subtotal) : coinsApplied;
    return { ticketsTotal, platformFee, gstOnPlatformFee, extras, subtotal, totalPayable, coinsUsed };
  }, [event.ticketPrice, ticketsQty, extraCharges, coinsToApply, hubCoinsAvailable, useCoinsOnly]);

  const handleCopy = (text) => {
    try {
      navigator.clipboard.writeText(text);
      alert('Copied to clipboard');
    } catch (_) {}
  };

  const applyCoins = () => {
    alert(`${calculations.coinsUsed} Hub Coins applied`);
  };

  const completePayment = () => {
    const via = calculations.totalPayable === 0 ? 'Hub Coins' : 'Card/UPI + Coins';
    alert(`Payment successful via ${via}. Booking ID: ${event.bookingId}`);
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
              <h1 className="text-xl font-semibold text-slate-900">Event Ticket</h1>
              <p className="text-sm text-slate-500">Preview ticket details and complete payment</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6">
            <Button variant="outline" className="border-slate-200" onClick={() => handleCopy(event.shareLink)}>
              <Share2 className="h-4 w-4 mr-2" />
              Share Event
            </Button>
          </div>
        </header>

        <div className="flex flex-1 gap-4 p-4 bg-slate-50">
          <div className="flex-1 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: Ticket Summary */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50 border-b border-slate-100">
                  <CardTitle className="flex items-center gap-2 text-slate-900">
                    <Ticket className="h-5 w-5 text-blue-600" />
                    Ticket Details
                  </CardTitle>
                  <CardDescription>All details required for your event ticket</CardDescription>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  {/* Core Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="text-sm text-slate-600">Event Name</div>
                      <div className="font-medium text-slate-900">{event.name}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-slate-600">Candidate Name</div>
                      <div className="font-medium text-slate-900">{event.candidateName}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-slate-600">Address</div>
                      <div className="font-medium text-slate-900">{event.address}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-slate-600">Quantity</div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="h-8 px-2" onClick={() => setTicketsQty(Math.max(1, ticketsQty - 1))}><Minus className="h-4 w-4" /></Button>
                        <Input value={ticketsQty} onChange={(e) => setTicketsQty(Math.max(1, Number(e.target.value) || 1))} className="w-20 text-center" />
                        <Button variant="outline" size="sm" className="h-8 px-2" onClick={() => setTicketsQty(ticketsQty + 1)}><Plus className="h-4 w-4" /></Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-slate-600">Date & Time (IST)</div>
                      <div className="font-medium text-slate-900 flex items-center gap-2"><Calendar className="h-4 w-4 text-slate-400" /> {event.dateTimeIST}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-slate-600">Location</div>
                      <div className="font-medium text-slate-900 flex items-center gap-2"><MapPin className="h-4 w-4 text-slate-400" /> {event.location}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-slate-600">Booking ID</div>
                      <div className="font-medium text-slate-900 flex items-center gap-2">{event.bookingId} <Button variant="outline" size="sm" onClick={() => handleCopy(event.bookingId)}><Copy className="h-3 w-3 mr-1" />Copy</Button></div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-slate-600">QR Code</div>
                      <div className="font-medium text-slate-900 flex items-center gap-2"><QrCode className="h-4 w-4 text-slate-400" /> {event.qrCode}</div>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="text-sm text-slate-600">Email</div>
                      <div className="font-medium text-slate-900 flex items-center gap-2"><Mail className="h-4 w-4 text-slate-400" /> {event.attendeeEmail}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-slate-600">Phone</div>
                      <div className="font-medium text-slate-900 flex items-center gap-2"><Phone className="h-4 w-4 text-slate-400" /> {event.attendeePhone}</div>
                    </div>
                  </div>

                  {/* Attendees */}
                  <div>
                    <div className="text-sm font-medium text-slate-700 mb-2">Attendees</div>
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {event.attendeeAvatars.map((src, i) => (
                          <img key={i} src={src} alt="attendee" className="w-8 h-8 rounded-full border-2 border-white" />
                        ))}
                      </div>
                      <Badge variant="outline" className="text-xs">{event.attendees} attending</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Billing */}
              <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-slate-100">
                  <CardTitle className="flex items-center gap-2 text-slate-900">
                    <DollarSign className="h-5 w-5 text-emerald-600" />
                    Billing Summary
                  </CardTitle>
                  <CardDescription>Platform fees and taxes included</CardDescription>
                </CardHeader>
                <CardContent className="p-8 space-y-4">
                  <div className="grid gap-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Ticket price</span>
                      <span className="font-medium text-slate-900">₹{event.ticketPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Quantity</span>
                      <span className="font-medium text-slate-900">{ticketsQty}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-slate-600">Tickets total</span>
                      <span className="font-medium text-slate-900">₹{calculations.ticketsTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Platform fee (15%)</span>
                      <span className="font-medium text-slate-900">₹{calculations.platformFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Integrated GST on platform fee (18%)</span>
                      <span className="font-medium text-slate-900">₹{calculations.gstOnPlatformFee.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Extra charges (from backend)</span>
                      <div className="flex items-center gap-2">
                        <Input
                          type="number"
                          value={extraCharges}
                          onChange={(e) => setExtraCharges(Number(e.target.value) || 0)}
                          className="w-28"
                        />
                        <Badge variant="outline">₹{calculations.extras.toFixed(2)}</Badge>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-base">
                      <span className="font-medium text-slate-900">Subtotal</span>
                      <span className="font-semibold text-slate-900">₹{calculations.subtotal.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right: Payment */}
            <div className="space-y-6">
              <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-slate-900">Apply Hub Coins</CardTitle>
                  <CardDescription>Use available coins to reduce payable amount</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-600">Available</div>
                    <Badge className="bg-yellow-100 text-yellow-700">{hubCoinsAvailable} coins</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      placeholder="Enter coins to apply"
                      value={coinsToApply}
                      onChange={(e) => setCoinsToApply(Math.max(0, Number(e.target.value) || 0))}
                    />
                    <Button variant="outline" onClick={applyCoins}>Apply</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm text-slate-700">Use only Hub Coins (if sufficient)</label>
                    <input
                      type="checkbox"
                      checked={useCoinsOnly}
                      onChange={(e) => setUseCoinsOnly(e.target.checked)}
                    />
                  </div>
                  <Separator />
                  <div className="grid gap-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Coins used</span>
                      <span className="font-medium text-slate-900">{calculations.coinsUsed}</span>
                    </div>
                    <div className="flex justify-between text-base">
                      <span className="font-semibold text-slate-900">Total payable</span>
                      <span className="font-bold text-slate-900">₹{calculations.totalPayable.toFixed(2)}</span>
                    </div>
                  </div>
                  <Button className="w-full" onClick={completePayment}>Proceed to Pay</Button>
                </CardContent>
              </Card>

              <Card className="bg-white rounded-lg border border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-slate-900">Share Event</CardTitle>
                  <CardDescription>Share the event link with your audience</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-3">
                  <Input readOnly value={event.shareLink} className="text-xs" />
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" onClick={() => handleCopy(event.shareLink)}>
                      <Share2 className="h-4 w-4 mr-2" />Copy Link
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}


