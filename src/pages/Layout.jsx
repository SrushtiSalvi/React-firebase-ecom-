import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import MiniNav from '../components/shared/MiniNav';
import Navbar from '../components/shared/Navbar';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <MiniNav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
