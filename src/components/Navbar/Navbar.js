import React from 'react'

const Navbar = ({children}) => {
    const navigation = [
        {
            name : "home",
            lien : "/"
        },
        {
            name : "about",
            lien : "/about"
        },
        {
            name : "products",
            lien : "/products",
        },
        {
            name : "cart",
            lien : "/cart"
        },
        {
            name : "checkout",
            lien : "/checkout"
        },
    ]
  return (
    <div className='nav h-16 w-full bg-slate-100 flex items-center justify-center '>
        <h1 className='logo min-h-12   h-12 min-w-12 w-12 grid place-content-center bg-blue-400 text-white font-semibold  text-3xl rounded-md !p-0 '>C</h1>
        {/* {
            navigation.map(({name, lien}, itemKey)=> (
                <li>
                    <a href={itemKey} 
                </li>
            ))
        } */}
    </div>
  )
}

export default Navbar