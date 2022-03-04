import { useState } from 'react';
import './style.css';

type FilterOverlayProps = {
    visible: boolean,
    setVisible: any,
}

export function FiltersComponent(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    const _openOverlay = () => {
        setVisible(true);
    }
    return (
        <div className="filters-container flex font-lato justify-evenly p-8 mt-4 pb-0">
            <div className="filters-item" onClick={_openOverlay}>
                <FilterOverlay
                    visible={visible}
                    setVisible={setVisible}
                />
                <label className="filters-label">Ubicación</label>
            </div>
            <div className="filters-item">
                <label className="filters-label">Inmueble</label>
            </div>
            <div className="filters-item">
                <label className="filters-label">Precio</label>
            </div>
            <div className="filters-item">
                <label className="filters-label">Estrato</label>
            </div>
            <div className="filters-item">
                <label className="filters-label">Area</label>
            </div>
            <div className="filters-item">
                <label className="filters-label">Más Filtros</label>
            </div>
        </div>
    )
}

function FilterOverlay(props: FilterOverlayProps): JSX.Element {
    const { visible, setVisible } = props;

    return (
        <div className='card-filter-options font-lato text-pursianBlue mb-4' style={{ visibility: (visible) ? 'visible' : 'hidden' }}>
            <h1>Hola</h1>
        </div>
    )
}