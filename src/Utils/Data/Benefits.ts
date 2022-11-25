import { SimpleTitleParagraph } from "../../Interfaces";

export interface BenefitsItemsInterface {
  icon: string;
  name: string;
  iconSize: string;
  description: string;
  image: string;
}
export interface BenefitsDataInterface {
  data: SimpleTitleParagraph;
  benefits: BenefitsItemsInterface[];
}

export const BenefitInfo: BenefitsDataInterface = {
  data: {
    title: "Beneficios al usar la plataforma",
    paragraph: "Tenemos propiedades en arriendo perfectas para ti y tu empresa",
  },
  benefits: [
    {
      icon: "Facilidad",
      name: "Facilidad",
      iconSize: "35",
      description:
        "Registrate y desde el día uno, nosotros realizamos la busqueda de tú inmueble ideal.",
      image: "Facilidad",
    },
    {
      icon: "Lighting",
      name: "Rápido y en linea",
      iconSize: "25",
      description:
        "Olvídate de la burocracia y de mucho papeleo, facilitamos los tramites en linea ¡Para que puedas tomar en arriendo tu inmueble lo antes posible!",
      image: "Rapido",
    },
    {
      icon: "Money",
      name: "Precio Justo",
      iconSize: "35",
      description:
        "Si estas interesado en ver mas de un inmueble comercial realiza nuestro recorrido virtual donde verás cada inmueble como si estubieras ahí.",
      image: "Precio",
    },
    {
      icon: "variedad",
      name: "Seguro",
      iconSize: "30",
      description:
        "Queremos convertirnos en el principal aliado para la expanción y promoción de tú empresa o emprendimiento encuentra desde locales hasta vallas publicitarias. ",
      image: "Variedad",
    },
  ],
};
