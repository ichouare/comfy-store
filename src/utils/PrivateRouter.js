import React from 'react'
import {Route, redirect} from 'react-router-dom'
const PrivateRouter = ({children, ...rest}) => {
    console.log(...rest)
  return (
    <Route {...rest}>
      {children}
    </Route>
  )
}

export default PrivateRouter
