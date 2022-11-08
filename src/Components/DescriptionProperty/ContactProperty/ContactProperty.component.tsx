import { AiTwotoneCalendar } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { _openLink } from "../../../Utils/functions/common.functions";
import { ContactInfo } from "../../../Utils/Data/ContactInfo";

import "./style.css";

export function ContactProperty(): JSX.Element {
  const linkWhatsapp =
    "https://api.whatsapp.com/send?phone=573126576103" +
    ContactInfo.whatsappText;
  return (
    <>
      <h2 className="subtittle-description">Contacto</h2>
      <div className="contact-property">
        <label>3126576103</label>
        <label>contacto@arrendamos.co </label>
        <div className="contact-btn-container">
          <button className="btn-contact-item schedule-btn">
            <AiTwotoneCalendar size={35} style={{ marginRight: "0.8rem" }} />
            Agendar Visita
          </button>
          <button
            className="btn-contact-item contact-btn"
            onClick={() => _openLink(linkWhatsapp)}
          >
            <IoLogoWhatsapp size={35} style={{ marginRight: "1.3rem" }} />
            Contactar por Whatsapp
          </button>
        </div>
      </div>
    </>
  );
}
