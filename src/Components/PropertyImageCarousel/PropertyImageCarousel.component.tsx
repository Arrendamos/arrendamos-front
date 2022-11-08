/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import { useMediaQuery } from "react-responsive";
import { MdOutline360 } from "react-icons/md";
import { ImPlay2 } from "react-icons/im";
// import { IoMdImage } from "react-icons/io";
// import Vr from "../../Assets/Icons/Common/VrIcon.svg";
import { PropertyModel } from "../../models/Property.model";

import { _openLink } from "../../Utils/functions/common.functions";

import "./style.css";
import { RectangleImageSkeleton } from "../../Skeleton";

type ImageProps = {
  url: string;
  isMain: boolean;
};
export function PropertyImageCarouselComponent(
  props: PropertyModel
): JSX.Element {
  const isMobile = useMediaQuery({
    query: "(max-width: 850px)",
  });

  const { photos, virtual_tour, youtube_video } = props;
  const [images, setImages] = useState<ImageProps[]>([]);
  useEffect((): void => {
    if (photos) {
      setImages(photos.images);
    }
  }, [props]);
  const changeSizeFirstImg = () => {
    const slider = document.querySelector(".slick-current")!;
    if (slider) {
      const firstImg = slider.querySelector(".img-container-carousel")!;
      firstImg.classList.add("big-img");
    }
  };
  const changeOtherSizeImg = () => {
    const otherImg = document.querySelectorAll(".img-container-carousel");
    otherImg.forEach((item: Element) => {
      item.classList.remove("big-img");
    });
    changeSizeFirstImg();
  };
  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: isMobile ? false : true,
    beforeChange: isMobile ? () => {} : changeSizeFirstImg,
    afterChange: isMobile ? () => {} : changeOtherSizeImg,
    nextArrow: isMobile ? <></> : <SampleNextArrow />,
    prevArrow: isMobile ? <></> : <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  useEffect(() => {
    if (!isMobile) changeOtherSizeImg();
  }, [images]);

  const customeSlider = React.createRef<any>();

  return (
    <div id="property-single-carousel" className="property-image-carousel">
      <div className="slider-image-carousel py-4">
        {images ? (
          <Slider ref={customeSlider} {...sliderSettings}>
            {images.map((item, index) => {
              return <div key={index}>{ImageCarousel({ img: item.url })}</div>;
            })}
          </Slider>
        ) : (
          <RectangleImageSkeleton />
        )}
      </div>
      <div className="btn-interaction-container flex">
        {virtual_tour ? (
          <div
            className="card-interaction"
            onClick={() => _openLink(virtual_tour)}
          >
            <MdOutline360
              style={{ fontSize: isMobile ? "1.8rem" : "2.2rem" }}
            />
          </div>
        ) : null}
        {youtube_video ? (
          <div
            className="card-interaction"
            onClick={() => _openLink(youtube_video)}
          >
            <ImPlay2 style={{ fontSize: isMobile ? "1.5rem" : "2rem" }} />
          </div>
        ) : null}
        {/* <div className="card-interaction">
          <IoMdImage style={{ fontSize: isMobile ? "1.5rem" : "2rem" }} />
        </div>
        <div className="card-interaction">
          <img src={Vr} alt="" width={isMobile ? 40 : 60} />
        </div> */}
      </div>
    </div>
  );
}
function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
function ImageCarousel({ img }: any): JSX.Element {
  return (
    <div className="img-container-carousel">
      <img src={img} alt="img_test" />
    </div>
  );
}
