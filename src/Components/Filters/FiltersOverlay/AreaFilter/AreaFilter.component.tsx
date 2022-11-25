import { useState } from "react";
import { connect } from "react-redux";
import setFiltergAction from "../../../../redux/actions/filtersAction";

import { MultiRangeSlider } from "../../../../Atoms";

import "./style.css";

type areaModel = {
  to: number;
  from: number;
};

function AreaFilterComponent(props: any): JSX.Element {
  const initialArea: areaModel = {
    from: 0,
    to: 500,
  };
  const [area, setArea] = useState(initialArea);

  const _setValues = ({ max, min }: any) => {
    setArea({
      from: min,
      to: max,
    });
  };

  return (
    <>
      <h3 className="tittle-filter">Área</h3>
      <label className="label-area-filter">Cualquier área</label>
      <div className="properties-area-container">
        <MultiRangeSlider
          min={initialArea.from}
          max={initialArea.to}
          onChange={_setValues}
        />
        <div className="flex justify-around">
          <div className="area-option-values">
            <label>Área mínima</label>
            <p>
              {area.from} m<sup>2</sup>
            </p>
          </div>
          <span className="separate"></span>
          <div className="area-option-values">
            <label>Área máxima</label>
            <p>
              {area.to} m<sup>2</sup>
            </p>
          </div>
        </div>
        <hr />
        <div className="flex justify-around my-4 btn-container-filter">
          <button
            className="bg-white h-full text-primaryColor text-center hover:bg-slate-300 rounded-lg py-2 px-4 border border-primaryColorHover"
            onClick={() => props.setFiltersActions("")}
          >
            Cancelar
          </button>
          <button className="bg-primaryColor h-full text-white text-center hover:bg-primaryColorHover rounded-lg py-2 px-4">
            Seleccionar
          </button>
        </div>
      </div>
    </>
  );
}

const _mapDispatchToProps = (dispatch: any) => ({
  setFiltersActions: (filterOpen: string) =>
    dispatch(setFiltergAction(filterOpen)),
});

export default connect(null, _mapDispatchToProps)(AreaFilterComponent);
