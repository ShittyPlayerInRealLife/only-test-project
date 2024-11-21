import React, { FC } from "react";

export const ArrowIconLeftMobile: FC = () => {
  const style = {
    transform: `rotate(${0}deg)`,
    margin: `0 2px 2px 0`,
  };

  return (
    <svg
      width="6"
      height="8"
      viewBox="0 0 6 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M4.7489 1.04178L1.6239 4.16678L4.7489 7.29178"
        stroke="#42567A"
        strokeWidth="2"
      />
    </svg>
  );
};
