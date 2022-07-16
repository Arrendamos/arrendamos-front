import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { PriceStyle } from "../../Atoms";

import { PropertyModel } from "../../models/Property.model";
import { DescriptionItem, DetailsItem } from "../../Interfaces";

import { DescriptionItems } from "./DescriptionItems/DescriptionItems.component";
import { MobileBanner } from "./MobileBanner/MobileBanner.component";
import { DetailsProperty } from "./DetailsProperty/DetailsProperty.component";
import { FeaturesProperty } from "./FeaturesProperty/FeaturesProperty.component";
import { InterestProperty } from "./InterestProperty/InterestProperty.component";

import Location from "../../Assets/Icons/Common/Ubicacion.svg";

import "./style.css";

export function DescriptionPropertyComponent(
  props: PropertyModel
): JSX.Element {
  const isMobile = useMediaQuery({
    query: "(max-width: 850px)",
  });
  const property = props;

  const [descriptionItem, setDescriptionItem] = useState<DescriptionItem>();
  const [detailsItem, setDetailsItem] = useState<DetailsItem>();
  const [interestItem, setInterestItem] = useState<object[]>();

  useEffect((): void => {
    if (property) {
      setDescriptionItem({
        bathroom: property.PropertyDetails.bathrooms,
        parking: property.parking,
        private_area: property.PropertyDetails.area,
        antiquity: property.PropertyDetails.antiquity,
        stratum: property.PropertyDetails.stratum,
        admin_price: property.PropertyDetails.admin,
      });
      setDetailsItem({
        canon_price: property.PropertyDetails.canon_price,
        admin: property.PropertyDetails.admin,
        address: property.PropertyDetails.address,
        street: property.PropertyDetails.street,
        type: property.PropertyDetails.type,
        antiquity: property.PropertyDetails.antiquity,
        floor: property.PropertyDetails.floor,
        area: property.PropertyDetails.area,
        garage: property.PropertyDetails.garage,
        bathrooms: property.PropertyDetails.bathrooms,
        stratum: property.PropertyDetails.stratum,
        elevator: property.PropertyDetails.elevator,
      });
      setInterestItem(property.interest);
    }
  }, [property]);
  return (
    <>
      {property ? (
        <div className="single-description-property p-4 px-8 font-lato">
          <h2 className="tittle-description"> {property.name}</h2>
          <label className="cod-description">{property.code}</label>
          <p className="price-description text-greenCyan">
            <PriceStyle number={property.PropertyDetails.canon_price} />
          </p>
          <div className="flex">
            <img
              src={Location}
              alt=""
              style={{ marginRight: "0.5rem" }}
              width={22}
            />
            <label className="city-description">{property.city}</label>
          </div>
          <DescriptionItems {...descriptionItem} />
          {isMobile ? (
            <>
              <hr />
              <MobileBanner />
            </>
          ) : null}
          <hr />
          <h2 className="subtittle-description">Descripción General</h2>
          <p className="paragraph-description">{property.description}</p>
          <hr />
          <DetailsProperty {...detailsItem} />
          <hr />
          <FeaturesProperty {...property.features} />
          <hr />
          <InterestProperty {...interestItem} />
        </div>
      ) : null}
    </>
  );
}
