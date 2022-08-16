import { BiSearch } from "react-icons/bi";

import "./style.css";

export function HeaderMobileFilterCommon(): JSX.Element {
  return (
    <div className="box-filter-mobile grid gap-0">
      <div className="box-item-filter">
        <input
          className="input-search-filter"
          placeholder="Buscar Inmueble"
          type="text"
        />
      </div>
      <div className="filter-btn-search">
        <button className="bg-greenCyan w-full h-full text-white text-center hover:bg-greenCyanHover">
          <BiSearch className="mx-auto text-3xl" />
        </button>
      </div>
    </div>
  );
}
