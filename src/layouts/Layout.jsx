import React, { useEffect } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";

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
            <div className='md:flex gap-5 hidden'>
                <NavLink className={({ isActive }) =>'hover:text-black p-3 rounded ' + ( isActive ? 'text-black' : 'text-gray-500')} to="/">Home</NavLink>
                <NavLink className={({ isActive }) =>'hover:text-black p-3 rounded ' + ( isActive ? 'text-black' : 'text-gray-500')} to="/Shop">Shop</NavLink>
                <NavLink className={({ isActive }) =>'hover:text-black p-3 rounded ' + ( isActive ? 'text-black' : 'text-gray-500')} to="/About">About</NavLink>
                <NavLink className={({ isActive }) =>'hover:text-black p-3 rounded ' + ( isActive ? 'text-black' : 'text-gray-500')} to="/Contact">Contact Us</NavLink>
            </div>

            <div className='dropdown dropdown-end md:hidden'>
                <div tabIndex={0} role="button" className="btn btn-ghost rounded-field">
                    <FiMenu className='font-bold text-3xl' />
                </div>
                <div tabIndex="-1" className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm gap-2 flex flex-col">
                    <div className='flex gap-5 flex-col'>
                <NavLink className={({ isActive }) =>'hover:text-black p-3 rounded ' + ( isActive ? 'text-black' : 'text-gray-500')} to="/">Home</NavLink>
                <NavLink className={({ isActive }) =>'hover:text-black p-3 rounded ' + ( isActive ? 'text-black' : 'text-gray-500')} to="/Shop">Shop</NavLink>
                <NavLink className={({ isActive }) =>'hover:text-black p-3 rounded ' + ( isActive ? 'text-black' : 'text-gray-500')} to="/About">About</NavLink>
                <NavLink className={({ isActive }) =>'hover:text-black p-3 rounded ' + ( isActive ? 'text-black' : 'text-gray-500')} to="/Contact">Contact Us</NavLink>
            </div>
                <div className='flex gap-3 px-1 '>
                <NavLink className='text-[12px]' to="/">WISHLIST ( 0 ) </NavLink>
                <NavLink className='text-[12px]' to="/">CART ( 0 )  </NavLink>
                <CiSearch className='text-2xl font-bold text-[18px]'/>
            </div>
                </div>
            </div>
            <div className='md:flex gap-3 hidden'>
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
