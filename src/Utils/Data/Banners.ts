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
      "Encontramos el inmueble comercial ideal para tú empresa en menos de 3 semanas*",
    btnText: "Describe tu inmueble ideal",
    backgroundImg: "Building1",
  },
  {
    backgroundColor: "#009DDC",
    tittle: "¿Quieres arrendar un inmueble comercial ?",
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
