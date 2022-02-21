import { PartnersData, SimpleTitleParagraph } from '../../Interfaces';
import { PartnersInfo } from '../../Utils/Data/Partners';

import './style.css';

export function OurPartnersComponent(): JSX.Element {

    const partnersData: PartnersData = PartnersInfo;
    const infoPage: SimpleTitleParagraph = partnersData.data;

    return (
        <div className="parthners-container my-4 p-4 font-lato" >
            <h1 className='tittle-text text-center'>{infoPage.tittle}</h1>
            <h3 className='simple-text text-center w-2/6 mx-auto'>{infoPage.subTittle}</h3>
            <div className='flex justify-around items-center py-8 my-8'>
                {partnersData.partners.map((partner: any, index: number) => {
                    return <ImgPartnerItem key={index} {...partner} />
                })
                }
            </div>
        </div >
    )
}

function ImgPartnerItem(props: any) {
    const img = require(`../../Assets/Aliados/${props.icon}.svg`);

    return (
        <div className="partner-item">
            <img src={img} alt="partner" />
        </div>
    )
}