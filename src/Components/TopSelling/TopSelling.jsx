import { Link, Route, Routes } from 'react-router-dom';
import Product from '../Product/Product';
import styles from './TopSelling.module.css';

const TopSelling = (props) => {
  const { topSelling } = props;
  return (
    <div className={styles.topSelling}>
      <h1>Top Selling</h1>

      {topSelling.map((item) => (
        <Link to={`/order/${item.id}`}>
          <div key={item.id} className={styles.product}>
            <img src={item.img} alt='product' />
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <div className={styles.priceBtn}>
              <h1>Rs {item.price}</h1>

              <Link to={`/order/${item.id}`}>
                <button>Add to bucket</button>
              </Link>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TopSelling;
