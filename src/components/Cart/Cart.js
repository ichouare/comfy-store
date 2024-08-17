import React from 'react'

const Cart = () => {
  return (
      <div className='w-[100%]   max-sm:w-full  min-h-full h-full  px-6 flex flex-col items-start  p-10'>

       <h1 className='text-[#394E6A] text-2xl tracking-wide mb-2'>Your Cart Is Empty</h1>
        <div className='w-[full]  pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 place-content-center border-t-2 bg-red-500'>

        </div>
      </div>

  )
}

export default Cart
