export interface TooltipProps {
  tooltipText: React.ReactNode | string;
  text?: { name: string; count: number }[];
  children: React.ReactNode;
  type?: string;
  position:
    | "top"
    | "right"
    | "bottom"
    | "left"
    | "bottom-left"
    | "bottom-right"
    | "top-left"
    | "top-right";
  width?: string;
  variant?: "primary" | "secondary";
}
