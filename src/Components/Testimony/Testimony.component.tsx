import { AvatarCircle } from "../../Atoms";

import {
  SimpleTitleParagraph,
  TestimonyData,
  testimonyItem,
} from "../../Interfaces";

import { useMediaQuery } from "react-responsive";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { TestimonyInfo } from "../../Utils/Data/Testimonies";
import { AiFillStar } from "react-icons/ai";

import TestimonyImg from "../../Assets/Images/Testimony.jpg";

import "./style.css";

export function TestimonyComponent(): JSX.Element {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 750px)",
  });

  const testimonysData: TestimonyData = TestimonyInfo;
  const infoPage: SimpleTitleParagraph = testimonysData.data;

  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="testimonies-container-text my-4 p-4 font-lato">
      <h1 className="tittle-text text-center">{infoPage.tittle}</h1>
      <h3 className="simple-text text-center w-2/6 mx-auto">
        {infoPage.subTittle}
      </h3>
      <div className="slider-container py-4">
        {/* <Slider {...sliderSettings}> */}
        {testimonysData.testimonies.map(
          (testimony: testimonyItem, index: number) => {
            return <TestimonyCard key={index} {...testimony} />;
          }
        )}
        {/* </Slider> */}
      </div>
    </div>
  );
}

function TestimonyCard(props: testimonyItem): JSX.Element {
  const { name, testimony, rol, stars } = props;
  return (
    <div className="testimony-card font-lato text-center text-pursianBlue">
      <img src={TestimonyImg} alt="" className="img-testimony" />
      <div className="relative bottom-8 h-16">
        <AvatarCircle />
      </div>
      <h1 className="testimony-name">{name}</h1>
      <p className="testimony-rol">{rol}</p>
      <p className="testimony-text">{testimony}</p>
      <hr />
      <div className="flex justify-center mt-4 mb-9">{Stars(stars)}</div>
    </div>
  );
}

function Stars(stars: number): JSX.Element {
  let starsArray: JSX.Element[] = [];

  for (let i = 0; i < 5; i++) {
    if (i < stars) {
      starsArray.push(<AiFillStar key={i} className="star-selected" />);
    } else starsArray.push(<AiFillStar key={i} className="star" />);
  }

  return <>{starsArray}</>;
}
