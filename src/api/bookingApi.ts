import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables'
import { userDatasource } from './UserApi';
import { CountryDatasource } from './CountryApi';

const { VITE_API_URL } = getEnvVariables();

const axiosInstance = axios.create({
    baseURL: VITE_API_URL
});
const countryDataSource = new CountryDatasource(axiosInstance);
export const BookingApi = {
    user: userDatasource(axiosInstance),
    country: countryDataSource,
}