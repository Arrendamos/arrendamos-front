import { PropertyModel } from "../models/Property.model";
import axios from "axios";

export class PropertyService {

    private baseUrl = `${process.env.REACT_APP_ARRENDAMOS_BACK}/api/property`;

    public async getAllActivePropertiesResume(): Promise<PropertyModel[]> {
        const response = await axios.get(`${this.baseUrl}/all/resume`).then(res => {
            return res.data.data;
        }).catch(err => {
            console.log(err);
            return [];
        })
        return response;
    }
    public async getAllPropertiesResume(): Promise<PropertyModel[]> {
        const response = await axios.get(`${this.baseUrl}/all`).then(res => {
            return res.data.data;
        }).catch(err => {
            console.log(err);
            return [];
        })
        return response;
    }

    public async getProperty(id: number): Promise<PropertyModel> {
        const response = await axios.get(`${this.baseUrl}/id/${id}`).then(res => {
            return res.data.data;
        }).catch(err => {
            console.log(err);
            return null;
        })
        return response;
    }
    public async getPropertyImage(id: number): Promise<any[]> {
        const response = await axios.get(`${this.baseUrl}/images/${id}`).then(res => {
            return res.data.data;
        }).catch(err => {
            console.log(err);
            return null;
        })
        return response;
    }
}