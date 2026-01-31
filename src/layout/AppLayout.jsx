import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function AppLayout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <header className="flex h-14 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <div className="font-semibold">IOPS Style Guide</div>
        </header>

        <main className="p-4 bg-gray-100 w-full h-full flex-1">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
