import { connect } from "react-redux";
import setFiltergAction from "../../../../redux/actions/filtersAction";

import Bodega from "../../../../Assets/Icons/Filters/Property/Bodega1.svg";
import Local from "../../../../Assets/Icons/Filters/Property/Local.svg";
import Oficina from "../../../../Assets/Icons/Filters/Property/Oficina1.svg";
import Todos from "../../../../Assets/Icons/Filters/Property/Edificio.svg";
import Edificio from "../../../../Assets/Icons/Filters/Property/Edificio2.svg";

import "./style.css";

function PropertyFilterComponent(props: any): JSX.Element {
  return (
    <>
      <h3 className="tittle-filter">Inmuebles</h3>
      <div className="flex properties-filter-container">
        <div className="properties-filter-item">
          <img src={Todos} alt="" />
          <label>Todos</label>
        </div>
        <div className="properties-filter-item">
          <img src={Bodega} alt="" />
          <label>Bodega</label>
        </div>
        <div className="properties-filter-item">
          <img src={Local} alt="" />
          <label>Local</label>
        </div>
        <div className="properties-filter-item">
          <img src={Oficina} alt="" />
          <label>Oficina</label>
        </div>
        <div className="properties-filter-item">
          <img src={Edificio} alt="" />
          <label>Edificio</label>
        </div>
      </div>
      <hr />
      <div className="flex justify-around my-4 btn-container-filter">
        <button
          className="bg-white h-full text-primaryColor text-center hover:bg-slate-300 rounded-lg py-2 px-8 border border-primaryColorHover"
          style={{ fontSize: "1.3rem" }}
          onClick={() => props.setFiltersActions("")}
        >
          Cancelar
        </button>
        <button
          className="bg-primaryColor h-full text-white text-center hover:bg-primaryColorHover rounded-lg py-2 px-8"
          style={{ fontSize: "1.3rem" }}
        >
          Seleccionar
        </button>
      </div>
    </>
  );
}

const _mapDispatchToProps = (dispatch: any) => ({
  setFiltersActions: (filterOpen: string) =>
    dispatch(setFiltergAction(filterOpen)),
});

export default connect(null, _mapDispatchToProps)(PropertyFilterComponent);
