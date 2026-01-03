import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Footer from './pages/Footer'
import Contact from './pages/Contact'
import Service from './pages/Service'
import BrandModels from './components/BrandModels'
import ModelDetails from './components/ModelDetails'
import Repair from './pages/Repair'
import AllProducts from './pages/AllProducts'
import PhotoFrame from './pages/PhotoFrame'
import Cart from './pages/Cart'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services'  element={<Service/>}/>
      <Route path='/repair' element={<Repair/>}/>
      <Route path = "/repair/:brandName" element={<BrandModels/>}/>
      <Route path='/repair/:brandName/:modelName' element={<ModelDetails/>}/>
      <Route path='/all' element={<AllProducts/>}/>
      <Route path='/photo-frame' element={<PhotoFrame/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
