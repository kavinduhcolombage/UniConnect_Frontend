import axios from 'axios';
import Host_Url from './HostUrl';
import axiosInstance from '../Interceptor/AxiosInterceptor';

const base_URL = `${Host_Url}/api/v1/notification`;
const path_URL = "/api/v1/notification";

const getNotifications = async (id: any) => {
    return axiosInstance.get(`${path_URL}/get/${id}`)
        .then(result => result.data)
        .catch(error => { throw error });
}

const readNotification = async (id: any) => {
    return axiosInstance.put(`${path_URL}/read/${id}`)
        .then(result => result.data)
        .catch(error => { throw error });
}

export { getNotifications, readNotification };