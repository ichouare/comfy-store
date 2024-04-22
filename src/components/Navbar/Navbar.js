import React from 'react'
import { BsCart3 , BsMoonFill} from "react-icons/bs";
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import './styles.css'

const Navbar = () => {

  const status = ({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "active" : ""

  // console.log(status())
  const element = [{
          path: "/",
          name : "home", 
            }, {
              path: "/about",
              name : "about", 
                }, {
                  path: "/product",
                  name : "product", 
                    }, {
                      path: "/cart",
                      name : "cart", 
                  }] 
            
  return (
    
    <nav className='w-full h-[80px]   flex flex-row items-center justify-center '>
    <div className='w-[90%] max-w-[70rem]  max-sm:w-full flex flex-row items-center justify-between '>
    <div className='w-[45px] h-[45px]   p-0 '>
      <NavLink  to="/" className='w-full h-full bg-blue-400  text-5xl text-white grid place-content-center rounded-md p-0 pb-2'>
          c
      </NavLink>
    </div>
    <div className={'w-[400px] h-full flex flex-row items-center justify-evenly '} >
      {
       
        element.map(ele => {
          const {name, path} = ele
          return (
            
            <NavLink  to={path} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "isactive w-[80px] h-[35px]  text-sm grid place-content-center rounded p-0  capitalize" : "w-[80px] h-[35px]  text-sm  grid place-content-center rounded p-0  capitalize"
          }>
            {name}
        </NavLink>
          )
        })
      }  
    </div >  
    <div className="w-[100px] h-full  flex flex-row items-center justify-evenly">  
      <BsMoonFill className='cursor-pointer'/>
    <Link  to="/cart" className='w-[40px] h-[35px] relative  text-sm text-[#60728A] grid place-content-center rounded p-0  capitalize'>
          <BsCart3  className='text-xl relative' />
          <sub className='w-[20px]   h-[10px] bg-[#067AFF] rounded grid place-content-center text-white absolute top-0 right-0 p-1'>0</sub>
          
        </Link>
    </div>    
    </div>
    </nav>
  )
}

export default Navbar
