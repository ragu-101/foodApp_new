import React from 'react'
import styles from './css/appdownload.module.css';
import { assets } from '../../images/others/assets';

const AppDownload = () => {
  return (
    <div className={`sectionview ${styles.appdownloadsec}`} id='appdownload'>
        <p>For better experience download <br /> Tomato app</p>
        <div className={styles.downloadimgs}>
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload