import { useEffect, useState } from "react";
import { PriceStyle } from "../../Atoms";

import { PropertyModel } from "../../models/Property.model";

import { DescriptionItems } from "./DescriptionItems/DescriptionItems.component";
import { DetailsProperty } from "./DetailsProperty/DetailsProperty.component";
import { FeaturesProperty } from "./FeaturesProperty/FeaturesProperty.component";
import { InterestProperty } from "./InterestProperty/InterestProperty.component";
import { MapProperty } from "./MapProperty/MapProperty.component";
import { ContactProperty } from "./ContactProperty/ContactProperty.component";

import Location from "../../Assets/Icons/Common/Ubicacion.svg";

import "./style.css";

type DescriptionPropertyProps = {
  bathroom: number;
  parking: number;
  private_area: number;
  area: number;
  antiquity: string;
  stratum: number;
};

type DetailsPropertyProps = {
  price: number;
  admin_price: number;
  address: string;
  neighborhood: string;
  type: string;
  antiquity: string;
  floor: number;
  area: number;
  parking: number;
  bathrooms: number;
  stratum: number;
  elevators: number;
};

export function DescriptionPropertyComponent(
  props: PropertyModel
): JSX.Element {
  const property = props;

  const [descriptionItem, setDescriptionItem] =
    useState<DescriptionPropertyProps>();

  const [detailsItem, setDetailsItem] = useState<DetailsPropertyProps>();
  const [featuresItem, setFeaturesItem] = useState<string[] | null>();
  const [interestItem, setInterestItem] = useState<string[] | null>();
  const [mapItem, setMapItem] = useState<string | null>();

  useEffect((): void => {
    setDescriptionItem({
      bathroom: property.bathrooms,
      parking: property.parking,
      private_area: property.private_area,
      area: property.area,
      antiquity: property.antiquity,
      stratum: property.stratum,
    });
    setDetailsItem({
      price: property.price,
      admin_price: property.admin_price,
      address: property.address,
      neighborhood: property.neighborhood,
      type: property.type,
      antiquity: property.antiquity,
      floor: property.floors,
      area: property.area,
      parking: property.parking,
      bathrooms: property.bathrooms,
      stratum: property.stratum,
      elevators: property.elevators,
    });
    setFeaturesItem(property.features);
    setInterestItem(property.close_to);
    setMapItem(property.link_map);
  }, [property]);

  return (
    <>
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
        <DetailsProperty {...detailsItem} />
        <hr />
        {featuresItem ? <FeaturesProperty {...featuresItem} /> : null}
        <hr />
        {interestItem ? <InterestProperty {...interestItem} /> : null}
        <hr />
        {mapItem ? <MapProperty linkMap={mapItem} /> : null}
        <hr />
        <ContactProperty />
      </div>
    </>
  );
}
