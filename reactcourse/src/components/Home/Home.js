import React from 'react'

const Home = () => {
  return (
    <section className='w-full min-h-screen h-full bg-[#F0F6FF]  '>
      <article className="w-full min-h-[500px]  flex flex-col items-start justify-around  py-8 ps-6">
        <h1 className=" text-6xl w-11/12 text-[#394E6A] font-bold  ">
        We are changing the way people shop 
        </h1>
        <p className="w-3/5 leading-7"> 
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.
        </p> 
        <button className='w-[130px] h-[40px] px-3 text-center text-white bg-[#067AFF] rounded-[5px]'>
          our product
        </button>
      </article>
      <div>
        <h1 className='#394E6A'>Featured Products</h1>
      </div>
    </section>
  )
}

export default Home
