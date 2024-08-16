import axios from "axios";
import { useEffect } from "react";
import { TbWashDryP } from "react-icons/tb";
import { redirect, useNavigate } from "react-router-dom";

const Redirect = () => {
    const navigate = useNavigate();
    useEffect(() => {
        console.log("Redirect");
        navigate('/')
    }, [])
    return <>
    </>
}

const apiInstance = axios.create({
    
    baseURL: 'http://localhost:8000',
    withCredentials: true,
});


apiInstance.interceptors.response.use((response) => {


    return response;
}, async (error) => { 
    
    if(error?.response?.status == 401)
        {  
            try{
                const res = await  axios.post('http://localhost:8000/api/token/refresh/', {}, { withCredentials: true })
                    const originalRequest = error.config;
                    return axios(originalRequest); 
            }catch(error)
            {
                console.log("Token refresh error: " + error);
                window.location.href = '/login';
                // return redirect("/login");
            }
    }
    // if÷(error?.response?.status == 400)
    console.log("-------------->Token refreshe error: " + error);
    // return Promise.reject(error);

    
})


export default apiInstance