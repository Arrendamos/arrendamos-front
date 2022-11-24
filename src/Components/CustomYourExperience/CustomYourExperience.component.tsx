import {
  CustomExperienceItem,
  CustomExperienceDataInterface,
  CustomExperienceInfo,
} from "../../Utils/Data/CustomExperience";

import "./style.css";

export function CustomYouExperienceComponent(): JSX.Element {
  const customExperienceInfo: CustomExperienceDataInterface =
    CustomExperienceInfo;

  return (
    <div className="container-custom-your-experience p-4">
      <h1 className="text-primaryColor font-bold">
        {customExperienceInfo.data.title}
      </h1>
      <p className="text-primaryColor">{customExperienceInfo.data.paragraph}</p>
      <div className="custom-experience-item-container">
        {customExperienceInfo.items.map((item, index) => (
          <CustomExperienceItemComponent key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

function CustomExperienceItemComponent(
  props: CustomExperienceItem
): JSX.Element {
  const { title, image, redirect } = props;

  return (
    <div
      className="custom-experience-item"
      style={{
        backgroundImage: `url(${require(`../../Assets/Images/CustomExperience/${image}.png`)})`,
      }}
    >
      <div className="title-blur-container">
        <h2>{title}</h2>
        <span className="span-arrow-right"></span>
      </div>
    </div>
  );
}
