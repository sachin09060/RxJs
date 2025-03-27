import { ReactNode } from "react";

export interface RowProps {
  [key: string]: string | number | boolean | ReactNode;
}
export interface ColumnProps {
  id: string;
  label: string;
  width: number;
  isSort: boolean;
  align?: string |"left" | "right" | "center";
}

export interface CommonTableProps {
  page: number;
  pageSize: number;
  totalCount: number;
  columns: ColumnProps[];
  rows: RowProps[];
  onCheckboxChange: (testProp: string | Array<string>) => void;
  onSort: (sortBy: string, sortOrder: number) => void;
  pageSizeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedPageChange?: (page: number) => void;
  nextPageChange?: () => void;
  previousPageChange?: () => void;
  firstPageChange?: () => void;
  lastPageChange?: () => void;
  selectAll: { isSelectAll: boolean; selectedIds: string[] };
  setSelectAll: React.Dispatch<
    React.SetStateAction<{ isSelectAll: boolean; selectedIds: string[] }>
  >;
  recordsName?: string;
  rowBodyHeight?: number;
}

interface TablePropsWithCheckbox extends CommonTableProps {
  showCheckbox: boolean;
  checkboxMapId: string;
}

interface TablePropsWithoutCheckbox extends CommonTableProps {
  showCheckbox?: null | undefined;
  checkboxMapId?: null | undefined;
}

export type TableProps = TablePropsWithCheckbox | TablePropsWithoutCheckbox;
