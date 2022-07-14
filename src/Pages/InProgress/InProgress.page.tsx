import { NavBar, BenefitsToUse, Banners, Footer } from "../../Components";

import "./style.css";

export function InProgressPage(): JSX.Element {
  return (
    <>
      <NavBar />
      <div className="property-landing-container flex items-center justify-center">
        <div className="text-center font-lato">
          <h1>Queremos ayudarte a arrendar tú inmueble lo antes posible</h1>
          <button className="btn-landing bg-greenCyan hover:bg-greenCyanHover text-white font-lato">
            Publicalo aquí
          </button>
          <p>Es gratis durante 60 días</p>
        </div>
      </div>
      <BenefitsToUse />
      <Banners />
      <div className="aliados-landing-container flex items-center justify-center">
        <div className="text-center font-lato">
          <button className="btn-landing bg-greenCyan hover:bg-greenCyanHover text-white font-lato">
            Contactanos
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
