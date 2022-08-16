import { SimpleData } from "../../Interfaces";
import {
  HeaderFilterProperty,
  HeaderMobileFilterProperty,
} from "../../Common/";
import { HeaderInfo } from "../../Utils/Data/Header";

import Logo from "../../Assets/Images/local.jpg";
import LogoBack from "../../Assets/Images/logoBack.svg";

import "./style.css";
import { useMediaQuery } from "react-responsive";

export function HeaderComponent(): JSX.Element {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 900px)",
  });

  let headerInfo: SimpleData = HeaderInfo;

  return (
    <div className="container-header grid grid-cols-2">
      <div className="container-header-text flex self-center flex-col">
        <h1 className="text-pursianBlue font-lato font-bold w-4/5 block mx-auto">
          {headerInfo.text}
        </h1>
      </div>
      <div className="img-header-container py-4">
        <img id="img-header" src={Logo} alt="Header img" />
        <img id="logo-header-back" src={LogoBack} alt="Header img" />
      </div>
      {isDesktopOrLaptop ? (
        <div className="relative top-0 left-0">
          <div className="filter-container">
            <HeaderFilterProperty />
          </div>
        </div>
      ) : (
        <div className="relative top-0 left-0">
          <div className="filter-container">
            <HeaderMobileFilterProperty />
          </div>
        </div>
      )}
    </div>
  );
}
