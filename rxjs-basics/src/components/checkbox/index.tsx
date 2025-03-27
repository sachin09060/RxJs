import React from "react";
import { CustomCheckboxProps } from "./checkbox.props";

const Checkbox = ({
  id,
  label,
  checked,
  onChange,
  value,
  disabled,
  variant = "primary",
}: CustomCheckboxProps) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === " ") {
      e.preventDefault();
      if (!disabled) {
        onChange?.({
          target: {
            checked: !checked,
            value: value,
            id: id,
          } as HTMLInputElement,
        } as React.ChangeEvent<HTMLInputElement>);
      }
    }
  };

  return (
    <div className="flex items-center text-sm font-medium">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden"
        value={value}
        disabled={disabled}
      />
      <label htmlFor={id} className="flex items-center cursor-pointer">
        <div
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className={`flex items-center justify-center w-5 h-5 focus:outline-none focus:shadow-[0px_0px_2px_6px_#E5FFFC] focus:ring-[1px] focus:ring-[#00B8A0] ${variant === "primary" ? "rounded" : "rounded-full"} border
          ${
            variant === "primary"
              ? checked
                ? "bg-[#E5FFFC]text-base"
                : "bg-white border-[#D0D5DD]"
              : variant === "secondary"
                ? checked
                  ? "bg-[#00B8A0] pt-[1px]"
                  : "bg-white border-[#D0D5DD]"
                : ""
          }`}
        >
          {checked && (
            <div
              className={
                variant === "secondary"
                  ? "text-white font-medium text-sm"
                  : "text-[#00B8A0]"
              }
            >
              <div className="icon icon-tick flex items-center justify-center" />
            </div>
          )}
        </div>
        <span className="ml-2">{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
