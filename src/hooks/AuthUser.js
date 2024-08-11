import { useContext } from "react";

import AuthContext from "../context/AuthProvider";


const AuthUser = () => {
    const {auth, setAuth} = useContext(AuthContext)
    
}

export default AuthUser