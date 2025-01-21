import React from 'react';
import styles from './css/footer.module.css';
import { assets } from '../../images/others/assets';

const Footer = () => {
  return (
    <div className={styles.footersec} id='footer'>
        <div className={styles.ftcontent}>
            <div className={styles.ftleft}>
                <img className={styles.ftlogo} src={assets.logo} alt="" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                <div className={styles.ftsocialicons}>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className={styles.ftcenter}>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className={styles.ftright}>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 233-454-0990</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p>Copyright 2024 &#169; Tomato.com - All rights reserved</p>
    </div>
  )
}

export default Footer