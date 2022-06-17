
import './style.css'

export function FeaturesProperty(features: string[]): JSX.Element {
    return (
        <>
            <h2 className='subtittle-description'>Características</h2>
            <div className="feature-property">
                {FeaturesItem(features)}
            </div >
        </>
    )
}

function FeaturesItem(features: string[]): JSX.Element[] {
    const featuresItem: JSX.Element[] = [];
    Object.entries(features).forEach(([key, value]) => {
        featuresItem.push(
            <div key={key} className="feature-item">
                <div className='checkbox-feature flex'>
                    <span className='checkmark-feature'></span>
                </div>
                <label className='label-feature'>{value}</label>
            </div>
        )
    })
    return featuresItem;
}