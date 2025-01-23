import React,{useContext} from 'react';
import styles from './css/placeorder.module.css';
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {

   const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <form className={styles.placeorder}>
      <div className={styles.placeleft}>
        <p className={styles.title}>Delivery Information</p>
        <div className={styles.mulitifields}>
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="email" placeholder='Email Address' />
        <input type="text" placeholder='Street' />
        <div className={styles.mulitifields}>
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className={styles.mulitifields}>
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className={styles.placeright}>
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
              <p>${2}</p>
            </div>
            <hr />
            <div className={styles.cartdetails}>
              <b>Total</b>
              <b>${getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button>PROCCED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder