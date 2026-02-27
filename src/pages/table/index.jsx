import CodeBox from "@/components/codebox/CodeBox";
import TableComponent from "./components/TableComponent";

export default function TablePage() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Table Examples</h1>
      <div className="w-fit">
        <CodeBox
          code={[
            "//npm install",
            "npx shadcn@latest add table",
            "npm install @tanstack/react-table",
          ].join("\n")}
        />
      </div>

      {/* Shadcn Table + React Table Component */}
      <TableComponent />
    </div>
  );
}
