"use client"

import * as React from "react"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import accountTypes from "@/lib/accountTypes.json"
import { useAuthStore } from "@/lib/store"
import {
  Command,
  LayoutDashboard,
  Briefcase,
  CalendarDays,
  Image,
  Images,
  Handshake as HeartHandshake,
  Users as UsersRound,
  User,
  Edit3,
  Calendar,
  CreditCard,
  Search,
  Building2,
  Shield,
  Users,
  MessageCircle,
  HelpCircle,
  FileCheck,
  LogOut,
  Gift,
  Settings,
  Eye,
  FileText,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

function resolveIcon(name) {
  const map = { Command, LayoutDashboard, Briefcase, CalendarDays, Image, Images, HeartHandshake, UsersRound: Users, User, Edit3, Calendar, CreditCard, Search, Building2, Shield, Users, MessageCircle, HelpCircle, FileCheck, LogOut, Gift, Settings, Eye, FileText };
  return map[name] || User;
}

export function AppSidebar({
  ...props
}) {
  const router = useRouter()
  const [pathname, setPathname] = useState("/")
  const [mounted, setMounted] = useState(false)
  const { user } = useAuthStore()
  const [sections, setSections] = useState([])
  
  useEffect(() => {
    setMounted(true)
    if (router?.pathname) {
      setPathname(router.pathname)
    }
  }, [router?.pathname])

  useEffect(() => {
    const role = user?.userType || 'guest'
    const config = accountTypes[role]
    if (config?.sections) {
      // transform icons from string to components
      const resolved = config.sections.map((sec) => ({
        ...sec,
        items: sec.items.map((it) => ({
          ...it,
          icon: resolveIcon(it.icon)
        }))
      }))
      setSections(resolved)
    } else {
      setSections([])
    }
  }, [user])
  
  return (
    <Sidebar variant="inset" className="bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 text-white shadow-2xl" {...props}>
      <SidebarHeader className="bg-transparent border-b border-white/10 pb-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="hover:bg-white/10 transition-all duration-300">
              <a href="#" className="group">
                <div className="bg-white/20 text-white flex aspect-square size-10 items-center justify-center rounded-full backdrop-blur-sm shadow-lg group-hover:bg-white/25 group-hover:scale-105 transition-all duration-300">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div className="grid flex-1 text-left leading-tight">
                  <span className="truncate font-bold text-lg group-hover:text-white/90 transition-colors duration-300">ArtistHub</span>
                  <span className="text-xs text-white/70 font-medium">Creative Network</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        
        {/* Search Bar */}
        <div className="px-3 mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 size-4" />
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="gap-2 bg-transparent hide-scrollbar mt-4 overflow-y-auto px-3">
        {sections?.map((section) => (
          <div key={section.label} className="space-y-2">
            <div className="px-2 pb-2 text-xs font-semibold text-white/70 uppercase tracking-wider">{section.label}</div>
            <SidebarMenu className="space-y-1">
              {section.items.map((item, index) => {
                const isActive = mounted && pathname === item.url
                return (
                  <SidebarMenuItem key={item.title} className="relative group">
                    <SidebarMenuButton 
                      asChild 
                      className={`group relative rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-white/20 text-white shadow-lg border border-white/30' 
                          : 'hover:bg-white/10 hover:shadow-md'
                      }`}
                    >
                      <a href={item.url} className="flex items-center gap-3 px-4 py-3">
                        <item.icon 
                          className={`size-5 transition-all duration-300 ${
                            isActive 
                              ? 'text-white' 
                              : 'text-white/80 group-hover:scale-110 group-hover:text-white'
                          }`} 
                        />
                        <span className={`font-medium text-sm transition-all duration-300 ${
                          isActive 
                            ? 'text-white' 
                            : 'text-white/90 group-hover:text-white'
                        }`}>
                          {item.title}
                        </span>
                        {isActive && mounted && (
                          <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse" />
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
        {/* Go Pro Button */}
        <div className="px-3 mb-4">
          <button className="w-full bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 text-white font-medium py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
            <Gift className="size-4" />
            Go Pro
          </button>
        </div>
        
        {/* User Profile */}
        <div className="px-3 pb-3">
          <div className="flex items-center gap-3 rounded-xl bg-white/10 p-3 text-white backdrop-blur-sm hover:bg-white/15 transition-all duration-300 group">
            <div className="relative">
              <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-purple-600 text-white font-bold text-sm shadow-lg group-hover:scale-105 transition-transform duration-300">
                E
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full bg-green-400 border-2 border-purple-900 shadow-sm"></div>
            </div>
            <div className="flex-1 leading-tight min-w-0">
              <div className="text-sm font-bold group-hover:text-white/90 transition-colors duration-300 leading-tight truncate">
                Eva Murphy
              </div>
              <div className="text-xs text-white/70 font-medium mt-0.5 truncate">Creative Artist</div>
            </div>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1 hover:bg-white/20 rounded-lg">
              <LogOut className="size-4 text-white/80" />
            </button>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}