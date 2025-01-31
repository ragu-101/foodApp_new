import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../images/others/assets';

const FileNotFound = () => {
  return (
    <div className='filenotfound'>
        <h2>404</h2>
        <p>Page not found</p>
        <Link to='/'> <img src={assets.back_icon} alt="back-to-home-page" /> Back to homepage</Link>
    </div>
  )
}

export default FileNotFound;