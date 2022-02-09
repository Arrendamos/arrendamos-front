import { useEffect, useState } from 'react';
import { MultiRangeSlider } from '../../Atoms'
import { BiSearch } from 'react-icons/bi';

import './style.css';

type areaModel = {
    de: number,
    hasta: number
}

type areaModalProps = {
    visibleAreaModal: boolean,
    setVisibleAreaModal: any,
    area: areaModel,
    onChange: React.ChangeEventHandler<any>
}

export function FilterCommon(): JSX.Element {
    const areaInitial: areaModel = {
        de: 0,
        hasta: 0
    }
    const [area, setArea] = useState(areaInitial);
    const [visibleAreaModal, setVisibleAreaModal] = useState<boolean>(false);
    const _setAreaValues = ({ max, min }: any) => {
        setArea({
            de: min,
            hasta: max
        })
    }

    return (
        <div className="box-filter grid gap-0">
            <div className='box-item-filter'>
                <label className="label-filter">Ubicación</label>
                <p className='simple-text font-lato'>Usaquen, Bogotá</p>
            </div>
            <div className='box-item-filter'>
                <label className="label-filter">Inmueble</label>
                <select className='select-filter block w-full simple-text font-lato' name="type" >
                    <option value="">Todos</option>
                    <option value="1">Casa</option>
                    <option value="2">Departamento</option>
                    <option value="3">Terreno</option>
                </select>
            </div>
            <div className='box-item-filter simple-text' >
                <CardAreaOption
                    visibleAreaModal={visibleAreaModal}
                    setVisibleAreaModal={setVisibleAreaModal}
                    area={area}
                    onChange={_setAreaValues} />
                <label className="label-filter">Area</label>
                <div className='filter-select-area pb-1 flex justify-around' onClick={() => setVisibleAreaModal(true)}>
                    <div className='flex justify-around'>
                        <label>De:</label>
                        <p >{area.de}m<sup>2</sup></p>
                    </div>
                    <div className='flex justify-around'>
                        <label >Hasta:</label>
                        <p>{area.hasta}m<sup>2</sup></p>
                    </div>
                </div>
            </div>
            <div className='filter-btn-search'>
                <button className='bg-greenCyan w-full h-full text-white text-center hover:bg-greenCyanHover'>
                    <BiSearch className='mx-auto text-3xl' />
                </button>
            </div>
        </div >
    );
}

function CardAreaOption(props: areaModalProps): JSX.Element {
    const { visibleAreaModal, setVisibleAreaModal, area, onChange } = props;

    return (
        <div className='card-area-options font-lato text-pursianBlue mb-4' style={{ visibility: (visibleAreaModal) ? 'visible' : 'hidden' }}>
            <h3>Área</h3>
            <p className='text-base font-light opacity-80'>Cualquier área</p>
            <MultiRangeSlider
                min={0}
                max={1000}
                onChange={onChange} />
            <div className='grid grid-cols-2 gap-3'>
                <div className='area-option-values'>
                    <label>Área mínima</label>
                    <p>{area.de} m<sup>2</sup></p>
                </div>
                <div className='area-option-values'>
                    <label >Área máxima</label>
                    <p>{area.hasta} m<sup>2</sup></p>
                </div>
            </div>
            <hr />
            <div className='my-4 text-right'>
                <button className='bg-greenCyan h-full text-white text-center hover:bg-greenCyanHover rounded-lg py-2 px-8'
                    onClick={() => setVisibleAreaModal(false)} >
                    Seleccionar
                </button>
            </div>
        </div >
    )
}