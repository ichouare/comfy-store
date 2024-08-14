import { createContext, useState } from "react";


const AuthContext = createContext()


export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(false);
    const [cart, setCart] = useState({
        "cartTotal" : 0,
        "numItemsInCart" : 0,
        "orderTotal" : 0 , 
        "shipping" : 0 , 
        "tax" : 0 ,
        "cartItems" : [],
    })
    return (<AuthContext.Provider value={{auth, setAuth, cart, setCart}}>
        {children}
    </AuthContext.Provider>)
}

 export default AuthContext