import { imageProps, BenefitsData, SimpleTitleParagraph } from '../../Interfaces';
import { BenefitInfo } from '../../Utils/Data/Benefits';

import './style.css';

export function BenefitsToUseComponent(): JSX.Element {
    const benefitsData: BenefitsData = BenefitInfo;
    const data: SimpleTitleParagraph = benefitsData.data;
    return (
        <div className="container-benefits my-4 p-4">
            <h1 className='tittle-text text-center'>{data.tittle}</h1>
            <h3 className='simple-text text-center w-2/6 mx-auto'>{data.subTittle}</h3>
            <div className='benefits-items-container grid grid-rows-2 grid-cols-2 gap-4 p-8'>
                {benefitsData.benefits.map((benefit: imageProps, index: number) => {
                    return (
                        <BenefitItem key={index} {...benefit} />
                    )
                })
                }
            </div>
        </div>
    )
}

function BenefitItem(props: imageProps): JSX.Element {
    const img = require(`../../Assets/Icons/Benefits/${props.icon}.svg`);
    return (
        <div className="benefit-item">
            <img src={img} alt="icon" width={props.iconSize} />
            <p>{props.name}</p>
        </div>
    )
}