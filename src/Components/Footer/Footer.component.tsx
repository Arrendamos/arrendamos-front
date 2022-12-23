import {
  ContactInfo,
  ContactDataInterface,
  socialMediaInterface,
} from "../../Utils/Data/ContactInfo";

import { _openLink } from "../../Utils/functions/common.functions";

import { GrPhone } from "react-icons/gr";
import logo from "../../Assets/Logo.png";

import "./style.css";

export function FooterComponent(): JSX.Element {
  const contactInfo: ContactDataInterface = ContactInfo;

  return (
    <footer id="footer" className="footer p-6">
      <a href="tel:+573118388696" className="btn-contact">
        Contáctanos
        <GrPhone size={25} style={{ marginLeft: "0.8rem" }} />
      </a>
      <div className="footer-container grid font-lato mb-8">
        <div className="social-icon-container pl-4">
          <SocialMediaIcon />
        </div>
      </div>
      <p className="reserved-footer font-lato">© All rights reserved.</p>
      <div className="footer-img">
        <img className="ml-0 " src={logo} alt="Logo" />
      </div>
      <p className="footer-info">{contactInfo.infoFooter}</p>
    </footer>
  );
}

function SocialMediaIcon(): JSX.Element {
  const socialMediaInfo: socialMediaInterface[] = ContactInfo.socialMedia;
  return (
    <div className="flex justify-start">
      {socialMediaInfo.map((item: socialMediaInterface, index: number) => {
        let icons;
        if (item.icon.library === "fa") icons = require("react-icons/fa");
        else if (item.icon.library === "gr") icons = require("react-icons/gr");
        else icons = require(`react-icons`);
        const SocialIcon = icons[`${item.icon.name}`];
        return (
          <div
            key={index}
            className="social-icon-box"
            onClick={() => _openLink(item.url)}
          >
            <SocialIcon size={26} />
          </div>
        );
      })}
    </div>
  );
}
