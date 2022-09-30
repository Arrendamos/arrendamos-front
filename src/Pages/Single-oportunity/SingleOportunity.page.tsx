/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import SendIcon from "../../Assets/Icons/Common/Send.svg";

import {
  NavBar,
  PropertyImageCarousel,
  DescriptionProperty,
  ContactCard,
  Footer,
} from "../../Components";
import { PropertyModel } from "../../models/Property.model";

import "./style.css";

export function SingleOportunityPage(): JSX.Element {
  const isMobile = useMediaQuery({
    query: "(max-width: 850px)",
  });

  const img = require(`../../Assets/Images/test/TestOportunity.png`);

  const property: PropertyModel = {
    id: 1,
    PropertyImages: [
      {
        link: img,
        isMainImage: true,
        propertyId: 1,
      },
    ],
    active: true,
    city: "El poblado - Medelín",
    code: "Domino's Pizza",
    description:
      "Buscamos un local comercial de 120 mˆ2 a 160 mˆ2, ubicado preferiblemente sobre una via principal, esquinero, con zona de  parqueaderos y buena afluencia de peatones.",
    features: [
      "Esquinero",
      "Sobre via principal",
      "Alta afluencia de peatones",
      "Excelente visibilidad",
    ],
    interest: [
      {
        name: "Transporte Público ",
        places: [""],
      },
      {
        name: "Conjunto Residenciales",
        places: [""],
      },
    ],
    link_360: "",
    name: "Local Comercial",
    parking: 3,
    private_area: 0,
    PropertyDetails: {
      address: "Calle 63 # 55-23",
      area: 120,
      admin: 0,
      antiquity: 0,
      bathrooms: 2,
      canon_price: 0,
      elevator: 0,
      floor: 0,
      garage: 0,
      stratum: 0,
      type: "Casa",
      street: "Calle 63",
      propertyId: 1,
    },
  };

  const _openLink = () => {
    window.open("https://forms.gle/qmHhfUmuSk7JgGQw7");
  };

  return (
    <>
      <NavBar />
      <PropertyImageCarousel PropertyImages={property.PropertyImages} />
      <div id="single-property-container" className="single-property-container">
        <DescriptionProperty {...property} />
        {isMobile ? null : (
          <div className="relative">
            <ContactCard />
          </div>
        )}
      </div>
      <button
        className="btn-send-oportunity flex m-auto"
        onClick={() => _openLink()}
      >
        <img src={SendIcon} alt="Send" className="mr-4" />
        Enviar inmueble
      </button>
      <Footer />
    </>
  );
}
