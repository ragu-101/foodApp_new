import React, { useContext } from 'react';
import styles from './css/fooddisplay.module.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../fooditem/FoodItem';

const FoodDisplay = ({category}) => {
    const food_list = useContext(StoreContext);
  return (
    <div className={`${styles.foodDisplay} fadein`} id='food-diaplay'>
        <h2>Top dishes near me</h2>
        <div className={styles.foodlists}>
          {food_list.food_list.map((item)=>{
            if(category === 'All' || category === item.category){
              return <FoodItem key={item._id} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} category={item.category}/>;
            }
          })}
        </div>
        <hr />
    </div>
  )
}

export default FoodDisplay