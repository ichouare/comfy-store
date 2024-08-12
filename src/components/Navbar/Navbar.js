import React , {useState} from 'react'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import './styles.css'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
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
    path: "checkout",
    name: 'Checkout'
  }
]
  return (
    <main className='w-screen  min-w-screen h-screen min-h-screen flex flex-col items-center justify-center  p-0'>
      <header className='bg-slate-50 w-full flex items-center justify-evenly py-4'>

        <div className='logo min-h-12 h-12  min-w-12 w-1 rounded-md bg-blue-400 grid place-content-center text-4xl text-white'>
            C
        </div>
        <nav className='flex items-center gap-x-8'>
        {
          navigation.map((nav, index) => (
            <NavLink key={index} to={nav.path} className='text-sm font-medium text-black '>
              {nav.name}
            </NavLink>
          ))
        }
        </nav>
        <div className='flex items-center gap-x-4'> 
          <IoCartOutline className='text-xl cursor-pointer'/>
          {darkMode ? <MdDarkMode  className='text-xl cursor-pointer' onClick={() => setDarkMode(prev => !prev)}  /> : <CiLight className='text-xl cursor-pointer' onClick={() => setDarkMode(prev => !prev)}/>}
        </div>
        </header>
        <main className='w-[80%] min-w-screen h-full   flex items-center justify-center '>
          <Outlet/>

        </main>
    </main>
  )
}

export default Navbar