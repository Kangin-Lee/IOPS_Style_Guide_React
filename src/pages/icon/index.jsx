import CodeBox from "@/components/codebox/CodeBox";
import CommonIcons from "./components/CommonIcons";
import ContentIcons from "./components/ContentIcons";
import DeviceIcons from "./components/DeviceIcons";
import SortFilterIcons from "./components/SortFilterIcons";
import StateInteractionIcons from "./components/StateInteractionIcons";
import SystemIcons from "./components/SystemIcons";
import UserIcons from "./components/UserIcons";
import { Link } from "react-router-dom";

export default function IconPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Icon Examples</h1>
      <div className="w-fit">
        <CodeBox
          code={`npm install lucide-react //shadcn 컴포넌트 설치 시 자동 설치됨`}
        />

        <Link to="https://lucide.dev/icons/" className="underline text-[var(--color-font-gray)] text-sm">https://lucide.dev/icons/</Link>
      </div>

      {/* CommonIcons Component */}
      <CommonIcons />

      {/* UserIcons Component */}
      <UserIcons />

      {/* ContentIcons Component */}
      <ContentIcons />

      {/* StateInteractionIcons Component */}
      <StateInteractionIcons />

      {/* SystemIcons Component */}
      <SystemIcons />

      {/* DeviceIcons Component */}
      <DeviceIcons />

      {/* SortFilterIcons Component */}
      <SortFilterIcons />
    </div>
  );
}
