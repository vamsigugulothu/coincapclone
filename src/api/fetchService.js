import axios from "axios";
import { URLS } from "./constants";

class FetchService {
  constructor(URL) {
    this.BASE_URL = URL.BASE;
    this.CURRENCY_URL = URL.CURRENCY;
    this.axiosOption = {
      baseURL: this.BASE_URL,
      timeout: 1500,
    };
  }

  static async get(url, options) {
    const { data } = await axios(url, options);
    return data;
  }

  getCurrencyList = async () => {
    const { data } = await FetchService.get(this.CURRENCY_URL, this.axiosOption);
    return data;
  }
}

const FetchApi = new FetchService(URLS);

export { FetchApi };
