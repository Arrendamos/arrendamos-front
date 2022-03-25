import { CardProperty } from "../../Common";
import { CardPropertyPropsI } from "../../Interfaces";
import HomeIcon from '../../Assets/Icons/Common/Home.svg';

import './style.css'

export function PropertiesComponent(): JSX.Element {
    const cardExample: CardPropertyPropsI = {
        area: '200',
        bathroom: '2',
        parking: '2',
        address: 'Calle 63 # 55-23',
        location: 'Los Rosales',
        city: 'Bogotá'
    }
    let cards: CardPropertyPropsI[] = [];
    for (let i = 0; i < 20; i++) {
        cards.push(cardExample);
    }
    return (
        < >
            <div className="tittle-container font-lato">
                <img src={HomeIcon} alt="Home" />
                <h2 className="tittle-text">Inmuebles</h2>
            </div>
            <div className="progress-property-container mx-auto my-4">
                <div className="progress-bar"></div>
            </div>
            <div className="property-grid-container">
                {cards.map((card, index) => {
                    return (
                        <div className="flex justify-center" key={index}>
                            <CardProperty {...card} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}