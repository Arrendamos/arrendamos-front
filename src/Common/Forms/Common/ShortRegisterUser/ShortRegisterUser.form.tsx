import { useState } from "react";

import "./style.css";

export function ShortRegisterUserForm(): JSX.Element {
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
      </div>
    </div>
  );
}
