import React, { useState, useEffect, useContext } from 'react'
import AuthContext from 'src/context/AuthProvider'
import Product  from '../Product/product'
import apiInstance from 'src/axois/axios';
import { FaRegTrashAlt } from "react-icons/fa";
import { FiMinus, FiPlus} from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";



const Checkout = () => {
  const {cart, setCart} = useContext(AuthContext)
  return (<div className='w-full min-h-border  h-72 p-5 rounded-2xl border border-black/10 '>
     <div className='capitalize text-black/60  dark:text-white font-normal font-Satoshi-Regular tracking-wide'>
      <h3 className=''> order summury </h3>
      <table className=' w-full h-[50%]'>
        <tr className='min-h-10 h-10'>
          <td className='font-normal '>Subtotal</td>
          <td className='text-black  dark:text-white font-bold'>{cart.cartTotal}$</td>
        </tr>
        <tr className='min-h-10 h-10'>
        <td className='font-normal '>Discount</td>
          <td className=' font-bold text-red-500'>0$</td>
        </tr>
        <tr className='min-h-10 h-10'>
        <td className='font-normal ' >Delivery fee</td>
          <td className='text-black  dark:text-white font-bold'>0$ </td>
        </tr>
        <tr className='border-t min-h-10  h-12 py-2 '>
        <td className='text-black dark:text-white'> Total</td>
        <td className=' text-black dark:text-white font-bold ' >{cart.cartTotal}$</td>
        </tr>
      </table>
      <button className='w-full py-3 bg-black  dark:text-white text-white rounded-3xl leading-6 capitalize tracking-wide cursor-pointer'> Go To checkoout <IoIosArrowRoundForward  className='inline text-3xl leading-4'/> </button>
     </div>
  </div>)
}

const SaleProduct = ({data}) => {
  console.log("--------------?>", data);
  let {product_id, quantity } = data  
  const {id, image, name, free, price,} = product_id
  const {cart, setCart} = useContext(AuthContext)
  const [Qt, setQt] = useState(0)
  console.log(Qt)
  const removeItem = async (id) => {
      //  console.log(cart.cartItems.filter(item => item.id != id))
      //  cart.cartItems = cart.cartItems.filter(item => item.id != id)
        // setCart(prev => ({...prev, 
        //   numItemsInCart : prev.numItemsInCart - quantity , 
        //   cartTotal : prev.cartTotal - (price * quantity) ,
        //   cartItems : cart.cartItems.filter(item => item.id != id)}))
        //   // const res = await apiInstance.delete('/products/add_product_to_cart', {
        //   //   data: { id: id },
        // });
        // console.log(res)
  }
  useEffect( () => {
    const updateCartInBackend = async () => {
        try {
            const res = await apiInstance.post('/products/add_product_to_cart', {
                cart: cart,
            });
            // Handle the response if needed
            console.log('Cart updated successfully', res.data);
        } catch (error) {
            console.error('Error updating cart', error);
            // Handle error, show message to user, etc.
        }
    };

    if (cart.numItemsInCart > 0) {  // Ensure we don't send unnecessary requests
        updateCartInBackend();
    }

},[cart])






  return( 
    <div className='w-full h-auto  phone:h-32  md:h-40 rounded-lg justify-center items-center  flex gap-4 border  p-2 "  '>
      <div className='w-[50%] phone:w-[40%] h-full bg-product-bg  dark:bg-white grid place-content-center    rounded-[14px]  '>
          <img src={image[0].image} alt={image[0].alt_text} className=' h-[100%] w-full  md:scale-75 object-fill'/>
        </div>
        <div className='w-full h-full flex gap-2 flex-col md:justify-between  text-black'>
        <FaRegTrashAlt  className='text-red-400 min-h-3  cursor-pointer self-end' id="delete" onClick={()=> {
          // console.log("Delete")
          removeItem(id)

        }}  />
        <h3 className='text-start text-sm  font-normal  font-Satoshi-Regular  capitalize  p-0'>{name}</h3>
        <p className='text-start '>$ {price * (quantity + Qt)}   {quantity + Qt} </p>
            <div className='flex items-center justify-between p-2 bg-zinc-100 w-32  rounded-2xl min-h-8 h-8 text-base self-end'>
                <span className='text-lg cursor-pointer' onClick={() => {
                  setQt(prev => prev  > 0 ? prev - 1 : 0)
                 
                  cart.cartItems.forEach(element => {
                    if(element.id === id && element.quantity > 0)
                      {
                        
                        element.quantity--
                      }
                    })
                    setCart( prev => ({...prev, 
                      numItemsInCart : prev.numItemsInCart > 0 ? prev.numItemsInCart - 1  : 0, 
                      cartTotal : parseFloat(prev.cartTotal)  + (price * (Qt - quantity)) ||  0,
                    
                    }))
                    console.log( cart.cartTotal)
                }} > <FiMinus className='' /> </span>
                <p className='font-light'>{quantity + Qt}</p>
                <span className='text-lg cursor-pointer' 
                onClick={() => {
                  setQt(prev => prev + 1)
                  cart.cartItems.forEach(element => {
                    if(element.product_id.id === id )
                      {
                        console.log(element.quantity)
                        element.quantity += 1
                      }
                      setCart( prev => ({...prev, 
                        numItemsInCart : prev.numItemsInCart + 1, 
                        cartTotal :  parseFloat(prev.cartTotal)  + (price * (element.quantity - Qt))
                    }))
                      
                    })
                  console.log(cart.cartTotal) 
                }}  
                > <FiPlus /></span>
            </div>
      </div>
    </div>

  )
}

const Cart = () => {
const {cart , setCart} = useContext(AuthContext) 
console.log(cart)
   return (
      <div className='w-[100%]   max-sm:w-full   min-h-[820px]  h-full  px-6 flex flex-col md:flex-row gap-4  items-start  p-4'>

       {/* <h1 className='text-[#394E6A] text-2xl tracking-wide mb-2'>Your Cart Is Empty</h1> */}
       <div className='w-full    h-full   grid gap-y-4  gap-4  grid-cols-1   place-items-start  ' >
        {cart?.cartItems?.length ?  cart?.product_shop_id?.map ((ele, index) => <SaleProduct  data={ele} key={index}  /> ) : <div className='w-[100%] col-span-2 h-full flex justify-center ' > ops!! no product </div>} 
        </div>
        <Checkout />
      </div>

  )
}

export default Cart
