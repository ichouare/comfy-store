import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirect = () => {
    const navigate = useNavigate();
    useEffect(() => {
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
    
    if(error?.response?.status === 401)
    {  
            try{
                // Refresh the access token
                const res = await  apiInstance.post('api/token/refresh/');
                console.log("refresh==========>" , res);
                if(res.status != 200)
                    {
                        
                    console.log("refresh token using coookies httponly")
                      throw new Error("access token not found")
                    }
                else{
                    // Get all information about original request 
                    const originalRequest = error.config;
                    //use second time the same request but with new acess token 
                    return apiInstance(originalRequest);

                }
            }
            catch(error)
            {
                console.log("refresh token using coookies")
                return <Redirect />;
    
            }
    }
})


export default apiInstance