import React, { useEffect, useState } from "react";
import Slider from "react-slick"

import Vr from '../../Assets/Icons/Common/VrIcon.svg';
import { ImPlay2 } from 'react-icons/im';
import { IoMdImage } from 'react-icons/io';
import { MdOutline360 } from 'react-icons/md'
import { PropertyModel } from "../../models/Property.model";

import { useParams } from "react-router-dom";
import { PropertyService } from "../../Services/Property.service";

import './style.css';

type imgObject = {
    link: string,
}
export function PropertyImageCarouselComponent(props: PropertyModel): JSX.Element {
    const propertyService = new PropertyService();
    const [images, setImages] = useState<imgObject[]>([]);
    const { id } = useParams();

    useEffect((): void => {
        if (id) _getImageProperty(+id);
    }, [id]);
    const _getImageProperty = async (id: number) => {
        const propertiyResponse: imgObject[] = await propertyService.getPropertyImage(id);
        if (propertiyResponse) setImages(propertiyResponse);
    }
    const customeSlider = React.createRef<any>();
    const changeSizeFirstImg = () => {
        const slider = document.querySelector('.slick-current')!;
        if (slider) {
            const firstImg = slider.querySelector('.img-container-carousel')!;
            firstImg.classList.add('big-img');
        }
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
    }, [images])

    const _openLink = (link: string) => {
        window.open(link);
    }
    return (
        <div id="property-single-carousel" className='property-image-carousel'>
            <div className='slider-image-carousel py-4' style={{ width: '95%', margin: 'auto' }}>
                {images.length > 0
                    ? <Slider ref={customeSlider} {...sliderSettings}>
                        {images.map((item, index) => {
                            return <div key={index}>{ImageCarousel({ img: item.link })}</div>
                        })}
                    </Slider>
                    : null
                }
            </div>
            <div className="btn-interaction-container flex">
                <div className="card-interaction" onClick={() => _openLink(props.link_360)}>
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
function ImageCarousel({ img }: any): JSX.Element {
    return (
        <div className="img-container-carousel">
            <img src={img} alt="img_test" />
        </div>
    )
}