import { NavBar, Footer } from "../../../Components";

import "./style.css";

export function OportunityFormPage(): JSX.Element {
  return (
    <>
      <NavBar />
      <div className="google-form-container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdN6qjBlvx81O7q08SfqPpw7AdyVcaKvdCzZtyPyJYi8NeRzQ/viewform?embedded=true"
          width="640"
          height="3710"
          title="oportunitiesForm"
        >
          Cargando…
        </iframe>
      </div>
      <Footer />
    </>
  );
}
