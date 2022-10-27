import Map from "../../../Assets/Images/Map.png";
import { _openLink } from "../../../Utils/functions/common.functions";

import "./style.css";

type MapPropertyProps = {
  linkMap: string;
};
export function MapProperty(props: MapPropertyProps): JSX.Element {
  return (
    <>
      <h2 className="subtittle-description">Ubicación del inmueble</h2>
      <div className="map-property">
        <img src={Map} alt="" onClick={() => _openLink(props.linkMap)} />
      </div>
    </>
  );
}
