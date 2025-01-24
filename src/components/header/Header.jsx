import React from 'react';
import styles from './css/header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={`${styles.headerContents} fadein`}>
        <h2>Order your <br /> favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header;