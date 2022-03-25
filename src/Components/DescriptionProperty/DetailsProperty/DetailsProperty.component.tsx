
import './style.css';

export function DetailsProperty(): JSX.Element {
    return (
        <>
            <h2 className='subtittle-description'>Detalles del inmueble</h2>
            <div className="details-property px-4">
            <div className="detail-item">
                    <label className='label-detail'>Precio de venta</label>
                    <p className='value-detail'>$ 320.000.000 COP</p>
                </div>
                <div className="detail-item">
                    <label className='label-detail'>Administración</label>
                    <p className='value-detail'>$ 1.780.000 COP</p>
                </div>
                <div className="detail-item">
                    <label className='label-detail'>Dirección</label>
                    <p className='value-detail'>calle 151 # 54 - 24</p>
                </div>
                <div className="detail-item">
                    <label className='label-detail'>Barrio</label>
                    <p className='value-detail'>Cedritos</p>
                </div>
                <div className="detail-item">
                    <label className='label-detail'>Tipo de inmueble</label>
                    <p className='value-detail'>Oficina</p>
                </div>
                <div className="detail-item">
                    <label className='label-detail'>Antigüedad</label>
                    <p className='value-detail'>10 Años</p>
                </div>
                <div className="detail-item">
                    <label className='label-detail'>Piso</label>
                    <p className='value-detail'>5</p>
                </div>
                <div className="detail-item">
                    <label className='label-detail'>Área construida</label>
                    <p className='value-detail'>65 m<sup>2</sup></p>
                </div>
                <div className="detail-item">
                    <label className='label-detail'>Garajes</label>
                    <p className='value-detail'>2</p>
                </div>
                <div className="detail-item">
                    <label className='label-detail'>Baños</label>
                    <p className='value-detail'>2</p>
                </div>
                <div className="detail-item">
                    <label className='label-detail'>Estrato</label>
                    <p className='value-detail'>4</p>
                </div>
                <div className="detail-item">
                    <label className='label-detail'>Ascensores</label>
                    <p className='value-detail'>2</p>
                </div>
            </div>
        </>
    )
}