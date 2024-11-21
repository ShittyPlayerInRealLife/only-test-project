import React, { FC } from "react";
import { DatesCircle } from "./dates-circle/dates-circle";
import { DatesCircleButtons } from "./dates-circle/dates-circle-buttons";

type TProps = {
  currentDot: number;
  opacity: number;
  rotate: number;
  onClickHandler: (dotId: number, dotRotate: number) => void;
  decreaseDotHandler: () => void;
  increaseDotHandler: () => void;
};

export const DatesSwitcher: FC<TProps> = ({
  currentDot,
  opacity,
  rotate,
  onClickHandler,
  decreaseDotHandler,
  increaseDotHandler,
}) => {
  return (
    <>
      <DatesCircle
        currentDot={currentDot}
        rotate={rotate}
        opacity={opacity}
        onClickHandler={onClickHandler}
      />
      <DatesCircleButtons
        currentDot={currentDot}
        increaseDotHandler={increaseDotHandler}
        decreaseDotHandler={decreaseDotHandler}
      />
    </>
  );
};
