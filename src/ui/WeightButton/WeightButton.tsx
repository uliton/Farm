import React from "react";
import "./WeightButton.scss";

type Props = {
  value: number,
  setAmount: (_: number) => void,
}

export const WeightButton: React.FC<Props> = ({ value, setAmount }) => {
  return (
    <button
      type="button"
      className="product__weight__button"
      onClick={() => setAmount(value)}
    >
      {`${value}г`}
    </button>
  );
};
