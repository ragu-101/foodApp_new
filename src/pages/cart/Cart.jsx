import React, { useContext } from 'react';
import styles from './css/cart.module.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate, Link } from 'react-router-dom'
import { assets } from '../../images/others/assets';
import { HiX } from "react-icons/hi";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount,addToCart } = useContext(StoreContext);
  // console.log('fdlist:', food_list);
  const naviagte = useNavigate();

  return (
    <div className={styles.cart}>
      <Link to='/' className={styles.clickview}> <img src={assets.back_icon} alt="back_icon" /> Back</Link>
      { 
        getTotalCartAmount() > 0 ?  <>
        <div className={styles.cartitems}>
          <div className={styles.carttitles}>
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {
            food_list.map((item) => {
              if (cartItems[item._id] > 0) {
                return (
                  <React.Fragment key={item._id}>
                    <div className={`${styles.carttitles} ${styles.cartitemsvalue}`}>
                      <img src={item.image} alt="" />
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                      <p className={styles.priceview}><span onClick={()=>removeFromCart(item._id)}>-</span>{cartItems[item._id]}<span onClick={()=>addToCart(item._id)}>+</span></p>
                      <p>${item.price * cartItems[item._id]}</p>
                      <p className={styles.cross} onClick={() => removeFromCart(item._id)}><HiX /></p>
                    </div>
                    <hr />
                  </React.Fragment>
                )
              }
            })
          }
        </div>
        <div className={styles.cartbottom}>
          <div className={styles.cartbtmitems}>
            <h2>Cart total</h2>
            <div>
              <div className={styles.cartdetails}>
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className={styles.cartdetails}>
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount() > 0 ? 2 : 0}</p>
              </div>
              <hr />
              <div className={styles.cartdetails}>
                <b>Total</b>
                <b>${getTotalCartAmount() > 0 ? getTotalCartAmount()+2 : 0}</b>
              </div>
            </div>
            <button onClick={()=>naviagte('/placeorder')}>PROCCED TO CHECKOUT</button>
          </div>
          {/* <div className={styles.cartpromocode}>
            <div>
                <p>If you have a promocode, Enter it here</p>
                <div className={styles.cartpromoinp}>
                  <input type="text" placeholder='Promo code' />
                  <button>Submit</button>
                </div>
            </div>
          </div> */}
        </div>
        </>
        :
        <div className={styles.emptycart}>
          <p>Your cart is empty</p>
        </div>
      }
     
    </div>
  )
}

export default Cart