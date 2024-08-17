import React from 'react'
import img from '../../assets/pexels-photo-943150.webp'
import { Link } from 'react-router-dom'
const product = ({data, grid}) => {
  let {id, name, price, image} = data
  console.log("Product")

  return (
    <Link to={`/product/${id}`} className={grid ? ' w-full min-h-[240px] md:min-h-[200px]  h-[200px]  p-3 md:px-3   bg-slate-50 rounded-[10px] flex flex-col md:flex-row md:items-center justify-between  cursor-pointer shadow-sm hover:shadow-lg gap-y-2  md:gap-y-0 ' : ' min-w-[300px]  w-full max-w-[380px]  h-auto max-h-[300px] px-3 pb-3  bg-slate-50 rounded-[10px] flex flex-col items-center justify-center shadow cursor-pointer hover:shadow-lg   '}>
      <img src={image} alt='' className={grid ? 'w-[150px] h-[150px] md:h-[80%] rounded-[10px] justify-self-start' : 'w-full h-[65%] rounded-[10px] justify-self-start' }/>
      <div className={grid ? 'w-full md:h-[80%] grow grid grid-flow-row md:grid-flow-col grid-cols-1  md:grid-cols-2 md:px-6' :  'w-full  grow grid place-content-center'}>
      <h3 className={grid ? 'text-start text-xl capitalize font-medium text-[#394E6A] tracking-wide p-0 ' : 'text-center text-xl capitalize font-medium text-[#394E6A] tracking-wide p-0'}>{name}</h3>
      <p className={grid ? 'text-start text-[#4C3FA5]' : 'text-center text-[#4C3FA5]'}>$ {price}</p>
      </div>
    </Link>
  )
}

export default product
