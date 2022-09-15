import axios from 'axios';
import COUNTRIES_URL from '../config';

export default class CountriesServer {
  static async getAll() {
    const response = await axios.get(COUNTRIES_URL);
    return response.data
  };

  static async getCountry(name) {
    const response = await axios.get(`https://restcountries.com/v2/name/${name}`);
    return response.data[0]
  };
}