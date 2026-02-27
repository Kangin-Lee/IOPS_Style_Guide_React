import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function AppLayout({ children }) {

  //children === <Outlet /> => 페이지 컨텐츠 영역
  
  return (
    <SidebarProvider>

      {/* 메뉴 사이드바 */}
      <AppSidebar />

      {/* 페이지 영역 */}
      <SidebarInset>

        {/* 헤더 영역 */}
        <header className="flex h-14 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <div className="font-semibold">IOPS Style Guide</div>
        </header>

        {/* 페이지 컨텐츠 영역 */}
        <main className="p-4 bg-gray-100 w-full h-full flex-1">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
