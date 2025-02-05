import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Country } from "./pages/Country";
import { ErrorPage } from "./pages/ErrorPage";

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppLayout } from './components/Layout/AppLayout';
import { CountryDetails } from './components/Layout/CountryDetails';


import './App.css'

// use of createBrowserRouter
// Defines Routes
// Manages Errors: Uses errorElement to handle route errors.
// Works with <RouterProvider> to render the correct page based on the URL.
// you create a parent-child relationship.


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "country",
        element: <Country />
      },
      {
        path: "country/:id",
        // : indicates a dynamic segment in the route. This means the value of id can change based on the URL. 
        // It’s a placeholder for any value that appears at that position in the URL.
        element: <CountryDetails />
      },
      {
        path: "contact",
        element: <Contact />
      },
    ]
  }
]);

function App() {


  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App


// RouterProvider==>tells your app which routes to render when the URL matches certain paths.
// used to hook up the router with your application