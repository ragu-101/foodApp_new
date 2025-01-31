import React, { useState,useContext, useEffect } from 'react'
import './css/navbar.css';
import {assets} from '../../images/others/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
    const [activemenu,setActivemenu] = useState('');
    const [imgsearch,setImagesearch] = useState(false);

    const {getTotalCartAmount,cartItems} = useContext(StoreContext);

    const getBadge = () =>{
        // Object.keys(cartItems
        // if()
        return 0
    }

    useEffect(() => {
        const handleScroll = () => {
          const sections = document.querySelectorAll(".sectionview");
          let scrollPosition = window.scrollY + 100;
    
          sections.forEach((section) => {
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                setActivemenu(section.id);
            }
          });
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);


  return (
    <>
        <div className='navbar'>
           <Link to='/'><img src={assets.logo} alt="logo" className='logo' /></Link> 
            <ul className='navbar-menu'>
                <li className={activemenu === 'search' ? 'activemenu' : ''} onClick={()=>setActivemenu('search')}>Search</li>
                <li className={activemenu === 'explore-menu' ? 'activemenu' : ''} onClick={()=>setActivemenu('explore-menu')}>Menu</li>
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
                    {Object.keys(cartItems).length > 0 && <div className='dot'>{Object.keys(cartItems).length}</div>}
                </div>
                <button onClick={()=>{setShowLogin(false)}}>Sign In</button>
            </div>
        </div>
    </>
  )
}

export default Navbar