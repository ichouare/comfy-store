import React from "react";
import {Link} from 'react-router-dom'


const Authnav = () => {
    return (
        <div className="w-full h-[40px] flex flex-row items-center justify-end bg-black text-white text-sm  gap-x-4 px-8 ">
            <button>
                <Link  to="/login" >sign in / Guest</Link>
            </button> 
            <button>
                <Link  to="/login" >create Account</Link>
            </button> 
        </div>
    )
}


export default Authnav