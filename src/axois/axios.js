import axios from "axios";


const apiInstance = axios.create({
    baseURL: 'http://localhost:8000/',
    withCredentials: true,
    // headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
    // },
   
})




export default apiInstance