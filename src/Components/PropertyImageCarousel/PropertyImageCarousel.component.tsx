import React, { useEffect, useState } from "react";
import Slider from "react-slick"

import TestImg from '../../Assets/images/test/hotel_test.jpeg';

import Vr from '../../Assets/Icons/Common/VrIcon.svg';
import { ImPlay2 } from 'react-icons/im';
import { IoMdImage } from 'react-icons/io';
import { MdOutline360 } from 'react-icons/md'

import './style.css';

export function PropertyImageCarouselComponent(): JSX.Element {
    // ----- test enviroment -----
    let img: JSX.Element[] = [];
    for (let i = 0; i < 5; i++) {
        img.push(ImageCarousel());
    }
    // ----- test enviroment -----
    const customeSlider = React.createRef<any>();
    const changeSizeFirstImg = () => {
        const slider = document.querySelector('.slick-current')!;
        const firstImg = slider.querySelector('.img-container-carousel')!;
        firstImg.classList.add('big-img');
    }
    const changeOtherSizeImg = () => {
        const otherImg = document.querySelectorAll('.img-container-carousel');
        otherImg.forEach((item: Element) => {
            item.classList.remove('big-img');
        });
        changeSizeFirstImg();
    }
    const [sliderSettings, setSliderSettings] = useState({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1200,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        beforeChange: changeSizeFirstImg,
        afterChange: changeOtherSizeImg,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    })
    useEffect(() => {
        changeOtherSizeImg();
    }, [])

    return (
        <div id="property-single-carousel" className='property-image-carousel'>
            <div className='slider-image-carousel py-4' style={{ width: '95%', margin: 'auto' }}>
                <Slider ref={customeSlider} {...sliderSettings}>
                    {img.map((item, index) => {
                        return <div key={index}>{item}</div>
                    })}
                </Slider>
            </div>
            <div className="btn-interaction-container flex">
                <div className="card-interaction">
                    <MdOutline360 style={{ fontSize: '2.2rem' }} />
                </div>
                <div className="card-interaction">
                    <ImPlay2 style={{ fontSize: '2rem' }} />
                </div>
                <div className="card-interaction">
                    <IoMdImage style={{ fontSize: '2rem' }} />
                </div>
                <div className="card-interaction">
                    <img src={Vr} alt="" width={60} />
                </div>
            </div>
        </div>
    )
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
function ImageCarousel(): JSX.Element {
    return (
        <div className="img-container-carousel">
            <img src={TestImg} alt="img_test" />
        </div>
    )
}