export interface SimpleTitleParagraph {
  title: string;
  paragraph: string;
}

export interface CardPropertyPropsI {
  id: string;
  name: string;
  price?: number;
  area: number;
  bathroom?: number;
  parking?: number;
  neighborhood: string;
  city: string;
  image: string;
}
