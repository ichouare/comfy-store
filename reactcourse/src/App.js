import './App.css';
import { Route , Routes } from 'react-router';
import Root from  './routes/root';
import Authnav from './components/authentication/Authnav'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'


function App() {
  return (
      <>
      <Authnav />
      <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
      </>
  );
}

export default App;
