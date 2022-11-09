export interface SimpleTitleParagraph {
  tittle: string;
  subTittle: string;
}

export interface HeaderData {
  tittle: string;
  question: string;
  paragraph: string;
  box: {
    tittle: string;
    text: string;
  }[];
}

export interface HowWorksData {
  tittle: string;
  items: {
    icon: string;
    tittle: string;
    paragraph: string;
  }[];
}
export interface CardPropertyPropsI {
  id: string;
  name: string;
  price: number;
  area: number;
  bathroom: number;
  parking: number;
  neighborhood: string;
  city: string;
  image: string;
}

export interface BannerPropertyPropsI {
  backgroundColor: string;
  tittle: string;
  paragraph?: string;
  btnText: string;
  backgroundImg: string;
  sizeBackground?: string;
}

export interface BenefitsData {
  data: SimpleTitleParagraph;
  benefits: BenefitsItems[];
}
export interface BenefitsItems {
  icon: string;
  name: string;
  iconSize: string;
  description: string;
  image: string;
}
export interface PartnersData {
  data: SimpleTitleParagraph;
  partners: imageProps[];
}

export interface TestimonyData {
  data: SimpleTitleParagraph;
  testimonies: testimonyItem[];
}

export interface ContactData {
  whatsappText: string;
  socialMedia: socialMedia[];
}

export type TypeProperty = {
  name: string;
  icon: string;
};

export type socialMedia = {
  icon: string;
  network: string;
  url: string;
};

export type imageProps = {
  icon: string;
  name: string;
  iconSize?: string;
};

export type testimonyItem = {
  name: string;
  rol: string;
  testimony: string;
  stars: number;
};
