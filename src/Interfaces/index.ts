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
  id: number;
  code?: string;
  active?: boolean;
  image?: string;
  price: number;
  area: number;
  bathroom?: number;
  parking?: number;
  address?: string;
  location?: string;
  city?: string;
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
  socialMedia: socialMedia[];
}

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

export type DescriptionItem = {
  bathroom?: number;
  parking?: number;
  private_area?: number;
  stratum?: number;
  antiquity?: number;
  admin_price?: number;
};

export type DetailsItem = {
  canon_price?: number;
  admin?: number;
  address?: string;
  street?: string;
  type?: string;
  antiquity?: number;
  floor?: number;
  area?: number;
  garage?: number;
  bathrooms?: number;
  stratum?: number;
  elevator?: number;
};

export type InterestItem = {
  name: string;
  places: string[];
};
