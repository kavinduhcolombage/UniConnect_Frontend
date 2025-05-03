import axios from 'axios';
const base_URL = 'http://localhost:8080/api/v1/usercontroller';

const registerUser = async (user:any)=>{
    return axios.post(`${base_URL}/signup`, user)
    .then(res=>res.data)
    .catch(error=>{throw error;});
}

const loginUser = async (user:any)=>{
    return axios.post(`${base_URL}/login`, user)
    .then(res=>res.data)
    .catch(error=>{throw error;});
}

export {registerUser, loginUser};
