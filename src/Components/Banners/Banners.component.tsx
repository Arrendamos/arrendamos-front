import { Banner, LittleBanner } from "../../Common";
import BannersInfo from "../../Utils/Data/Banners";

import "./style.css";

export function BannersComponent(): JSX.Element {
  return (
    <div className="container-banners p-4 font-lato">
      <h1 className="title-text text-left">Servicios Arrendamos</h1>
      <div className="progress-static-container mx-auto my-4">
        <div className="progress-static-bar"></div>
      </div>
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
