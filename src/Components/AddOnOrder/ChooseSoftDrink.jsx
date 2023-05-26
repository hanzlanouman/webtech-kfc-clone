import styles from './AddOnOrder.module.css';
const ChooseSoftDrink = (props) => {
  const { items } = props;

  return (
    <div className={styles.addoncontainer}>
      <h1>Choose Your Soft Drink</h1>
      <div className={styles.addonbox}>
        {items.map((item) => (
          <div className={styles.item}>
            <p>{item.name}</p>

            <input
              className={styles.radio}
              type='radio'
              id={item.name}
              name='softdrink'
              value={item.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseSoftDrink;
