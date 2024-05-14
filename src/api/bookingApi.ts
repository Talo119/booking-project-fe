import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables'
import { userDatasource } from './UserApi';

const { VITE_API_URL } = getEnvVariables();

const axiosInstance = axios.create({
    baseURL: VITE_API_URL
});

export const BookingApi = {
    user: userDatasource(axiosInstance),
}