import { NavBar } from "../../Components";
import ConstructionImage from "../../Assets/tmp/constructionPage.png";

import "./style.css";

export function InProgressPage(): JSX.Element {
  return (
    <>
      <NavBar />
      <div className="construction-container">
        <div className="text-container m-auto font-lato">
          <h1>En Construcción</h1>
          <h3>
            Estamos construyendo el portal que cambiara la forma de arrendar
            inmuebles comerciales en Colombia
          </h3>
        </div>
        <div className="img-container m-auto">
          <img src={ConstructionImage} alt="" />
        </div>
      </div>
    </>
  );
}
