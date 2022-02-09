import { CardPropertyPropsI } from '../../Interfaces'

import './style.css'

export function CardPropertyAtom(props: CardPropertyPropsI): JSX.Element {
    const { area, bathroom, parking, address, location, city } = props

    return (
        <div className="card-property m-8">
            <img src="https://via.placeholder.com/350x200" alt="" />
            <div className='box-info-property grid grid-rows-2 gap-4'>
                <p className='price-property text-greenCyan font-lato'>$320.000.000</p>
                <div className='grid grid-rows-2 p-4 pb-0 simple-text info-property'>
                    <div>
                        <p>{area} m<sup>2</sup></p>
                        <span className='dot'></span>
                        <p>{bathroom} Baños</p>
                        <span className='dot'></span>
                        <p>{parking} Parqueaderos</p>
                    </div>
                    <div>
                        <p>{address}</p>
                        <span className='dot'></span>
                        <p>{location}</p>
                        <span className='dot'></span>
                        <p>{city}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}