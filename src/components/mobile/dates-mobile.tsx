import {
  CircleDates,
  CircleDatesWrapper,
  CircleTitle,
} from "../../styles/styles";
import { FC } from "react";
import { useHistoricalDatesSelector } from "../../state/dates/selector";

type TProps = {
  currentDot: number;
  opacity: number;
};

export const DatesMobile: FC<TProps> = ({ currentDot, opacity }) => {
  const { title, startDate, endDate } = useHistoricalDatesSelector(
    currentDot - 1,
  );
  return (
    <CircleDatesWrapper>
      <CircleDates $inputOpacity={opacity}>{startDate}</CircleDates>
      <CircleDates $inputOpacity={opacity}>{endDate}</CircleDates>
      <CircleTitle $inputOpacity={opacity}>{title}</CircleTitle>
    </CircleDatesWrapper>
  );
};
