import React from 'react'
import img from '../../assets/pexels-photo-943150.webp'




import { Link } from 'react-router-dom'
const product = ({data, grid}) => {
  let {id, name, price, image} = data
  console.log("Product")

  return (
    <Link to={`/product/${id}`} className=' min-w-[200px]  w-[200px] min-h-[350px]  max-h-[350px]   bg-white  flex flex-col items-center justify-center  cursor-pointer gap-2   '>
      <div className='w-full bg-product-bg grid place-content-center  min-h-[200px] h-[250px] rounded-[14px] '>
        <img src={image} alt='' className='object-fit'/>
      </div>
      <div className='w-full text-black'>
      <h3 className='text-start text-sm  font-normal  font-Satoshi-Regular  capitalize  p-0'>{name}</h3>
      <p className='text-start '>$ {price}</p>
     </div>
    </Link>
  )
}

export default product
