export interface CardDetails {
  cardGuid: string;
  heading: string;
  completed?: number;
  total?: number;
  progressLabel?: string;
}

export type PrimaryCardDetails = CardDetails & {
  stages?: { stageLabel: string; stageCount: number }[];
};

export type SecondaryCardDetails = CardDetails & {
  Blueprint?: number;
  Finalized?: number;
};

export interface PrimaryCardProps {
  info: PrimaryCardDetails;
  onClick: (cardGuid: string) => void;
  showMatrixIcon?: boolean;
  matrixIconPopupContent?: React.ReactNode;
  showStagesInfo?: React.ReactNode;
  variant: "primary";
}

export interface SecondaryCardProps {
  info: SecondaryCardDetails;
  onClick: (cardGuid: string) => void;
  variant: "secondary";
}

export type CardProps = PrimaryCardProps | SecondaryCardProps;
