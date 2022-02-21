export interface SimpleData {
    text: string
}
export interface SimpleTitleParagraph {
    tittle: string
    subTittle: string
}
export interface CardPropertyPropsI {
    area: string
    bathroom: string
    parking: string
    address: string
    location: string
    city: string
}

export interface BannerPropertyPropsI {
    backgroundColor: string
    tittle: string
    paragraph: string
    btnText: string
    backgroundImg: string
}

export interface BenefitsData {
    data: SimpleTitleParagraph
    benefits: imageProps[]
}

export interface PartnersData {
    data: SimpleTitleParagraph
    partners: imageProps[]
}

export interface TestimonyData {
    data: SimpleTitleParagraph
}

export type imageProps = {
    icon: string
    name: string
    iconSize?: string
}