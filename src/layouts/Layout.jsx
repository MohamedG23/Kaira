import React, { useEffect } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";

export default function Layout() {
    const navgetion= useNavigate()
    useEffect(()=>{
        let token= localStorage.getItem('token') || sessionStorage.getItem('token') ;
        if(!token){
            navgetion('/login')
        }
    },[])
  return (
    <div className='flex justify-center py-5 h-dvh overflow-auto font-myfont bg-gray-100'>
        <div className='container flex flex-col gap-3'>
            <div className='flex justify-between items-center'>
                <h1 className='text-4xl'>KAIRA</h1>
            <div className='flex gap-5'>
                <NavLink className={({ isActive }) =>'hover:text-black p-3 rounded ' + ( isActive ? 'text-black' : 'text-gray-500')} to="/">Home</NavLink>
                <NavLink className={({ isActive }) =>'hover:text-black p-3 rounded ' + ( isActive ? 'text-black' : 'text-gray-500')} to="/Shop">Shop</NavLink>
                <NavLink className={({ isActive }) =>'hover:text-black p-3 rounded ' + ( isActive ? 'text-black' : 'text-gray-500')} to="/About">About</NavLink>
                <NavLink className={({ isActive }) =>'hover:text-black p-3 rounded ' + ( isActive ? 'text-black' : 'text-gray-500')} to="/Contact">Contact Us</NavLink>
            </div>
            <div className='flex gap-3'>
                <NavLink to="/">WISHLIST ( 0 ) </NavLink>
                <NavLink to="/">CART ( 0 )  </NavLink>
                <CiSearch className='text-2xl font-bold'/>

            </div>
            </div>
            <div><Outlet/></div>
        </div>
    </div>
  )
}
