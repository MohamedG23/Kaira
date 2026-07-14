import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import Login from './pages/Login'
import { Toaster } from 'react-hot-toast'
import Register from './pages/Register'

export default function App() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<h1>Home</h1>}/>
          <Route path='/Shop' element={<h1>Shop</h1>}/>
          <Route path='/About' element={<h1>About</h1>}/>
          <Route path='/Contact' element={<h1>Contact</h1>}/>
        </Route>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
