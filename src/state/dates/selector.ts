import { useAppSelector } from "../index";
import { TDatesState } from "../../types/types";

export const useHistoricalDatesSelector = (id: number): TDatesState => {
  return useAppSelector((state) => {
    return state.dates.historicalDates[id];
  });
};
