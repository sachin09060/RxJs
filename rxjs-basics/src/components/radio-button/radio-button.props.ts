export interface CustomRadioProps {
  id: string;
  name: string;
  label: string | React.ReactNode;
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: string;
}
