import React from 'react'
import { useEffect, useState } from'react'
import apiInstance from '../../axois/axios' 
import Product  from '../Product/product'
import axios from 'axios'


import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "../../@/components/ui/carousel"
  



const NewArrival = () => {
    const [fourProduct, setFourProduct] = useState([])
    useEffect( () => {
        // fetchData()
        const getData = async () => {
          try{
            const response = await apiInstance.get('/products/fourProduct/', {
              withCredentials: true,
            })
            const {data} = response
            setFourProduct(data)
          }catch(error){
            console.log(error)
          }
        };
        getData();
      }, [])

  return (
    <div className='w-[100%]  max-sm:w-full  h-auto flex flex-col items-center justify-evenly  py-8  '>
    <h1 className='w-full text-center  text-3xl tracking-wide mb-2 uppercase font-bold  font-Satoshi-Bold  '>new arrivals</h1>
    <Carousel className='w-full h-full  flex items-center justify-center '>
    <CarouselContent> 
     {fourProduct &&  fourProduct?.map ((ele, index) => 
     {
       return(

            <CarouselItem key={index} className="w-full   p-6 grid place-content-center"> 
            <Product  data={ele}  />
            </CarouselItem>
        )
     }
      )}
    </CarouselContent>
    <CarouselPrevious />
  <CarouselNext />
    </Carousel>
  </div> 
  )
}

export default NewArrival