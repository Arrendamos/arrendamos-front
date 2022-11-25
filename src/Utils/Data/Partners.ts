import { SimpleTitleParagraph } from "../../Interfaces";

type imageProps = {
  icon: string;
  name: string;
  iconSize?: string;
};
export interface PartnersDataInterface {
  title: string;
  partners: imageProps[];
}

export const PartnersInfo: PartnersDataInterface = {
  title: "Empresas que confian en nosotros",
  partners: [
    {
      icon: "1",
      name: "Domino's Pizza",
    },
    {
      icon: "2",
      name: "PPC",
    },
    {
      icon: "3",
      name: "Audifarma",
    },
    {
      icon: "4",
      name: "Kumon",
    },
  ],
};
