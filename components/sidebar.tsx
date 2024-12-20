"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Home, Clock, Pin, Briefcase, Users, BarChart, Settings, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Recent", icon: Clock, href: "/recent" },
  { name: "Pinned", icon: Pin, href: "/pinned" },
  { name: "My Work", icon: Briefcase, href: "/my-work" },
  { name: "Agent Skill", icon: Users, href: "/agent-skill" },
  { name: "Reports", icon: BarChart, href: "/reports" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-[240px] flex-col border-r bg-card">
      <div className="p-6">
        <h2 className="text-lg font-semibold">CRM Dashboard</h2>
      </div>
      <ScrollArea className="flex-1">
        <div className="space-y-1 p-4">
          {sidebarItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant={pathname === item.href ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start gap-2",
                  pathname === item.href && "bg-muted"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Button>
            </Link>
          ))}
        </div>
      </ScrollArea>
      <div className="border-t p-4">
        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Settings className="h-4 w-4" />
            Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-red-500">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}