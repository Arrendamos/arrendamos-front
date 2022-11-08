import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Logo from "../../../Assets/Logo.png";
import PopPupBody from "../../../Assets/Images/PopPupImg.png";

import "./style.css";
import { useState } from "react";

export function ShortRegisterUserFormCommon(): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <div className="card card-form-property font-lato">
      <h1 className="tittle">Registrate</h1>
      <div className="short-register-container">
        <input className="input-form" type="text" placeholder="Nombre" />
        <input
          className="input-form"
          type="text"
          placeholder="Correo electrónico"
        />
        <input
          className="input-form"
          type="text"
          placeholder="Número de celular"
        />
        <input className="input-form" type="text" placeholder="Teléfono" />
        <label className="short-register-checkbox mt-4">
          Acepto el Tratamiento de mis datos personales y Terminos y Condiciones
          <input type="checkbox" className="checked" />
          <span className="checkmark"></span>
        </label>
        <label className="short-register-checkbox mt-4">
          Quieres que el nombre de tu empresa este visible en la publicación{" "}
          <input type="checkbox" className="checked" />
          <span className="checkmark"></span>
        </label>
        <div className="w-full text-center">
          <button className="btn-short-register" onClick={() => setOpen(true)}>
            Publicar Aviso
          </button>
        </div>
        <p className="info-short-register">
          *Se publicará en las proximas 24 Horas.
        </p>
      </div>
      <PopupRegisterUser open={open} setOpen={setOpen} />
    </div>
  );
}

type PopupRegisterUserProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

function PopupRegisterUser(props: PopupRegisterUserProps): JSX.Element {
  const { open, setOpen } = props;
  return (
    <Popup open={open} onClose={() => setOpen(false)}>
      {() => (
        <div className="modal">
          <button className="close" onClick={() => setOpen(false)}>
            &times;
          </button>
          <div className="header">
            <img src={Logo} alt="" />
          </div>
          <div className="content">
            <img src={PopPupBody} alt=""></img>
            <p className="text-center">
              Se publicará en las proximas 24 Horas.
            </p>
          </div>
        </div>
      )}
    </Popup>
  );
}
