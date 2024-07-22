import { MyLocation } from "./location.interface";

export interface UnitsResponse{
    current_country_id: number,
    locations: MyLocation[]
}