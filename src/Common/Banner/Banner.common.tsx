import { BannerPropertyPropsI } from "../../Interfaces";

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
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScWxOwEQncffaoRg-NME_qVHMV94hxxbTZWhdeLbfI_Jkq3fg/viewform"
          target="blank"
        >
          <button>{props.btnText}</button>
        </a>
      </div>
    </div>
  );
}
