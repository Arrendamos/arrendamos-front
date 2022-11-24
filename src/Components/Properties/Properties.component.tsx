/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import { CardProperty, FilterTypeProperty } from "../../Common";
import { CardSkeleton } from "../../Skeleton";

import { PropertyService } from "../../Services/Property.service";

import { CardPropertyPropsI } from "../../Interfaces";

import { PropertyResumeModel } from "../../models/Property.model";

import HomeIcon from "../../Assets/Icons/Common/Home.svg";

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
        setProperties((properties) => [...properties, card]);
      });
    }
  };

  return (
    <>
      <div className="title-container font-lato mt-4">
        <img style={{ marginTop: "0.8rem" }} src={HomeIcon} alt="Home" />
        <h2 className="title-text">Inmuebles</h2>
      </div>
      <FilterTypeProperty />
      <div className="progress-static-container">
        <div className="progress-static-bar"></div>
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
