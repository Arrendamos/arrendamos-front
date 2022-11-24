export interface HowWorksDataInterface {
  tittle: string;
  items: {
    icon: string;
    tittle: string;
    paragraph: string;
  }[];
}

export const HowWorksInfo: HowWorksDataInterface = {
  tittle: "Como funciona arrendamos",
  items: [
    {
      icon: "fas fa-search",
      tittle: "Registrate ",
      paragraph:
        "Registrate como uno de nuestros aliados y disfruta de la magia de encontar el inmueble que buscas lo antes posible.",
    },
    {
      icon: "fas fa-search",
      tittle: "Publica el inmueble que estas buscando",
      paragraph:
        "Especifica las caracteristicas que debe tener el inmueble que estas buscando.",
    },
    {
      icon: "fas fa-search",
      tittle: "Recibe ofertas ",
      paragraph:
        "Recibiras ofertas de parte de propietarios e inmobiliarias que cumplan con la mayoria de las caracteristicas que estableciste.",
    },
    {
      icon: "fas fa-search",
      tittle: "Contacta al propietario del inmueble ",
      paragraph:
        "Podrás tener acceso directamente al contacto del propietario ó inmobiliaria del inmueble, agilizando el proceso. ",
    },
  ],
};
