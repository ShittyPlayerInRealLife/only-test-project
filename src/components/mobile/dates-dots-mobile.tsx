import { useDotsSelector } from "../../state/dots/selector";
import { DatesDotMobile } from "./dates-dot-mobile";
import { FC } from "react";
import styled from "styled-components";

const DotsMobileWrapper = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(6, 6px);
  gap: 10px;
  width: 86px;
  height: 6px;
  top: 536px;
  left: 117px;
  margin-right: 10px;
`;

type TProps = {
  currentDot: number;
  onClickHandler: (dotId: number) => void;
};

export const DatesDotsMobile: FC<TProps> = ({ currentDot, onClickHandler }) => {
  const dots = useDotsSelector();
  return (
    <DotsMobileWrapper>
      {dots.map((d) => {
        return (
          <DatesDotMobile
            key={d.id}
            id={d.id}
            currentDot={currentDot}
            onClickHandler={onClickHandler}
          />
        );
      })}
    </DotsMobileWrapper>
  );
};
