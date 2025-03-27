import { SelectHTMLAttributes } from "react";

export interface OptionProps {
  id: number | string;
  name: string | number;
}

export default interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  options: OptionProps[];
  onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  width?: string;
  defaultvalue?: string;
  error?: string;
  onSelectKeyValueToReturn?: string;
  defaultOption?: string;
}
