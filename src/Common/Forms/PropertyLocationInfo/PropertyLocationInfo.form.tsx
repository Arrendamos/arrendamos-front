import { useState } from "react";
import { AiOutlineEnter } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";

import "./style.css";

export function PropertyLocationInfoFormCommon() {
  const [propertyFeatures, setPropertyFeatures] = useState<String[]>([]);
  const [currentFeature, setCurrentFeature] = useState("");
  const _addFeature = () => {
    if (currentFeature.replace(" ", "") === "") return;
    setPropertyFeatures([...propertyFeatures, currentFeature]);
    setCurrentFeature("");
  };
  const _removeFeature = (index: number) => {
    const newFeatures = [...propertyFeatures];
    newFeatures.splice(index, 1);
    setPropertyFeatures(newFeatures);
  };
  return (
    <>
      <div className="card card-form-property font-lato">
        <h1 className="tittle">Ubicación del inmueble</h1>
        <div className="form-input-container">
          <input className="input-form" type="text" placeholder="Ciudad" />
          <input
            className="input-form"
            type="text"
            placeholder="Barrio/Sector"
          />
        </div>
      </div>
      <div className="card card-form-property font-lato">
        <h1 className="tittle">Lugares cercanos y sitios de interés</h1>
        <h2 className="subtitle">
          Escribe los lugares que te gustaria estuvieran cerca al inmueble que
          estas buscando
        </h2>
        <div className="form-input-container">
          <div className="input-location-container flex justify-around">
            <input
              type="text"
              placeholder="Lugares cercanos"
              value={currentFeature}
              onChange={(event) => setCurrentFeature(event.target.value)}
              onKeyPress={(event) =>
                event.key === "Enter" ? _addFeature() : null
              }
            />
            <button>
              <BsPlusLg
                style={{ margin: "auto", color: "white" }}
                onClick={_addFeature}
              />
            </button>
          </div>
          <label className="example-label">
            Ej: Universidades, Parqueaderos, bancos
          </label>
          <div className="tags-features flex my-2 flex-wrap">
            {propertyFeatures.map((feature, index) => {
              return (
                <span key={index} className="tag">
                  {feature}{" "}
                  <span
                    className="remove-tag"
                    onClick={() => _removeFeature(index)}
                  >
                    &#10006;
                  </span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
