import React from 'react'
import { useEffect, useContext } from 'react'
import AuthContext from 'src/context/AuthProvider'
import Product  from '../Product/product'
import { FaRegTrashAlt } from "react-icons/fa";
import { FiMinus, FiPlus} from "react-icons/fi";

const SaleProduct = ({data}) => {
  let {id, name, price, image, quantity} = data
  const {cart, setCart} = useContext(AuthContext)
  const removeItem = (id) => {
    console.log("removing item: " + cart.cartItems)
       console.log(cart.cartItems.filter(item => item.id != id))
      //  cart.cartItems = cart.cartItems.filter(item => item.id != id)
        setCart(prev => ({...prev, 
          numItemsInCart : prev.numItemsInCart - quantity, 
          cartTotal : prev.cartTotal - (price * quantity),
          cartItems : cart.cartItems.filter(item => item.id != id)}))
       console.log(cart.cartItems.length)
  }
  return(
    <div className='w-full h-32  rounded-lg justify-center items-center  flex gap-4 border  p-2 "  '>
      <div className='w-[40%] h-full bg-product-bg  dark:bg-white grid place-content-center    rounded-[14px]  '>
          <img src={image} alt='' className='w-full h-full object-cover'/>
        </div>
        <div className='w-full h-full flex gap-2 flex-col text-black'>
        <FaRegTrashAlt  className='text-red-400 min-h-3  cursor-pointer self-end' id="delete" onClick={()=> {
          console.log("Delete")
          removeItem(id)

        }}  />
        <h3 className='text-start text-sm  font-normal  font-Satoshi-Regular  capitalize  p-0'>{name}</h3>
        <p className='text-start '>$ {price * quantity}</p>
            <div className='flex items-center justify-between p-2 bg-zinc-100 w-32  rounded-2xl min-h-8 h-8 text-base self-end'>
                <span className='text-lg cursor-pointer ' > <FiMinus className='' /> </span>
                <p className='font-light'>{quantity}</p>
                <span className='text-lg cursor-pointer'  > <FiPlus /></span>
            </div>
      </div>
    </div>

  )
}

const Cart = () => {
const {cart , setCart} = useContext(AuthContext) 
console.log(cart)
   return (
      <div className='w-[100%]   max-sm:w-full  min-h-screen h-full  px-6 flex flex-col items-start  p-4'>

       {/* <h1 className='text-[#394E6A] text-2xl tracking-wide mb-2'>Your Cart Is Empty</h1> */}
       <div className='w-full  h-full  md:pt-12 grid gap-y-4  gap-4  grid-cols-1   place-items-start  p-[10px] ' >
        {cart?.cartItems?.length ?  cart?.cartItems.map ((ele, index) => <SaleProduct  data={ele}key={index}  /> ) : <div className='w-[100%] col-span-2 h-full flex justify-center ' > ops!! no product </div>} 
        </div>
      </div>

  )
}

export default Cart
