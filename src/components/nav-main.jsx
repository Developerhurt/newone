import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Menu</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, delay: idx * 0.03 }}
          >
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="group data-[active=true]:bg-sidebar-accent">
                <a href={item.url}>
                  <item.icon className="transition-transform group-hover:scale-105 group-data-[active=true]:text-sidebar-primary" />
                  <span className="transition-colors group-data-[active=true]:text-sidebar-primary font-medium">
                    {item.title}
                  </span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </motion.div>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
