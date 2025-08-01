import axios from 'axios';
import Host_Url from './HostUrl';

const base_URL = `${Host_Url}/api/v1/auth`;

const loginUser = async (login: any) => {
    return axios.post(`${base_URL}/login`, login)
        .then(res => res.data)
        .catch(error => { throw error; });
}

export { loginUser };