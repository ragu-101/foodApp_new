import React, { useState } from 'react';
import styles from './css/login.module.css';
import { assets } from '../../images/others/assets'


const Login = ({setShowLogin}) => {
  const [currState, setCurrState] = useState("Login")
  return (
    <div className={styles.loginsec}>
      <form action="" className={`${styles.popupcontainer} fadein`}>
        <div className={styles.title}>
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(true)} src={assets.cross_icon} alt="" />
        </div>
        <div className={styles.logininpsec}>
          {currState === 'Sign up' && <input type="text" placeholder='Your name' required />}
          <input type="email" placeholder='Your email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button>{currState === 'Sign up' ? 'Create account' : 'Login'}</button>
        <div className={styles.loginpopup}>
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {
          currState === 'Login' ? <p>Create a new account <span onClick={()=>setCurrState('Sign up')}>Click here</span></p>
          : 
           <p>Already have an account? <span onClick={()=>setCurrState('Login')}>Login here</span></p>
        }

      </form>
    </div>
  )
}

export default Login;