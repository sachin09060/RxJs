export interface CustomCheckboxProps {
  id?: string;
  label: string;
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  disabled?: boolean;
  variant?: string;
}
