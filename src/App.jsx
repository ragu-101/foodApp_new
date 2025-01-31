import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import PlaceOrder from './pages/placeorder/PlaceOrder';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import FileNotFound from './pages/filenotfound/FileNotFound';

const App = () => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <>
      {
        showLogin ? <div className='app'>
          <BrowserRouter >
            <Navbar setShowLogin={setShowLogin}/>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/placeorder' element={<PlaceOrder />} />

              <Route path='*' element={<FileNotFound />} />
            </Routes>
          </BrowserRouter >
          <Footer />
        </div >
          :
          <Login setShowLogin={setShowLogin} />
      }
    </>
  )
}

export default App