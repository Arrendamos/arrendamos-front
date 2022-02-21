import React, { useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CardProperty } from "../../Common/";
import { CardPropertyPropsI } from "../../Interfaces";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import './style.css';

export function FeaturedPropertyComponent(): JSX.Element {
    const cardExample: CardPropertyPropsI = {
        area: '200',
        bathroom: '2',
        parking: '2',
        address: 'Calle 63 # 55-23',
        location: 'Los Rosales',
        city: 'Bogotá'
    }
    let cards: CardPropertyPropsI[] = [];
    for (let i = 0; i < 12; i++) {
        cards.push(cardExample);
    }


    const customeSlider = React.createRef<any>();
    const onAfterSlideChange = (currentSlide: number) => {
        setSlide(currentSlide);
    }
    const [sliderSettings, setSliderSettings] = useState({
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
        afterChange: onAfterSlideChange
    })
    const [slide, setSlide] = useState(0);
    const _next = () => {
        if (window.matchMedia('(min-width: 1400px)').matches) {
            if (slide !== 8) customeSlider.current.slickNext()
        } else {
            if (slide !== 9) customeSlider.current.slickNext()
        }
    }

    const _prev = () => {
        if (slide !== 0) customeSlider.current.slickPrev()
    }

    useEffect(() => {
        if (window.matchMedia('(min-width: 1500px)').matches) {
            setSliderSettings({ ...sliderSettings, slidesToShow: 4, slidesToScroll: 4 });
        }
    }, [])

    useEffect(() => {
        let barProgress = (document.getElementsByClassName('progress-bar')[0] as HTMLElement);
        barProgress.style.width = `${(slide + sliderSettings.slidesToScroll) * 100 / 12}%`;
    }, [slide, sliderSettings.slidesToScroll])

    return (
        <div className="container-featured-properties my-4 p-8 px-12" >
            <h1 className="tittle-text font-lato mx-4 my-2 inline">Inmuebles Destacados</h1>
            <div className="arrow-container flex relative float-right top-5 gap-4 mx-4">
                <div className="arrow-left text-black text-4xl bg-white hover:bg-slate-200 cursor-pointer" onClick={_prev}>
                    <AiOutlineLeft />
                </div>
                <div className="arrow-right text-white text-4xl bg-greenCyan hover:bg-greenCyanHover cursor-pointer" onClick={_next}>
                    <AiOutlineRight />
                </div>
            </div>
            <div className="progress-container mx-auto my-4">
                <div className="progress-bar" id="myBar"></div>
            </div>
            <div className='py-8'>
                <Slider ref={customeSlider} {...sliderSettings}>
                    {cards.map((card, index) => {
                        return (
                            <CardProperty key={index} {...card} />
                        )
                    })}
                </Slider>
            </div>
            <div className="relative text-greenCyan font-lato float-right hover:text-greenCyanHover">
                <a href="#" style={{ fontSize: 16, opacity: 0.8 }}>Ver más +</a>
            </div>
        </div >
    )
}