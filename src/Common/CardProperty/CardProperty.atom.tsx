import { CardPropertyPropsI } from '../../Interfaces'
import { BsShareFill, BsFillSuitHeartFill } from 'react-icons/bs'

import './style.css'

export function CardPropertyAtom(props: CardPropertyPropsI): JSX.Element {
    const { area, bathroom, parking, address, location, city } = props

    return (
        <div className="card-property my-4 mx-8">
            <img src="https://via.placeholder.com/350x200" alt="" />
            <div className='box-info-property'>
                <div className='flex justify-between'>
                    <p className='price-property text-greenCyan font-lato'>$320.000.000</p>
                    <div className='icons-card-property text-greenCyan m-4 mr-2'>
                        <div className='circle'>
                            <BsShareFill />
                        </div>
                        <div className='circle'>
                            <BsFillSuitHeartFill />
                        </div>
                    </div>
                </div>
                <div className='grid grid-rows-2 px-4 pb-0 simple-text info-property'>
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