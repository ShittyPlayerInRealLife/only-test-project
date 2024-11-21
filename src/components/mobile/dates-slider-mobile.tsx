import React, { FC } from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { useHistoricalDatesSelector } from "../../state/dates/selector";
import { DatesCard } from "../dates/dates-card/dates-card";

const DatesCardMobileWrapper = styled.div<{ $inputOpacity: number }>`
  position: absolute;
  width: 320px;
  height: 114px;
  top: 313px;
  left: 20px;
  opacity: ${(props) => props.$inputOpacity};
  transition: opacity 0.5s;
`;

type TProps = {
  currentDot: number;
  opacity: number;
};

export const DatesSliderMobile: FC<TProps> = ({ currentDot, opacity }) => {
  const { cards } = useHistoricalDatesSelector(currentDot - 1);

  return (
    <>
      <DatesCardMobileWrapper $inputOpacity={opacity}>
        <Swiper
          scrollbar={{
            draggable: true,
          }}
          slidesPerView={2}
          gap={0}
        >
          {cards?.map((c) => (
            <SwiperSlide key={c.id}>
              <DatesCard date={c.date} description={c.description} />
            </SwiperSlide>
          ))}
        </Swiper>
      </DatesCardMobileWrapper>
    </>
  );
};
