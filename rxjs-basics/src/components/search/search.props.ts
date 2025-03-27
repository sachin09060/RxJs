export interface SearchProps {
  dropDownItems?: string[];
  handleFilterSearch?: () => void;
  filterValue: string;
  onFilterChange: (value: string) => void;
  onFilterClear?: () => void;
  placeholderText?: string;
}
