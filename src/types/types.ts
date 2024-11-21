export type TDatesState = {
  id: number;
  startDate: number;
  endDate: number;
  title: string;
  cards: TCard[];
};

export type TCard = {
  id: number;
  date: number;
  description: string;
};

export type TDotState = {
  top: string;
  left: string;
  id: number;
  rotate: number;
};
