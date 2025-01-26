import React, { useState, useContext } from 'react';
import styles from './css/fooditem.module.css';
import { assets } from '../../images/others/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, image, description, price }) => {

  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className={styles.fooditems}>
      <div className={styles.fiimgcontainer}>
        <img src={image} alt={name} />
        {!cartItems[id] ? <div className={styles.itemcounter}><img className={styles.counticon} onClick={() => addToCart(id)} src={assets.add_icon_white} alt="add" /></div>
          : <div className={`${styles.itemcounter}`}>
            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="remove" />
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="add" />
          </div>
        }
      </div>
      <div className={styles.fiinfo}>
        <div className={styles.firating}>
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className={styles.fidesc}>{description}</p>
        <p className={styles.fiprice}>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem