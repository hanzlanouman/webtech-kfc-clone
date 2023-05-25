import { Link } from 'react-router-dom';
import topDeal from '../../resources/topDeal.jpg';
import styles from './TopDeal.module.css';

const TopDeal = () => {
  return (
    <div className={styles.deal}>
      <img src={topDeal} alt='Top Deal' />
    </div>
  );
};

export default TopDeal;
