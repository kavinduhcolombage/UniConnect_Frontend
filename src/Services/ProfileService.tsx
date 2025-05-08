import axios from 'axios';
import Host_Url from './HOstUrl';


const base_URL = `${Host_Url}/api/v1/profile`;

const getProfile = async (id:number)=>{
    return axios.get(`${base_URL}/get/${id}`)
    .then(res=>res.data)
    .catch(error=>{throw error;});
}

const updateProfile = async (profile:any)=>{
    return axios.put(`${base_URL}/update`, profile)
    .then(res=>res.data)
    .catch(error=>{throw error;});
}

export {getProfile, updateProfile};