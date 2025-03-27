import React from "react";
import ButtonProps from "./button.props";

const Button = (props: ButtonProps) => {
  const {
    onClick,
    label,
    children,
    disabled,
    type,
    id,
    tabIndex,
    dataCy,
    className,
    name,
    variant,
  } = props;

  const getVariant = () => {
    switch (variant) {
      case "primary":
        return "bg-[#00B8A0] text-white font-medium";
      case "secondary":
        return "bg-[#E5FFFC] text-[#00B8A0] font-medium border-none";
      case "tertiary":
        return "bg-white text-[#2C2C2E] border-[1px] border-[#C7C7CC] font-medium";
      default:
        return "bg-[#0051a2] text-white";
    }
  };

  return (
    <button
      title={`${label || name}`}
      aria-label={`${label}`}
      data-cy={dataCy}
      tabIndex={tabIndex}
      id={id}
      type={type}
      disabled={disabled}
      onClick={() => onClick()}
      className={`${className} block h-9 shadow-sm focus:outline-none focus:ring-1 focus:ring-[#00B8A0] ${
        disabled
          ? "cursor-no-drop text-[#d0d5dd] bg-white border-[1px] border-[#E4E7EC] font-medium"
          : getVariant()
      } rounded-md w-fit text-sm px-2 sm:px-4`}
    >
      {label ?? <div className="flex items-center space-x-1 ">{children}</div>}
    </button>
  );
};

export default Button;
