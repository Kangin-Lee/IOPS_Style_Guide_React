import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import CodeBox from "@/components/codebox/CodeBox";

export function TableSkeleton({ rows = 5, columns = 3 }) {
  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Table Skeleton</h2>
        <div className="rounded-md border w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>이름</TableHead>
                <TableHead>이메일</TableHead>
                <TableHead>역할</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: rows }).map((_, rowIdx) => (
                <TableRow key={rowIdx}>
                  {Array.from({ length: columns }).map((_, colIdx) => (
                    <TableCell key={colIdx}>
                      <Skeleton className="h-4 w-[90%]" />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBox
          code={[
            "<Table>",
            "  <TableHeader>",
            "    <TableRow>",
            "      <TableHead>이름</TableHead>",
            "      <TableHead>이메일</TableHead>",
            "      <TableHead>역할</TableHead>",
            "    </TableRow>",
            "  </TableHeader>",
            "  <TableBody>",
            "    {Array.from({ length: rows }).map((_, rowIdx) => (",
            "      <TableRow key={rowIdx}>",
            "        {Array.from({ length: columns }).map((_, colIdx) => (",
            "          <TableCell key={colIdx}>",
            '            <Skeleton className="h-4 w-[90%]" />',
            "          </TableCell>",
            "        ))}",
            "      </TableRow>",
            "    ))}",
            "  </TableBody>",
            "</Table>",
          ].join("\n")}
        />
      </section>
    </div>
  );
}
