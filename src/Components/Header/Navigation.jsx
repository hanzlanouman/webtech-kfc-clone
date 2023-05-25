import React from 'react';
import delivery from '../../resources/1.png';
import pickup from '../../resources/2.png';
import styles from './Header.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.leftHead}>
        <div className={styles.channel}>
          <button className={styles.channelButton}>
            <img src={delivery} alt='delivery' className={styles.channelImg} />
            <span>DELIVERY</span>
          </button>
          <button className={styles.channelButton}>
            <img src={pickup} alt='pickup' className={styles.channelImg} />
            <span>PICKUP</span>
          </button>
        </div>
      </div>
      <div className={styles.rightHead}>
        <button className={styles.registerBtn}>Register / Sign in</button>
      </div>
    </nav>
  );
};

export default Navigation;
