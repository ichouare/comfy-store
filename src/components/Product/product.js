import React from 'react'
import img from '../../assets/pexels-photo-943150.webp'
import { Link } from 'react-router-dom'
const product = ({data}) => {
  let {id, name, price, image} = data

  return (
    <Link to={`${id}`} className=' w-[350px] h-[300px] px-3  bg-white rounded-[10px] flex flex-col items-center justify-between cursor-pointer shadow '>
      <img src={image} alt='' className='w-full h-[65%] rounded-[10px] justify-self-start'/>
      <div className='w-full grow grid place-content-center'>
      <h3 className='text-center text-3xl capitalize font-medium text-[#394E6A] tracking-wide'>{name}</h3>
      <p className='text-center text-[#4C3FA5]'>$ {price}</p>
      </div>
    </Link>
  )
}

export default product
