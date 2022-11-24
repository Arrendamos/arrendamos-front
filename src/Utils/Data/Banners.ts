export interface BannerPropertyPropsI {
  backgroundColor: string;
  tittle: string;
  paragraph?: string;
  btnText: string;
  backgroundImg: string;
  sizeBackground?: string;
}

const BannersInfo: BannerPropertyPropsI[] = [
  {
    backgroundColor: "#009DDC",
    tittle: "Busqueda asistida",
    paragraph:
      "¿Quieres evitar el desgaste de buscar propiedad? Nuestros agentes inmobiliarios se encargarán de encontrar un espacio a tu medida.",
    btnText: "Describe tu inmueble ideal",
    backgroundImg: "Building1",
  },
  {
    backgroundColor: "#009DDC",
    tittle: "Arrienda tu oficina o local comercial",
    btnText: "Publicar",
    backgroundImg: "Building2",
  },
  {
    backgroundColor: "#009DDC",
    tittle: "Ver inmuebles comerciales disponibles",
    btnText: "Ver",
    backgroundImg: "coffeShop",
    sizeBackground: "40% 100%",
  },
];
export default BannersInfo;
