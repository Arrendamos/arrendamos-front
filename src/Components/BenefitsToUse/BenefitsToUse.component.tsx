import { SimpleTitleParagraph } from "../../Interfaces";
import {
  BenefitsItemsInterface,
  BenefitInfo,
  BenefitsDataInterface,
} from "../../Utils/Data/Benefits";

import "./style.css";

export function BenefitsToUseComponent(): JSX.Element {
  const benefitsData: BenefitsDataInterface = BenefitInfo;
  const data: SimpleTitleParagraph = benefitsData.data;

  return (
    <div className="container-benefits my-4 p-4 font-lato">
      <h1 className="title-text text-center">{data.title}</h1>
      <h3 className="simple-text text-center w-3/4 mx-auto">
        {data.paragraph}
      </h3>
      <div className="benefits-items-container grid grid-rows-2 grid-cols-2 gap-16 p-8">
        {benefitsData.benefits.map(
          (benefit: BenefitsItemsInterface, index: number) => {
            return <BenefitItem key={index} {...benefit} />;
          }
        )}
      </div>
    </div>
  );
}

function BenefitItem(props: BenefitsItemsInterface): JSX.Element {
  const img = require(`../../Assets/Icons/Benefits/${props.icon}.svg`);
  const backImg = require(`../../Assets/Icons/Benefits/BenefitImage/${props.image}.svg`);
  return (
    <div className="benefit-item">
      <div className="flex justify-start">
        <img src={img} alt="icon" width={props.iconSize} />
        <label>{props.name}</label>
      </div>
      <div className="text-container">
        <p>{props.description}</p>
      </div>
      <div className="img-container">
        <img className="benefit-img" src={backImg} alt="" />
      </div>
    </div>
  );
}
