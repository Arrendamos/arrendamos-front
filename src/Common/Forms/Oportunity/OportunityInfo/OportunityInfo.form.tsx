import { useState } from "react";
import { PriceRangeForm, SwitchForm } from "../../Atoms";

import "./style.css";

export function OportunityInfoForm(): JSX.Element {
  const [switchState, setSwitchState] = useState([
    {
      title: "Baños",
      state: false,
    },
    {
      title: "Ascensores",
      state: false,
    },
    {
      title: "Parqueaderos",
      state: false,
    },
    {
      title: "Bodega",
      state: false,
    },
    {
      title: "Segundo Piso",
      state: false,
    },
  ]);

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
        <div className="switch-container">
          {switchState.map((item, index) => (
            <SwitchForm
              key={index}
              item={item}
              state={switchState}
              setState={setSwitchState}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
