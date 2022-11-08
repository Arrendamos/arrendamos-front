/* eslint-disable react-hooks/exhaustive-deps */
import { CardProperty } from "../../Common";
import { CardPropertyPropsI, TypeProperty } from "../../Interfaces";
import HomeIcon from "../../Assets/Icons/Common/Home.svg";

// import { PropertyService } from "../../Services/Property.service";

// import { useEffect, useState } from "react";
// import { PropertyModel } from "../../models/Property.model";

import { CardSkeleton } from "../../Skeleton";
import imgTest from "../../Assets/Images/test/TestOportunity.png";

import { TypePropertyInfo } from "../../Utils/Data/TypeProperty";

import "./style.css";

export function PropertiesComponent(): JSX.Element {
  // const propertyService = new PropertyService();

  // ----- test enviroment -----
  const cardExample: CardPropertyPropsI = {
    id: 1,
    image: imgTest,
    price: 0,
    area: 120,
    bathroom: 2,
    parking: 2,
    address: "",
    location: "",
    city: "Bogotá",
  };
  let cards: CardPropertyPropsI[] = [];
  for (let i = 0; i < 3; i++) {
    let card = { ...cardExample };
    card.id = i + 1;
    if (i === 0) {
      card.city = "Medellín";
    } else if (i === 1) {
      card.city = "Bogotá";
    } else {
      card.city = "Cali";
    }
    cards.push(card);
  }
  // ----- test enviroment -----

  // const [properties, setProperties] = useState<CardPropertyPropsI[]>([]);

  const skeletonCount = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  // useEffect(() => {
  //   setTimeout(() => {
  //     _getProperties();
  //   }, 1500);
  // }, []);

  // const _getProperties = async () => {
  //   const propertiesResponse =
  //     await propertyService.getAllActivePropertiesResume();
  //   propertiesResponse.forEach(async (property: PropertyModel) => {
  //     const card: CardPropertyPropsI = {
  //       id: property.id,
  //       price: property.PropertyDetails.canon_price,
  //       area: property.PropertyDetails.area,
  //       bathroom: property.PropertyDetails.bathrooms,
  //       parking: property.parking,
  //       address: property.PropertyDetails.address,
  //       location: property.PropertyDetails.street,
  //       city: property.city,
  //       image: property.PropertyImages[0].link,
  //     };
  //     setProperties([...properties, card]);
  //   });
  // };

  return (
    <>
      <div className="tittle-container font-lato">
        <img src={HomeIcon} alt="Home" />
        <h2 className="tittle-text">Lo que las empresas nescesitan </h2>
      </div>
      <FilterTypeProperty />
      <div className="progress-property-container mx-auto my-4">
        <div className="progress-bar"></div>
      </div>
      <div className="property-grid-container">
        {cards.length > 0
          ? cards.map((card, index) => {
              return (
                <div className="flex justify-center" key={index}>
                  <CardProperty {...card} />
                </div>
              );
            })
          : skeletonCount.map((index) => {
              return <CardSkeleton key={index} />;
            })}
      </div>
    </>
  );
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
