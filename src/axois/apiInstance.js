import axios from "axios";
import  apiInstance from './axios'

const authIntance = axios.create({
    baseURL: 'http://localhost:8000/',
    withCredentials: true,
})


authIntance.interceptors.response.use((response) => {
    
    return response;
}, async (error) => {
    if(error?.response?.status === 401)
    {   
            try{
                console.log("refresh token using coookies httponly")
                // Refresh the access token
                await  apiInstance.post('api/token/refresh/')
                // Get all information about original request 
                const originalRequest = error.config;
                //use second time the same request but with new acess token 
                return authIntance(originalRequest);
            }
            catch(error)
            {
                return Promise.reject(error);
            }
    }
    return Promise.reject(error);
})



export default authIntance;