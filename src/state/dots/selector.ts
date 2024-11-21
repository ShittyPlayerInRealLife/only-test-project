import { useAppSelector } from "../index";
import { TDotState } from "../../types/types";

export const useDotsSelector = (): TDotState[] => {
  return useAppSelector((state) => state.dots.dot);
};

export const useCurrentDotSelector = (id: number): TDotState => {
  return useAppSelector((state) => state.dots.dot[id]);
};
