import { useState } from 'react';
import { connect } from 'react-redux';
import setFiltergAction from '../../../../redux/actions/filtersAction'

import { MultiRangeSlider } from '../../../../Atoms'

import './style.css';
import { FormattedNumber, IntlProvider } from 'react-intl';

type priceModel = {
    to: number,
    from: number
}

function PriceFilterComponent(props: any): JSX.Element {
    const initialPrice: priceModel = {
        from: 0,
        to: 100000000,
    }
    const [price, setPrice] = useState(initialPrice);

    const _setValues = ({ max, min }: any) => {
        setPrice({
            from: min,
            to: max,
        })
    }

    return (
        <>
            <h3 className="tittle-filter">Precio</h3>
            <label className="label-price-filter">Cualquier precio</label>
            <div className='properties-price-container'>
                <MultiRangeSlider
                    min={initialPrice.from}
                    max={initialPrice.to}
                    onChange={_setValues} />
                <div className='flex justify-around'>
                    <div className='price-option-values'>
                        <label>Precio mínimo</label>
                        <p>$
                            <IntlProvider locale='es'>
                                <FormattedNumber
                                    value={price.from}
                                    // eslint-disable-next-line react/style-prop-object
                                    style="decimal"
                                    minimumFractionDigits={0} />
                            </IntlProvider>
                        </p>
                    </div>
                    <span className='separate'></span>
                    <div className='price-option-values'>
                        <label >Precio máximo</label>
                        <p>$
                            <IntlProvider locale='es'>
                                <FormattedNumber
                                    value={price.to}
                                    // eslint-disable-next-line react/style-prop-object
                                    style="decimal"
                                    minimumFractionDigits={0}
                                />
                            </IntlProvider>
                        </p>
                    </div>
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
            </div>
        </>
    )
}

const _mapDispatchToProps = (dispatch: any) => ({
    setFiltersActions: (filterOpen: string) => dispatch(setFiltergAction(filterOpen))
})

export default connect(null, _mapDispatchToProps)(PriceFilterComponent)