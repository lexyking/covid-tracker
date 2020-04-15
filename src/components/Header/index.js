import React from 'react';
import styles from './style.module.css';
import ImgSrc from '../../assets/covid19.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <span>C</span>
      <div className={styles.imageContainer}>
        <img src={ImgSrc} alt='Covid logo' />
      </div>
      <span>vid-19</span>
    </header>
  );
};

export default Header;
