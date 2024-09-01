import React from 'react'

const ProductsInLoading = () => {
  return (
    <div className='w-full  h-full  md:pt-12 grid gap-y-4  md:gap-4 grid-cols-1 phone:grid-cols-2  sm:grid-cols-3  lg:grid-cols-4 place-items-center sm:place-content-start p-0 sm:p-[10px] ' >
        {[...Array(7).keys()].map((ele, index) =>{ 
        return (<div   key={index} >
            <div className="animate-pulse min-h-full w-48 h-[250px]     flex flex-col justify-start items-start   m-2  rounded-md"> 
            <div className='w-full h-[50%] flex items-center  bg-gray-300 dark:bg-gray-600 justify-center'>
            <svg  className='text-gray-300 dark:text-gray-600 '  width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-1 16h-19l4-7.492 3 3.048 5.013-7.556 6.987 12zm-11.848-2.865l-2.91-2.956-2.574 4.821h15.593l-5.303-9.108-4.806 7.243zm-4.652-11.135c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm0 1c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"/></svg>
            </div>
            <div className='animate-pulse w-[80%] rounded-full h-4 flex items-center  bg-gray-300 dark:bg-gray-600 my-2'></div>
            <div className='animate-pulse w-[60%] rounded-full h-3 flex items-center  bg-gray-300 dark:bg-gray-600 my-2'></div>
            <div className='animate-pulse w-[40%] rounded-full h-3 flex items-center  bg-gray-300 dark:bg-gray-600 my-2'></div>
            </div>
        </div>)
 }) 
        }
        </div>
  )
}

export default ProductsInLoading