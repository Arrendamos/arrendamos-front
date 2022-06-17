import { CardProperty } from "../../Common";
import { CardPropertyPropsI } from "../../Interfaces";
import HomeIcon from '../../Assets/Icons/Common/Home.svg';

import { PropertyService } from "../../Services/Property.service";

import { useEffect, useState } from "react";
import { PropertyModel } from "../../models/Property.model";

import { CardSkeleton } from "../../Skeleton";

import './style.css'

export function PropertiesComponent(): JSX.Element {

    const propertyService = new PropertyService();
    const [properties, setProperties] = useState<CardPropertyPropsI[]>([]);
    const skeletonCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    useEffect(() => {
        setTimeout(() => {
            _getProperties();
        }, 1500);
    }, []);

    const _getProperties = async () => {
        const propertiesResponse = await propertyService.getAllActivePropertiesResume();
        propertiesResponse.forEach(async (property: PropertyModel) => {
            const card: CardPropertyPropsI = {
                id: property.id,
                price: property.PropertyDetails.canon_price,
                area: property.PropertyDetails.area,
                bathroom: property.PropertyDetails.bathrooms,
                parking: property.parking,
                address: property.PropertyDetails.address,
                location: property.PropertyDetails.street,
                city: property.city,
                image: property.PropertyImages[0].link,
            }
            setProperties([...properties, card]);
        });
    }
    return (
        < >
            <div className="tittle-container font-lato">
                <img src={HomeIcon} alt="Home" />
                <h2 className="tittle-text">Inmuebles</h2>
            </div>
            <div className="progress-property-container mx-auto my-4">
                <div className="progress-bar"></div>
            </div>
            <div className="property-grid-container">
                {properties.length > 0
                    ? properties.map((card, index) => {
                        return (
                            <div className="flex justify-center" key={index}>
                                <CardProperty {...card} />
                            </div>
                        )
                    })
                    : skeletonCount.map((index) => {
                        return (
                            <CardSkeleton key={index} />
                        )
                    })
                }
            </div>
        </>
    )
}