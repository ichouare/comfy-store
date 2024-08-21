import React , {useState, useContext} from 'react'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import './styles.css'
import Authnav from '../authentication/Authnav'
import AuthContext from '../../context/AuthProvider';
import { IoIosMenu } from "react-icons/io";
import Logo from '../../assets/logo.png';


const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const {auth} = useContext(AuthContext)
  const navigation = [{
    path: '/',
    name: 'Home'
  },
  {
    path: '/about',
    name: 'About'
  },
  {
    path: '/product',
    name: 'Products'
  },
  {
    path: '/cart',
    name: 'Cart'
  }, {
    path: "/checkout",
    name: 'Checkout'
  }
]
  return (
    <main className='w-full  min-w-full h-auto min-h-screen flex flex-col items-center justify-start  pb-4 overflow-y-scroll font-Satoshi-Light'>
      <Authnav />
      <header className='bg-slate-50   w-[100%]   flex items-center justify-between p-2 ' >
        <div className='  flex  items-center text-4xl gap-x-4 px-2 '>
        <button className='w-6 h-6 cursor-pointer grid place-content-center lg:hidden'><IoIosMenu   className='text-2xl'/></button>
        <div className='w-32 aspect-auto  '>

          <img src={Logo} className='w-32 ' alt='w-full h-full object-fill' />

        </div>

        </div>
        {/* <nav className='flex items-center gap-x-8'>
        {
          navigation.map(({path, name}, index) => (
            
              (path === '/checkout' && !auth)  ? 
                null
               :  <NavLink key={index} to={path} className='text-sm font-medium text-black '>
               {name}
             </NavLink>  // do not render cart link if not authenticated  :D ^^
            
            
          ))
        }
        </nav> */}
        <div className='flex items-center gap-x-2'> 
          <IoCartOutline className='text-xl cursor-pointer'/>
          {darkMode ? <MdDarkMode  className='text-xl cursor-pointer' onClick={() => setDarkMode(prev => !prev)}  /> : <CiLight className='text-xl cursor-pointer' onClick={() => setDarkMode(prev => !prev)}/>}
        </div>
        </header>
        <section className='w-full     h-full   flex items-center justify-center   '>
          <Outlet/>

        </section>
        <footer className='w-full  min-h-[100px] bg-zinc-100 mt-2 border-t p-4'>
          <p className='font-Satoshi-Regular  font-light text-base '>Shop.co © 2024-2025, All Rights Reserved</p>
        </footer>
    </main>
  )
}

export default Navbar