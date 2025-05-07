import axios from 'axios';
import { User } from '../types/User';
const base_URL = 'http://localhost:8080/api/v1';

const registerUser = async (user:User)=>{
    return axios.post(`${base_URL}/usercontroller/signup`, user)
    .then(res=>res.data)
    .catch(error=>{throw error;});
}

const loginUser = async (user:Pick<User, 'email' | 'password'>)=>{
    return axios.post(`${base_URL}/auth/login`, user)
    .then(res=>res.data)
    .catch(error=>{throw error;});
}

export {registerUser, loginUser};
