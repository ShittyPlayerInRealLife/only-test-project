import React, { FC } from "react";
import styled from "styled-components";
import { DatesButton, DatesButtonsTitle } from "../../styles/styles";
import { ArrowIconLeftMobile } from "../common/arrow-icon-left-mobile";
import { ArrowIconRightMobile } from "../common/arrow-icon-right-mobile";

const DatesButtonsMobileWrapper = styled.div`
  position: absolute;
  width: 58px;
  height: 50px;
  top: 505px;
  left: 20px;

  :nth-child(2) {
    margin-right: 6px;
  }
`;

type TProps = {
  currentDot: number;
  increaseDotHandler: () => void;
  decreaseDotHandler: () => void;
};

export const DatesSwitcherMobile: FC<TProps> = ({
  currentDot,
  increaseDotHandler,
  decreaseDotHandler,
}) => {
  return (
    <DatesButtonsMobileWrapper>
      <DatesButtonsTitle>{"0" + currentDot}/06</DatesButtonsTitle>
      <DatesButton onClick={() => decreaseDotHandler()}>
        <ArrowIconLeftMobile />
      </DatesButton>
      <DatesButton onClick={() => increaseDotHandler()}>
        <ArrowIconRightMobile />
      </DatesButton>
    </DatesButtonsMobileWrapper>
  );
};
