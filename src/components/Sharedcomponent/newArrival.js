import React from 'react'
import { useEffect, useState } from'react'
import apiInstance from '../../axois/axios' 
import Product  from '../Product/product'
import NewArrivalLoading from './NewArrivalLoadng'


import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "../../@/components/ui/carousel"
  



const NewArrival = ({title}) => {
    const [fourProduct, setFourProduct] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect( () => {
        // fetchData()
        const getData = async () => {
          try{
            setLoading(true)
            const response = await apiInstance.get('/products/fourProduct/', {
              withCredentials: true,
            })
            const {data} = response
            setLoading(false)  // here we set loading to false to hide the loading spinner  
            setFourProduct(data)
          }catch(error){
            console.log(error)
            setLoading(true)
          }
        };
        getData();
      }, [])
  if (loading) return <NewArrivalLoading />
  return (
    <div className='w-[100%]  max-sm:w-full   h-auto flex flex-col items-center justify-evenly px-2  py-8  '>
    <h1 className='w-full text-center  text-3xl tracking-wide mb-2 uppercase font-bold  font-Satoshi-Bold   '>{title}</h1>
    <Carousel className='w-[100%]  md:[60%]  h-full  flex items-center justify-center  gap-2'>
    <CarouselContent className="lg:w-full lg:flex lg:items-center lg:justify-center "> 
     {fourProduct &&  fourProduct?.map ((ele, index) => 
     {
       return(

            <CarouselItem key={index} className="phone:basis-1/2  sm:basis-1/3 m-4     lg:basis-[20%]     grid place-content-center"> 
            <Product  data={ele}  />
            </CarouselItem>
        )
     }
      )}
    </CarouselContent>
    </Carousel>
    <button className="w-[200px]  capitalize font-Satoshi-Medium  font-mediu border  rounded-3xl py-2  dark:bg-blue-500" > view all</button>
  </div> 
  )
}

export default NewArrival