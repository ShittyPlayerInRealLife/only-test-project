import "./App.css";
import { DiagonalLine, VerticalLine } from "./styles/styles";
import { DatesSwitcher } from "./components/dates/dates-switcher";
import { Header } from "./components/header";
import { DatesCardSlider } from "./components/dates/dates-card/dates-card-slider";
import styled from "styled-components";
import { isMobile } from "./utils/web";
import React, { useCallback, useState } from "react";
import { useCurrentDotSelector } from "./state/dots/selector";
import { HeaderMobile } from "./components/mobile/header-mobile";
import { DatesMobile } from "./components/mobile/dates-mobile";
import { DatesSliderMobile } from "./components/mobile/dates-slider-mobile";
import { DatesSwitcherMobile } from "./components/mobile/dates-switcher-mobile";
import { DatesDotsMobile } from "./components/mobile/dates-dots-mobile";

const AppWrapper = styled.div`
  position: relative;
  width: 1440px;
  height: 1080px;
  margin: 0 auto;
  border-left: 1px solid rgba(66, 86, 122, 0.1);
  border-right: 1px solid rgba(66, 86, 122, 0.1);

  @media (max-width: 320px) {
    width: 320px;
    height: 568px;
    border: none;
  }
`;

function App() {
  const mobile = isMobile();
  const [currentDot, setCurrentDot] = useState<number>(2);
  const [currentDotRotate, setCurrentDotRotate] = useState<number>(0);
  const [opacity, setOpacity] = useState<number>(1);
  const { id } = useCurrentDotSelector(currentDot);

  const changeCurrentDotHandler = useCallback(
    (dotId: number, dotRotate: number) => {
      setOpacity(0);
      setTimeout(() => {
        setOpacity(1);
        setCurrentDot(dotId);
      }, 500);
      setCurrentDotRotate(dotRotate);
    },
    [],
  );

  const changeCurrentDotMobileHandler = useCallback((dotId: number) => {
    setOpacity(0);
    setTimeout(() => {
      setOpacity(1);
      setCurrentDot(dotId);
    }, 500);
  }, []);

  const decreaseCurrentDotHandler = useCallback(() => {
    if (id > 1 && id <= 6) {
      setOpacity(0);
      setTimeout(() => {
        setOpacity(1);
        setCurrentDot((dot) => dot - 1);
      }, 500);
      setCurrentDotRotate((prev) => prev + 60);
    }
  }, [id]);

  const increaseCurrentDotHandler = useCallback(() => {
    if (id >= 0 && id < 6) {
      setOpacity(0);
      setTimeout(() => {
        setOpacity(1);
        setCurrentDot((dot) => dot + 1);
      }, 500);
      setCurrentDotRotate((prev) => prev - 60);
    }
  }, [id]);

  return (
    <>
      {mobile ? (
        <AppWrapper>
          <DiagonalLine />
          <HeaderMobile />
          <DatesMobile currentDot={id} opacity={opacity} />
          <DatesSliderMobile currentDot={id} opacity={opacity} />
          <DatesSwitcherMobile
            currentDot={id}
            decreaseDotHandler={decreaseCurrentDotHandler}
            increaseDotHandler={increaseCurrentDotHandler}
          />
          <DatesDotsMobile
            currentDot={id}
            onClickHandler={changeCurrentDotMobileHandler}
          />
        </AppWrapper>
      ) : (
        <AppWrapper>
          <VerticalLine />
          <DiagonalLine />
          <Header />
          <DatesSwitcher
            currentDot={id}
            opacity={opacity}
            rotate={currentDotRotate}
            onClickHandler={changeCurrentDotHandler}
            decreaseDotHandler={decreaseCurrentDotHandler}
            increaseDotHandler={increaseCurrentDotHandler}
          />
          <DatesCardSlider currentDot={id} opacity={opacity} />
        </AppWrapper>
      )}
    </>
  );
}

export default App;
