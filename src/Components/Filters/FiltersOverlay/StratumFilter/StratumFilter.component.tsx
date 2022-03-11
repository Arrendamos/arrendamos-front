import { connect } from 'react-redux';
import setFiltergAction from '../../../../redux/actions/filtersAction'

import './style.css';

function StratumFilterComponent(props: any): JSX.Element {
    const stratum = 6;
    function StratumItem(): JSX.Element[] {
        const stratumItem: JSX.Element[] = [];
        for (let i = 1; i <= stratum; i++) {
            stratumItem.push(
                <div className="stratum-item flex" key={i}>
                    <div className='checkbox-container'>
                        <input type="checkbox" checked={true} onChange={() => { }} />
                        <span className="checkmark"></span>
                    </div>
                    <label>Estrato {i}</label>
                </div>
            );
        }
        return stratumItem;
    }
    return (
        <>
            <h3 className="tittle-filter">Estrato</h3>
            <div className="grid grid-cols-2 properties-stratum-container gap-4">
                {StratumItem()}
            </div>
            <hr />
            <div className='flex justify-around my-4 btn-container-filter'>
                <button className='bg-white h-full text-greenCyan text-center hover:bg-slate-300 rounded-lg py-2 px-4 border border-greenCyanHover'
                    onClick={() => props.setFiltersActions('')}>
                    Cancelar
                </button>
                <button className='bg-greenCyan h-full text-white text-center hover:bg-greenCyanHover rounded-lg py-2 px-4' >
                    Seleccionar
                </button>
            </div>
        </>
    )
}

const _mapDispatchToProps = (dispatch: any) => ({
    setFiltersActions: (filterOpen: string) => dispatch(setFiltergAction(filterOpen))
})

export default connect(null, _mapDispatchToProps)(StratumFilterComponent)