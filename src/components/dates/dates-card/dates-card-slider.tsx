import { DatesCard } from "./dates-card";
import React, { FC, useState } from "react";
import { DatesArrowIconRight } from "../../common/dates-arrow-icon-right";
import styled from "styled-components";
import { useHistoricalDatesSelector } from "../../../state/dates/selector";
import { DatesCardButton, SliderContainer } from "../../../styles/styles";
import { DatesArrowIconLeft } from "../../common/dates-arrow-icon-left";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { TCard } from "../../../types/types";

const DatesCardWrapper = styled.div<{ $inputOpacity: number }>`
  position: absolute;
  left: 120px;
  top: 900px;
  height: 135px;
  width: 1200px;
  opacity: ${(props) => props.$inputOpacity};
  transition: opacity 0.5s;
`;

type TProps = {
  currentDot: number;
  opacity: number;
};

export const DatesCardSlider: FC<TProps> = ({ currentDot, opacity }) => {
  const { cards } = useHistoricalDatesSelector(currentDot - 1);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const moveNext = () => {
    if (currentIndex < cards.length) {
      setCurrentIndex((prevIndex) => prevIndex + 2);
    }
  };

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 2);
    }
  };

  return (
    <>
      <DatesCardButton
        disabled={currentIndex === 0}
        $inputBottom={"100px"}
        $inputRight={"1350px"}
        onClick={movePrev}
      >
        <DatesArrowIconLeft />
      </DatesCardButton>
      <DatesCardWrapper $inputOpacity={opacity}>
        <Swiper
          scrollbar={{
            draggable: true,
          }}
          slidesPerView={3}
        >
          {cards?.map((c: TCard) => (
            <SwiperSlide key={c.id}>
              <SliderContainer $inputOffset={-currentIndex * 300}>
                <DatesCard date={c.date} description={c.description} />
              </SliderContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </DatesCardWrapper>
      <DatesCardButton
        disabled={currentIndex === cards.length - 2}
        $inputBottom={"100px"}
        $inputRight={"50px"}
        onClick={moveNext}
      >
        <DatesArrowIconRight />
      </DatesCardButton>
    </>
  );
};
