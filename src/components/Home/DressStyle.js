import React from 'react'
import { AspectRatio } from "../../@/components/ui/aspect-ratio"
import dress from  '../../assets/casual.png'
import formal from  '../../assets/formal.png'
import party from  '../../assets/party.png'
import Gym from  '../../assets/Gym.png'

const DressStyle = () => {
  return (
    <section className='w-full bg-zinc-100 flex flex-col items-center justify-center p-7 md:p-10 rounded-3xl'>
    <h1 className="w-full text-center text-3xl md:text-5xl font-bold leading-10 uppercase font-[Integral CF]">
      BROWSE BY DRESS STYLE
    </h1>
  
    <div className='w-full h-full grid grid-flow-row gap-4 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3'>
      <AspectRatio ratio={16 / 9} className='rounded-3xl bg-white relative px-1 capitalize'>
        <h1 className='absolute top-4 left-4 font-normal font-Satoshi-Light text-2xl'>Casual</h1>
        <img src={dress} alt="Casual Dress" className="w-full h-full rounded-3xl object-fill" />
      </AspectRatio>
  
      <AspectRatio ratio={16 / 9} className='rounded-3xl bg-white relative px-1 capitalize md:col-span-2'>
        <h1 className='absolute top-4 left-4 font-normal font-Satoshi-Light text-2xl'>Formal</h1>
        <img src={formal} alt="Formal Dress" className="w-full h-full rounded-3xl object-fill" />
      </AspectRatio>
  
      <AspectRatio ratio={16 / 9} className='rounded-3xl bg-white relative px-1 capitalize  md:col-span-2'>
        <h1 className='absolute top-4 left-4 font-normal font-Satoshi-Light text-2xl'>Party</h1>
        <img src={party} alt="Party Dress" className="w-full h-full rounded-3xl object-fill" />
      </AspectRatio>
  
      <AspectRatio ratio={16 / 9} className='rounded-3xl bg-white relative px-1 capitalize'>
        <h1 className='absolute top-4 left-4 font-normal font-Satoshi-Light text-2xl'>Gym</h1>
        <img src={Gym} alt="G Outfit" className="w-full h-full rounded-3xl object-fill" />
      </AspectRatio>
    </div>
  </section>
  
  )
}

export default DressStyle