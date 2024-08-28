import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  './assets/Satoshi_Complete/Fonts/WEB/css/satoshi.css'
import App from './App';
import { ThemeProvider } from "./provider/theme-provider"


import { AuthProvider } from './context/AuthProvider';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    

<AuthProvider>
<ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
<App />
</ThemeProvider>
</AuthProvider>


  </React.StrictMode>
);



