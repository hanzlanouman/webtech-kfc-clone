// Header.jsx
import React from 'react';
import logo from '../../resources/KFC-logo.svg';
import Navigation from './Navigation';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to='/'>
        <img src={logo} alt='KFC logo' className={styles.logo} />
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;

// Navigation.jsx
