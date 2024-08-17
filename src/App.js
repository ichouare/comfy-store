import { useContext } from 'react';
import AuthContext from './context/AuthProvider';
import './App.css';
import { Route , Routes, createRoutesFromElements } from 'react-router';


import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/about/about';
import Products from './components/Products/Products';
import Login  from './components/login/login';
import Cart from './components/Cart/Cart';
import InfoProduct from './components/InfoProduct/InfoProduct';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error-page'
import PrivateRouter from './utils/PrivateRouter';





function App() {
  const {auth} = useContext(AuthContext)
  console.log("constext",  auth)
  const router = createBrowserRouter(
   createRoutesFromElements( 
    <Route errorElement={<ErrorPage />}>
    <Route  path='/login' element={<Login />} />
   <Route path="/" element={<Navbar />} >
    <Route index  element={<Home />} />
    <Route path='about' element={<About />} />

    <Route path='product' element={<Products />} />
    <Route path='cart' element={<Cart />} />
    <Route
                        path="checkout"
                        element={
                            <PrivateRouter>
                                <Cart />
                            </PrivateRouter>
                        }
                    />
    <Route path='product/:id' element={<InfoProduct />} />
  </Route >
    </Route>
  )
  )


  return (

      <section className='min-w-screen  w-screen min-h-screen flex flex-col items-center bg-slate-100'>
          <RouterProvider router={router} />
      </section>
  );
}

export default App;
