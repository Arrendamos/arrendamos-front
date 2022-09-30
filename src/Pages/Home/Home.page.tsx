import {
  NavBar,
  Header,
  HowWorks,
  Oportunities,
  OurPartners,
  Testimony,
  Footer,
} from "../../Components";

import QR from "../../Assets/Qr.png";

import "./style.css";

import Ribera from "../../Assets/Images/Ribera.png";

import "./style.css";
import { useMediaQuery } from "react-responsive";

export function HomePage(): JSX.Element {
  const _openLink = () => {
    window.open("https://lariberacc.com/");
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 900px)",
  });

  return (
    <>
      {}
      {isDesktopOrLaptop ? (
        <QrPage />
      ) : (
        <>
          <NavBar />
          <Header />
          <HowWorks />
          <Oportunities />
          <OurPartners />
          <Testimony />
          <div
            className="invert-property-container font-lato"
            onClick={_openLink}
          >
            <h1 className="tittle-text">Invierte en inmuebles comerciales </h1>
            <div className="progress-property-container mx-auto my-4">
              <div className="progress-bar"></div>
            </div>
            <div className="img-container-invert">
              <img src={Ribera} alt="" />
              <p>La Ribera Centro Comercial</p>
            </div>
            <p className="info-invert">
              Es una realidad el centro comercial que merece Zipaquirá y la
              región norte.
            </p>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

function QrPage(): JSX.Element {
  return (
    <>
      <div className="construction-container">
        <div className="text-container m-auto font-lato">
          <h1>Version de escritorio en construccion</h1>
          <h3>
            Para una mejor experiencia, por favor ingresa desde tu celular
          </h3>
        </div>
        <div className="img-container m-auto">
          <img src={QR} alt="" />
        </div>
      </div>
    </>
  );
}
