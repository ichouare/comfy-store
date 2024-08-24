import React, { useEffect, useRef, useState } from 'react'
import './styles.css'
import Product  from '../Product/product'
import authIntance from '../../axois/axios'
import apiInstance from '../../axois/axios'
import filterIcon from '../../assets/filter.svg'
import gsap from 'gsap';
import { FiPlus } from "react-icons/fi";

const Lists = ({elemments, setState,  state }) => {
//        console.log(elemments)
        return (
                <select className='block rounded-[8px] p-[8px] cursor-pointer  outline-none bg-zinc-100'
                value={state}
                onChange={(e) => setState(e.target.value)}
                
                >
                {
                   elemments &&  elemments?.map((ele, index) => {
                        return <option className='bg-red-500 block w-[80%] rounded-[8px]' key={index}>
                                {ele}
                        </option>
                    })    
                }
            </select>   
        )
}


const Products = () => {

        const form = useRef()
        const [range , setRange] = useState(0)
        const [gridState , setgridState] = useState(true)
        const value = useRef(0)
        const Company = ["all" ,"Mondeza", "Luxera", "comfora" ]
        const sortage = ["a-z", "high", "low" ]
        const [product, setproduct] = useState('')
        const [categories, setcategories] = useState(['all'])
        const [sort, setSort] = useState('a-z')
        const [free, setFree] = useState(false)
        const [category, setcategory] = useState('all')
        const [size, setSize] = useState("")
        const [data, setData] = useState([])
        const [show, setShow] = useState(false)
        

const handlefilter = (e) => {
        e.preventDefault()
        if(product || category || size || sort || free || range)
        {
                setproduct('')
                setFree(false)
                setcategory('all')
                setSize('')
                setSort('a-z')
                setRange(0)  
        }
}


const getCategories = async () => {
        const response = await  apiInstance.get('/products/get_all_categories')
        const categories = ['all', ...response?.data?.map(item => item?.name)]
        setcategories(categories)
}
const get_all_products = async () => { 
        const response = await  apiInstance.get('/products/products', { params: {
                category: category,
                free: free,
                price : range,
                size : size,
                sort: sort,
                name : product  
        }})
        const {data} = response
        setData(data)
}

useEffect(() => {

        getCategories()
        get_all_products() 
}, [])



async function  getData ()  {
        const response = await  apiInstance.get('/products/products',
        {
                params: {
                        category: category,
                        free: free,
                        price : range,
                        size : size,
                        sort: sort,
                        product : product  
                }
        },
        {
                withCredentials: true,
        })
        const {data} = response
        setData(data)
} 

function handleSearch(e){
        e.preventDefault(); 
        getData()
}

const  sizes = useRef(["small", "medium", "large", "X-Large"])


useEffect(() => {
        const handleResize = () => {
          const tl = gsap.timeline();
    
          if (window.innerWidth <= 768) {
            tl.to(form.current, {
              duration: 0.5,
              opacity: show ? 1 : 0,
              ease: show ? 'power1' : 'none',
              bottom: show ? '100%' : '0%',
              top: show ? '12%' : '100%',
              width: '100%',
              height: show ? '90vh' : '20px',
              ease: 'elastic.out(1, 0.3)',
              transformOrigin: 'center bottom',
              // ... other gsap properties
            });
          } else {
            // Optionally, revert the animation if the screen size changes to larger than 768px
            tl.to(form.current, {
              clearProps: 'all', // This will clear all inline styles applied by GSAP
            });
          }
        };
    
        // Initial trigger and resize event listener
        handleResize();
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [show]);

// console.log(size)

return (
<section className='w-[100%]  max-sm:w-full  min-h-full h-full   flex flex-col items-center   '>
    <section className='w-[100%] max-w-[70rem] max-sm:w-full  min-h-full h-full   items-center  py-4 flex flex-col gap-4 relative' >
        <div className='flex items-center justify-center w-10 h-10 self-end me-3 cursor-pointer md:hidden' onClick={() => setShow(true)} >
                <img src={filterIcon} alt='filter_icon' className='w-full h-full object-fill' />
        </div>
        <form
        className="bg-white p-4  font-Satoshi-Regular font-light text-black/60 rounded-t-3xl border-2 fixed  md:relative  md:opacity-1 bottom-0 overflow-hidden w-full lg:h-[300px] pb-8 grid place-items-center md:grid-flow-row md:grid-cols-4  md:grid-rows-2  gap-2 md:gap-4"
        onSumbit={(e) => handlefilter(e)}
        ref={form}
    >        <div className='flex  items-center justify-center  max-w-[80%] w-[80%]  md:max-h-[100px]   p-3 border-b self-end   cursor-pointer md:hidden'  >
        <FiPlus  className='text-3xl rotate-45 cursor-pointer text-zinc-500' onClick={() => setShow(false)} /> 
        </div>
            <div className='flex flex-col gap-2  max-w-[80%] w-[80%] md:min-h-[100px] max-h-[100px]   place-content-center  md:place-content-start  '>
                    <label forhtml="serachProduct" className='text-sm text-[#576A83] capitalize tracking-wide font-medium '> serach Product </label>
                    <input type='text' name='serachProduct' placeholder=' ' className='bg-zinc-100 rounded-[12px]   p-2 px-3  outline-none'  
                    value={product}
                    onChange={(e) => setproduct(e.target.value)}
                    /> 
            </div> 
            <div className='flex flex-col   max-w-[80%] w-[80%]  min-h-[100px] md:max-h-[100px]   gap-2  place-content-center md:place-content-start'>
                    <label forhtml="serachProduct" className='text-sm text-[#576A83] capitalize tracking-wide font-medium '> selected category </label>                  
                    {category && <Lists  elemments={categories}  setState={setcategory} state={category}/>}
            </div>  
            <div className='flex flex-col max-w-[80%] w-[80%] md:min-h-[100px]  max-h-[100px]   gap-2 place-content-center md:place-content-start md:col-span-2 '>
                    <p forhtml="serachProduct" className='text-sm text-[#576A83] capitalize tracking-wide font-medium'> size </p>
                    <div className="w-full grid grid-flow-col sm:max-lg:grid-cols-2 sm:max-lg:grid-rows-2 gap-2">
                        {sizes.current.map((sz, index) => (
                                <button
                                type="button"
                                key={index}
                                className={`h-10 text-sm capitalize py-2.5 rounded-2xl bg-zinc-100 font-Satoshi-Regular font-light ${sz === size ? 'active' : ''}`}
                                onClick={(e) => {
                                        setSize(sz);
                                }}
                                >
                                {sz}
        </button>
    ))}
</div>
            </div> 
            <div className='flex flex-col  max-w-[80%] w-[80%] md:min-h-[100px]  max-h-[100px]  gap-2 place-content-center   '>
                    <label forhtml="serachProduct" className='text-sm text-[#576A83] capitalize tracking-wide font-medium'> sort by </label>
                    <Lists  elemments={sortage} setState={setSort} state={sort}  />
            </div> 
            <div className='flex flex-col  max-w-[80%] w-[80%]  min-h-[100px] max-h-[100px] gap-2 place-content-center    '>
                    <label forhtml="serachProduct" className=' text-sm text-[#576A83] capitalize tracking-wide font-medium flex flex-row items-center justify-between'> <span>
                                select price 
                        </span> 
                        <span>
                                ${range}
                        </span>
                        
                </label>
                <input type='range' name='serachProduct' placeholder='product ' className='range' value={range}  min="0" max="1000" ref={value} onChange={ (e) => setRange(e.target.value)}/> 
                <p  className=' text-sm text-[#576A83] capitalize tracking-wide font-medium flex flex-row items-center justify-between'> <span>
                              0
                        </span> 
                        <span>
                               Max:$1,000.00
                        </span>
                        
                </p>
            </div> 
            <div className='flex flex-col md:min-h-[100px] max-w-[80%] h-auto  gap-2 items-center justify-center '>
                    <label forhtml="serachProduct" className=" text-sm text-[#576A83] capitalize tracking-wide font-medium flex flex-row items-center justify-between"> free shipping </label>
                    <input type='checkbox' name='serachProduct' placeholder='product ' className=' checkout bg-white rounded-[25px] w-[15px] h-[15px] border-cyan-300'
                     value={free}
                     onChange={(e) => setFree(!free)}
                     checked={free}
                    /> 
            </div> 

                    <button  type="submit" className='grow-0 h-[40px] max-w-[80%] w-[80%]  px-5  text-center text-base  text-white/85 bg-black font-Satoshi-Regular  font-normal  tracking-wide leading-4 capitalize  rounded-[40px] self-center md:my-auto' onClick={(e) => handleSearch(e)} > search </button>
        </form>
        <div className='flex h-full   min-h-screen flex-row w-full mt-5    '>
        <div className='w-full  h-full  md:pt-12 grid gap-y-4  md:gap-4 grid-cols-1 phone:grid-cols-2  sm:grid-cols-3  lg:grid-cols-4 place-items-center sm:place-content-start p-0 sm:p-[10px] ' >
        {data?.length ?  data.map ((ele, index) => <Product  data={ele} key={index}  /> ) : <div className='w-[100%] col-span-2 h-full flex justify-center ' > ops!! no product </div>} 
        </div>
        </div>
    </section>
    </section>
  )
}

export default Products
