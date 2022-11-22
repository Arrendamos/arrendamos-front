// import { useRef } from "react";
// import Edificio from "../../../../Assets/Icons/Filters/Property/Edificio.svg";
// import { GrAddCircle } from "react-icons/gr";

import "./style.css";

type PropertyImagesInterface = {
  link_map: string;
  virtual_tour: string;
  youtube_video: string;
};
type PropertyImagesProps = {
  propertyImages: PropertyImagesInterface;
  setPropertyImages: React.Dispatch<
    React.SetStateAction<PropertyImagesInterface>
  >;
};
export function PropertyImageForm(props: PropertyImagesProps): JSX.Element {
  const { propertyImages, setPropertyImages } = props;

  // const inputFile = useRef<any>(null);

  // const onButtonClick = () => {
  //   inputFile.current.click();
  // };

  const _onChangeSetPropertyImage = (e: any) => {
    const { name, value } = e.target;
    setPropertyImages((propertyImages) => ({
      ...propertyImages,
      [name]: value,
    }));
  };
  return (
    <div className="card card-form-property font-lato">
      <h1 className="tittle">Imágenes de referencia del inmueble comercial</h1>
      {/* <div className="property-image-add">
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
      </div> */}
      <div className="tour-form-container">
        <input
          className="input-form"
          name="link_map"
          value={propertyImages.link_map}
          onChange={_onChangeSetPropertyImage}
          type="text"
          placeholder="Link del recorrido virtual"
        />
        <input
          className="input-form"
          name="virtual_tour"
          value={propertyImages.virtual_tour}
          onChange={_onChangeSetPropertyImage}
          type="text"
          placeholder="Link del recorrido virtual"
        />
        <input
          className="input-form"
          name="youtube_video"
          value={propertyImages.youtube_video}
          onChange={_onChangeSetPropertyImage}
          type="text"
          placeholder="Link del video en Youtube"
        />
      </div>
    </div>
  );
}

// function ImagePendingAdd(): JSX.Element[] {
//   const imgPending: JSX.Element[] = [];
//   for (let i = 0; i < 3; i++) {
//     imgPending.push(
//       <div key={i} className="add-image-box">
//         <div className="flex items-center justify-center align-middle h-full">
//           <img className="img-add-bulding" src={Edificio} alt="" />
//         </div>
//       </div>
//     );
//   }
//   return imgPending;
// }
