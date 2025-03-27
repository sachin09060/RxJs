export interface TemplateItem {
  title: string;
  subItems?: TemplateItem[] | string[];
}

export interface TemplateProps {
  cardId: string;
  templateHeading?: string;
  templateContent?: TemplateItem[];
  isSelected: boolean;
  onSelect: (cardId: string) => void;
}
