import CodeBox from "@/components/codebox/CodeBox";
import TabsComponent from "./components/TabsComponent";

export default function TabsPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Tabs Examples</h1>
      <div className="w-fit">
        <CodeBox
          code={`npx shadcn@latest add tabs`}
        />
      </div>

        {/* Tabs Component */}
        <TabsComponent />

    </div>
  );
}