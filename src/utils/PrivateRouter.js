import React, {useContext} from 'react'
import AuthContext from '../context/AuthProvider'
import {Route, Navigate } from 'react-router-dom'
const PrivateRouter = ({children, ...rest}) => {
  const {auth} = useContext(AuthContext)
 
  if(!auth)
  {
    return <Navigate to="/" replace />;
  }
  else{
    return children

  }
 
}

export default PrivateRouter
