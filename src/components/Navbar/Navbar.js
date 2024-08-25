import React , {useState, useContext, useRef, useEffect} from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import './styles.css'
import Authnav from '../authentication/Authnav'
import AuthContext from '../../context/AuthProvider';
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Logo from '../../assets/logo.png';
import gsap from 'gsap';

import MoreUpdate from '../Sharedcomponent/MoreUpdate';
import Backout from '../Sharedcomponent/Backout';

const Navbar = () => {
  const Menu = useRef(null)
  const [darkMode, setDarkMode] = useState(false);
  const [ShowMenu, setShowMenu] = useState(false);
  const {auth, cart} = useContext(AuthContext)
  const navigation = [{
    path: '/',
    name: 'Home'
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

useEffect(() => {
  const handleResize = () => {
    const tl = gsap.timeline();

    if (window.innerWidth <= 768) {
      tl.to(Menu.current, {
        duration: 0.5,
        opacity: ShowMenu ? 1 : 0,
        ease: ShowMenu ? 'power1' : 'none',
        width: '100%',
        transform: ShowMenu ?  "translateX(0%)" :   "translateX(-100%)",
        // ... other gsap properties
      });
    } else {
      // Optionally, revert the animation if the screen size changes to larger than 768px
      tl.to(Menu.current, {
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
}, [ShowMenu])

  return (
    <main className='w-full  min-w-full h-auto min-h-screen flex flex-col items-center justify-start  pb-4 overflow-y-scroll font-Satoshi-Light '>
      <Authnav />
      <header className='bg-slate-50 md:bg-white  py-3  w-[100%]   flex items-center justify-between p-2  md:px-8 ' >
        <div className=' flex  grow items-center  text-4xl gap-x-4 px-2 py-1  bg-zinc-100  rounded-3xl '>
        <button className='w-6 h-6 cursor-pointer grid place-content-center md:hidden'>{!ShowMenu ? <IoIosMenu   className='text-2xl' onClick={() => setShowMenu(true)}/> : <IoMdClose   className='text-2xl' onClick={() => setShowMenu(false)} /> }</button>
        <div className='w-32 aspect-auto md:-ms-10  '>

          <img src={Logo} className='w-32 ' alt='w-full h-full object-fill' />

        </div>
        <nav  ref={Menu} className='min-w-[300px]  md:w-[300px] flex  flex-col gap-4 md:gap-1 px-4 py-2 md:p-0 md:flex-row absolute z-40 md:relative w-full top-24  md:top-0  bottom-0 right-0 left-0   bg-white  md:bg-transparent items-center gap-x-8   '>
        {
          navigation.map(({path, name}, index) => (
            
              (path === '/checkout' && !auth)  ? 
                null
               :  <Link key={index} to={path} className='text-base font-light tracking-wide   w-full  text-black/60 font-Satoshi-Regular  text-center   '>
               {name}
             </Link>  // do not render cart link if not authenticated  :D ^^
            
            
          ))
        }
        </nav>

        </div>
        <div className='flex items-center gap-x-2'> 
        <Link to='/cart' className='h-6  relative text-2xl'>
         <p className='absolute text-sm  -top-2 left-1.5 -rotate-45 text-zinc-500 '>{cart?.numItemsInCart}</p> 
          <IoCartOutline className='text-xl cursor-pointer block realative '/>
          </Link >
          {darkMode ? <MdDarkMode  className='text-xl cursor-pointer' onClick={() => setDarkMode(prev => !prev)}  /> : <CiLight className='text-xl cursor-pointer' onClick={() => setDarkMode(prev => !prev)}/>}
        </div>
        </header>
        <Backout/>
        <section className='w-full     h-full   flex items-center justify-center   '>
          <Outlet/>
        </section>

          <MoreUpdate />
        <footer className='w-full  flex flex-col md:flex-row items-center justify-evenly min-h-[100px] bg-zinc-100 mt-2 border-t p-4'>
          <p className='font-Satoshi-Regular  font-light text-base self-start '>Shop.co © 2024-2025, All Rights Reserved</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d362112.02892318607!2d-6.77243329240814!3d32.63922705135367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda427fa6cc01abd%3A0x81e42d2370814027!2sKhouribga!5e0!3m2!1sfr!2sma!4v1724596891735!5m2!1sfr!2sma" width="400" height="150" 
          style={{ border :  0 }}
          allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </footer>
    </main>
  )
}

export default Navbar