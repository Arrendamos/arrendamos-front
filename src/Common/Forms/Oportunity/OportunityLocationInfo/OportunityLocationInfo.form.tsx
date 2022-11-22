import "./style.css";

export function OportunityLocationInfoForm() {
  return (
    <>
      <div className="card card-form-property font-lato">
        <h1 className="tittle">Ubicación del inmueble</h1>
        <div className="form-input-container">
          <input className="input-form" type="text" placeholder="Ciudad" />
          <input
            className="input-form"
            type="text"
            placeholder="Barrio/Sector"
          />
        </div>
      </div>
    </>
  );
}
