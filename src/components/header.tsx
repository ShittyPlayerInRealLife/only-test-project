import { HistoricalDatesBorder, HistoricalDatesTitle } from "../styles/styles";
import React, { FC, memo } from "react";
import styled from "styled-components";

const HistoricalDatesWrapper = styled.div`
  position: absolute;
  top: 178px;
  left: 78px;
  width: 353px;
  height: 134px;
`;

export const Header: FC = memo(() => {
  return (
    <HistoricalDatesWrapper>
      <HistoricalDatesBorder />
      <HistoricalDatesTitle>Исторические даты</HistoricalDatesTitle>
    </HistoricalDatesWrapper>
  );
});
