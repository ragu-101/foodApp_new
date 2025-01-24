import React, { useState } from 'react';
import styles from './css/home.module.css';
import Header from '../../components/header/Header';
import ExploreMenu from '../../components/exploremenu/ExploreMenu';
import FoodDisplay from '../../components/foodDisplay/FoodDisplay';
import AppDownload from '../../components/appDownload/AppDownload';
import Search from '../../components/search/Search';


const Home = () => {
  const [category, setCategory] = useState('All');
  return (
    <div className={styles.homesec}>
      <Header />
      <Search />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  )
}

export default Home