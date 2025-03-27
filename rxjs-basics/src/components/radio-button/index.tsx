import React from "react";
import { CustomRadioProps } from "./radio-button.props";

const RadioButton = ({
  id,
  name,
  label,
  checked,
  onChange,
  errors,
}: CustomRadioProps) => {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === " ") {
      event.preventDefault();
      const mockEvent = {
        target: {
          value: id,
          checked: !checked,
        },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(mockEvent);
      console.log(mockEvent, "Radio");
    }
  };
  return (
    <>
      <div className="flex items-center">
        <input
          tabIndex={0}
          type="radio"
          id={id}
          name={name}
          value={id}
          checked={checked}
          onChange={onChange}
          className="hidden"
        />
        <label htmlFor={id} className="flex items-center cursor-pointer">
          <div
            tabIndex={0}
            onKeyDown={handleKeyDown}
            className={`flex items-center justify-center w-[18px] h-[18px] rounded-full border-2 focus:outline-none focus:border-[1px] focus:border-[#00B8A0]
            ${
              checked
                ? "bg-white border-[#00B8A0]"
                : "bg-white border-[#C7C7CC]"
            }`}
          >
            {checked && (
              <div className="w-[6px] h-[6px] bg-[#00B8A0] rounded-full" />
            )}
          </div>
          <span className="ml-2 text-gray-700">{label}</span>
        </label>
      </div>
      {errors && <div className="text-[red] mt-1 text-[12px]">{errors}</div>}
    </>
  );
};

export default RadioButton;
