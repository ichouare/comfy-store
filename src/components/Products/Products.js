import React, { useEffect, useRef, useState } from 'react'
import './styles.css'
import Product  from '../Product/product'
import authIntance from '../../axois/axios'
import axios from 'axios'
import apiInstance from '../../axois/axios'
import { IoGridOutline, IoMenu } from "react-icons/io5";

const Lists = ({elemments, setState,  state }) => {
//        console.log(elemments)
        return (
                <select className='rounded-[8px] p-[2px] cursor-pointer'
                value={state}
                onChange={(e) => setState(e.target.value)}
                
                >
                {
                   elemments &&  elemments?.map((ele, index) => {
                        return <option className='bg-white rounded-[8px]' key={index}>
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
        const [comp, setComp] = useState('all')
        const [data, setData] = useState([])

const handlefilter = (e) => {
        e.preventDefault()
        if(product || category || comp || sort || free || range)
        {
                // console.log(
                //         {
                //                 product,
                //                 category,
                //                 "company": comp,
                //                 sort,
                //                 "price" : range,
                //                 "free" : free
                //         })
                        resetFilttre()
                
        }
}

const resetFilttre = () => {
        setproduct('')
        setFree(false)
        setcategory('all')
        setComp('all')
        setSort('a-z')
        setRange(0)   
}

useEffect(() => {
        const getCategories = async () => {
                const response = await  apiInstance.get('/products/get_all_categories')
                const categories = ['all', ...response?.data?.map(item => item?.name)]
                setcategories(categories)
       }
        getCategories() 
}, [])


async function  getData ()  {
        console.log('data')
        const response = await  apiInstance.get('/products/products',
        {
                params: {
                        category: category,
                        free: free,
                        price : range,
                        sort: sort,
                        product : product
                        
                }
        },
        {
                withCredentials: true,
        })
        const {data} = response
        console.log(data) 
        setData(data)
} 

function handleSearch(e){
        e.preventDefault(); 
        getData()
}

return (
<section className='w-[100%]  max-sm:w-full  min-h-full h-full   flex flex-col items-center   '>
    <section className='w-[100%] max-w-[70rem] max-sm:w-full  min-h-full h-full   items-center  py-4 flex flex-col gap-4' >
        <form className='filter w-full lg:h-[300px] bg-[#F0F6FF]  grid sm:grid-cols-2 lg:grid-cols-4  gap-6 flex-wrap p-3 px-8 ' onSubmit={handlefilter} method="POST"  ref={form}>
            <div className='flex flex-col gap-2 place-content-center  '>
                    <label forhtml="serachProduct" className='text-sm text-[#576A83] capitalize tracking-wide font-medium '> serach Product </label>
                    <input type='text' name='serachProduct' placeholder=' ' className='bg-white rounded-[8px]  px-3'  
                    value={product}
                    onChange={(e) => setproduct(e.target.value)}
                    /> 
            </div> 
            <div className='flex flex-col   gap-2 place-content-center'>
                    <label forhtml="serachProduct" className='text-sm text-[#576A83] capitalize tracking-wide font-medium'> selected category </label>                  
                    {category && <Lists  elemments={categories}  setState={setcategory} state={category}/>}
            </div>  
            <div className='flex flex-col   gap-2 place-content-center  '>
                    <label forhtml="serachProduct" className='text-sm text-[#576A83] capitalize tracking-wide font-medium'> selected company </label>
                    <Lists  elemments={Company} setState={setComp} state={comp}  />
            </div> 
            <div className='flex flex-col   gap-2 place-content-center  '>
                    <label forhtml="serachProduct" className='text-sm text-[#576A83] capitalize tracking-wide font-medium'> sort by </label>
                    <Lists  elemments={sortage} setState={setSort} state={sort}  />
            </div> 
            <div className='flex flex-col   gap-2 place-content-center   '>
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
            <div className='flex flex-col  gap-2 items-center justify-center '>
                    <label forhtml="serachProduct" className=" text-sm text-[#576A83] capitalize tracking-wide font-medium flex flex-row items-center justify-between"> free shipping </label>
                    <input type='checkbox' name='serachProduct' placeholder='product ' className=' checkout bg-white rounded-[25px] w-[15px] h-[15px] border-cyan-300'
                     value={free}
                     onChange={(e) => setFree(!free)}
                     checked={free}
                    /> 
            </div> 

                    <button className='grow-0 h-[30px] px-5 uppercase text-center text-base font-medium text-white bg-blue-600 rounded-[8px] self-center' type='submit' onClick={(e) => handleSearch(e)} > serach </button>
                    <button className='grow-0 h-[30px] uppercase text-center text-base font-medium text-white bg-red-600 rounded-[8px] self-center' onClick={resetFilttre}> reset </button>
             
        </form>
        <div className='fle flex-col w-full mt-5 '>
        <div className='text-[#394E6A] text-2xl tracking-wide p-3  border-b flex items-center justify-between px-2'>
                <h1 className=''>Featured Products</h1>
                <div className='flex gap-4'>
                <IoGridOutline className={gridState ? 'text-[#576A83] cursor-pointer hover:text-[#394E6A]' :'cursor-pointer bg-blue-500 text-slate-300 p-1 rounded-lg' } onClick={() => setgridState(!gridState)} />
                <IoMenu  className={!gridState ? 'text-[#576A83] cursor-pointer hover:text-[#394E6A]' :'cursor-pointer bg-blue-500 text-slate-300 p-1 rounded-lg' } onClick={() => setgridState(!gridState)} />
                </div>


        </div>
        <div className={gridState ? 'p-4 md:pt-12 grid gap-y-4  md:gap-4 grid-cols-1  place-content-center   ' :  'w-full  sm:pt-12 grid gap-8 md:grid-cols-2 2xl:grid-cols-3 grid-cols-1  p-4 px-12 xl:px-0   place-content-center'}>
        {data &&  data.map ((ele, index) => <Product  data={ele} key={index} grid={gridState} /> )}
        </div>
        </div>
    </section>
    </section>
  )
}

export default Products
