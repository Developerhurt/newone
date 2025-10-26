import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Coins, Bookmark, FileText, Users, Star, Briefcase } from "lucide-react"

export default function AccountPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 bg-white border-b border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
            <h1 className="text-lg font-semibold">Account</h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-6 p-6 pt-0 bg-slate-50 min-h-screen">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-md transition">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2">
                  <Coins className="h-4 w-4 text-amber-600" />
                  Hub Coins
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-3">Balance and recharge</CardDescription>
                <Button onClick={() => (window.location.href = "/coins")}>Open</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2">
                  <Bookmark className="h-4 w-4 text-blue-600" />
                  Saved Posts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-3">Your bookmarked content</CardDescription>
                <Button onClick={() => (window.location.href = "/saved-posts")}>Open</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2">
                  <FileText className="h-4 w-4 text-slate-700" />
                  Resume
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-3">Upload or replace resume</CardDescription>
                <Button onClick={() => (window.location.href = "/resume")}>Open</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2">
                  <FileText className="h-4 w-4 text-slate-700" />
                  Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-3">Manage ID proofs and certificates</CardDescription>
                <Button onClick={() => (window.location.href = "/document")}>Open</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-emerald-600" />
                  Applied Jobs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-3">Track application status</CardDescription>
                <Button onClick={() => (window.location.href = "/applied-jobs")}>Open</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-600" />
                  Ratings & Reviews
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-3">View your feedback</CardDescription>
                <Button onClick={() => (window.location.href = "/view-profile")}>Open</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-semibold flex items-center gap-2">
                  <Users className="h-4 w-4 text-purple-600" />
                  Groups
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-3">Create or manage groups</CardDescription>
                <Button onClick={() => (window.location.href = "/groups")}>Open</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}