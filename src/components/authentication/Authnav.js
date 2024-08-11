import React, { useState, useContext, useEffect } from "react";
import {Link, Outlet} from 'react-router-dom'
import AuthContext  from "../../context/AuthProvider";
import AuthUser from '../../hooks/AuthUser'
import authIntance from "../../axois/apiInstance";
import apiInstance from "../../axois/axios";


const Authnav = () => {
    const {auth, setAuth} = useContext(AuthContext)
    AuthUser()
    const logouthandler = async () => {
        const response = await apiInstance.post('logout/',{
            "username" : "issam",
            "password" : "ana1998ana"
        })
        console.log(response)
        if(response?.status == 200)
        {
            setAuth({
                "login": false,
            })
        console.log(auth)
        }

    }
    return (
        <div className="w-full flex items-center justify-center bg-black">

        <div className=" h-[40px] w-[80%] max-w-[65rem] min-w-[] flex flex-row items-center justify-end  text-white text-sm  gap-x-4   ">
            <button>
                <Link  to="/login"  >sign in / Guest</Link>
            </button> 
            <button>
                {
                    auth.login ? 
                    <button className="btn capitalize px-3 py-1 bg-blue-600 text-base text-white rounded-md"
                    onClick={() => logouthandler()}
                    >logout</button>
                    :
                    <Link  to="/login"   >create Account</Link>
                }
            </button> 
        </div>
    
        </div>
    )
}


export default Authnav