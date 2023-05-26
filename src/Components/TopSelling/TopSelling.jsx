import { Link, Route, Routes } from 'react-router-dom';
import Product from '../Product/Product';
import styles from './TopSelling.module.css';

const TopSelling = (props) => {
  const { topSelling, setTopSelling } = props;
  const handleDeletion = (id) => {
    const newTopSelling = topSelling.filter((item) => item.id !== id);
    setTopSelling(newTopSelling);
  };

  return (
    <div className={styles.topSelling}>
      <h1 className={styles.heading}>Top Selling</h1>

      {topSelling.map((item) => {
        // Check if item is null
        if (!item) {
          return <div>No More</div>;
        }
        return (
          <div className={styles.cardContainer}>
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
            <button onClick={(e) => handleDeletion(item.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default TopSelling;
