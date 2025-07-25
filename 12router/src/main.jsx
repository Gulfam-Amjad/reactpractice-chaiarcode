import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from './Layout.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/about/About.jsx';
import User from './Components/User/User.jsx';
import Githup, { dataInfoLoader } from './Components/Github/Githup.jsx';
import Contact from './Components/Contact/Contact.jsx';

// const router =createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout />,
//     children:[
//     {
//       path:"",
//       element:<Home />,
//     },
//     {
//       path:"about",
//       element:<About />,
//     }]
//   }
// ])

const router =createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout/>} >

   <Route path=''element={<Home/>} />
   <Route path='about' element={<About/>} />
   <Route path='contact' element={<Contact/>} />
   <Route path='user/:userid' element={<User/>} />
   <Route
   loader={dataInfoLoader}
   path='github' element={<Githup/>} />

  </Route>
)
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
