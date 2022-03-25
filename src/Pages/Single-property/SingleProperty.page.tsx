import { NavBar, PropertyImageCarousel, DescriptionProperty, ContactCard, Footer } from '../../Components';

import './style.css'

export function SinglePropertyPage(): JSX.Element {
    return (
        <>
            <NavBar />
            <PropertyImageCarousel />
            <div id="single-property-container" className='single-property-container'>
                <DescriptionProperty />
                <div className='relative'>
                    <ContactCard />
                </div>
            </div>
            <Footer />
        </>
    )
}