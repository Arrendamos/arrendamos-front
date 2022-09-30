import { DescriptionItem } from "../../../Interfaces";

import Bathroom from "../../../Assets/Icons/SingleProperty/Description/Toilet.svg";
import Car from "../../../Assets/Icons/SingleProperty/Description/Car.svg";
import Area from "../../../Assets/Icons/SingleProperty/Description/Area.svg";
import Estrato from "../../../Assets/Icons/SingleProperty/Description/Estrato.svg";
import Tiempo from "../../../Assets/Icons/SingleProperty/Description/Tiempo.svg";
import Administracion from "../../../Assets/Icons/SingleProperty/Description/Administracion.svg";

import "./style.css";
import { PriceStyle } from "../../../Atoms";

export function DescriptionItems(props: DescriptionItem): JSX.Element {
  return (
    <div className="description-items">
      <div className="item-description font-lato">
        <img src={Area} alt="" />
        <div className="item-texts mx-6">
          <label className="label-description">Área minima</label>
          <p className="value-description">
            {props.private_area} m<sup>2</sup>
          </p>
        </div>
      </div>
      <div className="item-description font-lato">
        <img src={Area} alt="" />
        <div className="item-texts mx-6">
          <label className="label-description">Área maxima</label>
          <p className="value-description">
            160 m<sup>2</sup>
          </p>
        </div>
      </div>
      {/* <div className="item-description font-lato item-full">
        <img src={Administracion} alt="" />
        <div className="item-texts mx-6">
          <label className="label-description">
            Rango del valor del arrendamiento{" "}
          </label>
          <p className="value-description">
            <PriceStyle number={props.admin_price || 0} />
          </p>
        </div>
      </div> */}
      <div className="item-description font-lato">
        <img src={Estrato} alt="" width={40} />
        <div className="item-texts mx-6">
          <label className="label-description">Estrato</label>
          <p className="value-description">3 - 6</p>
        </div>
      </div>
      <div className="item-description font-lato">
        <img src={Bathroom} alt="" />
        <div className="item-texts mx-6">
          <label className="label-description">Baños</label>
          <p className="value-description">{props.bathroom}</p>
        </div>
      </div>
      <div className="item-description font-lato">
        <img src={Car} alt="" />
        <div className="item-texts mx-6">
          <label className="label-description">Parqueaderos</label>
          <p className="value-description">{props.parking}</p>
        </div>
      </div>

      <div className="item-description font-lato">
        <img src={Tiempo} alt="" />
        <div className="item-texts mx-6">
          <label className="label-description">Antigüedad</label>
          <p className="value-description">{props.antiquity} Años</p>
        </div>
      </div>
    </div>
  );
}
