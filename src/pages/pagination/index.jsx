import CodeBox from "@/components/codebox/CodeBox";
import PaginationComponent from "./components/PaginationComponent";

export default function PaginationPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Pagination Examples</h1>
      <div className="w-fit">
        <CodeBox code={`npx shadcn@latest add pagination`} />
      </div>

      {/* Pagination Component */}
      <PaginationComponent />
    </div>
  );
}
