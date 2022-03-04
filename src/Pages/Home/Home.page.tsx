import { Header, NavBar, FeaturedProperty, BenefitsToUse, OurPartners, Testimony, Footer } from '../../Components';
import { Banner } from '../../Common';
import BannersInfo from '../../Utils/Data/Banners'

export function HomePage(): JSX.Element {
    return (
        <>
            <NavBar />
            <Header />
            <FeaturedProperty />
            <BenefitsToUse />
            <Banner {...BannersInfo[0]} />
            <OurPartners />
            <Testimony />
            <Banner {...BannersInfo[1]} />
            <Footer />
        </>
    );
}