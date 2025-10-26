import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function ArtistDashboard() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar />
        <main className="flex-1 p-6 bg-gray-50">
          <h1 className="text-2xl font-semibold">Artist Dashboard</h1>
        </main>
      </div>
    </SidebarProvider>
  );
}
