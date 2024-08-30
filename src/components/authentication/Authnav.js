import React, { useState, useContext, useEffect } from "react";
import {Link, useNavigate, Outlet} from 'react-router-dom'
import AuthContext  from "../../context/AuthProvider";
import AuthUser from '../../hooks/AuthUser'
import authIntance from "../../axois/axios";
import apiInstance from "../../axois/axios";


const Authnav = () => {
    const navigate = useNavigate();
    const {auth, setAuth} = useContext(AuthContext)
    console.log("Auth nav:", auth);
    AuthUser()
    const logouthandler = async () => {
        const response = await apiInstance.post('logout/')
        
        if(response?.status == 200)
        {
            setAuth(false)
            navigate("/login");
            console.log(auth)
        }

    }
    return (
        <div className="w-full  bg-black font-Satoshi-Light font-normal">

        <div className="sm:h-[38px] w-[100%] p-2 md:p-0   flex flex-col sm:flex-row items-center justify-center  text-[#FFF] text-xs  md:text-base md:gap-x-2  smtracking-wide  ">
            <p className="w-fit capitalize p-0 ">
            Sign up and get 20% off to your first order.  
            </p>
           { auth && <Link  to="/login"  className="inline-block w-fit cursor-pointer capitalize underline sm:p-2     " >Sign Up Now</Link> }
                {/* {
                    auth ? 
                    <button className="btn capitalize px-3 py-1 bg-blue-600 text-base text-white rounded-md"
                    onClick={() => logouthandler()}
                    >logout</button>
                    :
                    <button className="btn capitalize px-3 py-1 bg-blue-600 text-base text-white rounded-md">
                        <Link  to="/login"   >create Account</Link>
                    </button>
                }  */}
        </div>
    
        </div>
    )
}


export default Authnav