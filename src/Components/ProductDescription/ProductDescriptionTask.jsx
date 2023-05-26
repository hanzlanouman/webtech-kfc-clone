import React, { useState } from 'react';
import styles from './ProductDescription.module.css';
const ProductDescription = (props) => {
  const { item } = props;
  const [quantity, setQuantity] = useState(1);
  return (
    <div className={styles.descContainer}>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <h1>Rs {item.price}</h1>
      <div className={styles.btnWrapper}>
        <div className={styles.buttons}>
          <button
            className={styles.btn}
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
      </div>
      <button>Add to bucket</button>
    </div>
  );
};

export default ProductDescription;
