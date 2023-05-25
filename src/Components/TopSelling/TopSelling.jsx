import { Link, Route, Routes } from 'react-router-dom';
import Product from '../Product/Product';

const TopSelling = (props) => {
  const { item } = props;
  return (
    <div>
      <h1>Top Selling</h1>
      <Link to={`/order/${item.id}`}>Add to Cart</Link>
    </div>
  );
};

export default TopSelling;
