import axios from "axios";
const base_url="http://localhost:8080/api/v1/jobs/";
const postJob = async (job:any)=>{
    console.log("start of job object");
    console.log("Job in service", job);
    console.log("end of job object");
    return axios.post(`${base_url}post`, job)
    .then(result => result.data)
    .catch(error =>{throw error;});
}

const getAllJobs = async ()=>{
    return axios.get(`${base_url}getAll`)
    .then(result => result.data)
    .catch(error =>{throw error;});
}

const getJob=async (id:any)=>{
    return axios.get(`${base_url}get/${id}`)
    .then(result => result.data)
    .catch(error =>{throw error;});
}

export {postJob, getAllJobs, getJob};