import { useMediaQuery } from "react-responsive";
import {
  NavBar,
  Header,
  CustomYouExperience,
  Banners,
  Oportunities,
  OurPartners,
  Testimony,
  Footer,
} from "../../Components";

import QR from "../../Assets/Qr.png";
import LaptopnBuilding from "../../Assets/LaptopnBuilding.png";

import "./style.css";

export function HomePage(): JSX.Element {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 900px)",
  });

  return (
    <>
      {isDesktopOrLaptop ? (
        <QrPage />
      ) : (
        <>
          <NavBar />
          <Header />
          <CustomYouExperience />
          <Banners />
          <div className="container-oportunities-home">
            <Oportunities />
          </div>
          <OurPartners />
          <Testimony />
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
