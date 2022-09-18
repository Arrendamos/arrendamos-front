/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import { BsPlusLg } from "react-icons/bs";
import { PriceStyle } from "../../../Atoms";
import { CardPropertyPropsI } from "../../../Interfaces";
import { PropertyModel } from "../../../models/Property.model";
import { PropertyService } from "../../../Services/Property.service";

import "./style.css";

export function PropertyTableComponent() {
  const navigation = useNavigate();

  const propertyService = new PropertyService();
  const [properties, setProperties] = useState<CardPropertyPropsI[]>([]);
  useEffect(() => {
    _getProperties();
  }, []);

  const _getProperties = async () => {
    const propertiesResponse = await propertyService.getPropertiesResume();
    let propertiesArray: CardPropertyPropsI[] = [];
    propertiesResponse.forEach(async (property: PropertyModel) => {
      const card: CardPropertyPropsI = {
        id: property.id,
        code: property.code,
        active: property.active,
        price: property.PropertyDetails.canon_price,
        area: property.PropertyDetails.area,
        image: property.PropertyImages[0].link,
      };
      propertiesArray.push(card);
    });
    setProperties(propertiesArray);
  };

  return (
    <div className="property-table-container font-lato">
      <div className="property-table-header px-8">
        <div
          className="headers-table"
          style={{ borderRight: "white solid 2px" }}
        >
          <p className="tittle">Inmuebles</p>
        </div>
        <div
          className="flex justify-start headers-table"
          style={{ cursor: "pointer" }}
        >
          <p>Eliminar Seleccionados</p>
          <FaTrash style={{ color: "white", margin: "0.4rem 0.5rem" }} />
        </div>
      </div>
      {properties.map((property: CardPropertyPropsI, index: number) => {
        return <PropertyItem key={index} {...property} />;
      })}
      <div className="property-table-end flex justify-center items-center">
        <p>No hay más publicaciones</p>
        <button
          className="flex items-center"
          onClick={() => navigation("create-property")}
        >
          <BsPlusLg style={{ marginRight: "1rem" }} /> Publicar
        </button>
      </div>
    </div>
  );
}

function PropertyItem(props: CardPropertyPropsI) {
  return (
    <div className="property-table-item p-8 flex justify-evenly">
      <div className="flex property-image-item">
        <div className="checkbox-container" style={{ marginBottom: "6vh" }}>
          <input type="checkbox" checked={false} onChange={() => {}} />
          <span className="checkmark"></span>
        </div>
        <img src={props.image} alt="img" />
      </div>
      <div className="property-image-info">
        <div className="property-image-info-item flex">
          <label>Codigo:</label>
          <p>{props.code}</p>
        </div>
        <div className="property-image-info-item flex">
          <label>
            Area(m<sup>2</sup>):
          </label>
          <p>{props.area}</p>
        </div>
        <div className="property-image-info-item flex">
          <label>Estado:</label>
          <p>{props.active ? "Activo" : "Inactivo"}</p>
        </div>
        <div className="property-image-info-item flex">
          <label>Valor:</label>
          <p>
            <PriceStyle number={props.price || 0} />
          </p>
        </div>
      </div>
      <div className="property-image-actions flex px-12">
        <div className="property-image-action-item">
          <RiPencilFill
            style={{ color: "#1B2B42", fontSize: "2rem", margin: "auto" }}
          />
          <p>Editar</p>
        </div>
        <div className="property-image-action-item">
          <FaTrash
            style={{
              color: "#1B2B42",
              fontSize: "1.5rem",
              margin: "auto",
              marginBottom: "7px",
            }}
          />
          <p>Borrar</p>
        </div>
      </div>
    </div>
  );
}
