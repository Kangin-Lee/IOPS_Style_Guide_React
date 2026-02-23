import CodeBox from "@/components/codebox/CodeBox";
import BreadcrumbComponent from "./components/BreadcrumbComponent";

export default function BreadcrumbPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Breadcrumb Examples</h1>
      <div className="w-fit">
        <CodeBox
          code={`<BreadcrumbComponent />`}
        />
      </div>

      {/* Breadcrumb Component */}
      <BreadcrumbComponent />
    </div>
  );
}
