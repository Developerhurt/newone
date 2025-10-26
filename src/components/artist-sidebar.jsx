"use client";
import { Home, BarChart2, FileText, Bell, User, Settings, HelpCircle, LogOut } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <Home size={20} /> },
    { name: "Analytics", icon: <BarChart2 size={20} /> },
    { name: "Documents", icon: <FileText size={20} />, badge: 3 },
    { name: "Notifications", icon: <Bell size={20} />, badge: 12 },
    { name: "Profile", icon: <User size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
    { name: "Help & Support", icon: <HelpCircle size={20} /> },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r flex flex-col justify-between">
      <div>
        {/* Top Dropdown */}
        <div className="p-4 border-b">
          <select className="w-full border rounded p-2 text-sm">
            <option>DemoOne</option>
            <option>DemoTwo</option>
          </select>
        </div>

        {/* Menu */}
        <nav className="mt-4 space-y-1 px-2">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm ${
                active === item.name ? "bg-blue-100 text-blue-600 font-medium" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center gap-2">
                {item.icon}
                {item.name}
              </div>
              {item.badge && (
                <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full">{item.badge}</span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* User Profile + Logout */}
      <div className="p-4 border-t">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
            JD
          </div>
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-gray-500">Senior Administrator</p>
          </div>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <button className="flex items-center gap-2 text-red-500 hover:text-red-600 text-sm">
          <LogOut size={16} /> Logout
        </button>
      </div>
    </div>
  );
}
