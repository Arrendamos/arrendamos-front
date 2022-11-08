import LocationIcon from "../../../Assets/Icons/SingleProperty/Location/InterestLocation.svg";
import Location from "../../../Assets/Icons/Common/Ubicacion.svg";

import "./style.css";

export function InterestProperty(interest: string[]): JSX.Element {
  return (
    <>
      <div className="flex justify-start">
        <img className="interest-icon" src={LocationIcon} alt="" />
        <h2 className="subtittle-description interest-tittle">
          Lugares cercanos y sitios de interés
        </h2>
      </div>
      <div className="interest-property">{InterestItem(interest)}</div>
    </>
  );
}

function InterestItem(interest: string[]): JSX.Element[] {
  const interestItem: JSX.Element[] = [];
  if (!interest) interest = [];
  Object.entries(interest).forEach(([key, value]) => {
    interestItem.push(
      <div key={key} className="flex font-lato">
        <img className="mr-2" src={Location} alt="" />
        <p className="interest-label">{value}</p>
      </div>
    );
  });
  return interestItem;
}
