import CodeBox from "@/components/codebox/CodeBox";
import {
  Home,
  Bell,
  Inbox,
  Globe,
  MapPin,
  Server,
  Monitor,
  Database,
  Settings,
  SlidersHorizontal,
} from "lucide-react";

export default function SystemIcons() {
  return (
    <div>
      <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
        {/* Preview 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">System Icon</h2>
          <div className="flex gap-4 flex-col flex-wrap">
            <div className="flex gap-4">
              <Home />
              <Bell />
              <Inbox />
              <Globe />
              <MapPin />
            </div>
            <div className="flex gap-4">
              <Server />
              <Monitor />
              <Database />
              <Settings />
              <SlidersHorizontal />
            </div>
          </div>
        </section>

        {/* CodeBlock 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Code</h2>
          <CodeBox
            code={[
              "<Home />  <Bell />  <Inbox />  <Globe />  <MapPin />",
              "<Server />  <Monitor />  <Database />  <Settings />  <SlidersHorizontal /> ",
            ].join("\n")}
          />
        </section>
      </div>
    </div>
  );
}
