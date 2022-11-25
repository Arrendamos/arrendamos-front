import { connect } from "react-redux";
import setFilterAction from "../../../../redux/actions/filtersAction";

import BathIcon from "../../../../Assets/Icons/Filters/More/bxs-bath1.svg";
import ParkingIcon from "../../../../Assets/Icons/Filters/More/Parking.svg";

import "./style.css";
import { useState } from "react";

function MoreFilterComponent(props: any): JSX.Element {
  const [bathroom, setBathroom] = useState(1);
  const [parking, setParking] = useState(1);
  return (
    <>
      <h3 className="tittle-filter">Más Filtros</h3>
      <div className="more-properties-container">
        <div className="more-item">
          <img src={BathIcon} alt="" style={{ width: "1.8rem" }} />
          <h2 style={{ marginLeft: -5 }}>Baños</h2>
          <div className="flex justify-between more-item-count">
            <label>Baños</label>
            <div className="count-more-filter">
              <button
                onClick={() =>
                  bathroom > 0 ? setBathroom(() => bathroom - 1) : {}
                }
              >
                -
              </button>
              <span>{bathroom}</span>
              <button onClick={() => setBathroom(() => bathroom + 1)}>+</button>
            </div>
          </div>
        </div>
        <div className="more-item">
          <img
            src={ParkingIcon}
            alt=""
            style={{ marginLeft: 5, width: "1rem" }}
          />
          <h2>Parqueaderos</h2>
          <div className="flex justify-between more-item-count">
            <label>Parqueaderos</label>
            <div className="count-more-filter">
              <button
                onClick={() =>
                  parking > 0 ? setParking(() => parking - 1) : {}
                }
              >
                -
              </button>
              <span>{parking}</span>
              <button onClick={() => setParking(() => parking + 1)}>+</button>
            </div>
          </div>
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
    </>
  );
}

const _mapDispatchToProps = (dispatch: any) => ({
  setFiltersActions: (filterOpen: string) =>
    dispatch(setFilterAction(filterOpen)),
});

export default connect(null, _mapDispatchToProps)(MoreFilterComponent);
