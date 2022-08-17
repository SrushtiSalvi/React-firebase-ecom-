import React from 'react';
import Carousal from '../components/Home/Carousal';
import ProductsLayout from '../components/Home/ProductsLayout';

const Home = () => {
  return (
    <div style={{ backgroundColor: '	#F0F0F0' }}>
      <Carousal />
      <ProductsLayout />
    </div>
  );
};

export default Home;
