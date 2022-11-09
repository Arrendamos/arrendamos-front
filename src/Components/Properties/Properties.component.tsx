/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { CardProperty } from "../../Common";
import { CardPropertyPropsI, TypeProperty } from "../../Interfaces";
import HomeIcon from "../../Assets/Icons/Common/Home.svg";

import { PropertyService } from "../../Services/Property.service";

import { PropertyResumeModel } from "../../models/Property.model";

import { CardSkeleton } from "../../Skeleton";

import { TypePropertyInfo } from "../../Utils/Data/TypeProperty";

import "./style.css";

export function PropertiesComponent(): JSX.Element {
  const propertyService = new PropertyService();

  const [properties, setProperties] = useState<CardPropertyPropsI[]>([]);

  useEffect(() => {
    _getProperties();
  }, []);

  const _getProperties = async () => {
    if (properties.length === 0) {
      const propertiesResponse = await propertyService.getPropertiesResume();
      propertiesResponse.forEach(async (property: PropertyResumeModel) => {
        const card: CardPropertyPropsI = {
          id: property.id,
          name: property.type,
          price: property.price,
          area: property.area,
          bathroom: property.bathrooms,
          parking: property.parking,
          neighborhood: property.neighborhood,
          city: property.city,
          image: property.imageUrl,
        };
        setProperties([...properties, card]);
      });
    }
  };

  return (
    <>
      <div className="tittle-container font-lato">
        <img src={HomeIcon} alt="Home" />
        <h2 className="tittle-text">Inmuebles</h2>
      </div>
      <FilterTypeProperty />
      <div className="progress-property-container mx-auto my-4">
        <div className="progress-bar"></div>
      </div>
      <div className="property-grid-container">
        {properties.length > 0 ? (
          properties.map((card, index) => {
            return (
              <div className="flex justify-center" key={index}>
                <CardProperty card={card} urlName="property" />
              </div>
            );
          })
        ) : (
          <SkeletonCards />
        )}
      </div>
    </>
  );
}

function SkeletonCards(): JSX.Element {
  let skeletonCards: JSX.Element[] = [];
  for (let index = 0; index < 6; index++) {
    skeletonCards.push(<CardSkeleton key={index} />);
  }
  return <>{skeletonCards}</>;
}
function FilterTypeProperty(): JSX.Element {
  const typePropertyInfo: TypeProperty[] = TypePropertyInfo;
  return (
    <div className="filter-type-property-container font-lato">
      {typePropertyInfo.map((typeProperty, index) => {
        const img = require(`../../Assets/Icons/Filters/Property/${typeProperty.icon}.svg`);

        return (
          <div
            className={`filter-type-property-item flex ${
              index === 0 ? "active-filter" : ""
            }`}
            key={index}
          >
            <img src={img} alt={typeProperty.name} />
            <p>{typeProperty.name}</p>
          </div>
        );
      })}
    </div>
  );
}
