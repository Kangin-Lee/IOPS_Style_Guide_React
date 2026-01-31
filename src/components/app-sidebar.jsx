import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";
import { sideMenuRoutes } from "../routes/sideMenuRoutes";

export function AppSidebar() {
  const { pathname } = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="px-4 py-3 font-semibold">홍길동</SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sideMenuRoutes.map((route) => {
                const isActive =
                  route.path === "/"
                    ? pathname === "/"
                    : pathname.startsWith(route.path);

                return (
                  <SidebarMenuItem key={route.path}>
                    <SidebarMenuButton
                      asChild
                      className={[
                        "block w-full rounded-md px-2 py-1.5 duration-200",
                        isActive
                          ? "bg-[var(--color-primary)] text-white"
                          : "text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",
                      ].join(" ")}
                    >
                      <Link to={route.path}>
                        <div className="flex items-center gap-2">
                          {route.icon}
                          {route.title}
                        </div>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
