import axios from 'axios';
import Host_Url from './HostUrl';

const base_URL = `${Host_Url}/api/v1/notification`;

const getNotifications = async (id: any) => {
    return axios.get(`${base_URL}/get/${id}`)
        .then(result => result.data)
        .catch(error => { throw error });
}

const readNotification = async (id:any)=>{
    return axios.put(`${base_URL}/read/${id}`)
        .then(result => result.data)
        .catch(error => { throw error });
}

export { getNotifications , readNotification };