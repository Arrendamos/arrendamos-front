import { useEffect, useState } from "react";
import { PriceStyle } from "../../Atoms";

import { PropertyModel } from "../../models/Property.model";

import { DescriptionItems } from "./DescriptionItems/DescriptionItems.component";
import { FeaturesProperty } from "./FeaturesProperty/FeaturesProperty.component";

import Location from "../../Assets/Icons/Common/Ubicacion.svg";

import "./style.css";

type DescriptionPropertyProps = {
  bathroom: number;
  parking: number;
  private_area: number;
  area: number;
  antiquity: string;
  stratum: number;
  admin_price: number;
};
export function DescriptionPropertyComponent(
  props: PropertyModel
): JSX.Element {
  const property = props;

  const [descriptionItem, setDescriptionItem] =
    useState<DescriptionPropertyProps>();

  const [interestItem, setInterestItem] = useState<object[]>();

  useEffect((): void => {
    if (property) {
      setDescriptionItem({
        bathroom: property.bathrooms,
        parking: property.parking,
        private_area: property.private_area,
        area: property.area,
        antiquity: property.antiquity,
        stratum: property.stratum,
        admin_price: property.admin_price,
      });
    }
  }, [property]);

  return (
    <>
      {property ? (
        <div className="single-description-property p-4 px-8 font-lato">
          <h2 className="tittle-type"> {property.type}</h2>
          <p className="price-description text-primaryColor">
            <PriceStyle number={property.price} />
          </p>
          <div className="flex mt-2">
            <img
              src={Location}
              alt=""
              style={{ marginRight: "0.5rem" }}
              width={22}
            />
            <label className="city-description">
              {property.city + ", " + property.neighborhood}
            </label>
          </div>
          <DescriptionItems {...descriptionItem} />
          <hr />
          <h2 className="subtittle-description">Descripción General</h2>
          <p className="paragraph-description">{property.description}</p>
          <hr />
          <hr />
          {/* <FeaturesProperty {...property.features} /> */}
          <hr />
        </div>
      ) : null}
    </>
  );
}
