
import './style.css'

export function FeaturesProperty(): JSX.Element {
    return (
        <>
            <h2 className='subtittle-description'>Características</h2>
            <div className="feature-property">
                <div className="feature-item">
                    <div className='checkbox-feature flex'>
                        <span className='checkmark-feature'></span>
                    </div>
                    <label className='label-feature'>Cableado de Red</label>
                </div>
                <div className="feature-item">
                    <div className='checkbox-feature flex'>
                        <span className='checkmark-feature'></span>
                    </div>
                    <label className='label-feature'>Depósito</label>
                </div>
                <div className="feature-item">
                    <div className='checkbox-feature flex'>
                        <span className='checkmark-feature'></span>
                    </div>
                    <label className='label-feature'>Garaje cubierto</label>
                </div>
                <div className="feature-item">
                    <div className='checkbox-feature flex'>
                        <span className='checkmark-feature'></span>
                    </div>
                    <label className='label-feature'>Cocineta</label>
                </div>
                <div className="feature-item">
                    <div className='checkbox-feature flex'>
                        <span className='checkmark-feature'></span>
                    </div>
                    <label className='label-feature'>Portería</label>
                </div>
                <div className="feature-item">
                    <div className='checkbox-feature flex'>
                        <span className='checkmark-feature'></span>
                    </div>
                    <label className='label-feature'>Terraza</label>
                </div>
                <div className="feature-item">
                    <div className='checkbox-feature flex'>
                        <span className='checkmark-feature'></span>
                    </div>
                    <label className='label-feature'>Parqueadero visitantes</label>
                </div>
                <div className="feature-item">
                    <div className='checkbox-feature flex'>
                        <span className='checkmark-feature'></span>
                    </div>
                    <label className='label-feature'>Citófono</label>
                </div>
            </div>
        </>
    )
}