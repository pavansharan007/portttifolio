import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './compnts/Home.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import About from './compnts/About.jsx'
import Skills from './compnts/Skills.jsx'
import Projects from './compnts/Projects.jsx'
import Contact from './compnts/Contact.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/projects',
        element:<Projects/>,
      },
      {
        path:'/skills',
        element:<Skills/>
      },{
        path:'/contact',
        element:<Contact/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
