import './App.css';
import { Route , Routes } from 'react-router';
import Root from  './routes/root';
import Authnav from './components/authentication/Authnav'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/about/about';
import Products from './components/Products/Products';
import Login  from './components/login/login';
import Cart from './components/Cart/Cart';
import InfoProduct from './components/InfoProduct/InfoProduct';




function App() {


  return (
      <>

      <section className='w-screen min-h-screen   flex flex-row items-start justify-center '>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route element={<Navbar />}>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />

      <Route path='/product' element={<Products />} />

      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Cart />} />
      <Route path='/product/:id' element={<InfoProduct />} />
      <Route path='*' element={<h1>error this page</h1>} />
      </Route>

    </Routes>

      </section>
      </>
  );
}

export default App;
