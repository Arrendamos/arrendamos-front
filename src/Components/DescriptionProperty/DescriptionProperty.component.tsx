import { DescriptionItems } from './DescriptionItems/DescriptionItems.component'
import { DetailsProperty } from './DetailsProperty/DetailsProperty.component'
import { FeaturesProperty } from './FeaturesProperty/FeaturesProperty.component'
import { InterestProperty } from './InterestProperty/InterestProperty.component'

import Location from '../../Assets/Icons/Common/Ubicacion.svg'

import './style.css'

export function DescriptionPropertyComponent(): JSX.Element {
    return (
        <div className="single-description-property p-4 px-8 font-lato">
            <h2 className="tittle-description">Local en Arriendo en Cedritos, Usaquén</h2>
            <label className='cod-description' >COD AC23</label>
            <p className='price-description text-greenCyan'>$320.000.000</p>
            <div className='flex'>
                <img src={Location} alt="" style={{ marginRight: '0.5rem' }} width={22} />
                <label className='city-description'>Bogotá</label>
            </div>
            <DescriptionItems />
            <hr />
            <h2 className='subtittle-description'>Descripción General</h2>
            <p className='paragraph-description'>Área de 65m2 en piso 3 amueblada espacio amplio y vista exterior Oficina con excelente iluminación natural Amplia ventilación Baño y Cocina Comunales Piso laminado de alto tráfico estilo madera Características 21 Escritorios Disponibles 10 Puntos de Red Habilitados Baño comunal Cocina Comunal Servicios Públicos Todos los Servicios Ventilación Natural. Cerca a almacenes de cadena como Carulla, Éxito y Cafam; cerca a colegios John Dewey y Emmanuel d'Alzón.</p>
            <hr />
            <DetailsProperty />
            <hr />
            <FeaturesProperty />
            <hr />
            <InterestProperty />
        </div>
    )
}