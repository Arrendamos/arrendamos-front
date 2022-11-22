import { PropertyFormData } from "../../../../Interfaces/Forms";
import { PropertyFormInfo } from "../../../../Utils/Forms/Property";

import "./style.css";

type PropertyFeaturesProps = {
  setPropertyFeatures: React.Dispatch<
    React.SetStateAction<{
      features: string[];
      other_features: string;
    }>
  >;
};

export function PropertyFeaturesForm(
  props: PropertyFeaturesProps
): JSX.Element {
  const { setPropertyFeatures } = props;
  const propertyFormInfo: PropertyFormData = PropertyFormInfo;

  const _onChangeSetPropertyFeatures = (e: any) => {
    const { name, checked } = e.target;
    if (checked) {
      setPropertyFeatures((propertyFeatures) => ({
        ...propertyFeatures,
        features: [...propertyFeatures.features, name],
      }));
    } else {
      setPropertyFeatures((propertyFeatures) => ({
        ...propertyFeatures,
        features: propertyFeatures.features.filter(
          (feature) => feature !== name
        ),
      }));
    }
  };

  const _onChangeTextArea = (e: any) => {
    const { value } = e.target;
    setPropertyFeatures((propertyFeatures) => ({
      ...propertyFeatures,
      other_features: value,
    }));
  };
  return (
    <div className="card card-form-property font-lato">
      <h1 className="tittle">Características</h1>
      <div className="px-2">
        {propertyFormInfo.features.map((feature, index) => {
          return (
            <PropertyFeaturesItem
              key={index}
              feature={feature}
              _onChangeSetPropertyFeatures={_onChangeSetPropertyFeatures}
            />
          );
        })}
      </div>
      <h1 className="tittle" style={{ color: "#004f6f" }}>
        Otras Caracteristicas
      </h1>
      <textarea
        placeholder="Apto para modificaciones"
        cols={30}
        rows={3}
        onChange={_onChangeTextArea}
      ></textarea>
    </div>
  );
}

type PropertyFeaturesItemProps = {
  feature: string;
  _onChangeSetPropertyFeatures: (e: any) => void;
};
function PropertyFeaturesItem(props: PropertyFeaturesItemProps): JSX.Element {
  const { feature, _onChangeSetPropertyFeatures } = props;

  return (
    <div className="property-features-item font-lato">
      <label className="container-radio">
        {feature}
        <input
          name={feature}
          type="checkbox"
          onChange={_onChangeSetPropertyFeatures}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
}
