import { useState } from "react";
import { MultiRangeSlider, PriceStyle } from "../../../Atoms";

import "./style.css";

type priceModel = {
  min: number;
  max: number;
};

export function PropertyInfoFormCommon(): JSX.Element {
  return (
    <div className="card card-form-property font-lato">
      <h1 className="tittle">Describe el inmueble que buscas </h1>
      <div className="form-input-container">
        <select
          className="minimal-select"
          name="type-create"
          defaultValue={"0"}
        >
          <option value="0" disabled>
            Tipo de inmueble
          </option>
          <option value="Bodega">Bodega</option>
          <option value="Local">Local</option>
          <option value="Oficina">Oficina</option>
          <option value="Edificio">Edificio</option>
        </select>
        <PriceRangeForm />
        <div className="flex label-color justify-between items-center p-3">
          <label>Antigüedad (en años)</label>
          <input
            className="input-number-small"
            type="number"
            onChange={() => console.log("")}
          />
        </div>
        <textarea
          rows={4}
          placeholder="Describe tu inmueble (Ingresa información adicional)"
        ></textarea>
        <select
          className="label-color minimal-select"
          name="stratum-create"
          defaultValue={"0"}
        >
          <option value="0" disabled>
            Estrato
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        <input
          className="input-form"
          type="number"
          placeholder="Área minima (m2)"
        />
        <input
          className="input-form"
          type="number"
          placeholder="Área Maxima (m2)"
        />
        <select
          className="label-color minimal-select"
          name="status-create"
          defaultValue={"0"}
        >
          <option value="0" disabled>
            Estado del Inmueble
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>
    </div>
  );
}

function PriceRangeForm(): JSX.Element {
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
            <label>Precio mínima</label>
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
