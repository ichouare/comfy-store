import React from 'react'

const DataInfoLoding = () => {
  return (
    <section className='w-full min-h-screen h-full  flex flex-col items-start justify-start p-4 gap-4     '>
    <div className='w-full relative  sm:flex gap-6      sm:h-auto items-center justify-center  '>

     <div className='product_imgs w-full 
     sm:max-md:w-96 md:w-auto  flex flex-col sm:justify-center items-center justify-start  gap-4   md:flex-row-reverse'>
         <div className='animate-pulse max-w-96 w-full  min-h-72 h-72 md:w-96 md:h-96  bg-gray-300 dark:text-gray-600 rounded-2xl '>
            
         </div>

         {/* <div className='w-full grid grid-flow-col md:grid-flow-row sm:gap-3  md:w-28 md:min-h-[100%] '> */}
         <div className='max-w-96 w-full  gap-x-[5px] sm:w-96  md:w-auto md:h-96  flex justify-between  md:flex-col mb-4 '>
         {
             [...Array(4).keys()].map((item, index) => {
                 return (
                 <div className='animate-pulse h-20 w-20 rounded-2xl bg-gray-300 dark:text-gray-600 cursor-pointer ' key={index} > 
                   
                 </div>
             )}
         )
         }
         </div>

         </div>
         <div className=' w-full    min-h-72 h-72  md:w-[50%] flex flex-col items-start border-b gap-2  sm:border-0'>
             <div className='animate-pulse  bg-gray-300 dark:text-gray-600  h-4 w-[60%]  mb-3  rounded-full'></div>
             <div className='animate-pulse  bg-gray-300 dark:text-gray-600  h-3  w-[80%] mb-3 rounded-full'></div>
             <div className='animate-pulse  bg-gray-300 dark:text-gray-600  h-3 w-[80%]  mb-3 rounded-full'></div>
             <div className='animate-pulse  bg-gray-300 dark:text-gray-600  h-3 w-[80%]  mb-3 rounded-full'></div>
             <div className='animate-pulse  bg-gray-300 dark:text-gray-600  h-3 w-[80%]  mb-3 rounded-full'></div>
             <div className='animate-pulse  bg-gray-300 dark:text-gray-600  h-3 w-[80%]  mb-3 rounded-full'></div>
             <div className='w-full  pt-1  min-h-28    flex flex-col   gap-4 border-b sm:border-0'>
        <div className='w-[80%]  flex items-center justify-between flex-wrap  gap-2'>   
            {
             [...Array(4).keys()].map((sz, index) => (
                    <button key={index} className={`h-10 w-20  bg-gray-300 dark:text-gray-600  text-sm  capitalize px-4 py-2.5  rounded-2xl  font-Satoshi-Regular  font-light `} ></button>
                ))
            }
        </div>
        </div>
         </div>
         </div>
         {/* <NewArrival title={'You might also likenged'}/> */}
         </section>
  )
}

export default DataInfoLoding