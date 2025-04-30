import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import SignUp from './SignUp';
import Navbar from './components/Navbar';
import Product from './Product';
import Login from './Login';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail'
import Notfound from './Notfound';
import Addtocart from './Addtocart';
import Wishlist from './Wishlist';

const App = () => {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/products/:productName" element={<ProductDetail/>} />
          <Route path="*" element={<Notfound/>}/>
          <Route path="/cart" element={<Addtocart/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>


        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App
