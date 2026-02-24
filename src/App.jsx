import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'

import AIWorkflow from './Pages/AIWorkflow'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import Terms from './Pages/Terms'
import CookiePolicy from './Pages/CookiePolicy'
import Disclaimer from './Pages/Disclaimer'


const App = () => {
  const router= createBrowserRouter([
    {
    path: '/',
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/about',
        element: <About/>
      },
      {
        path:'/services',
        element: <Services/>
      },
      {
        path:'/ai-workflow',
        element: <AIWorkflow/>
      },
      {
        path:'/contact',
        element: <Contact/>
      },
      {
        path:'/privacy-policy',
        element: <PrivacyPolicy/>
      },
      {
        path:'/terms-conditions',
        element: <Terms/>
      },
      {
        path:'/cookie-policy',
        element: <CookiePolicy/>
      },
      {
        path:'/disclaimer',
        element: <Disclaimer/>
      },
      
    ]
    }

  ])
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App