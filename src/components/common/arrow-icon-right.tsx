import React, { FC } from "react";

export const ArrowIconRight: FC = () => {
  const style = {
    transform: `rotate(${180}deg)`,
    margin: `2px 0 0 2px`,
  };

  return (
    <svg
      width="10"
      height="14"
      viewBox="0 0 10 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M8.49988 0.750001L2.24988 7L8.49988 13.25"
        stroke="#42567A"
        strokeWidth="2"
      />
    </svg>
  );
};