import { Outlet } from "react-router-dom";
import AppLayout from "./AppLayout";

export default function RootLayout() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
