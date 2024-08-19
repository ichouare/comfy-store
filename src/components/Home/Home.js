import React, { useEffect, useContext, useState } from 'react'


import MainImg from '../../assets/Rectangle 2.png'
import vector from '../../assets/Vector.png'
import smallvector from '../../assets/vector_Small.png'
import logo1 from '../../assets/Group (1).svg'
import logo2 from '../../assets/Group.svg'
import logo3 from '../../assets/gucci-logo-1 1.svg'
import logo4 from '../../assets/prada-logo-1 1.svg'
import logo5 from '../../assets/zara-logo-1 1.svg'




import AuthContext from '../../context/AuthProvider'


import { Link } from 'react-router-dom'
import NewArrival from './nweArrival'
import DressStyle from './DressStyle'
import MoreUpdate from './MoreUpdate'

const Home = () => {
  const {auth, setAuth} = useContext(AuthContext)

  const logos = [logo1, logo2, logo3, logo4, logo5]

 


  return (
    
    <>
    
    <section className='w-[100%]   min-w-full  min-h-full h-full    overflow-hidden   flex flex-col items-center  gap-4  '>
      <div className='w-[100%] min-h-[800px]  h-full  flex flex-col md:flex-row item-center justify-start  bg-main '>
      <section className='w-[100%] min-h-[100%]  md:p-8 '>
      <article className="w-full md:w-[80%] flex flex-col items-start justify-start py-8 gap-2 md:gap-y-8  px-3    ">
        <h1 className="text-4xl md:text-6xl mdfont-bold w-[80%] md:w-full   leading-tight   text-black font-extrabold  font-Satoshi-Variable   ">
        FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="w-full  sm:w-[80%] text-black/50 leading-6 text-sm font-light font-Satoshi-Regular "> 
        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.        </p> 
        <Link to='/product' className='block w-full sm:w-52 sm:py-4  p-2 text-center text-white bg-black rounded-3xl tracking-wide capitalize'>
          shop now
        </Link>
        <div className='w-full     grid grid-flow-row  grid-cols-2 grid-rows-2 md:grid-flow-col md:grid-rows-1 md:gap-8 gap-8 p-4 '>
          <div className='flex flex-col items-start justify-center tracking-wide'>
              <h4 className=' font-Satoshi-Bold text-lg tracking-wider font-semibold'>200+</h4>
              <p className='font-Satoshi-Regular  text-sm text-black/50 font-light'>International Brands</p>
          </div>
          <div className='flex flex-col items-start justify-center tracking-wide'>
              <h4 className=' font-Satoshi-Bold text-lg tracking-wider font-semibold'>2,000+</h4>
              <p className='font-Satoshi-Regular  text-sm text-black/50 font-light'>High-Quality Products</p>
          </div>
          <div className='flex flex-col items-center justify-center tracking-wide  col-span-2  '>
              <h4 className='w-[35%] font-Satoshi-Bold text-lg tracking-wider font-semibold'>30,000+</h4>
              <p className='font-Satoshi-Regular  text-sm text-black/50 font-light'>Happy Customers</p>
          </div>
        </div>
      </article>
      </section>
        <div className='w-full relative   ' >
        <img src={MainImg} alt='img product'  className='w-full h-full  rounded-t-none rounded-b-none '/>
        <img src={vector} alt='img product'  className='absolute top-10 right-3'/>
        <img src={smallvector} alt='img product'  className='absolute top-32 left-6'/>
        </div>
      </div>
      <div className='brands w-full min-h-36  flex flex-row flex-wrap  place-content-center bg-black '>
      {
        logos.map((logo, index) => (
          <div className='min-w-[30%] w-[18%]  md:min-w-[100px]    p-4'  key={index}>
            <img src={logo} alt='logo' className='w-full  h-full object-contain  ' />
          </div>
        ))
      }
      </div>
     <NewArrival  title='new arrivals'/>
     <NewArrival title='top selling' />
     <DressStyle />
     <MoreUpdate />
     
    </section>
    </>
  )
}

export default Home 
