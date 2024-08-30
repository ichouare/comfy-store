import React from 'react'
import img from '../../assets/pexels-photo-943150.webp'




import { Link } from 'react-router-dom'
const product = ({data}) => {
  let {id, name, price, image} = data
  return (
    <Link to={`/product/${id}`} className='min-w-[200px]   bg-white  dark:bg-black w-[200px]   md:w-[200px] md:md-w-[200px]  h-[320px]   max-h-[320px]      flex flex-col items-center justify-start  cursor-pointer gap-2  '>
      <div className='w-full bg-product-bg     grid place-content-center  min-h-[250px] h-[250px] rounded-[14px]  '>
        <img src={image[0].image} alt={image[0].alt_text} className='w-full h-full object-cover'/>
      </div>
      <div className='w-full text-black dark:text-white'>
      <h3 className='text-start text-sm  font-normal  font-Satoshi-Regular  capitalize  p-0'>{name}</h3>
      <p className='text-start '>$ {price}</p>
     </div>
    </Link>
  )
}

export default product
