import { PartnersData, SimpleTitleParagraph } from "../../Interfaces";
import { PartnersInfo } from "../../Utils/Data/Partners";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.css";
import { useMediaQuery } from "react-responsive";

export function OurPartnersComponent(): JSX.Element {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 900px)",
  });

  const partnersData: PartnersData = PartnersInfo;
  const infoPage: SimpleTitleParagraph = partnersData.data;

  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="parthners-container my-4 p-4 font-lato">
      <h1 className="tittle-text text-center">{infoPage.tittle}</h1>
      <h3 className="simple-text text-center w-2/6 mx-auto">
        {infoPage.subTittle}
      </h3>
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
  const img = require(`../../Assets/Aliados/${props.icon}.svg`);

  return (
    <div className="partner-item">
      <img src={img} alt="partner" />
    </div>
  );
}
