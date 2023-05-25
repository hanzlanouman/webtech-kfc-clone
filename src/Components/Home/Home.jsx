import Categories from '../Categories/Categories';
import Header from '../Header/Header';
import TopDeal from '../TopDeal/TopDeal';
import TopSelling from '../TopSelling/TopSelling';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Product from '../Product/Product';

import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = () => {
  const topSellingItems = [
    {
      id: 1,
      name: 'Chicken Zinger',
      price: 199,
    },
    {
      id: 2,
      name: 'Chicken Zinger',
      price: 199,
    },
    {
      id: 3,
      name: 'Chicken Zinger',
      price: 199,
    },
    {
      id: 4,
      name: 'Chicken Zinger',
      price: 199,
    },
  ];
  const categoriesArray = [
    {
      id: 1,
      name: 'Everyday Value',
    },
    {
      id: 2,
      name: 'Ala Carte & Combos',
    },
    {
      id: 3,
      name: 'Signature Boxes',
    },
    {
      id: 4,
      name: 'Sharing',
    },
    {
      id: 5,
      name: 'Snacks & Beverages',
    },
    {
      id: 6,
      name: 'Midnight',
    },
  ];

  const [topSelling, setTopSelling] = useState(topSellingItems);
  const [categories, setCategories] = useState(categoriesArray);

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Main categories={categories} topSelling={topSelling} />}
        />
        <Route path='/order/:id' element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Home;
