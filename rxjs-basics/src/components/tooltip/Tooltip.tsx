import React, { useState, useRef, useEffect } from "react";
import { TooltipProps } from "./Tooltip.props";

const Tooltip: React.FC<TooltipProps> = ({
  text,
  children,
  type,
  position,
  tooltipText,
  width = "auto",
  variant,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dynamicPosition, setDynamicPosition] = useState(position);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showTooltip && tooltipRef.current && childRef.current) {
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const childRect = childRef.current.getBoundingClientRect();
      const screenHeight = window.innerHeight;
      const screenWidth = window.innerWidth;

      let newPosition = position;

      if (
        ["top", "top-left", "top-right"].includes(position) &&
        childRect.top - tooltipRect.height < 0
      ) {
        newPosition = "bottom";
      } else if (
        ["bottom", "bottom-left", "bottom-right"].includes(position) &&
        childRect.bottom + tooltipRect.height > screenHeight
      ) {
        newPosition = "top";
      } else if (
        ["left", "top-left", "bottom-left"].includes(position) &&
        childRect.left - tooltipRect.width < 0
      ) {
        newPosition = "right";
      } else if (
        ["right", "top-right", "bottom-right"].includes(position) &&
        childRect.right + tooltipRect.width > screenWidth
      ) {
        newPosition = "left";
      }

      setDynamicPosition(newPosition);
    }
  }, [showTooltip, position]);

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  const getPosition = () => {
    switch (dynamicPosition) {
      case "right":
        return "top-1/2 left-full transform -translate-y-1/2 ml-3";
      case "bottom":
        return "top-full left-1/2 transform -translate-x-1/2 mt-3";
      case "left":
        return "top-1/2 right-full transform -translate-y-1/2 mr-3";
      case "top":
        return "bottom-full left-1/2 transform -translate-x-1/2 mb-3";
      case "bottom-left":
        return "top-full left-[-17px] mt-3";
      case "bottom-right":
        return "top-full right-[-17px] mt-3";
      case "top-left":
        return "bottom-full left-[-17px] mb-3";
      case "top-right":
        return "bottom-full right-[-17px] mb-3";
      default:
        return "bottom-full left-1/2 transform -translate-x-1/2 mb-3";
    }
  };

  const renderCustomArrow = () => {
    return (
      <div
        className={`absolute w-2.5 h-2.5 ${
          variant === "secondary" ? "bg-white" : "bg-black"
        } rotate-45 ${
          dynamicPosition === "top"
            ? "-bottom-1 left-1/2 transform -translate-x-1/2"
            : dynamicPosition === "bottom"
              ? "-top-1 left-1/2 transform -translate-x-1/2"
              : dynamicPosition === "left"
                ? "-right-1 top-1/2 transform -translate-y-1/2"
                : dynamicPosition === "right"
                  ? "-left-1 top-1/2 transform -translate-y-1/2"
                  : dynamicPosition === "bottom-left"
                    ? "-top-1 left-5"
                    : dynamicPosition === "bottom-right"
                      ? "-top-1 right-5"
                      : dynamicPosition === "top-left"
                        ? "-bottom-1 left-5"
                        : "-bottom-1 right-5"
        }`}
      ></div>
    );
  };

  return (
    <div className="relative inline-block" ref={childRef}>
      {showTooltip && (
        <div
          ref={tooltipRef}
          style={{ width, whiteSpace: "nowrap" }}
          className={`${getPosition()} z-40 p-3 ${
            variant === "secondary"
              ? "bg-white text-[#344054]"
              : "bg-black text-white"
          }  text-white text-sm absolute rounded-lg shadow-lg transform transition-all duration-200 ease-in-out scale-95 hover:scale-100 max-w-max`}
        >
          {renderCustomArrow()}
          {type === "section" ? (
            <div className="w-[60px] text-nowrap">
              {text?.map((items, index) => (
                <div key={index} className="flex justify-between text-left">
                  <div>{items.name} - </div>
                  <div>{items.count}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="font-semibold">{tooltipText}</div>
          )}
        </div>
      )}
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
