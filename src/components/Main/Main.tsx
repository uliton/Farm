import React from "react";
import { Product } from "../../ui/Product";
import { products } from "../../framework/images";

export const Main: React.FC = () => (
  <div className="main">
    <div className="container">
      {/* <p className="main__text">
        Unfortunately the page is not ready yet.
      </p> */}

      {/* <p className="main__text">
        Other info coming soon.
      </p> */}

      <ul className="main__list">
        {products.map((product, i) => (
          <li key={i} className="main__item">
            <Product
              image={product.image}
              product={product.name}
            />
          </li>
        ))}
      </ul>
    </div>
  </div>
);
