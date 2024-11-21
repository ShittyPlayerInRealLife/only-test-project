import styled from "styled-components";

export const HistoricalDatesBorder = styled.div`
  position: absolute;
  top: 7px;
  left: -80px;
  border-left: 5px solid;
  border-image: linear-gradient(to bottom, #3877ee, #ef5da8) 1;
  height: 120px;
`;

export const VerticalLine = styled.div`
  position: absolute;
  width: 1px;
  height: 100%;
  color: #42567a;
  left: 50%;
  top: 0;
  background-color: #42567a;
  opacity: 10%;
`;

export const DiagonalLine = styled.div`
  position: absolute;
  width: 1px;
  height: 1440px;
  color: #42567a;
  top: 50%;
  left: 50%;
  background-color: #42567a;
  opacity: 10%;
  transform: translate(-50%, -50%) rotate(90deg);

  @media (max-width: 320px) {
    width: 280px;
    height: 1px;
    transform: translate(-50%, -50%) rotate(0deg);
  }
`;

export const HistoricalDatesTitle = styled.span`
  color: #42567a;
  font-size: 56px;
  font-weight: 700;
  line-height: 67px;
  text-align: left;

  @media (max-width: 320px) {
    position: absolute;
    width: 123px;
    height: 48px;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
    top: 59px;
    left: 20px;
  }
`;

export const Circle = styled.div<{ $inputRotate: number }>`
  position: relative;
  width: 530px;
  height: 530px;
  top: 280px;
  left: 460px;
  border-radius: 50%;
  border: 1px solid rgba(66, 86, 122, 0.2);
  transform: rotate(${(props) => props.$inputRotate}deg);
  transition: transform 2s ease;
  z-index: 10000;
`;

export const CircleDot = styled.button<{
  $inputTop: string;
  $inputLeft: string;
  $inputRotate: number;
  $opened: boolean;
}>`
  position: absolute;
  top: ${(props) => props.$inputTop};
  left: ${(props) => props.$inputLeft};
  border-radius: 50%;
  padding: 0;
  width: ${({ $opened }) => ($opened ? "56px" : "6px")};
  height: ${({ $opened }) => ($opened ? "56px" : "6px")};
  transform: translate(-50%, -50%) rotate(${(props) => props.$inputRotate}deg);
  background: ${({ $opened }) => ($opened ? "white" : "rgba(66, 86, 122, 1)")};

  border: ${({ $opened }) =>
    $opened
      ? "1px solid rgba(48, 62, 88, 0.5)"
      : "1px solid rgba(66, 86, 122, 1)"};
  transition: 0.5s;

  &:hover {
    border: 1px solid rgba(48, 62, 88, 0.5);
    width: 56px;
    height: 56px;
    background: white;
    transition: 0.5s;
  }
`;

export const CircleDotTitle = styled.span<{ $opened: boolean }>`
  color: rgba(66, 86, 122, 1);
  width: 11px;
  height: 30px;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  opacity: ${({ $opened }) => ($opened ? "1" : "0")};
  transition: opacity 0.5s;

  &:hover {
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    color: rgba(66, 86, 122, 1);
    opacity: 1;
    transition: opacity 1.5s;
  }
`;

export const CircleTitle = styled.span<{ $inputOpacity: number }>`
  position: absolute;
  top: 302px;
  left: 914px;
  width: 53px;
  height: 30px;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  text-align: left;
  color: rgba(66, 86, 122, 1);
  opacity: ${(props) => props.$inputOpacity};
  transition: opacity 0.5s;

  @media (max-width: 320px) {
    top: 86px;
    left: 0;
    font-size: 16px;
  }
`;

export const CircleDatesWrapper = styled.div`
  position: absolute;
  width: 973px;
  height: 160px;
  top: 455px;
  left: 240px;

  :first-child {
    color: rgba(90, 97, 237, 1);
    margin-right: 50px;
  }

  :nth-child(2) {
    color: rgba(240, 92, 168, 1);
  }

  @media (max-width: 320px) {
    width: 273px;
    height: 73px;
    top: 163px;
    left: 20px;

    :first-child {
      margin-right: 20px;
    }

    :nth-child(2) {
      color: rgba(240, 92, 168, 1);
    }
  }
`;

export const CircleDates = styled.span<{ $inputOpacity: number }>`
  font-size: 200px;
  font-weight: 700;
  line-height: 160px;
  letter-spacing: -0.02em;
  text-align: center;
  opacity: ${(props) => props.$inputOpacity};
  transition: opacity 0.5s;

  @media (max-width: 320px) {
    font-size: 56px;
    font-weight: 700;
    line-height: 72px;
    letter-spacing: -0.02em;
    text-align: left;
  }
`;

export const DatesButtonsTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  color: rgba(66, 86, 122, 1);
  margin-bottom: 14px;

  @media (max-width: 320px) {
    width: 41px;
    height: 14px;
    top: 505px;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    margin-bottom: 8px;
  }
`;

export const DatesButton = styled.button`
  font-size: 14px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid rgba(66, 86, 122);
  background: white;
  opacity: 50%;

  &:hover {
    opacity: 100%;
    transition: 0.5s;
  }

  @media (max-width: 320px) {
    width: 25px;
    height: 25px;
  }
`;

export const DatesCardTitle = styled.div`
  width: 41px;
  margin-bottom: 14px;
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  color: rgba(56, 119, 238, 1);

  @media (max-width: 328px) {
    width: 26px;
    height: 19px;
    font-size: 16px;
    font-weight: 400;
  }
`;

export const DatesCardDescription = styled.div`
  display: inline-block;
  width: 320px;
  height: 90px;
  font-size: 20px;
  font-weight: 400;
  text-align: left;
  color: rgba(66, 86, 122, 1);

  @media (max-width: 328px) {
    width: 120px;
    height: 80px;
    font-size: 12px;
  }
`;

export const DatesCardButton = styled.button<{
  $inputBottom: string;
  $inputRight: string;
}>`
  position: absolute;
  bottom: ${({ $inputBottom }) => $inputBottom};
  right: ${({ $inputRight }) => $inputRight};
  font-size: 14px;
  color: blue;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  border: 1px solid rgba(56, 119, 238, 0.1);
  box-shadow: 0 0 15px 0 rgba(56, 119, 238, 0.1);
`;

export const SliderContainer = styled.div<{ $inputOffset: number }>`
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.$inputOffset}px);
`;

export const DotMobile = styled.div<{ $inputOpacity: string }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  padding: 0;
  background: rgba(66, 86, 122, 1);
  opacity: ${(props) => props.$inputOpacity};
  transition: opacity 0.5s;
`;
