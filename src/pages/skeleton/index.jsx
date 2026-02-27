import CodeBox from "@/components/codebox/CodeBox";
import { CardSkeleton } from "./components/CardSkeleton";
import { InputSkeleton } from "./components/InputSkeleton";
import { TableSkeleton } from "./components/TableSkeleton";
import { LoadingSpinner } from "./components/LoadingSpinner";

export default function SkeletonPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">FileUpload Examples</h1>
      <div className="w-fit">
        <CodeBox code={`<Skeleton className='h-4 w-[220px]' />`} />
      </div>

      {/* Card Skeleton Component */}
      <CardSkeleton />

      {/* Input Skeleton Component */}
      <InputSkeleton />

      {/* Table Skeleton Component */}
      <TableSkeleton />

      {/* Loading Spinner Component */}
      <LoadingSpinner />
    </div>
  );
}
