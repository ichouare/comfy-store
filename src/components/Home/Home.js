import React, { useEffect, useContext, useState } from 'react'
import Product  from '../Product/product'
import axios from 'axios'

import MainImg from '../../assets/hero1-deae5a1f.webp'
import { Outlet } from 'react-router'
import AuthUser from '../../hooks/AuthUser'
import AuthContext from '../../context/AuthProvider'
import authIntance from '../../axois/axios'
import Navbar from '../Navbar/Navbar'
import apiInstance from '../../axois/axios'

const Home = () => {
  const {auth, setAuth} = useContext(AuthContext)
  const [fourProduct, setFourProduct] = useState([])


  useEffect( () => {
    // fetchData()
    const getData = async () => {
      try{
        const response = await apiInstance.get('/products/fourProduct/', {
          withCredentials: true,
        })
        const {data} = response
        console.log(data);
        setFourProduct(data)
      }catch(error){
        console.log(error)
      }
    };
    getData();
  }, [])


  return (
    
    <>
    
    <section className='w-[100%]   min-w-full  min-h-full h-full    overflow-hidden   px-6 flex flex-col items-center  '>
      <div className='w-[100%]  max-sm:w-full   flex flex-row items-center justify-start'>

      <article className="w-full min-h-[600px]  flex flex-col items-start justify-around py-5  ">
        <h1 className=" text-7xl  max-sm:text-6xl  w-11/12 text-[#7a8189] font-bold   tracking-wide">
        We are changing the way people shop 
        </h1>
        <p className="w-3/5  max-sm:w-full leading-7 tracking-wide"> 
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.
        </p> 
        <button className='w-[130px] h-[40px] px-3 text-center text-white bg-[#067AFF] rounded-[5px] tracking-wide'>
          our product
        </button>
      </article>
        <div className='w-3/4 h-[500px] min-h-[400px] bg-black rounded-[10px] p-4 pe-0  max-md:hidden' >
        <img src={MainImg} alt='img product'  className='w-full h-full rounded-t-none rounded-b-none rounded-s-[8px]'/>
        </div>
      </div>
      <div className='w-[100%]  max-sm:w-full  flex flex-col '>
        <h1 className='w-[#394E6A] text-2xl tracking-wide mb-2'>Featured Products</h1>
        <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 place-content-center'>
         {fourProduct &&  fourProduct.map ((ele, index) => <Product  data={ele} key={index} /> )}
        </div>
      </div> 
     
    </section>
    </>
  )
}

export default Home 
