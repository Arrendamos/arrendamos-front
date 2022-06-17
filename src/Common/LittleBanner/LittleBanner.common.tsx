import { BannerPropertyPropsI } from "../../Interfaces";

import './style.css';
export function LittleBannerCommon(props: BannerPropertyPropsI): JSX.Element {
    const img = require(`../../Assets/Images/${props.backgroundImg}.png`);

    return (
        <div className="little-banner-container font-lato"
            style={{
                backgroundColor: props.backgroundColor,
                backgroundImage: `url(${img})`,
                backgroundSize: props.sizeBackground ? props.sizeBackground : '',
            }}>
            <h2>{props.tittle}</h2>
            <p>{props.paragraph}</p>
            <div className="btn-container text-center">
                <button>{props.btnText}</button>
            </div>
        </div >
    )
}