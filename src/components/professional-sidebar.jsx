"use client"

import * as React from "react"
import { useState } from "react"
import { useRouter } from "next/router"
import {
  Command,
  User,
  Edit3,
  Calendar,
  FileText,
  Image,
  Search,
  Building2,
  Users,
  Handshake,
  Eye,
  Shield,
  CreditCard,
  Briefcase,
  MessageCircle,
  Settings,
  HelpCircle,
  FileCheck,
  LogOut,
  Gift,
  MapPin,
  Star,
  Bell,
  Lock,
  UserCheck,
  UserPlus,
  CalendarCheck,
  Search as SearchIcon,
  Building,
  Heart,
  MessageSquare,
  UserCircle,
  X,
  LayoutDashboard,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const data = {
  user: {
    name: "Eva Murphy",
    email: "Senior Digital Artist",
    avatar: "/avatars/shadcn.jpg",
  },
  sections: [
    {
      label: "Profile & Account",
      items: [
        { title: "View Profile", url: "/view-profile", icon: User },
        { title: "Edit Profile", url: "/profile", icon: Edit3 },
        { title: "Bookings", url: "/bookings", icon: Calendar },
        { title: "Applied Jobs", url: "/applied-jobs", icon: FileText },
        { title: "Events", url: "/events", icon: CalendarCheck },
        { title: "My Posts", url: "/my-posts", icon: Image },
        { title: "Post Images & Videos", url: "/posts", icon: Image },
        { title: "Subscriptions & Packages", url: "/subscriptions", icon: CreditCard },
      ],
    },
    {
      label: "Discovery & Networking",
      items: [
        { title: "Find Artist", url: "/find-artist", icon: Search, subtitle: "Search nearby artists" },
        { title: "Find Business", url: "/find-business", icon: Building, subtitle: "Search nearby companies" },
        { title: "Hire Artist Groups", url: "/hire-groups", icon: Users, subtitle: "Create groups" },
        { title: "Artist Collaborations", url: "/collaborations", icon: Handshake },
        { title: "View Collaborations", url: "/view-collaborations", icon: Eye, subtitle: "Attended collabs" },
        { title: "Followers & Connections", url: "/networking", icon: Users },
      ],
    },
    {
      label: "Professional Services",
      items: [
        { title: "Privacy Policy", url: "/privacy", icon: Shield },
        { title: "Job Search", url: "/jobs", icon: Briefcase },
        { title: "Chat", url: "/chat", icon: MessageCircle },
        { title: "Account", url: "/account", icon: Settings },
        { title: "Hub Coins", url: "/coins", icon: CreditCard },
        { title: "Post Content", url: "/posts", icon: Image },
      ],
    },
    {
      label: "Support & About",
      items: [
        { title: "My Subscriptions", url: "/my-subscriptions", icon: CreditCard },
        { title: "Help & Support", url: "/support", icon: HelpCircle },
        { title: "Terms & Policies", url: "/terms", icon: FileCheck },
      ],
    },
    {
      label: "Actions",
      items: [
        { title: "FAQ", url: "/faq", icon: HelpCircle },
        { title: "Log Out", url: "/logout", icon: LogOut },
        { title: "Refer & Earn", url: "/refer", icon: Gift, subtitle: "Up to 10000 (Refer now)" },
      ],
    },
    {
      label: "Quick Access",
      items: [
        { title: "Home", url: "/dashboard", icon: LayoutDashboard },
        { title: "Events", url: "/events", icon: CalendarCheck },
        { title: "Account", url: "/account", icon: Settings },
        { title: "Search Jobs", url: "/jobs", icon: Briefcase },
      ],
    },
  ],
}

export function ProfessionalSidebar({ ...props }) {
  const router = useRouter()
  const pathname = router?.pathname || "/"
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const profileData = {
    fullName: "Eva Murphy",
    designation: "Senior Digital Artist",
    about: "Passionate digital artist with over 5 years of experience in creating stunning visual content. Specialized in digital illustration, concept art, and brand design.",
    skills: ['Digital Illustration', 'Concept Art', 'Brand Design', 'UI/UX Design', 'Adobe Creative Suite'],
    languages: [
      { name: "English", level: "Native" },
      { name: "Spanish", level: "Fluent" },
      { name: "French", level: "Intermediate" }
    ],
    location: {
      country: "United States",
      state: "New York", 
      city: "New York"
    },
    socialLinks: {
      instagram: "@evamurphy_art",
      twitter: "@evamurphy",
      youtube: "Eva Murphy Art",
      linkedin: "Eva Murphy"
    },
    rating: 4.8,
    reviews: 127,
    collabs: 36,
    followers: 1250,
    following: 340
  }

  const handleProfileClick = () => {
    setIsProfileOpen(true)
  }

  const handleCloseProfile = () => {
    setIsProfileOpen(false)
    setIsEditing(false)
  }

  const handleEditProfile = () => {
    setIsEditing(true)
  }

  const handleSaveProfile = () => {
    setIsEditing(false)
    // Here you would save the profile data
    alert('Profile updated successfully!')
  }

  return (
    <>
      <Sidebar 
        variant="inset" 
        className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl border-r border-slate-700" 
        {...props}
      >
      <SidebarHeader className="bg-transparent border-b border-white/10 pb-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="hover:bg-white/10 transition-all duration-300">
              <a href="/dashboard" className="group">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white flex aspect-square size-10 items-center justify-center rounded-xl backdrop-blur-sm shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                  <Command className="size-5" />
                </div>
                <div className="grid flex-1 text-left leading-tight">
                  <span className="truncate font-bold text-lg group-hover:text-white/90 transition-colors duration-300">ArtistHub</span>
                  <span className="text-xs text-white/70 font-medium">Professional Network</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="gap-2 bg-transparent hide-scrollbar mt-2 overflow-y-auto px-2">
        {data.sections?.map((section) => (
          <div key={section.label} className="space-y-1">
            <div className="px-3 pb-1 text-xs font-semibold text-white/80 uppercase tracking-wider">{section.label}</div>
            <SidebarMenu className="space-y-0.5">
              {section.items.map((item, index) => {
                const isActive = pathname === item.url
                return (
                  <SidebarMenuItem key={item.title} className="relative group">
                    {isActive && (
                      <span className="absolute left-0 top-1 bottom-1 w-1 rounded-full bg-gradient-to-b from-blue-400 to-purple-500 shadow-lg" />
                    )}
                    <SidebarMenuButton 
                      asChild 
                      className={`group relative rounded-lg transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white shadow-lg border border-white/20' 
                          : 'hover:bg-white/10 hover:shadow-sm'
                      }`}
                    >
                      <a href={item.url} className="flex items-center gap-3 px-3 py-2.5">
                        <item.icon 
                          className={`size-4 transition-all duration-300 ${
                            isActive 
                              ? 'text-blue-300' 
                              : 'text-white/80 group-hover:scale-105 group-hover:text-white'
                          }`} 
                        />
                        <div className="flex-1 min-w-0">
                          <span className={`font-medium text-sm transition-all duration-300 block ${
                            isActive 
                              ? 'text-white' 
                              : 'text-white/90 group-hover:text-white'
                          }`}>
                            {item.title}
                          </span>
                          {item.subtitle && (
                            <span className={`text-xs transition-all duration-300 ${
                              isActive 
                                ? 'text-white/70' 
                                : 'text-white/60 group-hover:text-white/80'
                            }`}>
                              {item.subtitle}
                            </span>
                          )}
                        </div>
                        {isActive && (
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                        )}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </div>
        ))}
      </SidebarContent>

      <SidebarFooter className="bg-transparent border-t border-white/10 pt-4">
        <div 
          className="mx-2 mb-2 flex items-center gap-3 rounded-xl bg-gradient-to-r from-white/10 to-white/5 p-3 text-white backdrop-blur-sm shadow-lg hover:bg-white/15 transition-all duration-300 group cursor-pointer"
          onClick={handleProfileClick}
        >
          <div className="relative">
            <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-lg shadow-lg group-hover:scale-105 transition-transform duration-300">
              E
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 size-3.5 rounded-full bg-green-400 border-2 border-slate-900 shadow-sm"></div>
          </div>
          <div className="flex-1 leading-tight min-w-0">
            <div className="text-sm font-bold group-hover:text-white/90 transition-colors duration-300 leading-tight truncate">
              Eva Murphy
            </div>
            <div className="text-xs text-white/80 font-medium mt-0.5 truncate">Senior Digital Artist</div>
            <div className="flex items-center gap-1 mt-1">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-white/60">Online</span>
            </div>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse"></div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>

    {/* Profile Slide-out Panel */}
    {isProfileOpen && (
      <div className="fixed inset-0 z-50 flex">
        {/* Backdrop */}
        <div 
          className="flex-1 bg-black/50 backdrop-blur-sm"
          onClick={handleCloseProfile}
        />
        
        {/* Slide-out Panel */}
        <div className="w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out">
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-gradient-to-r from-blue-50 to-purple-50">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Profile</h2>
                <p className="text-sm text-slate-600">View and edit your profile</p>
              </div>
              <div className="flex items-center gap-2">
                {isEditing ? (
                  <>
                    <Button size="sm" onClick={handleSaveProfile}>
                      Save
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button size="sm" variant="outline" onClick={handleEditProfile}>
                    <Edit3 className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                )}
                <Button size="sm" variant="outline" onClick={handleCloseProfile}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Profile Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Profile Header */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 shadow-lg">
                  E
                </div>
                <h3 className="text-xl font-bold text-slate-900">{profileData.fullName}</h3>
                <p className="text-slate-600">{profileData.designation}</p>
                <div className="flex items-center justify-center gap-4 mt-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{profileData.rating}</span>
                    <span className="text-sm text-slate-500">({profileData.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-slate-50 rounded-lg">
                  <div className="text-lg font-bold text-slate-900">{profileData.followers}</div>
                  <div className="text-xs text-slate-600">Followers</div>
                </div>
                <div className="text-center p-3 bg-slate-50 rounded-lg">
                  <div className="text-lg font-bold text-slate-900">{profileData.following}</div>
                  <div className="text-xs text-slate-600">Following</div>
                </div>
                <div className="text-center p-3 bg-slate-50 rounded-lg">
                  <div className="text-lg font-bold text-slate-900">{profileData.reviews}</div>
                  <div className="text-xs text-slate-600">Ratings & Reviews</div>
                </div>
                <div className="text-center p-3 bg-slate-50 rounded-lg">
                  <div className="text-lg font-bold text-slate-900">{profileData.collabs}</div>
                  <div className="text-xs text-slate-600">No. of Collabs</div>
                </div>
              </div>

              {/* About */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">About</CardTitle>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <textarea
                      className="w-full p-3 border border-slate-200 rounded-lg resize-none h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue={profileData.about}
                    />
                  ) : (
                    <p className="text-sm text-slate-600">{profileData.about}</p>
                  )}
                </CardContent>
              </Card>

              {/* Skills */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Languages */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {profileData.languages.map((lang, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{lang.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {lang.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    {profileData.location.city}, {profileData.location.state}, {profileData.location.country}
                  </p>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Social Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm">{profileData.socialLinks.instagram}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm">{profileData.socialLinks.twitter}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm">{profileData.socialLinks.youtube}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm">{profileData.socialLinks.linkedin}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Footer Actions */}
            <div className="border-t border-slate-200 p-4 bg-slate-50">
              <div className="flex gap-2">
                <Button className="flex-1" onClick={() => router.push('/view-profile')}>
                  <Eye className="h-4 w-4 mr-2" />
                  View Full Profile
                </Button>
                <Button variant="outline" className="flex-1" onClick={() => router.push('/profile')}>
                  <Edit3 className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
