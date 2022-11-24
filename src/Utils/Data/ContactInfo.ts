export type socialMediaInterface = {
  icon: string;
  network: string;
  url: string;
};
export interface ContactDataInterface {
  whatsappText: string;
  socialMedia: socialMediaInterface[];
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
    // {
    //     'icon': 'GrTwitter',
    //     'network': 'twitter',
    //     'url': 'https://www.twitter.com/'
    // },
    // {
    //     'icon': 'GrLinkedinOption',
    //     'network': 'linkedin',
    //     'url': 'https://www.linkedin.com/'
    // },
    // {
    //     'icon': 'GrInstagram',
    //     'network': 'instagram',
    //     'url': 'https://www.instagram.com/'
    // },
    {
      icon: "GrPhone",
      network: "whatsapp",
      url: "tel:+573118388696",
    },
  ],
};
