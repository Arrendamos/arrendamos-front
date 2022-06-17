import { useState } from 'react';
import { AiOutlineEnter } from 'react-icons/ai';

import './style.css'

export function PropertyDetailsFormCommon() {
    const [propertyFeatures, setPropertyFeatures] = useState<String[]>([]);
    const [currentFeature, setCurrentFeature] = useState('');
    const _addFeature = () => {
        if (currentFeature.replace(' ', '') === '') return;
        setPropertyFeatures([...propertyFeatures, currentFeature]);
        setCurrentFeature('');
    }
    const _removeFeature = (index: number) => {
        const newFeatures = [...propertyFeatures];
        newFeatures.splice(index, 1);
        setPropertyFeatures(newFeatures);
    }
    return (
        <div className="card card-form-property font-lato">
            <h1 className='tittle'>Caracteristicas del inmueble</h1>
            <div className='form-input-container'>
                <input type="text" placeholder="Link 360" />
                <div className="buttonIn">
                    <input type="text"
                        placeholder="Caracteristica"
                        value={currentFeature}
                        onChange={(event) => setCurrentFeature(event.target.value)}
                        onKeyPress={(event) => event.key === 'Enter' ? _addFeature() : null} />
                    <button id="enter-add-feature" onClick={_addFeature}><AiOutlineEnter style={{ fontSize: '1.5rem', color: '#009DDC' }} /></button>
                    <div className="tags-features flex my-2 flex-wrap">
                        {propertyFeatures.map((feature, index) => {
                            return <span key={index} className="tag">{feature} <span className='remove-tag' onClick={() => _removeFeature(index)}>&#10006;</span></span>
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}