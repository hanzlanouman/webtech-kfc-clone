import { Link, Route, Routes } from 'react-router-dom';
import Product from '../Product/Product';
import styles from './TopSelling.module.css';

const TopSelling = (props) => {
  const { topSelling } = props;
  return (
    <div className={styles.topSelling}>
      <h1>Top Selling</h1>
      {topSelling.map((item) => (
        <div key={item.id} className={styles.product}>
          <img src={item.img} alt='product' />
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <h2>{item.price}</h2>

          <Link to={`/product/${item.id}`}>
            <button>Add to bucket</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TopSelling;
