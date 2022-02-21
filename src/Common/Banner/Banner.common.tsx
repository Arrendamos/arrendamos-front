import { url } from "inspector";
import { BannerPropertyPropsI } from "../../Interfaces";

import './style.css';
export function BannerCommon(props: BannerPropertyPropsI): JSX.Element {
    const img = require(`../../Assets/images/${props.backgroundImg}.png`);

    return (
        <div className="banner-container font-lato py-6 px-12" style={{ backgroundColor: props.backgroundColor, backgroundImage: `url(${img})` }}>
            <h2>{props.tittle}</h2>
            <p>{props.paragraph}</p>
            <div className="btn-container text-center">
                <button>{props.btnText}</button>
            </div>
        </div>
    )
}