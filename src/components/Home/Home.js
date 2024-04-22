import React from 'react'
import Product  from '../Product/product'

import MainImg from '../../assets/hero1-deae5a1f.webp'
const Home = () => {
  return (
    <section className='w-[90%] max-w-[70rem] max-sm:w-full  min-h-screen pe-6 flex flex-col  gap-4'>
      <div className='flex flex-row items-center'>

      <article className="w-full min-h-[600px]  flex flex-col items-start justify-around py-5  ">
        <h1 className=" text-7xl w-11/12 text-[#394E6A] font-bold   tracking-wide">
        We are changing the way people shop 
        </h1>
        <p className="w-3/5 leading-7 tracking-wide"> 
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.
        </p> 
        <button className='w-[130px] h-[40px] px-3 text-center text-white bg-[#067AFF] rounded-[5px] tracking-wide'>
          our product
        </button>
      </article>
        <div className='w-3/4 h-[500px] min-h-[400px bg-black rounded-[10px] p-4 pe-0  max-md:hidden' >
        <img src={MainImg} alt='img product'  className='w-full h-full rounded-t-none rounded-b-none rounded-s-[8px]'/>
        </div>
      </div>
      <div className='fle flex-col w-full'>
        <h1 className='w-[#394E6A] text-2xl tracking-wide mb-2'>Featured Products</h1>
        <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 place-content-center'>
          <Product /> 
        </div>
      </div>
  
    </section>
  )
}

export default Home 
