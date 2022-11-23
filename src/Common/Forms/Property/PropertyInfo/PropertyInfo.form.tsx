import { useEffect, useState } from "react";

import "./style.css";

type PropertyInfoInterface = {
  type: string;
  price: number;
  admin_price: number;
  antiquity: string;
  description: string;
  stratum: number;
  area: number;
  private_area: number;
  status: string;
  bathrooms: number;
  parking: number;
  elevators: number;
  floors: number;
};

type PropertyInfoProps = {
  propertyInfo: PropertyInfoInterface;
  setPropertyInfo: React.Dispatch<React.SetStateAction<PropertyInfoInterface>>;
  alert: boolean;
};

export function PropertyInfoForm(props: PropertyInfoProps): JSX.Element {
  const { propertyInfo, setPropertyInfo, alert } = props;

  const [priceCurrency, setPriceCurrency] = useState({
    price: "",
    admin_price: "",
  });

  const [focusInput, setFocusInput] = useState({
    bathrooms: false,
    parking: false,
    elevators: false,
  });

  useEffect(() => {
    if (propertyInfo.price === 0 && propertyInfo.admin_price === 0) {
      setPriceCurrency({ price: "", admin_price: "" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propertyInfo.price, propertyInfo.admin_price]);

  const _convertToCurrency = (value: any, key: string) => {
    const number = value.replace(/\D/g, "");
    if (number === "") {
      setPriceCurrency({ ...priceCurrency, [key]: "" });
      return;
    }
    const formatNumber = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }).format(number);

    setPriceCurrency({ ...priceCurrency, [key]: formatNumber });

    setPropertyInfo((propertyInfo) => ({ ...propertyInfo, [key]: number }));
  };

  const _onChangeSetPropertyInfo = (e: any) => {
    const { name, value } = e.target;
    setPropertyInfo((propertyInfo) => ({ ...propertyInfo, [name]: value }));
  };

  return (
    <div className="card card-form-property font-lato">
      <h1 className="tittle">Información del inmueble</h1>
      <div className="form-input-container">
        <select
          className={`minimal-select ${
            alert && propertyInfo.type === "0" ? "alert-input" : ""
          }`}
          name="type"
          value={propertyInfo.type}
          onChange={_onChangeSetPropertyInfo}
        >
          <option value="0" disabled>
            Tipo de inmueble
          </option>
          <option value="Bodega">Bodega</option>
          <option value="Local">Local</option>
          <option value="Oficina">Oficina</option>
          <option value="Edificio">Edificio</option>
        </select>
        <input
          className="input-form"
          type="text"
          value={priceCurrency.price}
          inputMode="numeric"
          onChange={(e) => _convertToCurrency(e.target.value, "price")}
          placeholder="Valor del arriendo"
          required
        />
        <input
          className="input-form"
          type="text"
          value={priceCurrency.admin_price}
          inputMode="numeric"
          onChange={(e) => _convertToCurrency(e.target.value, "admin_price")}
          placeholder="Valor de la administración"
          required
        />
        <select
          className={`minimal-select ${
            alert && propertyInfo.antiquity === "0" ? "alert-input" : ""
          }`}
          name="antiquity"
          value={propertyInfo.antiquity}
          onChange={_onChangeSetPropertyInfo}
          placeholder=" Antigüedad (en años)"
        >
          <option value="0" disabled>
            Antigüedad (en años)
          </option>
          <option value="Menos de 1 año">Menos de 1 año</option>
          <option value="1 a 8 años">1 a 8 años</option>
          <option value="9 a 15 años">9 a 15 años</option>
          <option value="16 a 30 años">16 a 30 años</option>
          <option value="Más de 30 años">Más de 30 años</option>
        </select>
        <textarea
          rows={4}
          name="description"
          value={propertyInfo.description}
          onChange={_onChangeSetPropertyInfo}
          placeholder="Describe tu inmueble (Ingresa información adicional)"
          required
        ></textarea>
        <SelectItemCount
          name="stratum"
          value={propertyInfo.stratum}
          defaultLabel={"Estrato"}
          onChange={_onChangeSetPropertyInfo}
        />
        <input
          className="input-form"
          name="area"
          value={propertyInfo.area === 0 ? "" : propertyInfo.area}
          onChange={_onChangeSetPropertyInfo}
          type="number"
          placeholder="Área (m2)"
          required
        />
        <input
          className="input-form"
          name="private_area"
          value={
            propertyInfo.private_area === 0 ? "" : propertyInfo.private_area
          }
          onChange={_onChangeSetPropertyInfo}
          type="number"
          placeholder="Área privada (m2)"
          required
        />
        <select
          className={`label-color minimal-select ${
            alert && propertyInfo.status === "0" ? "alert-input" : ""
          }`}
          name="status"
          value={propertyInfo.status}
          onChange={_onChangeSetPropertyInfo}
        >
          <option value="0" disabled>
            Estado del Inmueble
          </option>
          <option value="Excelente estado">Excelente estado</option>
          <option value="Bueno">Bueno</option>
          <option value="Remodelar">Remodelar</option>
        </select>
        <div className="property-info-items-container flex">
          <label htmlFor="bathroom">Número de baños</label>
          <input
            id="bathroom"
            className="input-form"
            name="bathrooms"
            onFocus={() => setFocusInput({ ...focusInput, bathrooms: true })}
            onBlur={() => setFocusInput({ ...focusInput, bathrooms: false })}
            onChange={(e) => {
              setFocusInput({ ...focusInput, bathrooms: false });
              _onChangeSetPropertyInfo(e);
            }}
            value={!focusInput.bathrooms ? propertyInfo.bathrooms : ""}
            type="number"
            required
          />
        </div>
        <div className="property-info-items-container flex">
          <label htmlFor="parking">Número de parqueaderos</label>
          <input
            id="parking"
            className="input-form"
            name="parking"
            onFocus={() => setFocusInput({ ...focusInput, parking: true })}
            onBlur={() => setFocusInput({ ...focusInput, parking: false })}
            onChange={(e) => {
              setFocusInput({ ...focusInput, parking: false });
              _onChangeSetPropertyInfo(e);
            }}
            value={!focusInput.parking ? propertyInfo.parking : ""}
            type="number"
            required
          />
        </div>
        <div className="property-info-items-container flex">
          <label htmlFor="elevators">Número de ascensores</label>
          <input
            id="elevators"
            className="input-form"
            name="elevators"
            onFocus={() => setFocusInput({ ...focusInput, elevators: true })}
            onBlur={() => setFocusInput({ ...focusInput, elevators: false })}
            onChange={(e) => {
              setFocusInput({ ...focusInput, elevators: false });
              _onChangeSetPropertyInfo(e);
            }}
            value={!focusInput.elevators ? propertyInfo.elevators : ""}
            type="number"
            required
          />
        </div>
        <div className="property-info-items-container flex">
          <label htmlFor="floor">Número de piso</label>
          <SelectItemCount
            name={"floors"}
            value={propertyInfo.floors}
            onChange={_onChangeSetPropertyInfo}
          />
        </div>
      </div>
    </div>
  );
}

type SelectItemCountProps = {
  name: string;
  value: number;
  defaultLabel?: string;
  onChange?: (e: any) => void;
};

function SelectItemCount(props: SelectItemCountProps): JSX.Element {
  const { name, value, defaultLabel = "0", onChange } = props;
  return (
    <select
      className="label-color minimal-select"
      name={name}
      value={value}
      onChange={onChange}
    >
      <option value={0} disabled>
        {defaultLabel}
      </option>
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
      <option value={6}>6</option>
    </select>
  );
}
