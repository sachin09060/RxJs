export interface CardDetails {
  cardGuid: string;
  heading: string;
  status: string;
  progress: {
    completed: number;
    total: number;
  };
  stages: {
    label: string;
    count: number;
  }[];
}

export interface CardProps {
  cardDetails: CardDetails;
  onAction: (cardGuid: string) => void;
  showMatrixIcon?: boolean;
  popupContent?: React.ReactNode;
}
