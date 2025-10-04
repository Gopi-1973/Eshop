import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Blogs from './components/Blogs/Blogs'
import Contact from './pages/Contact'
import Products from './components/Products/Products'
import Cart from './pages/Cart'
import ProductCard from './components/Products/ProductCard'

const Myroute = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/products' element={<ProductCard/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/blogs' element={<Blogs/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/cart' element={<Cart/>}/>

            </Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Myroute