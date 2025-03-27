import React from "react";
import { SearchProps } from "./search.props";
import "../../assets/styles.css";

const Search: React.FC<SearchProps> = ({
  handleFilterSearch,
  filterValue,
  onFilterChange,
  onFilterClear,
  placeholderText,
}) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleFilterSearch && handleFilterSearch();
    }
  };

  return (
    <div
      tabIndex={0}
      onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter") {
          handleFilterSearch && handleFilterSearch();
        }
      }}
      className="w-full md:w relative flex items-center border-[1px] rounded-md border-[#D0D5DD] focus:outline-none focus:ring-[1px] focus:shadow-[0px_0px_2px_6px_#E5FFFC] focus:transition-all focus:ring-[#00B8A0]"
    >
      <div
        className={`m-2 flex items-center justify-center rounded-md text-[18px] text-[#667085] cursor-pointer focus:outline-none focus:shadow-[0px_0px_2px_6px_#E5FFFC] focus:ring-[1px] focus:transition-all focus:ring-[#00B8A0]`}
        onClick={() => handleFilterSearch && handleFilterSearch()}
        aria-label="search input icon"
        tabIndex={0}
        onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
          if (event.key === "Enter") {
            handleFilterSearch && handleFilterSearch();
          }
        }}
      >
        <div className="icon icon-search flex items-center justify-center" />
      </div>
      <div className="w-full relative">
        <input
          id={"filterValue"}
          className={`truncate w-full p-2 bg-white text-sm rounded-md outline-none text-[#667085]`}
          placeholder={placeholderText ? placeholderText : "Search"}
          value={filterValue}
          onChange={(e) => onFilterChange(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {filterValue && (
          <div
            className="absolute top-2 right-2 text-xl rounded-md cursor-pointer focus:outline-none focus:shadow-[0px_0px_2px_6px_#E5FFFC] focus:ring-[1px] focus:transition-all focus:ring-[#00B8A0]"
            onClick={() => onFilterClear && onFilterClear()}
            tabIndex={0}
            aria-label="search input clear"
            onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
              if (event.key === "Enter") {
                onFilterClear && onFilterClear();
              }
            }}
          >
            <div className="flex items-center justify-center rounded-md icon icon-close" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
