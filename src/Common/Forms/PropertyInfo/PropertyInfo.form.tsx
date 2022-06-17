import './style.css'

export function PropertyInfoFormCommon(): JSX.Element {
    return (
        <div className="card card-form-property font-lato">
            <h1 className='tittle'>Información del inmueble</h1>
            <div className='form-input-container'>
                <select name="type-create" defaultValue={'0'}>
                    <option value="0" disabled>Tipo de inmueble</option>
                    <option value="Bodega">Bodega</option>
                    <option value="Local">Local</option>
                    <option value="Oficina">Oficina</option>
                    <option value="Edificio">Edificio</option>
                </select>
                <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Código" />
                <input type="text" placeholder="Valor del arriendo" />
                <input type="text" placeholder="Valor de la administración" />
                <input type="text" placeholder="Antigüedad (en años)" />
                <textarea name="" id="" rows={5} placeholder="Describe tu inmueble (Ingresa información adicional)"></textarea>
                <select name="stratum-create" defaultValue={'0'}>
                    <option value="0" disabled>Estrato</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
                <input type="number" placeholder="Área (m2)" />
                <input type="number" placeholder="Área privada (m2)" />
                <div className='flex justify-between items-center p-4'>
                    <label>Número de baños</label>
                    <input className='input-number-small' type="number" value={0} onChange={() => console.log('')} />
                </div>
                <div className='flex justify-between items-center p-4'>
                    <label>Número de parqueaderos</label>
                    <input className='input-number-small' type="number" value={0} onChange={() => console.log('')} />
                </div>
                <div className='flex justify-between items-center p-4'>
                    <label>Número de ascensores</label>
                    <input className='input-number-small' type="number" value={0} onChange={() => console.log('')} />
                </div>
            </div>
        </div>
    )
}