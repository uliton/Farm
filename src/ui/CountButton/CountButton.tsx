import React from "react";
import './CountButton.scss';

type Props = {
  count: number,
  setCount: (_: number) => void,
  value: string,
}

export const CountButton: React.FC<Props> = ({ count, setCount, value }) => {

  const handlerClick = () => {
    if (value === "+") {
      // @ts-ignore
      setCount((prev: number) => prev + 1)
    }

    if (value === "-") {
      if (count > 0) {
        // @ts-ignore
        setCount((prev: number) => prev - 1)
      }
    }
  }

  return (
    <button
      type="button"
      className="product__counter__button"
      onClick={handlerClick}
    >
      {value}
    </button>
  );
};
