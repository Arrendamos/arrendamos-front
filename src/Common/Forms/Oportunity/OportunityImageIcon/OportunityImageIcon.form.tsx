import { useRef, useState } from "react";
import Switch from "react-switch";
import imgTest from "../../../../Assets/Images/test/TestOportunity.png";
import imgTest2 from "../../../../Assets/Images/test/TestOportunityBlack.png";
import iconTest from "../../../../Assets/Icons/Test/IconTest.svg";

import "./style.css";

export function OportunityImageIconForm(): JSX.Element {
  const [checked, setChecked] = useState(true);
  const inputFile = useRef<any>(null);

  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };
  return (
    <div className="card card-form-property font-lato">
      <h1 className="tittle">
        ¿Quieres que el logo de tu empresa sea visible en la publicacón?
      </h1>
      <Switch
        onChange={() => setChecked(!checked)}
        onColor="#009DDC"
        className="switch-form switch-icon-form"
        checkedIcon={<p>Si</p>}
        uncheckedIcon={<p>No</p>}
        checked={checked}
      />
      <div className="img-icon-container">
        <img
          className={`icon-form ${checked ? "visible" : "no-visible"}`}
          src={iconTest}
          alt=""
        />
        <img
          className={`img-form ${checked ? "visible" : "no-visible"}`}
          src={imgTest}
          alt=""
        />
        <img
          className={`img-form ${!checked ? "visible" : "no-visible"}`}
          src={imgTest2}
          alt=""
        />
      </div>
      <input
        type="file"
        id="file"
        accept="image/png, image/jpeg"
        ref={inputFile}
        style={{ display: "none" }}
      />
      <p className="add-img-btn" onClick={onButtonClick}>
        + Adjunta tú Logo en .PNG
      </p>
    </div>
  );
}
