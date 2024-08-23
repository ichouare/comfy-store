import React from 'react'
import { IoChevronBack } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
const Backout = () => {
    const navigate = useNavigate();
    // console.log(history);
  return (
    <button  onClick={() => navigate(-1)} className='w-full   px-2 py-1 text-2xl'>
        <IoChevronBack/>
    </button>
  )
}

export default Backout