import { useState } from 'react';
import styles from './AddOnOrder.module.css';
const AddOnOrder = (props) => {
  const { items } = props;
  return (
    <div className={styles.addoncontainer}>
      <h1>Add Ons</h1>
      <div className={styles.addonbox}>
        {items.map((item) => (
          <div className={styles.item}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button className={styles.addbtn}>+Add</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddOnOrder;
