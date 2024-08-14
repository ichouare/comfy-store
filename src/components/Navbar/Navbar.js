import React , {useState, useContext} from 'react'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import './styles.css'
import Authnav from '../authentication/Authnav'
import AuthContext from '../../context/AuthProvider';

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
    <main className='w-full  min-w-full h-auto min-h-screen flex flex-col items-center justify-start  pb-4 overflow-y-scroll'>
      <Authnav />
      <header className='bg-slate-50  w-full flex items-center justify-evenly py-4'>

        <div className='logo min-h-12 h-12  min-w-12 w-1 rounded-md bg-blue-400 grid place-content-center text-4xl text-white'>
            C
        </div>
        <nav className='flex items-center gap-x-8'>
        {
          navigation.map(({path, name}, index) => (
            
              (path === '/checkout' && !auth)  ? 
                null
               :  <NavLink key={index} to={path} className='text-sm font-medium text-black '>
               {name}
             </NavLink>  // do not render cart link if not authenticated  :D ^^
            
            
          ))
        }
        </nav>
        <div className='flex items-center gap-x-4'> 
          <IoCartOutline className='text-xl cursor-pointer'/>
          {darkMode ? <MdDarkMode  className='text-xl cursor-pointer' onClick={() => setDarkMode(prev => !prev)}  /> : <CiLight className='text-xl cursor-pointer' onClick={() => setDarkMode(prev => !prev)}/>}
        </div>
        </header>
        <main className='w-[80%]  h-full   flex items-center justify-center '>
          <Outlet/>

        </main>
    </main>
  )
}

export default Navbar