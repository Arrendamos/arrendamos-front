import { TypePropertyInfo, TypeProperty } from "../../Utils/Data/TypeProperty";

import "./style.css";

export function FilterTypePropertyCommon(): JSX.Element {
  const typePropertyInfo: TypeProperty[] = TypePropertyInfo;
  return (
    <div className="filter-type-property-container font-lato">
      {typePropertyInfo.map((typeProperty, index) => {
        const img = require(`../../Assets/Icons/Filters/Property/${typeProperty.icon}.svg`);

        return (
          <div
            className={`filter-type-property-item flex ${
              index === 0 ? "active-filter" : ""
            }`}
            key={index}
          >
            <img src={img} alt={typeProperty.name} />
            <p>{typeProperty.name}</p>
          </div>
        );
      })}
    </div>
  );
}
