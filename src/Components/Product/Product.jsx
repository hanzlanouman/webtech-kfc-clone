import { useParams } from 'react-router-dom';
import ProductImage from '../ProductImage/ProductImage';
import ProductDescription from '../ProductDescription/ProductDescription';
import { useState } from 'react';
import AddOnOrder from '../AddOnOrder/AddOnOrder';
import styles from './Product.module.css';
const Product = (props) => {
  const [addOns, setAddOns] = useState([
    {
      id: 1,
      name: 'coleslaw',
      price: 50,
    },
    {
      id: 2,
      name: 'One pc chicken',
      price: 50,
    },
    {
      id: 3,
      name: 'Cheese',
      price: 50,
    },
    {
      id: 4,
      name: 'Regular Fries',
      price: 50,
    },
    {
      id: 5,
      name: 'Fries Bucket',
      price: 50,
    },
    {
      id: 6,
      name: 'Drink',
      price: 50,
    },
    {
      id: 7,
      name: 'Mayo Dip',
      price: 50,
    },
  ]);
  const [softDrink, setSoftDrink] = useState([
    {
      id: 1,
      name: 'Pepsi',
      price: 50,
    },
    {
      id: 2,
      name: '7up',
      price: 50,
    },
    {
      id: 3,
      name: 'Mirinda',
      price: 50,
    },
    {
      id: 4,
      name: 'Mountain Dew',
      price: 50,
    },
  ]);
  const { topSelling } = props;
  const { id } = useParams();

  const item = topSelling.find((item) => item.id == id);

  if (!item) {
    return <div>No item found</div>;
  }
  return (
    <div>
      <div className={styles.order}>
        <ProductImage item={item} />
        <ProductDescription item={item} />
      </div>
      <div>
        <h1>Add Ons</h1>
        <AddOnOrder items={addOns} />
        <h1>Soft Drinks</h1>
        <AddOnOrder items={softDrink} />
      </div>
    </div>
  );
};

export default Product;
