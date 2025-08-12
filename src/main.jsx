import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Statistics from './components/Pages/Statistics.jsx';
import Dashboard from './components/Pages/Dashboard.jsx';
import Contact from './components/Pages/Contact.jsx';
import Details from './components/Pages/Details.jsx';
import Login from './components/Login/Login.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import Register from './components/Register/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/gadgets/:product_id',
        element: <Details></Details>,
        loader: () => fetch('/gadgets.json')
      },
      {
        path: '/Statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : '/Register',
        element : <Register></Register>
      },
      {
        path : '/signUp',
        element: <SignUp></SignUp>
      },
    ]
      }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)