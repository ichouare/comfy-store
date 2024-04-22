import './App.css';
import { Route , Routes } from 'react-router';
import Root from  './routes/root';
import Authnav from './components/authentication/Authnav'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/about/about';
import Products from './components/Products/Products';

function App() {
  return (
      <>
      <Authnav />
      <Navbar />
      <section className='w-full min-h-screen   flex flex-row items-start justify-center max-sm:px-4'>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    <Routes>
      <Route path='/about' element={<About />} />
    </Routes>
    <Routes>
      <Route path='/product' element={<Products />} />
    </Routes>

      </section>
      </>
  );
}

export default App;
