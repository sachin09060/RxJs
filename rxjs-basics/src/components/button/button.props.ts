export default interface ButtonProps {
  onClick: () => void;
  label?: string;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  id?: string;
  tabIndex?: number;
  dataCy?: string;
  className?: string;
  name?: string;
  variant?: string;
}
