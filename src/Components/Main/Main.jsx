import { Routes, Route } from 'react-router-dom';
import TopDeal from '../TopDeal/TopDeal';
import Categories from '../Categories/Categories';
import TopSelling from '../TopSelling/TopSelling';

const Main = (props) => {
  const { categories, topSelling } = props;
  return (
    <div>
      <h1>Main Component</h1>
      <TopDeal />
      {categories.map((item) => (
        <Categories key={item.id} item={item} />
      ))}
      {topSelling.map((item) => (
        <TopSelling key={item.id} item={item} />
      ))}{' '}
    </div>
  );
};

export default Main;
