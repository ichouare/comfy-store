import React from 'react'

const ProductDetails = ({data}) => {
    console.log(data)
    const {name, price, free, image, description} = data
    return (
    <section className='w-full h-full flex flex-col items-center justify-center p-4 gap-4  '>
            <div className='product_imgs w-full    flex flex-col gap-4 '>
            <div className='w-full min-h-72 bg-product-bg rounded-2xl'>
                <img src={image} alt={name + "img"} className='main_img w-full h-full object-fill' />
            </div>
                <div className='w-full grid grid-flow-col gap-3 '>
                <div className='h-28 w-28 rounded-2xl bg-product-bg'>
                <img src={image} alt={name + "img"} className='w-full h-full object-fillhhg' />
                </div>
                <div className='h-28 w-28 rounded-2xl bg-product-bg'>
                <img src={image} alt={name + "img"} className='w-full h-full object-fillhhg' />
                </div>
                <div className='h-28 w-28 rounded-2xl bg-product-bg'>
                <img src={image} alt={name + "img"} className='w-full h-full object-fillhhg' />
                </div>
                </div>
                </div>
                <div className='w-full flex flex-col items-start '>
                    <article className='flex flex-col gap-2 border-b  py-3 '>
                    <h2 className='text-2xl'>{name}</h2>
                    <p>{free? "Free" : "$" + price}</p>
                    <p className='font-Satoshi-Regular  font-light'>{description}</p>
                    </article>

                </div>
    </section>
  )
}

export default ProductDetails