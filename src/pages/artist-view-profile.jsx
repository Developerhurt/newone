import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import ProfessionalProfile from "@/components/professional-profile"
import { 
  Search, 
  Share2, 
  MessageCircle, 
  Filter,
  Plus,
  User,
  MapPin,
  Star,
  Download,
  Upload,
  UserPlus,
  ChevronRight,
  TrendingUp,
  Gift,
  Heart,
  Eye,
  Calendar
} from "lucide-react"

export default function ViewProfilePage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between bg-white border-b border-slate-200 shadow-sm">
          <div className="flex items-center gap-4 px-6">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
            <div>
              <h1 className="text-xl font-semibold text-slate-900">View Profile</h1>
              <p className="text-sm text-slate-500">Professional artist profile</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <input 
                type="text" 
                placeholder="Search profile..." 
                className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              />
            </div>
            <Button variant="outline" size="sm" className="border-slate-200">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button variant="outline" className="border-slate-200">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <MessageCircle className="h-4 w-4 mr-2" />
              Message
            </Button>
          </div>
        </header>
        <div className="flex flex-1 gap-4 p-4 bg-slate-50">
          {/* Main Content */}
          <div className="flex-1 max-w-7xl mx-auto">
            <ProfessionalProfile isOwnProfile={false} />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
