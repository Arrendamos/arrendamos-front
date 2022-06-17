import { Header, NavBar, FeaturedProperty, BenefitsToUse, Banners, OurPartners, Testimony, Footer } from '../../Components';

export function HomePage(): JSX.Element {
    return (
        <>
            <NavBar />
            <Header />
            <FeaturedProperty />
            <BenefitsToUse />
            <Banners />
            <OurPartners />
            <Testimony />
            <Footer />
        </>
    );
}