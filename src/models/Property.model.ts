export interface PropertyModel {
    id: number;
    code: string
    link_360: string
    name: string
    parking: number
    private_area: number
    city: string
    description: string
    features: string[]
    interest: any
    active: boolean
    PropertyDetails: PropertyDetailModel
    PropertyImages: PropertyImagesModel[]
}

export interface PropertyDetailModel {
    canon_price: number
    admin: number
    address: string
    street: string
    type: string
    antiquity: number
    floor: number
    area: number
    garage: number
    bathrooms: number
    stratum: number
    elevator: number
    propertyId: number
}

interface PropertyImagesModel {
    link: string
    isMainImage: boolean
    propertyId: number
}