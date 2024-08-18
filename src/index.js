import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  '/Users/ichouare/Desktop/comfy-store/src/assets/Satoshi_Complete/Fonts/WEB/css/satoshi.css'
import App from './App';



import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { AuthProvider } from './context/AuthProvider';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    

<AuthProvider>
<App />
</AuthProvider>


  </React.StrictMode>
);



