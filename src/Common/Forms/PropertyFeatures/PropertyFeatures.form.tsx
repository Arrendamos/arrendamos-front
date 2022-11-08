import { PropertyFormData } from "../../../Interfaces/Forms";
import { PropertyFormInfo } from "../../../Utils/Forms/Property";

import "./style.css";

export function PropertyFeaturesFormCommon() {
  const propertyFormInfo: PropertyFormData = PropertyFormInfo;

  return (
    <div className="card card-form-property font-lato">
      <h1 className="tittle">Características</h1>
      <div className="px-2">
        {propertyFormInfo.features.map((feature, index) => {
          return <PropertyFeaturesItem key={index} feature={feature} />;
        })}
      </div>
      <h1 className="tittle" style={{ color: "#004f6f" }}>
        Otras Caracteristicas
      </h1>
      <textarea
        placeholder="Apto para modificaciones"
        cols={30}
        rows={3}
      ></textarea>
    </div>
  );
}

type PropertyFeaturesItemProps = {
  feature: string;
};
function PropertyFeaturesItem(props: PropertyFeaturesItemProps): JSX.Element {
  const { feature } = props;

  return (
    <div className="property-features-item font-lato">
      <label className="container-radio">
        {feature}
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
    </div>
  );
}
