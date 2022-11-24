export interface PropertyModel {
  type: string;
  price: number;
  admin_price: number;
  antiquity: string;
  description: string;
  stratum: number;
  area: number;
  private_area: number;
  bathrooms: number;
  parking: number;
  elevators: number;
  floors: number;
  status: string;
  features: string[] | null;
  city: string;
  neighborhood: string;
  address: string;
  address_complement: string | null;
  link_map: string | null;
  close_to: string[] | null;
  virtual_tour: string | null;
  youtube_video: string | null;
  photos: {
    idProperty: string;
    images: {
      url: string;
      isMain: boolean;
    }[];
  } | null;
  user_id: string | null;
}

export interface PropertyResumeModel {
  id: string;
  type: string;
  price: number;
  area: number;
  bathrooms: number;
  parking: number;
  city: string;
  neighborhood: string;
  imageUrl: string;
}

export interface OportunityResumeModel {
  id: string;
  type: string;
  area: number;
  city: string;
  neighborhood: string;
  image?: string;
}
