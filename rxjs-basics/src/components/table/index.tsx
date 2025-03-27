import React, { useEffect, useState } from "react";
import { ColumnProps, TableProps, RowProps } from "./table.props";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import "./index.css";
import Pagination from "../Pagination";

function Table(props: TableProps) {
  const {
    columns,
    rows,
    onCheckboxChange,
    onSort,
    totalCount,
    pageSizeChange,
    nextPageChange,
    previousPageChange,
    selectedPageChange,
    firstPageChange,
    lastPageChange,
    page,
    pageSize,
    selectAll,
    setSelectAll,
    showCheckbox,
    recordsName,
    checkboxMapId,
    rowBodyHeight,
  } = props;

  const [checkedRows, setCheckedRows] = useState<Array<string>>([]);
  const [testRowLength, setTestRowLength] = useState<number>(-1);
  const [sortBy, setSortBy] = useState<string>("ModifiedDate");
  const [sortOrder, setSortOrder] = useState<number>(1);

  useEffect(() => {
    if (testRowLength === -1) {
      rows && setTestRowLength(rows?.length - 1);
    } else {
      if (testRowLength !== rows.length - 1) {
        const updatedCheckedCheckboxes = checkedRows.filter((item) =>
          rows.some(
            (rowItem) => rowItem[checkboxMapId as keyof RowProps] === item
          )
        );
        setCheckedRows(updatedCheckedCheckboxes);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows]);

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    guid: string
  ) => {
    const { checked, name } = e.target;
    if (name === "selectAll") {
      const selectedId = rows?.map(
        (item) => item[checkboxMapId as keyof RowProps]
      );
      if (checked) {
        const array = [...selectAll.selectedIds, ...selectedId];
        const filterArray =
          array &&
          array?.filter((item, index) => array.indexOf(item) === index);
        setSelectAll({
          isSelectAll: true,
          selectedIds: filterArray as string[],
        });
        setCheckedRows(filterArray as string[]);
      } else {
        const testId = selectAll.selectedIds.filter(
          (guid) => !selectedId.includes(guid)
        );
        setSelectAll({
          isSelectAll: false,
          selectedIds: testId,
        });
        setCheckedRows([]);
      }
      onCheckboxChange("selectAll");
    } else {
      if (selectAll.selectedIds.includes(guid)) {
        const newarray = selectAll.selectedIds.filter(
          (selectedId) => selectedId !== guid
        );
        setSelectAll({
          isSelectAll: false,
          selectedIds: newarray,
        });
      } else {
        const newarray = [...selectAll.selectedIds, guid];
        setSelectAll({
          isSelectAll: false,
          selectedIds: newarray,
        });
      }
    }
  };

  const handleSort = (item: ColumnProps, sortOrder: number) => {
    setSortOrder(sortOrder);
    setSortBy(item.id);
    onSort(item.id.toLowerCase(), sortOrder);
  };

  return (
    <div className="rounded-md h-full  bg-white overflow-x-auto">
      <table
        className="table-scroll text-left rtl:text-right text-black dark:text-gray-400"
        style={{ height: "inherit" }}
      >
        <thead className="bg-[#0051a2] relative text-[#FAFAFA] shadow-lg text-sm">
          <tr>
            <th colSpan={10}>
              <div
                className={`flex justify-start items-center mx-[5px] px-[12px] py-[15px] font-normal`}
              >
                {showCheckbox && (
                  <div style={{ width: "40px" }}>
                    <input
                      type="checkbox"
                      name="selectAll"
                      onChange={(e) => handleCheckboxChange(e, "")}
                      checked={selectAll.isSelectAll}
                      aria-label="select all checkbox"
                    />
                  </div>
                )}
                {columns.map((item: ColumnProps) => {
                  return (
                    <div
                      className={`text-nowrap flex items-center ${item?.align ? (item.align === "center" ? "justify-center" : item.align === "right" ? "justify-end" : "justify-start") : "justify-start"}`}
                      key={item.id}
                      style={{
                        width: `${item.width}px`,
                      }}
                    >
                      {item.label}{" "}
                      {item.isSort && (
                        <span className="ml-1 text-lg">
                          {(sortOrder === 0 && sortBy === "") ||
                          (sortOrder === 0 && sortBy === item.id) ? (
                            <IoMdArrowDropdown
                              onClick={() => rows.length && handleSort(item, 1)}
                              className="cursor-pointer"
                              tabIndex={0}
                              aria-label={`${item.id} sort`}
                              onKeyDown={(
                                event: React.KeyboardEvent<SVGElement>
                              ) => {
                                if (
                                  event.key === "Enter" ||
                                  event.code === "Space"
                                ) {
                                  rows.length && handleSort(item, 1);
                                }
                              }}
                            />
                          ) : sortOrder === 1 && sortBy === item.id ? (
                            <IoMdArrowDropup
                              onClick={() => rows.length && handleSort(item, 0)}
                              className="cursor-pointer"
                              tabIndex={0}
                              aria-label={`${item.id} sort`}
                              onKeyDown={(
                                event: React.KeyboardEvent<SVGElement>
                              ) => {
                                if (
                                  event.key === "Enter" ||
                                  event.code === "Space"
                                ) {
                                  rows.length && handleSort(item, 0);
                                }
                              }}
                            />
                          ) : (
                            <IoMdArrowDropdown
                              onClick={() => rows.length && handleSort(item, 1)}
                              className="cursor-pointer"
                              tabIndex={0}
                              aria-label={`${item.id} sort`}
                              onKeyDown={(
                                event: React.KeyboardEvent<SVGElement>
                              ) => {
                                if (
                                  event.key === "Enter" ||
                                  event.code === "Space"
                                ) {
                                  rows.length && handleSort(item, 1);
                                }
                              }}
                            />
                          )}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </th>
          </tr>
        </thead>
        <tbody
          className="block relative w-full overflow-y-auto"
          style={{ height: rowBodyHeight ?? "auto" }}
        >
          {rows.map((row: RowProps, index: number) => {
            return (
              <>
                <tr key={index} className={`text-[14px] text-[#000000]`}>
                  <td colSpan={10}>
                    <div
                      className={`flex justify-start items-center mx-[5px] mt-[4px] ${index === rows.length - 1 && "mb-[4px]"} pl-[12px] pr-1 py-[9px]  rounded-md shadow-sm border`}
                    >
                      {showCheckbox && (
                        <div className="w-[40px]">
                          <input
                            type="checkbox"
                            name={`checkbox-${row[checkboxMapId as keyof RowProps]}`}
                            onChange={(e) =>
                              handleCheckboxChange(
                                e,
                                row[checkboxMapId as keyof RowProps] as string
                              )
                            }
                            checked={selectAll.selectedIds.includes(
                              row[checkboxMapId as keyof RowProps] as string
                            )}
                            disabled={false}
                            aria-label={`checkbox-${row[checkboxMapId as keyof RowProps]}`}
                          />
                        </div>
                      )}
                      {columns?.map((column: ColumnProps, colInd: number) => {
                        return (
                          <div
                            className={`text-nowrap overflow-hidden text-ellipsis`}
                            style={{
                              width: `${column.width}px`,
                            }}
                          >
                            {row[column.id as keyof RowProps]}
                          </div>
                        );
                      })}
                    </div>
                  </td>
                </tr>
              </>
            );
          })}
          {rows.length === 0 && (
            <tr className={`text-[14px] text-[#000000]`}>
              <td colSpan={10}>
                <div
                  className={`flex justify-between items-center mx-[5px] mt-[4px] px-[12px] py-[9px] bg-white rounded-md shadow-sm border`}
                >
                  No {recordsName ?? "records"} found
                </div>
              </td>
            </tr>
          )}
        </tbody>
        <div className="flex justify-start">
          <Pagination
            page={page}
            limit={pageSize}
            totalRowCount={totalCount}
            pageSizeChange={pageSizeChange}
            firstPageChange={firstPageChange}
            lastPageChange={lastPageChange}
            nextPageChange={nextPageChange}
            previousPageChange={previousPageChange}
            selectedPageChange={selectedPageChange}
          />
        </div>
      </table>
    </div>
  );
}

export default Table;
