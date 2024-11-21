import {
  Circle,
  CircleDates,
  CircleDatesWrapper,
  CircleTitle,
} from "../../../styles/styles";
import React, { FC } from "react";
import { DatesCircleDot } from "./dates-circle-dot";
import { useDotsSelector } from "../../../state/dots/selector";
import { useHistoricalDatesSelector } from "../../../state/dates/selector";

type TProps = {
  currentDot: number;
  rotate: number;
  opacity: number;
  onClickHandler: (dotId: number, dotRotate: number) => void;
};

export const DatesCircle: FC<TProps> = ({
  currentDot,
  rotate,
  opacity,
  onClickHandler,
}) => {
  const { title, startDate, endDate } = useHistoricalDatesSelector(
    currentDot - 1,
  );
  const dots = useDotsSelector();

  return (
    <>
      <Circle $inputRotate={rotate}>
        {dots.map((dot) => {
          return (
            <DatesCircleDot
              key={dot.id}
              id={dot.id}
              top={dot.top}
              left={dot.left}
              dotRotate={dot.rotate}
              currentDot={currentDot}
              spanRotate={rotate}
              onClickHandler={onClickHandler}
            />
          );
        })}
      </Circle>
      <CircleTitle $inputOpacity={opacity}>{title}</CircleTitle>
      <CircleDatesWrapper>
        <CircleDates $inputOpacity={opacity}>{startDate}</CircleDates>
        <CircleDates $inputOpacity={opacity}>{endDate}</CircleDates>
      </CircleDatesWrapper>
    </>
  );
};
