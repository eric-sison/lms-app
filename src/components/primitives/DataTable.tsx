"use client";

import {
  ColumnDef,
  SortingState,
  ColumnFiltersState,
  VisibilityState,
  RowSelectionState,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  GroupingState,
  flexRender,
  Row,
} from "@tanstack/react-table";
import { FunctionComponent, useMemo, useState } from "react";

type DataTableProps<T> = {
  data: T[];
  columns: ColumnDef<T, any>[];
  onRowClick?: (row: Row<T>) => void;
};

export const DataTable = <T extends unknown>({
  data,
  columns,
  onRowClick,
}: DataTableProps<T>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [grouping, setGrouping] = useState<GroupingState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const tblData = useMemo(() => data, [data]);
  const tblCols = useMemo(() => columns, [columns]);

  const table = useReactTable({
    data: tblData,
    columns: tblCols,
    getCoreRowModel: getCoreRowModel(),
    state: {
      sorting,
      globalFilter,
      columnFilters,
      columnVisibility,
      grouping,
      rowSelection,
    },
    enableRowSelection: true,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    onColumnVisibilityChange: setColumnVisibility,
    onSortingChange: setSorting,
    onGroupingChange: setGrouping,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onRowSelectionChange: setRowSelection,
  });

  return (
    <>
      <div className="w-full">
        <table className="w-full">
          <thead className="text-left">
            {table.getHeaderGroups().map((group) => {
              return (
                <tr key={group.id} className="">
                  {group.headers.map((header) => {
                    return (
                      <th key={header.id} scope="col" className="">
                        {header.isPlaceholder ? null : (
                          <div
                            {...{
                              // className: tableHeaderStyles(header.column.getCanSort()),
                              onClick: header.column.getToggleSortingHandler(),
                            }}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            {/* {header.column.getCanSort() && <SortableColumnSvg />} */}
                          </div>
                        )}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>

          {/* start of table body */}
          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id} onClick={onRowClick?.(row)!} className="">
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id} className="">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

// custom svg for sortable table
const SortableColumnSvg: FunctionComponent = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-[0.6rem] h-[0.6rem] text-gray-300"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 320 512"
    >
      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
    </svg>
  );
};
