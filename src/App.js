import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import About from './pages/About';
import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';


function App() {
  useEffect(()=>{
    const sr = ScrollReveal()
    sr.reveal('.scroll-animate', {
      delay: 100,
      distance: '30px',
      origin: 'bottom',
      duration: 1500,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
    });
}, [])
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/products" element={<Products/>} />
       <Route path="/contact-us" element={<Contact/>} />
       {/* <Route path="/about" element={<About/>}/> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
