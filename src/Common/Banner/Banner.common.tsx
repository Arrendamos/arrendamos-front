import { BannerPropertyPropsI } from "../../Utils/Data/Banners";

import "./style.css";
export function BannerCommon(props: BannerPropertyPropsI): JSX.Element {
  const img = require(`../../Assets/Images/${props.backgroundImg}.png`);

  return (
    <div
      className="banner-container font-lato"
      style={{
        backgroundColor: props.backgroundColor,
        backgroundImage: `url(${img})`,
      }}
    >
      <h2>{props.tittle}</h2>
      <p>{props.paragraph}</p>
      <div className="btn-container text-center">
        <button>{props.btnText}</button>
      </div>
      <p className="p-terms-condictions">Aplican terminos y condiciones*</p>
    </div>
  );
}
