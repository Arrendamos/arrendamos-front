import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavBar, PropertyImageCarousel, DescriptionProperty, ContactCard, Footer } from '../../Components';
import { PropertyModel } from '../../models/Property.model';
import { PropertyService } from '../../Services/Property.service';

import './style.css'

export function SinglePropertyPage(): JSX.Element {
    const propertyService = new PropertyService();
    const [property, setProperty] = useState<PropertyModel>();

    const { id } = useParams();

    useEffect((): void => {
        if (id) _getProperty(+id);
    }, [id]);


    const _getProperty = async (id: number) => {
        const propertiyResponse: PropertyModel = await propertyService.getProperty(id);
        if (propertiyResponse) setProperty(propertiyResponse);
    }
    return (
        <>
            <NavBar />
            {property ? <PropertyImageCarousel {...property} /> : null}
            <div id="single-property-container" className='single-property-container'>
                {property ? <DescriptionProperty {...property} /> : null}
                <div className='relative'>
                    <ContactCard />
                </div>
            </div>
            <Footer />
        </>
    )
}