import "./style.css";
import Vr from "../../../Assets/Icons/Common/Vr.svg";

export function MobileBanner(): JSX.Element {
  return (
    <div className="single-property-mobile-banner font-lato">
      <div className="flex items-start">
        <img
          src={Vr}
          alt=""
          width={80}
          style={{ marginRight: "0.8rem", marginTop: "0.8rem" }}
        />
        <div className="mobile-banner-text-container">
          <h1>Haz un tour virtual por la oficina</h1>
          <p>
            Conoce las áreas y detalles de esta oficina en un recorrido virtual
          </p>
        </div>
      </div>
      <div className="text-center">
        <button className="btn-virtual-travel bg-greenCyan ">
          Recorrido virtual
        </button>
      </div>
    </div>
  );
}
