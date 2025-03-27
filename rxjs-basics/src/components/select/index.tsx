import React, { useState, useEffect, useRef } from "react";
import SelectProps from "./select.props";
import "../../assets/styles.css";
const Select = (props: SelectProps) => {
  const {
    options,
    error,
    defaultValue,
    onSelectChange,
    onSelectKeyValueToReturn,
    defaultOption,
    width = "w-full",
    ...rest
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<
    string | number | undefined
  >("");
  const [hoveredOption, setHoveredOption] = useState<number | string | null>(
    null
  );
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (value: string | number) => {
    setSelectedValue(value);
    setIsOpen(false);
    const event = {
      target: {
        value,
      },
    } as React.ChangeEvent<HTMLSelectElement>;
    onSelectChange(event);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const modifiedOptions = [
    { id: "all", name: defaultOption || "Select" },
    ...options,
  ];

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      // Ensure dropdown is open on Enter or Space
      setIsOpen(true);

      // If there is a focused option, select it
      if (isOpen && focusedIndex >= 0) {
        handleSelect(modifiedOptions[focusedIndex].name);
      }
    } else if (event.key === "ArrowDown") {
      // Navigate down to the next option
      setIsOpen(true);
      setFocusedIndex((prevIndex) =>
        prevIndex < modifiedOptions.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (event.key === "ArrowUp") {
      // Navigate up to the previous option
      setIsOpen(true);
      setFocusedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (event.key === "Escape") {
      // Close the dropdown on Escape
      setIsOpen(false);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        onKeyDown={handleKeyDown}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`bg-white ${width} border-[1px] border-[#D0D5DD] font-normal rounded-md text-sm text-[#101828] cursor-pointer 
        ${
          error
            ? "border-[red] focus:ring-[red] focus:shadow-[0_0_4px_1px_red]"
            : ""
        }`}
      >
        <div
          className={`flex justify-between items-center w-full p-2 rounded-md focus:ring-1 focus:outline-none focus:transition-all
             ${
               error
                 ? "border-[red] focus:ring-[red] focus:shadow-[0_0_8px_1px_red]"
                 : "border-[#D0D5DD] focus:ring-[#00B8A0] focus:shadow-[0px_0px_2px_6px_#E5FFFC]"
             }`}
          tabIndex={0}
        >
          <div className="text-sm text-[#667085] font-normal">
            {selectedValue || defaultOption || "Select"}
          </div>
          <div className="text-gray-400 flex justify-center">
            {isOpen ? (
              <div className="icon icon-up-arrow-1" />
            ) : (
              <div className="icon icon-down-arrow" />
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute bg-white border border-[#D0D5DD] rounded-md shadow-lg mt-1 z-10 w-full max-h-[200px] overflow-y-auto">
          <ul className="p-0 m-0">
            {modifiedOptions.map((item, index) => {
              const isSelected =
                selectedValue === item.name || selectedValue === item.id;
              const isHovered = hoveredOption === item.id;
              const isFocused = focusedIndex === index;

              return (
                <li
                  key={item.id}
                  onClick={() => handleSelect(item.name)}
                  onMouseEnter={() => setHoveredOption(item.id)}
                  onMouseLeave={() => setHoveredOption(null)}
                  className={`p-2 pl-3 text-left cursor-pointer hover:text-[#00B8A0] hover:bg-[#E5FFFC] text-sm whitespace-nowrap ${
                    isSelected
                      ? "bg-[#E5FFFC] text-[#00B8A0]"
                      : isFocused
                        ? "bg-[#E5FFFC] text-[#00B8A0]"
                        : "text-[#667085]"
                  }`}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {error && (
        <div className="text-[red] text-left text-[12px] mt-1">{error}</div>
      )}
    </div>
  );
};

export default Select;
