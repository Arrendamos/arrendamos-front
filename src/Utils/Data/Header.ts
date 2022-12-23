export interface HeaderDataInterface {
  question: string;
  paragraph: string;
  box: {
    tittle: string;
    text: string;
  }[];
}

export const HeaderInfo: HeaderDataInterface = {
  question: "¿Estas buscando un inmueble comercial?",
  paragraph:
    "LLegaste al lugar indicado, somos un portal enfocado 100% en ayudar a empresas y empresarios a encontrar el <strong> inmueble comercial </strong> ideal para la expansión de sus negocios.",
  box: [
    {
      tittle: "+1,300",
      text: "Inmbuebles con los que te podemos conectar",
    },
    {
      tittle: "+90",
      text: "Propietarios, inmobiliarias y Brokers Aliados a Nivel Nacional.",
    },
  ],
};
