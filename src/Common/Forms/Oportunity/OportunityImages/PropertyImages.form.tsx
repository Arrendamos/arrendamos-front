import Edificio from "../../../../Assets/Icons/Filters/Property/Edificio.svg";
import { GrAddCircle } from "react-icons/gr";

import "./style.css";
import { useRef } from "react";

export function OportunityImageForm(): JSX.Element {
  const inputFile = useRef<any>(null);

  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };

  return (
    <div className="card card-form-property font-lato">
      <h1 className="tittle">Imágenes de referencia del inmueble comercial</h1>
      <div className="property-image-add">
        <div
          className="add-image-box main-image cursor-pointer hover:bg-sky-300"
          onClick={onButtonClick}
        >
          <input
            type="file"
            id="file"
            accept="image/png, image/jpeg"
            ref={inputFile}
            style={{ display: "none" }}
          />
          <div className="flex items-center justify-center align-middle h-full">
            <img
              className="img-add-bulding"
              src={Edificio}
              alt=""
              style={{ marginRight: "0.8rem" }}
            />
            <h1>Foto Principal</h1>
          </div>
        </div>
        <div className="property-image-add-pending">
          {ImagePendingAdd()}
          <div className="add-image-box cursor-pointer hover:bg-sky-300">
            <div className="flex items-center justify-center align-middle h-full p-3 ">
              <h1>Agregar Fotos</h1>
              <GrAddCircle
                style={{
                  fontSize: "1.8rem",
                  filter: "brightness(0) invert(1)",
                  marginLeft: "0.2rem",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImagePendingAdd(): JSX.Element[] {
  const imgPending: JSX.Element[] = [];
  for (let i = 0; i < 3; i++) {
    imgPending.push(
      <div key={i} className="add-image-box">
        <div className="flex items-center justify-center align-middle h-full">
          <img className="img-add-bulding" src={Edificio} alt="" />
        </div>
      </div>
    );
  }
  return imgPending;
}
