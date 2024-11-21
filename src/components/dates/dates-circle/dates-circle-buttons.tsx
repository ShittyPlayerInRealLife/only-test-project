import { DatesButton, DatesButtonsTitle } from "../../../styles/styles";
import { ArrowIconLeft } from "../../common/arrow-icon-left";
import { ArrowIconRight } from "../../common/arrow-icon-right";
import React, { FC } from "react";
import styled from "styled-components";

const DatesButtonsWrapper = styled.div`
  position: absolute;
  width: 120px;
  height: 88px;
  top: 770px;
  left: 78px;

  :nth-child(2) {
    margin-right: 20px;
  }
`;

type TProps = {
  currentDot: number;
  increaseDotHandler: () => void;
  decreaseDotHandler: () => void;
};

export const DatesCircleButtons: FC<TProps> = ({
  currentDot,
  increaseDotHandler,
  decreaseDotHandler,
}) => {
  return (
    <DatesButtonsWrapper>
      <DatesButtonsTitle>{"0" + currentDot}/06</DatesButtonsTitle>
      <DatesButton onClick={() => decreaseDotHandler()}>
        <ArrowIconLeft />
      </DatesButton>
      <DatesButton onClick={() => increaseDotHandler()}>
        <ArrowIconRight />
      </DatesButton>
    </DatesButtonsWrapper>
  );
};
