import { CardPropertyPropsI } from '../../Interfaces'
import { useNavigate } from 'react-router-dom'

import { BsShareFill, BsFillSuitHeartFill } from 'react-icons/bs'

import './style.css'
import { FormattedNumber, IntlProvider } from 'react-intl'

export function CardPropertyAtom(props: CardPropertyPropsI): JSX.Element {
    const { area, bathroom, parking, address, location, city } = props
    const navigation = useNavigate()
    const _openSingleProperty = (id: number) => {
        navigation('/single-property/' + id)
    }
    return (
        <div className="card-property my-4 mx-8 pb-2" >
            <img src={props.image} alt="" onClick={() => _openSingleProperty(props.id)} />
            <div className='box-info-property'>
                <div className='flex justify-between'>
                    <p className='price-property text-greenCyan font-lato'>$
                        <IntlProvider locale='es'>
                            <FormattedNumber
                                value={props.price}
                                // eslint-disable-next-line react/style-prop-object
                                style="decimal"
                                minimumFractionDigits={0} />
                        </IntlProvider></p>
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