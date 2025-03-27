import React, { useRef } from "react";
import { GrClose } from "react-icons/gr";
import { PopupProps } from "./popup.props";

const Popup: React.FC<PopupProps> = ({
  children,
  onClose,
  size = "medium",
  position = "center",
  className = "",
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const sizeClasses = {
    small: "w-[90%] sm:w-[300px]",
    medium: "w-[90%] sm:w-[500px]",
    large: "w-[95%] sm:w-[800px]",
    full: "w-screen h-screen rounded-none",
  };

  const positionClasses = {
    top: "top-[10%] translate-y-0",
    center: "top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2",
  };

  return (
    <div className="fixed inset-0 flex justify-center bg-[#00000066] z-50">
      <div
        ref={modalRef}
        className={`relative p-4 bg-[#FFFFFF] rounded shadow-lg ${sizeClasses[size]} ${
          positionClasses[position]
        } ${className}`}
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <button
          className="absolute top-2 right-2 p-2 text-[#333] hover:bg-gray-200 rounded-full transition"
          onClick={onClose}
          aria-label="Close popup"
        >
          <GrClose />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
