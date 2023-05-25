// Header.jsx
import React from 'react';
import logo from '../../resources/KFC-logo.svg';
import Navigation from './Navigation';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt='KFC logo' className={styles.logo} />
      <Navigation />
    </header>
  );
};

export default Header;

// Navigation.jsx

