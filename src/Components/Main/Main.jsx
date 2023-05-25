import { Routes, Route } from 'react-router-dom';
import TopDeal from '../TopDeal/TopDeal';
import Categories from '../Categories/Categories';
import TopSelling from '../TopSelling/TopSelling';
import styles from './Main.module.css'; // don't forget to import styles

const Main = (props) => {
  const { categories, topSelling } = props;
  return (
    <div className={styles.main}>
      <TopDeal />
      <Categories categories={categories} />
      <TopSelling topSelling={topSelling} />
    </div>
  );
};

export default Main;
