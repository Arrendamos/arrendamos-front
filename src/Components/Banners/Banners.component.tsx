import { Banner, LittleBanner } from "../../Common";
import BannersInfo from "../../Utils/LandingData/Banners";

import "./style.css";

export function BannersComponent(): JSX.Element {
  return (
    <div className="container-banners my-4 p-4 font-lato">
      <h1 className="tittle-text text-left">Servicios Arrendamos</h1>
      <div className="banner-grid-container">
        <div className="banner-item1">
          <Banner {...BannersInfo[0]} />
        </div>
        <div className="banner-item2">
          <LittleBanner {...BannersInfo[1]} />
        </div>
        <div className="banner-item3">
          <LittleBanner {...BannersInfo[2]} />
        </div>
      </div>
    </div>
  );
}
