import { path } from 'framer-motion/client';
import React from 'react'
import { Link,NavLink, useNavigate } from 'react-router-dom'
import HamNav from './HamNav';
function Navbar() {
    const navigate = useNavigate();
    const items=[
      {label: 'Home',path:'/'},
      {label: 'About',path:'/about'},
      {label: 'Projects',path:'/projects'},
     
      {label:'contact',path:'/contact'}

    ]
  return (
    <>
        <div className='bg-orange-50 flex justify-between h-16 w-full items-center ' >
            <div className=''>
                <p className='items-center ml-4 text-3xl' style={{fontFamily:'Minecraft'}}>Pavan Saran</p>
            </div>
            <div className='pr-3x'>
                <HamNav />
            </div>
        </div>
    </>
  )
}

export default Navbar
