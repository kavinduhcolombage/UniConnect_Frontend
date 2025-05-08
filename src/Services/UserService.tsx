import axios from 'axios';
import { User } from '../types/User';
import Host_Url from './HostUrl';
const base_URL = `${Host_Url}/api/v1/usercontroller`;

const registerUser = async (user:User)=>{
    return axios.post(`${base_URL}/signup`, user)
    .then(res=>res.data)
    .catch(error=>{throw error;});
}

const loginUser = async (user:Pick<User, 'email' | 'password'>)=>{
    return axios.post(`${base_URL}/login`, user)
    .then(res=>res.data)
    .catch(error=>{throw error;});
}

export {registerUser, loginUser};
