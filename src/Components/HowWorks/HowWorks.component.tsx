import useCollapse from "react-collapsed";
import { HowWorksData } from "../../Interfaces";
import { HowWorksInfo } from "../../Utils/Data/HowWorks";

import "./style.css";

type HowWorksItemProps = {
  index: number;
  item: { icon: string; tittle: string; paragraph: string };
};

export function HowWorksComponent(): JSX.Element {
  const howWorksData: HowWorksData = HowWorksInfo;

  return (
    <div className="how-works-container font-lato">
      <h2 className="tittle-text">{howWorksData.tittle}</h2>
      <div className="progress-how-works-container mx-auto my-4">
        <div className="how-works-progress-bar"></div>
      </div>
      <div className="how-works-container-items">
        {howWorksData.items.map((item, index) => (
          <HowWorksItem item={item} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}

function HowWorksItem(props: HowWorksItemProps): JSX.Element {
  const { index, item } = props;

  const config = {
    duration: 300,
    easing: "cubic-bezier(.99,.99,.93,.93)",
  };

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
  return (
    <div className="how-works-item font-lato">
      <h3>
        <span>{index + 1}.</span>
        {item.tittle}
      </h3>
      <div {...getCollapseProps()}>
        <div className="content">
          <p className="text-gray-600">{item.paragraph}</p>
        </div>
      </div>
      <div className="header" {...getToggleProps()}>
        {isExpanded ? "Menos" : "Más"}
      </div>
    </div>
  );
}
