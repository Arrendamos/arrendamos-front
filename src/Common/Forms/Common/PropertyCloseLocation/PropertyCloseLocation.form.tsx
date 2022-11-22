import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";

import "./style.css";

type PropertyCloseLocationsProps = {
  propertyCloseLocations: string[];
  setPropertyCloseLocations: React.Dispatch<React.SetStateAction<string[]>>;
};
export function PropertyCloseLocationForm(
  props: PropertyCloseLocationsProps
): JSX.Element {
  const { propertyCloseLocations, setPropertyCloseLocations } = props;

  const [currentFeature, setCurrentFeature] = useState("");

  const _addCloseLocation = () => {
    if (currentFeature.replace(" ", "") === "") return;
    setPropertyCloseLocations((propertyCloseLocations) => [
      ...propertyCloseLocations,
      currentFeature,
    ]);
    setCurrentFeature("");
  };
  const _removeCloseLocation = (index: number) => {
    const newFeatures = [...propertyCloseLocations];
    newFeatures.splice(index, 1);
    setPropertyCloseLocations(newFeatures);
  };

  return (
    <div className="card card-form-property font-lato">
      <h1 className="tittle">Lugares cercanos y sitios de interés</h1>
      <h2 className="subtitle">
        Escribe los lugares que te gustaria estuvieran cerca al inmueble que
        estas buscando
      </h2>
      <div className="form-input-container">
        <div className="input-close-location-container flex justify-around">
          <input
            type="text"
            placeholder="Lugares cercanos"
            value={currentFeature}
            onChange={(event) => setCurrentFeature(event.target.value)}
            onKeyPress={(event) =>
              event.key === "Enter" ? _addCloseLocation() : null
            }
          />
          <button>
            <BsPlusLg
              style={{ margin: "auto", color: "white" }}
              onClick={_addCloseLocation}
            />
          </button>
        </div>
        <label className="example-label">
          Ej: Universidades, Parqueaderos, bancos
        </label>
        <div className="tags-features flex my-2 flex-wrap">
          {propertyCloseLocations.map((feature, index) => {
            return (
              <span key={index} className="tag">
                {feature}{" "}
                <span
                  className="remove-tag"
                  onClick={() => _removeCloseLocation(index)}
                >
                  &#10006;
                </span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
