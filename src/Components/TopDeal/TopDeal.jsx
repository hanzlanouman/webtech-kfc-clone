import { Link } from 'react-router-dom';
import topDealBanner from '../../resources/topDeal.jpg';
import styles from './TopDeal.module.css';

const TopDeal = (props) => {
  const { topDeal } = props;

  return (
    <div className={styles.deal}>
      <Link to={`/order/${topDeal.id}`}>
        <img src={topDealBanner} alt='Top Deal' />
      </Link>
    </div>
  );
};

export default TopDeal;
