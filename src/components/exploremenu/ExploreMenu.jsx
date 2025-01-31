import React from 'react';
import { menu_list } from '../../images/others/assets';
import styles from './css/explore.module.css';

const ExploreMenu = ({category,setCategory}) => {

  const handleMenu = (menu_name) =>{
    if(category === menu_name)
      setCategory('All');
    else
      setCategory(menu_name);

      console.log("category : ",category)
  }
  return (
    <div className={`sectionview ${styles.exploremenu}`} id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className={styles.exporemenutxt}>Choose form a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className={styles.exploremenulist}>
        {
          menu_list.map((item,index)=>{
            return <div onClick={()=>handleMenu(item.menu_name)} className={styles.listitems} key={item.menu_name}>
              <img className={category === item.menu_name ? styles.activeimg : ''} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          })
        }
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu