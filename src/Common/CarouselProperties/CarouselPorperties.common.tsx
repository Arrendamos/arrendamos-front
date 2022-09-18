import React, { useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CardProperty } from "../../Common/";
import { CardPropertyPropsI } from "../../Interfaces";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import HomeIcon from "../../Assets/Icons/Common/Home.svg";

import "./style.css";

import imgTest from "../../Assets/Images/test/TestOportunity.png";

type CarouselPorpertiesCommonProps = {
  tittle: string;
};

export function CarouselPorpertiesCommon(
  props: CarouselPorpertiesCommonProps
): JSX.Element {
  const { tittle } = props;

  // ----- test enviroment -----
  const cardExample: CardPropertyPropsI = {
    id: 1,
    image: imgTest,
    price: 320000000,
    area: 200,
    bathroom: 2,
    parking: 2,
    address: "Calle 63 # 55-23",
    location: "Los Rosales",
    city: "Bogotá",
  };
  let cards: CardPropertyPropsI[] = [];
  for (let i = 0; i < 12; i++) {
    cards.push(cardExample);
  }
  // ----- test enviroment -----

  const [isProperty, setIsProperty] = useState(false);

  const customeSlider = React.createRef<any>();

  const onAfterSlideChange = (currentSlide: number) => {
    setSlide(currentSlide);
  };

  const [sliderSettings, setSliderSettings] = useState({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    afterChange: onAfterSlideChange,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  });

  const [slide, setSlide] = useState(0);

  const _next = () => {
    if (window.matchMedia("(min-width: 1400px)").matches) {
      if (slide !== 8) customeSlider.current.slickNext();
    } else {
      if (slide !== 9) customeSlider.current.slickNext();
    }
  };

  const _prev = () => {
    if (slide !== 0) customeSlider.current.slickPrev();
  };

  useEffect(() => {
    if (window.location.href.indexOf("property") > -1) {
      setIsProperty(true);
    }
    if (window.matchMedia("(min-width: 1100px)").matches) {
      setSliderSettings({
        ...sliderSettings,
        slidesToShow: 4,
        slidesToScroll: 4,
      });
    }
  }, []);

  useEffect(() => {
    let barProgress = document.getElementsByClassName(
      "progress-bar"
    )[0] as HTMLElement;
    barProgress.style.width = `${
      ((slide + sliderSettings.slidesToScroll) * 100) / 12
    }%`;
  }, [slide, sliderSettings.slidesToScroll]);

  return (
    <div className="container-featured-properties my-4 p-8 px-0">
      <div className="container-featured-properties-flex flex justify-between px-8">
        <div className="flex">
          <img
            src={HomeIcon}
            alt="Home"
            style={{ display: isProperty ? "block" : "none" }}
          />
          <h1 className="tittle-text font-lato mx-4 my-2 inline">{tittle}</h1>
        </div>
        <div className="arrow-container flex relative float-right top-5 gap-4 mx-4">
          <div
            className="arrow-left text-black text-4xl bg-white hover:bg-slate-200 cursor-pointer"
            onClick={_prev}
          >
            <AiOutlineLeft />
          </div>
          <div
            className="arrow-right text-white text-4xl bg-greenCyan hover:bg-greenCyanHover cursor-pointer"
            onClick={_next}
          >
            <AiOutlineRight />
          </div>
        </div>
      </div>
      <div className="progress-container mx-auto my-4">
        <div className="progress-bar" id="myBar"></div>
      </div>
      <div className="slider-container py-4">
        <div className="mobile-container">
          <Slider ref={customeSlider} {...sliderSettings}>
            {cards.map((card, index) => {
              return <CardProperty key={index} {...card} />;
            })}
          </Slider>
        </div>
      </div>
      <div className="relative text-greenCyan font-lato float-right hover:text-greenCyanHover mr-8">
        <a href="/property" style={{ fontSize: 16, opacity: 0.8 }}>
          Ver más +
        </a>
      </div>
    </div>
  );
}
