export function PropertyAddressFormCommon() {
    return (
        <div className="card card-form-property font-lato">
            <h1 className="tittle">Ubicación del inmueble</h1>
            <div className='form-input-container'>
                <input type="text" placeholder="Barrio" />
                <input type="text" placeholder="Dirección" />
                <input type="text" placeholder="Ciudad" />
            </div>
        </div>
    );
}