import React, { useEffect, useRef, useState } from 'react'
import './styles.css'
import Product  from '../Product/product'
import authIntance from '../../axois/axios'
import axios from 'axios'

const Lists = ({elemments, setState,  state }) => {
       
        return (
                <select className='rounded-[8px] p-[2px] cursor-pointer'
                value={state}
                onChange={(e) => setState(e.target.value)}
                
                >
                {
                    elemments.map((ele, index) => {
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
        const value = useRef(0)
        const Company = ["all" ,"Mondeza", "Luxera", "comfora" ]
        const Category = ["all", "tables", "chairs", "kids", "sofas", "beds"]
        const sortage = ["a-z", "high", "low" ]
        const [product, setproduct] = useState('')
        const [category, setcategory] = useState('all')
        const [sort, setSort] = useState('a-z')
        const [free, setFree] = useState(false)
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
        const getData = async () => {
              const response = await  axios.get('/products/products', {
                withCredentials: true,
              })
              const {data} = response
              setData(data)
        } 
        getData()
}, [])

return (
<section className='w-[100%]  max-sm:w-full  min-h-full h-full   flex flex-col items-center  p-10  '>
    <section className='w-[90%] max-w-[70rem] max-sm:w-full  min-h-full h-full bg-[#FFF]  items-center  py-4 flex flex-col gap-4' >
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
                    <Lists  elemments={Category}  setState={setcategory} state={category}/>
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

                    <button className='grow-0 h-[30px] px-5 uppercase text-center text-base font-medium text-white bg-blue-600 rounded-[8px] self-center' type='submit' > serach </button>
                    <button className='grow-0 h-[30px] uppercase text-center text-base font-medium text-white bg-red-600 rounded-[8px] self-center' onClick={resetFilttre}> reset </button>
             
        </form>
        <div className='fle flex-col w-full mt-5a'>
        <h1 className='text-[#394E6A] text-2xl tracking-wide mb-2'>Featured Products</h1>
        <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 place-content-center border-t-2'>
        {data &&  data.map ((ele, index) => <Product  data={ele} key={index} /> )}
        </div>
        </div>
    </section>
    </section>
  )
}

export default Products
