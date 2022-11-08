import { PriceStyle } from "../../../Atoms";

import "./style.css";

type DetailsPropertyProps = {
  price?: number;
  admin_price?: number;
  address?: string;
  neighborhood?: string;
  type?: string;
  antiquity?: string;
  floor?: number;
  area?: number;
  parking?: number;
  bathrooms?: number;
  stratum?: number;
  elevators?: number;
};

export function DetailsProperty(props: DetailsPropertyProps): JSX.Element {
  return (
    <>
      <h2 className="subtittle-description">Detalles del inmueble</h2>
      <div className="details-property px-4">
        <div className="detail-item">
          <label className="label-detail">Precio de venta</label>
          <p className="value-detail">
            <PriceStyle number={props.price} /> COP
          </p>
        </div>
        <div className="detail-item">
          <label className="label-detail">Administración</label>
          <p className="value-detail">
            <PriceStyle number={props.admin_price} /> COP
          </p>
        </div>
        <div className="detail-item">
          <label className="label-detail">Dirección</label>
          <p className="value-detail">{props.address}</p>
        </div>
        <div className="detail-item">
          <label className="label-detail">Barrio</label>
          <p className="value-detail">{props.neighborhood}</p>
        </div>
        <div className="detail-item">
          <label className="label-detail">Tipo de inmueble</label>
          <p className="value-detail">{props.type}</p>
        </div>
        <div className="detail-item">
          <label className="label-detail">Antigüedad</label>
          <p className="value-detail">{props.antiquity} Años</p>
        </div>
        <div className="detail-item">
          <label className="label-detail">Piso</label>
          <p className="value-detail">{props.floor}</p>
        </div>
        <div className="detail-item">
          <label className="label-detail">Área construida</label>
          <p className="value-detail">
            {props.area} m<sup>2</sup>
          </p>
        </div>
        <div className="detail-item">
          <label className="label-detail">Parqueaderos</label>
          <p className="value-detail">{props.parking}</p>
        </div>
        <div className="detail-item">
          <label className="label-detail">Baños</label>
          <p className="value-detail">{props.bathrooms}</p>
        </div>
        <div className="detail-item">
          <label className="label-detail">Estrato</label>
          <p className="value-detail">{props.stratum}</p>
        </div>
        <div className="detail-item">
          <label className="label-detail">Ascensores</label>
          <p className="value-detail">{props.elevators}</p>
        </div>
      </div>
    </>
  );
}
