import React from "react";
import {Link} from 'react-router-dom'


const Authnav = () => {
    return (
        <div className="w-full flex items-center justify-center bg-black">

        <div className=" h-[40px] w-[80%] max-w-[65rem] min-w-[] flex flex-row items-center justify-end  text-white text-sm  gap-x-4   ">
            <button>
                <Link  to="/login" >sign in / Guest</Link>
            </button> 
            <button>
                <Link  to="/login" >create Account</Link>
            </button> 
        </div>
        </div>
    )
}


export default Authnav