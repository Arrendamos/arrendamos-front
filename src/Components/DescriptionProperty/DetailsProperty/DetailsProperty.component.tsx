
import { PriceStyle } from '../../../Atoms';
import { DetailsItem } from '../../../Interfaces';

import './style.css';

export function DetailsProperty(props: DetailsItem): JSX.Element {
    return (
        <>
            <h2 className='subtittle-description'>Detalles del inmueble</h2>
            <div className="details-property px-4">
                <div className="detail-item">
                    <label className='label-detail'>Precio de venta</label>
                    <p className='value-detail'><PriceStyle number={props.canon_price} /> COP</p>
                </div>
                <div className="detail-item">
                    <label className='label-detail'>Administración</label>
                    <p className='value-detail'><PriceStyle number={props.admin} /> COP</p>
                </div>
                <div className="detail-item">
                    <label className='label-detail'>Dirección</label>
                    <p className='value-detail'>{props.address}</p>
                </div>
                <div className="detail-item">
                    <label className='label-detail'>Barrio</label>
                    <p className='value-detail'>{props.street}</p>
                </div>
                <div className="detail-item">
                    <label className='label-detail'>Tipo de inmueble</label>
                    <p className='value-detail'>{props.type}</p>
                </div>
                <div className="detail-item">
                    <label className='label-detail'>Antigüedad</label>
                    <p className='value-detail'>{props.antiquity} Años</p>
                </div>
                <div className="detail-item">
                    <label className='label-detail'>Piso</label>
                    <p className='value-detail'>{props.floor}</p>
                </div>
                <div className="detail-item">
                    <label className='label-detail'>Área construida</label>
                    <p className='value-detail'>{props.area} m<sup>2</sup></p>
                </div>
                <div className="detail-item">
                    <label className='label-detail'>Garajes</label>
                    <p className='value-detail'>{props.garage}</p>
                </div>
                <div className="detail-item">
                    <label className='label-detail'>Baños</label>
                    <p className='value-detail'>{props.bathrooms}</p>
                </div>
                <div className="detail-item">
                    <label className='label-detail'>Estrato</label>
                    <p className='value-detail'>{props.stratum}</p>
                </div>
                <div className="detail-item">
                    <label className='label-detail'>Ascensores</label>
                    <p className='value-detail'>{props.elevator}</p>
                </div>
            </div>
        </>
    )
}