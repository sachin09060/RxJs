import React from "react";
export interface PopupProps {
  children: React.ReactNode;
  onClose: () => void;
  size?: "small" | "medium" | "large" | "full";
  position?: "top" | "center";
  className?: string;
}
