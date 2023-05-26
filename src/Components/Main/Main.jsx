import { Routes, Route } from 'react-router-dom';
import TopDeal from '../TopDeal/TopDeal';
import Categories from '../Categories/Categories';
import TopSelling from '../TopSelling/TopSelling';
import styles from './Main.module.css'; // don't forget to import styles

const Main = (props) => {
  const { categories, topSelling, setTopSelling } = props;
  const topDeal = {
    id: 1,
    name: 'Krunch Burger',
    price: 250,
    img: topSelling[0].img,
  };
  return (
    <div className={styles.main}>
      <TopDeal topDeal={topDeal} />
      <Categories categories={categories} />
      <TopSelling topSelling={topSelling} setTopSelling={setTopSelling} />
    </div>
  );
};

export default Main;
