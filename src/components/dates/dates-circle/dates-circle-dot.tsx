import { CircleDot, CircleDotTitle } from "../../../styles/styles";
import React, { memo } from "react";

type TProps = {
  id: number;
  top: string;
  left: string;
  dotRotate: number;
  currentDot: number;
  spanRotate: number;
  onClickHandler: (dotId: number, dotRotate: number) => void;
};

export const DatesCircleDot = memo(
  ({
    id,
    top,
    left,
    dotRotate,
    currentDot,
    spanRotate,
    onClickHandler,
  }: TProps) => {
    return (
      <>
        {currentDot === id ? (
          <CircleDot
            $inputTop={top}
            $inputLeft={left}
            $inputRotate={-spanRotate}
            $opened={true}
            onClick={() => onClickHandler(id - 1, dotRotate)}
          >
            <CircleDotTitle $opened={true}>{id}</CircleDotTitle>
          </CircleDot>
        ) : (
          <CircleDot
            $inputTop={top}
            $inputLeft={left}
            $inputRotate={-spanRotate}
            $opened={false}
            onClick={() => onClickHandler(id - 1, dotRotate)}
          >
            <CircleDotTitle $opened={false}>{id}</CircleDotTitle>
          </CircleDot>
        )}
      </>
    );
  },
);
