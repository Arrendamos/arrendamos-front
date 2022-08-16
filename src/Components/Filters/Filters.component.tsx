import { connect } from "react-redux";
import { useMediaQuery } from "react-responsive";

import setFiltergAction from "../../redux/actions/filtersAction";
import {
  PropertyFilter,
  StratumFilter,
  PriceFilter,
  AreaFilter,
  MoreFilter,
} from "./FiltersOverlay";

import Add from "../../Assets/Icons/Filters/add.svg";
import Area from "../../Assets/Icons/Filters/Area.svg";
import Estrato from "../../Assets/Icons/Filters/Estrato.svg";
import Inmueble from "../../Assets/Icons/Filters/Inmueble.svg";
import Precio from "../../Assets/Icons/Filters/Precio.svg";
import Ubicacion from "../../Assets/Icons/Filters/Ubicacion.svg";

import "./style.css";

type FilterOverlayProps = {
  visible: string;
  tag: string;
  Component: any;
  direction: string;
};

function FiltersComponent(props: any): JSX.Element {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 900px)",
  });
  return (
    <>
      {isDesktopOrLaptop ? (
        <FiltersComponentDesktop {...props} />
      ) : (
        <FiltersComponentMobile {...props} />
      )}
    </>
  );
}

function FiltersComponentDesktop(props: any): JSX.Element {
  return (
    <div className="filters-container flex font-lato justify-evenly p-8 mt-4 pb-0">
      <div className="filters-item">
        <FilterOverlay
          visible={props.filtersState.filterOpen}
          tag={"property"}
          Component={PropertyFilter}
          direction={"left-0"}
        />
        <div
          className="filters-item-info"
          onClick={() => props.setFiltersActions("property")}
        >
          <img src={Inmueble} alt="" />
          <label>Inmueble</label>
        </div>
      </div>
      <div className="filters-item">
        <FilterOverlay
          visible={props.filtersState.filterOpen}
          tag={"location"}
          Component={PropertyFilter}
          direction={"left-0"}
        />
        <div
          className="filters-item-info"
          onClick={() => props.setFiltersActions("location")}
        >
          <img src={Ubicacion} alt="" />
          <label>Ubicación</label>
        </div>
      </div>
      <div className="filters-item">
        <FilterOverlay
          visible={props.filtersState.filterOpen}
          tag={"price"}
          Component={PriceFilter}
          direction={"left-0"}
        />
        <div
          className="filters-item-info"
          onClick={() => props.setFiltersActions("price")}
        >
          <img src={Precio} alt="" style={{ width: "2rem" }} />
          <label>Precio</label>
        </div>
      </div>
      <div className="filters-item">
        <FilterOverlay
          visible={props.filtersState.filterOpen}
          tag={"status"}
          Component={StratumFilter}
          direction={"left-0"}
        />
        <div
          className="filters-item-info"
          onClick={() => props.setFiltersActions("status")}
        >
          <img src={Estrato} alt="" />
          <label>Estrato</label>
        </div>
      </div>
      <div className="filters-item">
        <FilterOverlay
          visible={props.filtersState.filterOpen}
          tag={"area"}
          Component={AreaFilter}
          direction={"right-0"}
        />
        <div
          className="filters-item-info"
          onClick={() => props.setFiltersActions("area")}
        >
          <img src={Area} alt="" />
          <label>Area</label>
        </div>
      </div>
      <div className="filters-item">
        <FilterOverlay
          visible={props.filtersState.filterOpen}
          tag={"more"}
          Component={MoreFilter}
          direction={"right-0"}
        />
        <div
          className="filters-item-info"
          onClick={() => props.setFiltersActions("more")}
        >
          <img src={Add} alt="" />
          <label>Más Filtros</label>
        </div>
      </div>
    </div>
  );
}
function FiltersComponentMobile(props: any): JSX.Element {
  return (
    <div className="filters-container flex font-lato justify-evenly p-1 mt-4 pb-0">
      <div className="filters-item">
        <FilterOverlay
          visible={props.filtersState.filterOpen}
          tag={"location"}
          Component={PropertyFilter}
          direction={"left-0"}
        />
        <div
          className="filters-item-info"
          onClick={() => props.setFiltersActions("location")}
        >
          <img src={Ubicacion} alt="" />
          <label>Ubicación</label>
        </div>
      </div>
      <div className="filters-item">
        <FilterOverlay
          visible={props.filtersState.filterOpen}
          tag={"location"}
          Component={PropertyFilter}
          direction={"left-0"}
        />
        <div
          className="filters-item-info"
          onClick={() => props.setFiltersActions("location")}
        >
          <label>+ Más filtros</label>
        </div>
      </div>
    </div>
  );
}
function FilterOverlay(props: FilterOverlayProps): JSX.Element {
  const { visible, tag, Component, direction } = props;
  return (
    <div
      style={{
        display: visible === tag ? "block" : "none",
        position: "relative",
      }}
    >
      <div
        className={`card-filter-options font-lato text-pursianBlue mb-4 ${direction}`}
      >
        <Component />
      </div>
    </div>
  );
}

const _mapDispatchToProps = (dispatch: any) => ({
  setFiltersActions: (filterOpen: string) =>
    dispatch(setFiltergAction(filterOpen)),
});

const mapStateToProps = (state: any) => ({
  ...state,
});
export default connect(mapStateToProps, _mapDispatchToProps)(FiltersComponent);
