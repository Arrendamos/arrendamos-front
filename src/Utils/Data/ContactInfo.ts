export type socialMediaInterface = {
  icon: {
    name: string;
    library: string;
  };
  network: string;
  url: string;
};
export interface ContactDataInterface {
  whatsappText: string;
  socialMedia: socialMediaInterface[];
  infoFooter: string;
}

export const ContactInfo: ContactDataInterface = {
  whatsappText:
    "&text=Hola,%20vi%20un%20inmueble%20en%20arrendamos.co%20y%20quisiera%20agendar%20una%20cita%20contigo",
  socialMedia: [
    // {
    //     'icon': 'GrFacebookOption',
    //     'network': 'facebook',
    //     'url': 'https://www.facebook.com/'
    // },
    {
      icon: {
        name: "GrInstagram",
        library: "gr",
      },
      network: "instagram",
      url: "https://www.instagram.com/",
    },
    {
      icon: {
        name: "GrLinkedinOption",
        library: "gr",
      },
      network: "linkedin",
      url: "https://www.linkedin.com/",
    },
    {
      icon: {
        name: "FaTiktok",
        library: "fa",
      },
      network: "TikTok",
      url: "https://www.twitter.com/",
    },
    // {
    //   icon: "GrPhone",
    //   network: "whatsapp",
    //   url: "tel:+573118388696",
    // },
  ],
  infoFooter: "Encontramos el inmueble ideal para la expansión de tú empresa.",
};
