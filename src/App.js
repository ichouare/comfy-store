import './App.css';
import { Route , Routes, createRoutesFromElements } from 'react-router';
import Root from  './routes/root';
import Authnav from './components/authentication/Authnav'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/about/about';
import Products from './components/Products/Products';
import Login  from './components/login/login';
import Cart from './components/Cart/Cart';
import InfoProduct from './components/InfoProduct/InfoProduct';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';





function App() {
  const router = createBrowserRouter(
   createRoutesFromElements( 
    <Route>
    <Route  path='/login' element={<Login />} />
   <Route path="/" element={<Navbar />}>
    <Route index  element={<Home />} />
    <Route path='about' element={<About />} />

    <Route path='product' element={<Products />} />
    <Route path='cart' element={<Cart />} />
    <Route path='checkout' element={<Cart />} />
    <Route path='product/:id' element={<InfoProduct />} />
  </Route >
    <Route path='*' element={<h1>error this page</h1>} />
    </Route>
  )
  )


  return (

      <section className='min-w-screen  w-screen min-h-screen flex flex-col items-center'>
          <RouterProvider router={router} />
      </section>
  );
}

export default App;
