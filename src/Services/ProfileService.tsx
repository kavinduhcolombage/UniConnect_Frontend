import axios from 'axios';
import Host_Url from './HostUrl';


const base_URL = `${Host_Url}/api/v1/profile`;

const getProfile = async (id: any) => {
    return axios.get(`${base_URL}/get/${id}`)
        .then(res => res.data)
        .catch(error => { throw error; });
}

const updateProfile = async (profile: any) => {
    return axios.put(`${base_URL}/update`, profile)
        .then(res => res.data)
        .catch(error => { throw error; });
}

const getAllProfile = async () => {
    return axios.get(`${base_URL}/getAll`)
        .then(result => result.data)
        .catch(error => { throw error })
}

export { getProfile, updateProfile, getAllProfile };
