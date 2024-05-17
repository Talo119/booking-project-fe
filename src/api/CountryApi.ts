import { AxiosInstance } from "axios";
import { ViewCountry } from "./models/Country.model";

export class CountryDatasource {
  constructor(private axios: AxiosInstance) {}

  public getCountries = async (): Promise<ViewCountry[]> => {
    const resp = await this.axios.get<ViewCountry[]>("/country");
    return resp.data;
  };
}
