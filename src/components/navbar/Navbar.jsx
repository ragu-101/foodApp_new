import React, { useState } from 'react'
import './css/navbar.css';
import {assets} from '../../images/others/assets';

const Navbar = ({setShowLogin}) => {
    const [activemenu,setActivemenu] = useState('home');
  return (
    <>
        <div className='navbar'>
            <img src={assets.logo} alt="logo" className='logo' />
            <ul className='navbar-menu'>
                <li className={activemenu === 'home' ? 'activemenu' : ''} onClick={()=>setActivemenu('home')}>Home</li>
                <li className={activemenu === 'menu' ? 'activemenu' : ''} onClick={()=>setActivemenu('menu')}>Menu</li>
                <li className={activemenu === 'mobile' ? 'activemenu' : ''} onClick={()=>setActivemenu('mobile')}>Mobile-app</li>
                <li className={activemenu === 'contactus' ? 'activemenu' : ''} onClick={()=>setActivemenu('contactus')}>Contact us</li>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt="searchicon" />
                <div className='navbar-search-icon'>
                    <img src={assets.basket_icon} alt="basketicon" />
                    <div className='dot'></div>
                </div>
                <button onClick={()=>{setShowLogin(false)}}>Sign In</button>
            </div>
        </div>
    </>
  )
}

export default Navbar