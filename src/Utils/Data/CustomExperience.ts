import { SimpleTitleParagraph } from "../../Interfaces";

export type CustomExperienceItem = {
  title: string;
  image: string;
  redirect: string;
};
export interface CustomExperienceDataInterface {
  data: SimpleTitleParagraph;
  items: CustomExperienceItem[];
}

export const CustomExperienceInfo: CustomExperienceDataInterface = {
  data: {
    title: "Personaliza tu experiencia",
    paragraph:
      "Selecciona la información que deseas consultar dependiendo de si eres:",
  },
  items: [
    {
      title: "Empresas",
      image: "Empresas",
      redirect: "/companies",
    },
    {
      title: "Propietarios",
      image: "Propietarios",
      redirect: "/owners",
    },
    {
      title: "Emprendimientos",
      image: "Emprendimientos",
      redirect: "/developments",
    },
    {
      title: "Inmobiliarias",
      image: "Inmobiliarias",
      redirect: "/realtors",
    },
  ],
};
