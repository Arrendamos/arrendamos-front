import { PropertyModel, PropertyResumeModel } from "../models/Property.model";
import axios from "axios";

export class PropertyService {
  private baseUrl = `${process.env.REACT_APP_ARRENDAMOS_BACK}/property`;

  public async getPropertiesResume(): Promise<PropertyResumeModel[]> {
    const response = await axios
      .get(`${this.baseUrl}/all`, {
        headers: {
          "x-api-key": process.env.REACT_APP_ARRENDAMOS_API_KEY || "",
        },
      })
      .then((res) => {
        return res.data.data;
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
    return response;
  }

  public async getProperty(id: string): Promise<PropertyModel> {
    const response = await axios
      .get(`${this.baseUrl}/${id}`, {
        headers: {
          "x-api-key": process.env.REACT_APP_ARRENDAMOS_API_KEY || "",
        },
      })
      .then((res) => {
        return res.data.data;
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
    return response;
  }
}
