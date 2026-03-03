"use client";

import React from "react";
import { useReactTable, getCoreRowModel, getPaginationRowModel } from "@tanstack/react-table";

import { useUsersQuery } from "../queries/useUsersQuery";
import { LoadingSpinner } from "@/pages/skeleton/components/LoadingSpinner";

import UsersTable from "./UsersTable";
import TablePagination from "./TablePagination";

export default function DynamicTable() {
  const { data = [], isLoading, isError } = useUsersQuery();

  // ✅ API 응답을 현재 테이블 컬럼 형태로 "가공"
  const rows = React.useMemo(() => {
    return data.map((u) => ({
      id: u.id,
      invoice: u.name,        // 예시 매핑
      status: u.username,     // 예시 매핑
      method: u.email,        // 예시 매핑
      date: u.address?.city ?? "-", // 예시 매핑
      amount: u.phone ?? "-",       // 예시 매핑
    }));
  }, [data]);

  const table = useReactTable({
    data: rows,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 5 } },
  });

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <p>에러 발생</p>;

  return (
    <div className="w-full">
      <UsersTable table={table} />
      <TablePagination table={table} />
    </div>
  );
}