import React from 'react'
import {NavLink} from "react-router-dom";
import {SocialIcon} from "react-social-icons";

export default function Navbar() {
  return (
   <header className='bg-red-600'>
       <div className='container mx-auto flex justify-between'>
        <nav className='flex'>
        <NavLink activeClassName="text-red-100 bg-red-700" className="inflex-flex items-center py-8 px-3 mr-4 text-red-100 hover:text-green-800 text-4-xl font-bold cursive tracking-widest   "to="/" exact>Jayesh</NavLink>
        <NavLink activeClassName="text-red-100 bg-red-700" className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 text-4-xl"to="/post">Blog Posts</NavLink>
        <NavLink activeClassName="text-red-100 bg-red-700" className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 text-4-xl "to="/project">Projects</NavLink>
        <NavLink activeClassName="text-red-100 bg-red-700" className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 text-4-xl "to="/about">About me</NavLink>
        </nav>
        <div className='inline-flex py-3 px-3 my-6'>
        <SocialIcon url="https://twitter.com/JAYESH0704" className='mr-4' target='_blank' fgColor='#fff' style={{height: 35, width:35}}/>
        <SocialIcon  url="https://youtube.com" className='mr-4' target='_blank' fgColor='#fff' style={{height: 35, width:35}}/>
        <SocialIcon  url="https://www.linkedin.com/in/jayesh-harlalka-6b226221b/" className='mr-4' target='_blank' fgColor='#fff' style={{height: 35, width:35}}/>
        </div>
       
       </div>  
   

   </header>
  )
}