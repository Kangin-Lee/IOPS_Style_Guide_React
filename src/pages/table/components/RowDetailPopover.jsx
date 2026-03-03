import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export default function RowDetailPopover({ row }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="sm" variant="outline" className="text-xs">
          상세 보기
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-64 text-sm space-y-1">
        <div><span className="font-semibold">상태:</span> {row.status}</div>
        <div><span className="font-semibold">방법:</span> {row.method}</div>
        <div><span className="font-semibold">날짜:</span> {row.date}</div>
        <div><span className="font-semibold">금액:</span> {row.amount}</div>
      </PopoverContent>
    </Popover>
  );
}