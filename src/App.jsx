import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './NavFooter/Navbar';
import Home from './Components/HomePage/Home'
import Products from './Components/Products/Products';
import Footer from './NavFooter/Footer';
import MassageChair from './Components/Products/MassageChair';
import AboutUs from './Components/About/AboutUs';
import Contacts from './Components/Contact/Contacts';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/products/massage-chairs" element={<MassageChair />} />
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/contact' element={<Contacts/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
