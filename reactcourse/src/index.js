import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from  './routes/root';
import ErrorPage from "./error-page";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element : <Root />,
//     errorElement :  <ErrorPage/>,
//     children:[
//       {
//         path : "page/:id",
//         element : <div>hello word</div>,
//       },
//     ],
    
//   },
//   {
//     path: "/home",
//     element : <ErrorPage/>
//   },
//   {
//     path: "contact/:id",
//     element :<div> hello contact </div>
//   }
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<BrowserRouter>
<App />
     {/* <RouterProvider router={router}  /> */}
</BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
