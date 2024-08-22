import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//require('react-web-vector-icons/fonts');
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Register from './components/Register/Register.jsx';
import ApiTech from './components/Api/ApiTech.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },{
        path: "about",
        element: <About/>
      }
      ,{
        path: "contact",
        element: <Contact/>
      },
      {
        path: "register",
        element: <Register/>
      },
      
      {
        path: "ApiTech",
        element: <ApiTech/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
