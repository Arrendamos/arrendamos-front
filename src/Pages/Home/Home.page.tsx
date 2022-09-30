import {
  NavBar,
  Header,
  HowWorks,
  Oportunities,
  OurPartners,
  Testimony,
  Footer,
} from "../../Components";

import Ribera from "../../Assets/Images/Ribera.png";

import "./style.css";

export function HomePage(): JSX.Element {
  const _openLink = () => {
    window.open("https://lariberacc.com/");
  };

  return (
    <>
      <NavBar />
      <Header />
      <HowWorks />
      <Oportunities />
      <OurPartners />
      <Testimony />
      <div className="invert-property-container font-lato" onClick={_openLink}>
        <h1 className="tittle-text">Invierte en inmuebles comerciales </h1>
        <div className="progress-property-container mx-auto my-4">
          <div className="progress-bar"></div>
        </div>
        <div className="img-container-invert">
          <img src={Ribera} alt="" />
          <p>La Ribera Centro Comercial</p>
        </div>
        <p className="info-invert">
          Es una realidad el centro comercial que merece Zipaquirá y la región
          norte.
        </p>
      </div>
      <Footer />
    </>
  );
}
