import { useState } from "react";
import { MultiRangeSlider, PriceStyle } from "../../../../Atoms";

import "./style.css";

type priceModel = {
  min: number;
  max: number;
};

export function PriceRangeForm(): JSX.Element {
  const initialPrice: priceModel = {
    min: 0,
    max: 5000000,
  };
  const [price, setPrice] = useState(initialPrice);

  const _setValues = ({ max, min }: any) => {
    setPrice({
      min,
      max,
    });
  };
  return (
    <div className="price-range-container">
      <h3 className="ml-2 mb-4">Rango del valor del arrendamiento </h3>
      <div className="price-range">
        <label>Cualquier precio</label>
        <MultiRangeSlider
          min={initialPrice.min}
          max={initialPrice.max}
          onChange={_setValues}
        />
        <div className="flex justify-around">
          <div className="price-item">
            <label>Precio mínimo</label>
            <p>
              <PriceStyle number={price.min || 0} />
            </p>
          </div>
          <span className="separate"></span>
          <div className="price-item">
            <label>Precio máximo</label>
            <p>
              <PriceStyle number={price.max || 0} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
