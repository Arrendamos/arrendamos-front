import { useEffect, useState } from 'react'
import Location from '../../../Assets/Icons/Common/Ubicacion.svg'
import { InterestItem } from '../../../Interfaces';

import './style.css'

export function InterestProperty(props: any): JSX.Element {
    const [interestItem, setInterestItem] = useState<InterestItem[]>([]);

    useEffect(() => {
        setInterestItem([]);
        Object.entries(props).forEach(([key, value]) => {
            let item = value as InterestItem;
            setInterestItem(oldArray => [...oldArray, item]);
        })
    }, [props])
    return (
        <>
            <h2 className='subtittle-description'>Lugares cercanos y sitios de interés</h2>
            <div className='interest-property'>
                {
                    interestItem.map((item: InterestItem, index: number) => {
                        return (
                            <div key={index} className='interest-item'>
                                <div className='flex'>
                                    <img src={Location} alt="" style={{ marginRight: '0.5rem' }} width={25} />
                                    <label className='interest-label'>{item.name}</label>
                                </div>
                                <div className='interest-places'>
                                    {item.places.map((place: string, index: number) => {
                                        return (
                                            <p key={index} className='interest-place-item'>{place}</p>
                                        )
                                    })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}