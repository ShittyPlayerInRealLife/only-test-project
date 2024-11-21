import { FC, memo } from "react";
import { DotMobile } from "../../styles/styles";

type TProps = {
  currentDot: number;
  id: number;
  onClickHandler: (dotId: number) => void;
};

export const DatesDotMobile: FC<TProps> = memo(
  ({ currentDot, id, onClickHandler }) => {
    return (
      <>
        {currentDot === id ? (
          <DotMobile
            $inputOpacity={"1"}
            onClick={() => onClickHandler(id - 1)}
          />
        ) : (
          <DotMobile
            $inputOpacity={"0.6"}
            onClick={() => onClickHandler(id - 1)}
          />
        )}
      </>
    );
  },
);
