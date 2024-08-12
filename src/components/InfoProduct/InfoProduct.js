import React, { useEffect, useState, useContext} from 'react'
import { useParams } from'react-router-dom'
import authIntance from '../../axois/apiInstance'
import AuthContext from '../../context/AuthProvider'


const ProductInfo = ({data}) => {
    const {cart, setCart} = useContext(AuthContext)
    let {id, name, description, image, price, free     } = data
    const [number , setNumber] = useState(0)

    if (!image.includes('http://localhost:8000/'))
        {
          image = `http://localhost:8000${image}`
        }
    
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
            numItemsInCart :  number + cart.numItemsInCart , 
            cartTotal : (number * price ) + cart.cartTotal,
            cartItems:   handlecartItems(id,  (cart.numItemsInCart) )
            
        })}
    // useEffect(()=> {

    // }, [number])
        console.log("handleCart:", cart);

    return (
        <section className='w-full min-w-full   h-[100%]    flex flex-row  p-16 gap-8  items-start justify-start    '>
         <div className='w-[40%] min-w-[40%] h-[400px]  '>
        <img src={image} alt={name} className=' w-full h-full object-fill ' />

         </div>
         <div className=' flex flex-col justify-center gap-y-8  '>
            <h1 className='text-4xl text-[#474F6A] font-bold'>{name}</h1>
            <h4 className='text-[#474F6A] text-base'>{free ? "Free" : "$" + price}</h4>
       
            <p className='w-[80%] text-xl text-[#68809D] leading-7'>{description}</p>
            <div className='flex flex-col  gap-y-4'>
                <label htmlFor='amount' className='capitalize'>amount</label>
                <input type='number' name='amount' id='amount' min="0" max="20" step="1" readonly value={number} className='w-[40%] border border-blue-800 rounded-md p-2' onChange={(e) => {
                        if (e.target.value <= 0)
                            setNumber(0)
                        else 
                            setNumber(parseInt(e.target.value))
                }} />
            </div>
            <button className='w-[140px] text-base font-medium p-3 rounded-md text-white bg-[#463AA1] uppercase '
            onClick={() => handleCart()}
            >add to cart</button>
         </div>
        </section>
    )
}

const InfoProduct = () => {
    const {id} = useParams()
    const [product, setproduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(true)
    useEffect(( ) => {
        setLoading(true)
        const getaDataof = async ( ) => 
            {
                try {
                const response = await authIntance.get(`products/products/${id}`)
                console.log(response)
                const {data} = response
                setLoading(false)
                setproduct(data)

                }catch(error)
                {
                    setLoading(false)
                    setError(error.message)
                }
            }
        getaDataof()
    }, [id])

    if(loading){
        return <h1>loading...</h1>
    }
    else if (!loading && product)
        {
                return <ProductInfo data={product} />
        }
    else if(!loading && error){
        return <h1>error</h1>
    }
}

export default InfoProduct