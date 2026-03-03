import CodeBox from "@/components/codebox/CodeBox";
import DynamicTable from "./DynamicTable";

export default function TableComponent() {
  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">
          Shadcn/ui Table + React Table
        </h2>
        <div className="flex gap-4 flex-wrap">
          <DynamicTable />
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
            '      <TableHead className="hidden sm:table-cell w-[100px]">ID</TableHead>',
            '      <TableHead className="w-[100px]">Invoice</TableHead>',
            '      <TableHead className="hidden sm:table-cell">Status</TableHead>',
            '      <TableHead className="hidden sm:table-cell">Method</TableHead>',
            '      <TableHead className="hidden sm:table-cell">Date</TableHead>',
            '      <TableHead className="hidden sm:table-cell text-right">Amount</TableHead>',
            '      <TableHead className="sm:hidden text-right">상세보기</TableHead>',
            "    </TableRow>",
            "  </TableHeader>",
            "",
            "  <TableBody>",
            "    {user.map((user, index) => (",
            "      <TableRow",
            "        key={index}",
            '        className="sm:table-row block border-b sm:border-0"',
            "      >",
            '        <TableCell className="hidden sm:table-cell">{user.id}</TableCell>',
            "        <TableCell>{user.invoice}</TableCell>",
            '        <TableCell className="hidden sm:table-cell">{user.status}</TableCell>',
            '        <TableCell className="hidden sm:table-cell">{user.method}</TableCell>',
            '        <TableCell className="hidden sm:table-cell">{user.date}</TableCell>',
            '        <TableCell className="hidden sm:table-cell text-right">{user.amount}</TableCell>',
            "      </TableRow>",
            "  </TableBody>",
            "</Table>",
          ].join("\n")}
        />
      </section>
    </div>
  );
}
