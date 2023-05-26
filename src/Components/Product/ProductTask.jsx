import { useParams } from 'react-router-dom';
import ProductImageTask from '../ProductImage/ProductImageTask';
import ProductDescriptionTask from '../ProductDescription/ProductDescriptionTask';
import { useState } from 'react';
import AddOnOrder from '../AddOnOrder/AddOnOrder';
import styles from './ProductTask.module.css';
import ChooseSoftDrink from '../AddOnOrder/ChooseSoftDrink';
const ProductTask = (props) => {
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
    <div className={styles.productWrapper}>
      <div className={styles.addOns}>
        <AddOnOrder items={softDrink} />
        <ChooseSoftDrink items={softDrink} />
      </div>
      <div className={styles.order}>
        <ProductImageTask item={item} />
        <ProductDescriptionTask item={item} />
      </div>
    </div>
  );
};

export default ProductTask;
