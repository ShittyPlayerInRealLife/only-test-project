import { DatesCardDescription, DatesCardTitle } from "../../../styles/styles";
import  { FC } from "react";

type TProps = {
  date?: number;
  description?: string;
};

export const DatesCard: FC<TProps> = ({ date, description }) => {
  return (
    <>
      <DatesCardTitle>{date}</DatesCardTitle>
      <DatesCardDescription>{description}</DatesCardDescription>
    </>
  );
};
