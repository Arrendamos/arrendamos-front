import {
  BenefitsData,
  SimpleTitleParagraph,
  BenefitsItems,
} from "../../Interfaces";
import { BenefitInfo } from "../../Utils/LandingData/Benefits";

import "./style.css";

export function BenefitsToUseComponent(): JSX.Element {
  const benefitsData: BenefitsData = BenefitInfo;
  const data: SimpleTitleParagraph = benefitsData.data;
  return (
    <div className="container-benefits my-4 p-4 font-lato">
      <h1 className="tittle-text text-center">{data.tittle}</h1>
      <h3 className="simple-text text-center w-3/4 mx-auto">
        {data.subTittle}
      </h3>
      <div className="benefits-items-container grid grid-rows-2 grid-cols-2 gap-16 p-8">
        {benefitsData.benefits.map((benefit: BenefitsItems, index: number) => {
          return <BenefitItem key={index} {...benefit} />;
        })}
      </div>
    </div>
  );
}

function BenefitItem(props: BenefitsItems): JSX.Element {
  const img = require(`../../Assets/Icons/Benefits/${props.icon}.svg`);
  const backImg = require(`../../Assets/Icons/Benefits/BenefitImage/${props.image}.svg`);
  console.log(props);
  return (
    <div className="benefit-item">
      <div className="flex justify-start">
        <img src={img} alt="icon" width={props.iconSize} />
        <label>{props.name}</label>
      </div>
      <div className="text-container">
        <p>{props.description}</p>
        {props.url ? (
          <a href={props.url} target="blank">
            Publicalo aquí
          </a>
        ) : null}
      </div>
      <div className="img-container">
        <img className="benefit-img" src={backImg} alt="" />
      </div>
    </div>
  );
}
