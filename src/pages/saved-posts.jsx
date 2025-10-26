import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function SavedPostsPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 bg-white border-b border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
            <h1 className="text-lg font-semibold">Saved Posts</h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-6 p-6 pt-0 bg-slate-50 min-h-screen">
          <Card>
            <CardHeader>
              <CardTitle>Saved Posts</CardTitle>
              <CardDescription>Your bookmarked content</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">You haven't saved any posts yet.</p>
              <Button className="mt-4">Explore Posts</Button>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}


