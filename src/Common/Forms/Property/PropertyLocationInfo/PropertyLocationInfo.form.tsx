import "./style.css";

type PropertyLocationInfoInterface = {
  city: string;
  neighborhood: string;
  address: string;
  address_complement: string;
};

type PropertyLocationInfoProps = {
  propertyLocationInfo: PropertyLocationInfoInterface;
  setPropertyLocationInfo: React.Dispatch<
    React.SetStateAction<PropertyLocationInfoInterface>
  >;
};

export function PropertyLocationInfoForm(
  props: PropertyLocationInfoProps
): JSX.Element {
  const { propertyLocationInfo, setPropertyLocationInfo } = props;

  const _onChangeSetPropertyLocationInfo = (e: any) => {
    const { name, value } = e.target;
    setPropertyLocationInfo((propertyLocationInfo) => ({
      ...propertyLocationInfo,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="card card-form-property font-lato">
        <h1 className="tittle">Ubicación del inmueble</h1>
        <div className="form-input-container">
          <input
            className="input-form"
            name="city"
            value={propertyLocationInfo.city}
            onChange={_onChangeSetPropertyLocationInfo}
            type="text"
            placeholder="Ciudad"
            required
          />
          <input
            className="input-form"
            type="text"
            name="neighborhood"
            value={propertyLocationInfo.neighborhood}
            onChange={_onChangeSetPropertyLocationInfo}
            placeholder="Barrio"
            required
          />
          <input
            className="input-form"
            type="text"
            name="address"
            value={propertyLocationInfo.address}
            onChange={_onChangeSetPropertyLocationInfo}
            placeholder="Direccion"
            required
          />
          <input
            className="input-form"
            type="text"
            name="address_complement"
            value={propertyLocationInfo.address_complement}
            onChange={_onChangeSetPropertyLocationInfo}
            placeholder="Complementos de la dirección"
          />
        </div>
      </div>
    </>
  );
}
