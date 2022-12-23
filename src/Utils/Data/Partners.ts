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
      name: "Service",
    },
    {
      icon: "2",
      name: "Domino's Pizza",
    },
    {
      icon: "3",
      name: "Creppes & Waffles",
    },
    {
      icon: "4",
      name: "D1",
    },
    {
      icon: "5",
      name: "InLash",
    },
  ],
};
