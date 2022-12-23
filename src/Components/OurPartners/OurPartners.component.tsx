import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";

import { PartnersInfo, PartnersDataInterface } from "../../Utils/Data/Partners";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.css";

export function OurPartnersComponent(): JSX.Element {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 900px)",
  });

  const partnersData: PartnersDataInterface = PartnersInfo;

  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  return (
    <div className="container-parthners pt-8 p-4 font-lato">
      <h1 className="title-text">{partnersData.title}</h1>
      <div className="progress-static-container">
        <div className="progress-static-bar"></div>
      </div>
      {isDesktopOrLaptop ? (
        <div className="partner-container flex justify-around items-center py-8 my-8">
          {partnersData.partners.map((partner: any, index: number) => {
            return <ImgPartnerItem key={index} {...partner} />;
          })}
        </div>
      ) : (
        <div className="slider-container py-4">
          <Slider {...sliderSettings}>
            {partnersData.partners.map((partner: any, index: number) => {
              return <ImgPartnerItem key={index} {...partner} />;
            })}
          </Slider>
        </div>
      )}
    </div>
  );
}

function ImgPartnerItem(props: any) {
  const img = require(`../../Assets/Aliados/${props.icon}.png`);

  return (
    <div className="partner-item">
      <img src={img} alt="partner" />
    </div>
  );
}
