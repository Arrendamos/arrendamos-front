import { HeaderInfo, HeaderDataInterface } from "../../Utils/Data/Header";
import HeaderImage from "../../Assets/Images/HomeHeader.png";
import Edificio from "../../Assets/Icons/Common/Building.svg";

import "./style.css";

export function HeaderComponent(): JSX.Element {
  const headerInfo: HeaderDataInterface = HeaderInfo;

  return (
    <div className="container-header font-lato">
      <img className="img-header" src={HeaderImage} alt="" />
      <div className="container-header-info">
        <h1 className="text-primaryColor font-bold p-4">
          {headerInfo.question}
        </h1>
        <p dangerouslySetInnerHTML={{ __html: headerInfo.paragraph }}></p>
        <div className="container-header-info-boxes flex justify-evenly">
          <div id="box1" className="header-box">
            <h2>{headerInfo.box[0].tittle}</h2>
            <p>{headerInfo.box[0].text}</p>
          </div>
          <div id="box2" className="header-box">
            <h2>{headerInfo.box[1].tittle}</h2>
            <p>{headerInfo.box[1].text}</p>
          </div>
        </div>
      </div>
      {/* <div className="w-full text-center my-4">
        <a className="btn-ref-header" href="/create-oportunity">
          <img src={Edificio} alt="" style={{ marginRight: "0.8rem" }} />
          Describe el inmueble que buscas
        </a>
      </div> */}
    </div>
  );
}
