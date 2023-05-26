import styles from './ProductImage.module.css';
const ProductImage = (props) => {
  const { item } = props;
  return (
    <div className={styles.imgContainer}>
      <img src={item.img} alt='product' />
    </div>
  );
};

export default ProductImage;
