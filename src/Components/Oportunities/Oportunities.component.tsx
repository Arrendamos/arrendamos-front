import { useEffect, useState } from "react";

import { CardProperty, FilterTypeProperty } from "../../Common";
import { CardSkeleton } from "../../Skeleton";

import { CardPropertyPropsI } from "../../Interfaces";
import { OportunityResumeModel } from "../../models/Property.model";

import HomeIcon from "../../Assets/Icons/Common/Home.svg";
import OfficeTest from "../../Assets/Images/test/OfficeTest.png";
import BodegaTest from "../../Assets/Images/test/BodegaTest.png";
import IslaTest from "../../Assets/Images/test/IslaTest.png";

import "./style.css";

export function OportunitiesComponent(): JSX.Element {
  // const propertyService = new PropertyService();

  const oportunitiesMock: OportunityResumeModel[] = [
    {
      id: "#",
      type: "Oficina",
      area: 800,
      city: "Barranquilla",
      neighborhood: "Alto prado",
      image: OfficeTest,
    },
    {
      id: "#",
      type: "Bodega comercial",
      area: 280,
      city: "Tunja",
      neighborhood: "Centro",
      image: BodegaTest,
    },
    {
      id: "#",
      type: "Isla comercial",
      area: 20,
      city: "Bucaramanga",
      neighborhood: "Cabecera del Llanoo",
      image: IslaTest,
    },
  ];

  const [oportunities, setOportunities] = useState<CardPropertyPropsI[]>([]);

  useEffect(() => {
    _getProperties();
  }, []);

  const _getProperties = async () => {
    if (oportunities.length === 0) {
      // const propertiesResponse = await propertyService.getPropertiesResume();
      oportunitiesMock.forEach(async (oportunity: OportunityResumeModel) => {
        const card: CardPropertyPropsI = {
          id: oportunity.id,
          name: oportunity.type,
          area: oportunity.area,
          neighborhood: oportunity.neighborhood,
          city: oportunity.city,
          image: oportunity.image as string,
        };
        setOportunities((oportunities) => [...oportunities, card]);
      });
    }
  };
  return (
    <>
      <div className="title-container font-lato">
        <img src={HomeIcon} alt="Home" />
        <h2 className="title-text">Lo que las empresas necesitan </h2>
      </div>
      <p className="paragraph-oportunities">
        Encuentra oportunidades unicas para arrendar tu local lo antes posible.
      </p>
      <div className="container-oportunities">
        <hr />
        <FilterTypeProperty />
        <div className="oportunities-grid-container">
          {oportunities.length > 0 ? (
            oportunities.map((card, index) => {
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
