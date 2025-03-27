export interface CardProps {
  cardDetails: {
    cardGuid: string;
    heading: string;
    items: Array<{
      Blueprint?: number;
      Finalized?: number;
      "QB Count"?: {
        completed: number;
        total: number;
      };
    }>;
  };
  onAction: () => void;
}
