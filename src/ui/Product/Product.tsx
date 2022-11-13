import React, { useState } from "react";
import { CountButton } from "../CountButton";
import { WeightButton } from "../WeightButton";
import './Product.scss';

type Props = {
  image: string,
  product: string,
}

export const Product: React.FC<Props> = ({ image, product }) => {
  const [amount, setAmount] = useState<number>();
  const [weight, setWeight] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [total, setTotal] = useState<number>();

  return (
    <div className="product">
      <div className="product__picture" style={{backgroundImage: `url(${image})`}}></div>

      <div className="product__info">
        {product}
      </div>

      {total
        ? (
          <div className="product__total">
            {`${total}г у кошику`}
          </div>
        )
        : (
          <>
            {amount
              ? (
                <div className="product__info__weight">
                  {`${amount}г`}
                </div>
              )
              : (
                <>
                  {weight
                    ? (
                      <div className="product__amount__buttons">
                        <WeightButton value={50} setAmount={setAmount} />
                        <WeightButton value={100} setAmount={setAmount} />
                        <WeightButton value={500} setAmount={setAmount} />
                        <WeightButton value={1000} setAmount={setAmount} />
                      </div>
                    )
                    : (
                      <button
                        type="button"
                        className="product__amount"
                        onClick={() => setWeight(true)}
                      >
                        Оберіть вагу
                      </button>
                    )
                  }
                </>
              )}
      
            {amount && (
              <>
                <div className="product__counter">
                  <CountButton
                    count={count}
                    setCount={setCount}
                    value={"-"}
                  />
      
                  <div className="product__counter__count">
                    {count}
                  </div>
      
                  <CountButton
                    count={count}
                    setCount={setCount}
                    value={"+"}
                  />
                </div>
      
                <button
                  type="button"
                  className="product__amount"
                  onClick={() => {setTotal(amount * count)}}
                >
                  До кошика
                </button>
              </>
            )}
          </>
        )
      }
    </div>
  );
};
