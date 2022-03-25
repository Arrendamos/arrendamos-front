import Location from '../../../Assets/Icons/Common/Ubicacion.svg'

import './style.css'

export function InterestProperty(): JSX.Element {
    return (
        <>
            <h2 className='subtittle-description'>Lugares cercanos y sitios de interés</h2>
            <div className='interest-property'>
                <div className='interest-item'>
                    <div className='flex'>
                        <img src={Location} alt="" style={{ marginRight: '0.5rem' }} width={25} />
                        <label className='interest-label'>Centros comerciales</label>
                    </div>
                    <div className='interest-places'>
                        <p className='interest-place-item'>Centro Comercial 151</p>
                        <p className='interest-place-item'>Centro Comercial Colina</p>
                    </div>
                </div>
                <div className='interest-item'>
                    <div className='flex'>
                        <img src={Location} alt="" style={{ marginRight: '0.5rem' }} width={25} />
                        <label className='interest-label'>Supermercados</label>
                    </div>
                    <div className='interest-places'>
                        <p className='interest-place-item'>Almacén Éxito</p>
                        <p className='interest-place-item'>Almacén Colsubsidio</p>
                    </div>
                </div>
                <div className='interest-item'>
                    <div className='flex'>
                        <img src={Location} alt="" style={{ marginRight: '0.5rem' }} width={25} />
                        <label className='interest-label'>Restaurantes</label>
                    </div>
                    <div className='interest-places'>
                        <p className='interest-place-item'>Crepes & Waffles</p>
                        <p className='interest-place-item'>El Corral</p>
                    </div>
                </div>
                <div className='interest-item'>
                    <div className='flex'>
                        <img src={Location} alt="" style={{ marginRight: '0.5rem' }} width={25} />
                        <label className='interest-label'>Estaciones de Transmilenio</label>
                    </div>
                    <div className='interest-places'>
                        <p className='interest-place-item'>Calle 146</p>
                        <p className='interest-place-item'>Mazuren</p>
                    </div>
                </div>
            </div>
        </>
    )
}