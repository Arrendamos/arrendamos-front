import { SimpleTitleParagraph } from "../../Interfaces";

export type testimonyItemInterface = {
  name: string;
  rol: string;
  image?: string;
  testimony: string;
  stars: number;
};

export interface TestimonyDataInterface {
  data: SimpleTitleParagraph;
  testimonies: testimonyItemInterface[];
}

export const TestimonyInfo: TestimonyDataInterface = {
  data: {
    title: "Testimonios",
    paragraph: "Testimonios de los usuarios que han confiado en nosotros",
  },
  testimonies: [
    {
      name: "Alejandra Arteaga",
      image: "Alejandra",
      rol: "CEO J2C Services",
      testimony:
        "Gracias a arrendamos encontramos nuestra nueva oficina, tiene una vista increible.",
      stars: 5,
    },
  ],
};
