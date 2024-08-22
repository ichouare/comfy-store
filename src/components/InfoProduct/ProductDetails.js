import React , {useState, useRef, useContext} from 'react'
import testImg  from '../../assets/Tshirt2.png'
import testImg2  from '../../assets/Tshirt3.png'
import gsap from "gsap";
import { useGSAP } from "@gsap/react"
import { FiMinus, FiPlus} from "react-icons/fi";
import NewArrival from '../Sharedcomponent/nweArrival';
import AuthContext from '../../context/AuthProvider';




const Size = ({size, setSize}) => {
    const  sizes = useRef(["small", "medium", "large", "X-Large"])

    return (
        <div className='w-full  pt-1  min-h-28    flex flex-col   gap-4 border-b sm:border-0'>
        <h4 className='font-Satoshi-Light  font-normal text-base text-black/50 tracking-wide'>Choose Size</h4>
        <div className='w-full  grid grid-flow-col sm:max-lg:grid-cols-2 sm:max-lg:grid-rows-2  gap-2 '>   
            {
                sizes.current.map((sz, index) => (
                    <button key={index} className={`h-10 text-sm capitalize px-4 py-2.5  rounded-2xl bg-zinc-100 font-Satoshi-Regular  font-light  ${sz === size? 'active': ''}`} onClick={() => setSize(sz)}>{sz}</button>
                ))
            }
        </div>
        </div>
    )
}



const Counter = ({Count, setCount, handleCart}) => {
    return (
        <div className='w-full h-full pt-1   min-h-16 grid  grid-cols-[minmax(104px,_170px)_minmax(200px,_1fr)]  gap-4 border-b items-center sm:max-lg:items-end sm:border-0  '>
            <div className='flex items-center justify-between p-3 bg-zinc-100 rounded-2xl min-h-10 h-10 text-xl'>
                <span className='text-lg cursor-pointer ' onClick={() => setCount(Count ? Count-- : 0 )}> <FiMinus className='' /> </span>
                <p className=''>{Count}</p>
                <span className='text-lg cursor-pointer'  onClick={() => setCount(Count++)}> <FiPlus /></span>
            </div>
            <button className='w-full  min-h-10 h-10 bg-black text-white text-base rounded-2xl font-Satoshi-Regular  font-medium '  onClick={() => handleCart()} >Add to Cart</button>
        </div>
    )
}

const ProductDetails = ({data}) => {
    const {id ,name, price, free, image, description} = data

    const imgs = Array(3).fill(image)
    const [currentImg, setCurrentImg] = useState(0)
    const [size, setSize] = useState('')
    const [Count, setCount] = useState(0)
    const img_ref  = useRef(null) 
    imgs[1] = testImg //test
    imgs[2] = testImg2 // test

    const {cart, setCart} = useContext(AuthContext)

        const container = useRef();
        useGSAP(() => {
            gsap.from(img_ref.current, {
                'opacity': 0,
                ease: "power2",
            })
            gsap.to(img_ref.current, {
                'opacity': 1,
                ease: "power2",
                duration: 0.5,
            })
        }, { dependencies : [currentImg],  scope: container });

    // setup some logic for the cart and add items for   it 
    const handlecartItems = (id_product, quantity) => {
        let {cartItems} = cart
        if (cartItems.length === 0) {
            cartItems.push({
                id : id_product,
                name : name,
                image : image,
                price : price,
                quantity :quantity,
            })
        }
        else if(cartItems.filter( item => item.id === id_product) )
        {
            cartItems = cartItems.map( item => item.id === id_product? {...item, quantity : quantity + item.quantity } : item )
        }
        return cartItems
    }

    const handleCart = () => {
        setCart({...cart, 
            numItemsInCart :  Count + cart.numItemsInCart , 
            cartTotal : (Count * price ) + cart.cartTotal,
            cartItems:   handlecartItems(id,  (cart.numItemsInCart) )
            
        })}


    console.log(cart)

    return (
    <section className='w-full min-h-full h-full  flex flex-col items-center justify-center p-4 gap-4     '>
           <div className='w-full relative  sm:flex gap-6    sm:h-auto items-center justify-center  '>

            <div className='product_imgs w-full 
            sm:max-md:w-96 md:w-auto  flex flex-col sm:justify-center items-center justify-start  gap-4   md:flex-row-reverse'>
                <div className='max-w-96 w-full  min-h-72 h-72 md:w-96 md:h-96  bg-product-bg rounded-2xl '>
                    <img src={imgs[currentImg]} alt={name + "img"} className=' w-full h-full object-cover transition opacity-0' ref={img_ref} />
                </div>

                {/* <div className='w-full grid grid-flow-col md:grid-flow-row sm:gap-3  md:w-28 md:min-h-[100%] '> */}
                <div className='max-w-96 w-full  gap-x-[5px] sm:w-96  md:w-auto md:h-96  flex justify-between  md:flex-col '>
                {
                    imgs.map((img, index) => (
                        <div className='h-28 w-28 rounded-2xl bg-product-bg cursor-pointer ' key={index} onClick={() => setCurrentImg(index)}> 
                            <img src={img} alt={name + "img"} className='w-full h-full object-fill' />
                        </div>
                    ))
                }
                </div>

                </div>
                <div className='w-full  md:w-[50%] flex flex-col items-start border-b gap-2  sm:border-0'>
                    <article className='flex flex-col gap-2   py-3 '>
                    <h2 className='text-2xl'>{name}</h2>
                    <p className='font-bold font-Satoshi-Regular text-2xl '>{free? "Free" : "$" + price}</p>
                    <p className='font-Satoshi-Regular  font-light max-w-[500px]'>{description}</p>
                    </article>
                <Size size={size} setSize={setSize} />
                <Counter  Count={Count} setCount={setCount} handleCart={handleCart}  />
                </div>
                </div>
                <NewArrival title={'You might also likenged'}/>
    </section>
  )
}

export default ProductDetails