import React from 'react'
import { BsCart3 , BsMoonFill} from "react-icons/bs";
import { Link, Outlet } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import './styles.css'
// import Authnav from './components/authentication/Authnav.js'
import Authnav  from '../authentication/Authnav';
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
    <>
    <nav className='w-full flex flex-col  items-center     justify-center '>
    <Authnav/>
    <div className='w-[85%] max-w-[70rem]  max-sm:w-full flex flex-row items-center justify-between '>
    <div className='w-[45px] h-[80px] flex items-center justify-center  p-0 '>
      <NavLink  to="/" className='w-full h-[50px] bg-blue-400  text-5xl text-white grid place-content-center rounded-md p-0 pb-2 max-sm:hidden'>
          c
      </NavLink>
      <span>

      </span>
    </div>
    <div className={'w-[400px] h-full flex flex-row items-center justify-evenly max-sm:hidden '} >
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
    <Outlet/>
    </nav>
    </>
  )
}

export default Navbar
