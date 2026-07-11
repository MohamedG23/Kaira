import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<h1>Home</h1>}/>
          <Route path='/Shop' element={<h1>Shop</h1>}/>
          <Route path='/About' element={<h1>About</h1>}/>
          <Route path='/Contact' element={<h1>Contact</h1>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
