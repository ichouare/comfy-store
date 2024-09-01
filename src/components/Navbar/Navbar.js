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
import { useTheme } from "next-themes"


import MoreUpdate from '../Sharedcomponent/MoreUpdate';
import Backout from '../Sharedcomponent/Backout';
import apiInstance from 'src/axois/axios';

const Navbar = () => {
  const Menu = useRef(null)
  const [darkMode, setDarkMode] = useState(false);
  const [ShowMenu, setShowMenu] = useState(false);
  const {auth, cart, setCart, setAuth} = useContext(AuthContext)
  const { setTheme } = useTheme()
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


useEffect(()=> {
  const check_session = async () => {
    try {
        const res = await apiInstance('/check_session');
        // Handle the response if needed
        const info = await apiInstance('/products/get_cart_of_user')
        setCart(info.data)
        
        console.log('-------------->', cart);
    } catch (error) {
        console.error('Error updating cart', error);
        // Handle error, show message to user, etc.
    }
};
check_session()
}, [])

  return (
    <main className='w-full  min-w-full h-auto min-h-screen flex flex-col items-center justify-start  pb-4 font-Satoshi-Light '>
      <Authnav />
      <header className='bg-slate-50 md:bg-white dark:bg-[#020817] py-4  w-[100%]   flex items-center justify-between p-2  md:px-8 ' >
        <div className=' flex  grow items-center  text-4xl gap-x-4 px-2 py-1  bg-zinc-100   dark:bg-[#020817] rounded-3xl '>
        <button className='w-6 h-6 cursor-pointer grid place-content-center md:hidden'>{!ShowMenu ? <IoIosMenu   className='text-2xl' onClick={() => setShowMenu(true)}/> : <IoMdClose   className='text-2xl' onClick={() => setShowMenu(false)} /> }</button>
        <div className='w-32 h-auto py-4  md:-ms-10  '>

          <img src={Logo} className='w-32  h-full object-fill dark:bg-white cursor-pointer' alt='logo'/>

        </div>
        <nav  ref={Menu} className='min-w-[300px]  md:w-[300px] flex  flex-col gap-4 md:gap-1 px-4 py-2 md:p-0 md:flex-row absolute z-40 md:relative w-full top-24  md:top-0  bottom-0 right-0 left-0   bg-white  md:bg-transparent items-center gap-x-8   '>
        {
          navigation.map(({path, name}, index) => (
            
               <Link key={index} to={path} className='text-base font-light tracking-wide   w-full  text-black/60 dark:text-white font-Satoshi-Regular  lg:text-center   '>
               {name}
             </Link>  
            
            
          ))
        }
        </nav>

        </div>
        <div className='py-4 flex items-start  gap-x-2 '> 
        <Link to='/cart' className='h-6  relative text-2xl'>
         <p className='absolute text-sm  -top-2 left-1.5 -rotate-45 text-zinc-500 dark:text-white '>{cart?.numItemsInCart}</p> 
          <IoCartOutline className='text-xl cursor-pointer block realative '/>
          </Link >
          {darkMode ? <CiLight  className='text-xl cursor-pointer' onClick={
           () =>{
            setDarkMode(prev => !prev)
            setTheme("light")
           }
          // () =>  

          }  /> : <MdDarkMode className='text-xl cursor-pointer' onClick={ () =>{
            setDarkMode(prev => !prev)
            setTheme("dark")
           }}/>}
        </div>
        </header>
        <Backout/>
        <section className='w-full     h-full   flex items-center justify-center   '>
          <Outlet/>
        </section>

          <MoreUpdate />
        <footer className='w-full  flex flex-col md:flex-row items-center justify-between px-16  min-h-[100px] bg-zinc-100 dark:dark:bg-[#020817] mt-2 border-t py-4'>
          <p className='font-Satoshi-Regular  font-light text-base self-start '>Shop.co © 2024-2025, All Rights Reserved</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d362112.02892318607!2d-6.77243329240814!3d32.63922705135367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda427fa6cc01abd%3A0x81e42d2370814027!2sKhouribga!5e0!3m2!1sfr!2sma!4v1724596891735!5m2!1sfr!2sma" width="400" height="150" 
          style={{ border :  0 }}
          allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </footer>
    </main>
  )
}

export default Navbar