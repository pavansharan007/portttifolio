import { path } from 'framer-motion/client';
import React from 'react'
import { Link,NavLink, useNavigate } from 'react-router-dom'
import HamNav from './HamNav';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

function Navbar() {
    const navigate = useNavigate();
    const items=[
      {label: 'Home',path:'/'},
      {label: 'About',path:'/about'},
      {label: 'Projects',path:'/projects'},
     
      {label:'contact',path:'/contact'}
    ]
    const { theme, toggleTheme } = useTheme();

  return (
    <>
        <div className='bg-transparent flex justify-between h-16 w-full items-center ' >
            <div className=''>
                <p className='items-center ml-4 text-2xl font-mono text-cyber-accentCyan font-bold uppercase tracking-widest'>Pavan Saran</p>
                <div className='text-[10px] ml-4 font-mono text-cyber-textSecondary tracking-widest uppercase'>// System.User.Authorized</div>
            </div>
            <div className='flex items-center gap-4 pr-3'>
                <button 
                  onClick={toggleTheme}
                  className="p-2 rounded-full border border-[var(--border-color)] text-[var(--accent-gold)] hover:bg-[var(--bg-tertiary)] hover:shadow-[0_0_8px_rgba(245,166,35,0.4)] transition-all flex flex-col items-center justify-center relative"
                  aria-label="Toggle theme"
                  title="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                  {/* Subtle decorative line below icon mimicking the reference image */}
                  <span className="absolute -bottom-3 w-[2px] h-2 bg-[var(--accent-gold)] opacity-50 rounded-full hidden md:block"></span>
                </button>
                <HamNav />
            </div>
        </div>
    </>
  )
}

export default Navbar
