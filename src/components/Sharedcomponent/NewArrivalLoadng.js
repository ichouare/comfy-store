import React from 'react'

const NewArrivalLoading = () => {
  return (
    <div className='w-[100%]  max-sm:w-full   h-auto flex flex-col items-center justify-evenly px-2  py-8  '>
    <div className=' animate-pulse w-48 h-4 text-center bg-gray-300 dark:bg-gray-600  rounded-full text-3xl tracking-wide mb-2 uppercase font-bold  font-Satoshi-Bold '></div>
    <div className="w-full flex  lg:items-center lg:justify-center flex-nowrap overflow-hidden "> 
    { [...Array(4).keys()].map ((ele, index) => 
     {
       return(

            <div key={index} className=" animate-pulse min-h-full h-[300px] min-w-[200px] w-[100%] md:w-[20%]   bg-gray-300 dark:bg-gray-600  flex items-center   m-2  rounded-md"> 
 
            </div>
        )
     }
      )}
    </div>
    <div className="animate-pulse w-[120px] p-3  h-6 text-center bg-gray-300 dark:bg-gray-600  capitalize font-Satoshi-Medium  font-mediu border  rounded-3xl py-2 " > </div>
  </div> 
  )
}

export default NewArrivalLoading