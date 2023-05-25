import Categories from '../Categories/Categories';
import Header from '../Header/Header';
import TopDeal from '../TopDeal/TopDeal';
import TopSelling from '../TopSelling/TopSelling';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Product from '../Product/Product';
import styles from './Home.module.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

// import all images burgers from resources
import burger1 from '../../resources/krunch.jpg';
import burger2 from '../../resources/krunch2.jpg';
import burger3 from '../../resources/wings.jpg';
import burger4 from '../../resources/mightyzinger.png';
// import all images from resources
import pic1 from '../../resources/1664808314387-image.png';
import pic2 from '../../resources/1664808381179-image.png';
import pic3 from '../../resources/1670428227978-image.jpg';
import pic4 from '../../resources/1670428259329-image.jpg';
import pic5 from '../../resources/1670428289482-image.jpg';
import pic6 from '../../resources/1670428300613-image.jpg';

const Home = () => {
  const topSellingItems = [
    {
      id: 1,
      name: 'Krunch Burger',
      price: 250,
      img: burger1,
      description:
        'Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun',
    },
    {
      id: 2,
      name: 'Crunch with Fries and Dring',
      price: 490,
      img: burger2,
      description: '1 Krunch, 1 Fries & 1 Drink',
    },
    {
      id: 3,
      name: 'Hot Wings',
      price: 550,
      img: burger3,
      description: '10 Pcs of our Signature Hot & Crispy Wings',
    },
    {
      id: 4,
      name: 'Mighty Zinger',
      price: 680,
      img: burger4,
      description:
        'Our signature Zinger but Bigger! Double Zinger fillet with a combination of spicy and plain mayo, lettuce and cheese- sandwiched between a sesame seed bun',
    },
  ];
  const categoriesArray = [pic1, pic2, pic3, pic4, pic5, pic6];

  const [topSelling, setTopSelling] = useState(topSellingItems);
  const [categories, setCategories] = useState(categoriesArray);

  return (
    <div>
      <div className={styles.container}>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Main categories={categories} topSelling={topSelling} />}
          />
          <Route path='/order/:id' element={<Product />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
