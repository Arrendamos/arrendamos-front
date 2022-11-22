import { useState } from "react";
// import Popup from "reactjs-popup";

import { NavBar } from "../../../../Components";
import {
  PropertyInfoForm,
  PropertyFeaturesForm,
  PropertyLocationInfoForm,
  PropertyCloseLocationForm,
  PropertyImageForm,
} from "../../../../Common/Forms";

import { PropertyService } from "../../../../Services/Property.service";

import { PropertyModel } from "../../../../models/Property.model";

// import Logo from "../../../../Assets/Logo.png";
// import PopPupBody from "../../../../Assets/Images/PopPupImg.png";

import "reactjs-popup/dist/index.css";
import "./style.css";
import Swal from "sweetalert2";

export function CreatePropertyPage() {
  const propertyService = new PropertyService();

  // const [open, setOpen] = useState(false);
  const [checkTerms, setCheckTerms] = useState(false);

  const initStatePropertyInfo = {
    type: "0",
    price: 0,
    admin_price: 0,
    antiquity: "0",
    description: "",
    stratum: 0,
    area: 0,
    private_area: 0,
    status: "0",
    bathrooms: 0,
    parking: 0,
    elevators: 0,
    floors: 0,
  };

  const initStatePropertyFeatures: {
    features: string[];
    other_features: string;
  } = {
    features: [],
    other_features: "",
  };

  const initStatePropertyLocationInfo = {
    city: "",
    neighborhood: "",
    address: "",
    address_complement: "",
  };

  const initStatePropertyCloseLocation: string[] = [];

  const initStatePropertyImage = {
    link_map: "",
    virtual_tour: "",
    youtube_video: "",
  };

  const [propertyInfo, setPropertyInfo] = useState(initStatePropertyInfo);
  const [propertyFeatures, setPropertyFeatures] = useState(
    initStatePropertyFeatures
  );
  const [propertyLocationInfo, setPropertyLocationInfo] = useState(
    initStatePropertyLocationInfo
  );
  const [propertyCloseLocation, setPropertyCloseLocation] = useState(
    initStatePropertyCloseLocation
  );
  const [propertyImage, setPropertyImage] = useState(initStatePropertyImage);

  const _createProperty = async () => {
    const property: PropertyModel = {
      type: propertyInfo.type,
      price: Number.parseInt(propertyInfo.price.toString()),
      admin_price: Number.parseInt(propertyInfo.admin_price.toString()),
      antiquity: propertyInfo.antiquity,
      description: propertyInfo.description,
      stratum: Number.parseInt(propertyInfo.stratum.toString()),
      area: Number.parseInt(propertyInfo.area.toString()),
      private_area: Number.parseInt(propertyInfo.private_area.toString()),
      status: propertyInfo.status,
      bathrooms: Number.parseInt(propertyInfo.bathrooms.toString()),
      parking: Number.parseInt(propertyInfo.parking.toString()),
      elevators: Number.parseInt(propertyInfo.elevators.toString()),
      floors: Number.parseInt(propertyInfo.floors.toString()),
      features: [...propertyFeatures.features, propertyFeatures.other_features],
      city: propertyLocationInfo.city,
      neighborhood: propertyLocationInfo.neighborhood,
      address: propertyLocationInfo.address,
      address_complement: propertyLocationInfo.address_complement,
      link_map: propertyImage.link_map,
      close_to: propertyCloseLocation,
      virtual_tour: propertyImage.virtual_tour,
      youtube_video: propertyImage.youtube_video,
      photos: {
        idProperty: "",
        images: [],
      },
      user_id: "1",
    };

    Swal.fire({
      allowOutsideClick: false,
      icon: "info",
      text: "Espere por favor",
    });

    Swal.showLoading(null);
    const response = await propertyService.createProperty(property);
    Swal.close();

    if (response) {
      Swal.fire(
        "Inmueble creado con exito ",
        "Tu inmueble ha sido creado con exito",
        "success"
      );
      setPropertyInfo(initStatePropertyInfo);
      setPropertyFeatures(initStatePropertyFeatures);
      setPropertyLocationInfo(initStatePropertyLocationInfo);
      setPropertyCloseLocation(initStatePropertyCloseLocation);
      setPropertyImage(initStatePropertyImage);
    } else {
      Swal.fire(
        "Error al crear el inmueble",
        "Ha ocurrido un error al crear el inmueble",
        "error"
      );
    }
  };
  return (
    <>
      <NavBar />
      <PropertyInfoForm
        propertyInfo={propertyInfo}
        setPropertyInfo={setPropertyInfo}
      />
      <PropertyFeaturesForm setPropertyFeatures={setPropertyFeatures} />
      <PropertyLocationInfoForm
        propertyLocationInfo={propertyLocationInfo}
        setPropertyLocationInfo={setPropertyLocationInfo}
      />
      <PropertyCloseLocationForm
        propertyCloseLocations={propertyCloseLocation}
        setPropertyCloseLocations={setPropertyCloseLocation}
      />
      <PropertyImageForm
        propertyImages={propertyImage}
        setPropertyImages={setPropertyImage}
      />
      <div className="card card-form-property font-lato mb-4">
        <label className="accept-terms-checkbox mt-4">
          Acepto el Tratamiento de mis datos personales y Terminos y
          Condiciones.
          <input
            type="checkbox"
            className="checked"
            checked={checkTerms}
            onChange={(e) => setCheckTerms(e.target.checked)}
          />
          <span className="checkmark"></span>
        </label>
        <div className="w-full text-center">
          <button
            className="btn-create-property"
            onClick={_createProperty}
            disabled={!checkTerms}
          >
            Publicar Inmueble
          </button>
        </div>
        <p className="info-create-property">
          *Se publicará en las proximas 24 Horas.
        </p>
        {/* <PopupRegisterUser open={open} setOpen={setOpen} /> */}
      </div>
    </>
  );
}
// type PopupRegisterUserProps = {
//   open: boolean;
//   setOpen: (open: boolean) => void;
// };

// function PopupRegisterUser(props: PopupRegisterUserProps): JSX.Element {
//   const { open, setOpen } = props;
//   return (
//     <Popup open={open} onClose={() => setOpen(false)}>
//       {() => (
//         <div className="modal">
//           <button className="close" onClick={() => setOpen(false)}>
//             &times;
//           </button>
//           <div className="header">
//             <img src={Logo} alt="" />
//           </div>
//           <div className="content">
//             <img src={PopPupBody} alt=""></img>
//             <p className="text-center">
//               Se publicará en las proximas 24 Horas.
//             </p>
//           </div>
//         </div>
//       )}
//     </Popup>
//   );
// }
