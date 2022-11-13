/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PropertyModel } from "../../models/Property.model";
import { PropertyService } from "../../Services/Property.service";
import {
  NavBar,
  PropertyImageCarousel,
  DescriptionProperty,
  Footer,
} from "../../Components";
import {
  RectangleImageSkeleton,
  SinglePropertyDescriptionSkeleton,
} from "../../Skeleton";

import "./style.css";

export function SinglePropertyPage(): JSX.Element {
  const propertyService = new PropertyService();
  const [property, setProperty] = useState<PropertyModel>();

  const { id } = useParams();

  useEffect((): void => {
    if (id) _getProperty(id);
  }, [id]);

  const _getProperty = async (id: string) => {
    const propertyResult: PropertyModel = await propertyService.getProperty(id);
    if (propertyResult) setProperty(propertyResult);
  };
  return (
    <>
      <NavBar />
      {property ? (
        <PropertyImageCarousel {...property} />
      ) : (
        <RectangleImageSkeleton />
      )}
      <div id="single-property-container" className="single-property-container">
        {property ? (
          <DescriptionProperty {...property} />
        ) : (
          <SinglePropertyDescriptionSkeleton />
        )}
      </div>
      <Footer />
    </>
  );
}
