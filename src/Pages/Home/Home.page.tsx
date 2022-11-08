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
import LaptopnBuilding from "../../Assets/LaptopnBuilding.png";

import "./style.css";

import Ribera from "../../Assets/Images/Ribera.png";

import "./style.css";
import { useMediaQuery } from "react-responsive";
import { _openLink } from "../../Utils/functions/common.functions";

export function HomePage(): JSX.Element {
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
            onClick={() => _openLink("https://lariberacc.com/")}
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
      <NavBar />
      <div className="construction-container">
        <img
          className="construction-item m-auto"
          src={LaptopnBuilding}
          alt=""
          width={350}
        />
        <div className="text-container construction-item font-lato">
          <h1>Detectamos que te conectaste desde un computador</h1>
          <p>Para brindarte una mejor experiencia, puedes:</p>
          <p>
            1. Copiar este enlace en el navegador de tu tablet o celular:
            https://arrendamos.co/
          </p>
          <p>2. Escanear el código QR con la cámara de tu celular:</p>
        </div>
        <div className="img-container m-auto">
          <img src={QR} alt="" />
        </div>
      </div>
    </>
  );
}
