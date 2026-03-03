import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import RowDetailPopover from "./RowDetailPopover";

export default function UsersTable({ table }) {
  // ✅ pagination이 적용된 rows
  const rows = table.getRowModel().rows;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="hidden sm:table-cell w-[100px]">ID</TableHead>
          <TableHead className="w-[140px]">Invoice</TableHead>
          <TableHead className="hidden sm:table-cell">Status</TableHead>
          <TableHead className="hidden sm:table-cell">Method</TableHead>
          <TableHead className="hidden sm:table-cell">Date</TableHead>
          <TableHead className="hidden sm:table-cell text-right">Amount</TableHead>
          <TableHead className="sm:hidden text-right">상세보기</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {rows.map((r) => {
          const row = r.original;
          return (
            <TableRow key={r.id} className="sm:table-row block border-b sm:border-0">
              <TableCell className="hidden sm:table-cell">{row.id}</TableCell>
              <TableCell>{row.invoice}</TableCell>
              <TableCell className="hidden sm:table-cell">{row.status}</TableCell>
              <TableCell className="hidden sm:table-cell">{row.method}</TableCell>
              <TableCell className="hidden sm:table-cell">{row.date}</TableCell>
              <TableCell className="hidden sm:table-cell text-right">{row.amount}</TableCell>

              <TableCell className="sm:hidden text-right">
                <RowDetailPopover row={row} />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}