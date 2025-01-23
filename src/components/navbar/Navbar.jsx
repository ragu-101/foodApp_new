import React, { useState,useContext } from 'react'
import './css/navbar.css';
import {assets} from '../../images/others/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
    const [activemenu,setActivemenu] = useState('home');
    const [imgsearch,setImagesearch] = useState(false);

    const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <>
        <div className='navbar'>
           <Link to='/'><img src={assets.logo} alt="logo" className='logo' /></Link> 
            <ul className='navbar-menu'>
                <li className={activemenu === 'home' ? 'activemenu' : ''} onClick={()=>setActivemenu('home')}>Home</li>
                <li className={activemenu === 'menu' ? 'activemenu' : ''} onClick={()=>setActivemenu('menu')}>Menu</li>
                <li className={activemenu === 'mobile' ? 'activemenu' : ''} onClick={()=>setActivemenu('mobile')}>Mobile-app</li>
                <li className={activemenu === 'contactus' ? 'activemenu' : ''} onClick={()=>setActivemenu('contactus')}>Contact us</li>
            </ul>
            <div className='navbar-right'>
                <div className='search-items'>
                    <img src={assets.search_icon} alt="searchicon" onClick={()=>setImagesearch(!imgsearch)} />
                    <input type="text" placeholder='Search items' />
                </div>
                <div className='navbar-search-icon'>
                    <Link to='/cart'><img src={assets.basket_icon} alt="basketicon" /></Link>
                    {getTotalCartAmount() > 0 && <div className='dot'></div>}
                </div>
                <button onClick={()=>{setShowLogin(false)}}>Sign In</button>
            </div>
        </div>
    </>
  )
}

export default Navbar