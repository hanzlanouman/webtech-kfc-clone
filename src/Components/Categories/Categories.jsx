import styles from './Categories.module.css';

const Categories = (props) => {
  const { categories } = props;

  return (
    <div className={styles.categoryBar}>
      <div className={styles.heading}>
        <h1>Categories</h1>
        <div className={styles.line}></div>
      </div>
      <div className={styles.categories}>
        {categories.map((category) => (
          <div className={styles.category}>
            <img src={category} alt='category-item' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
