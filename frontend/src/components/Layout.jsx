import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <Header />
      <div className="fixed bg-white z-10 shadow-xl font-medium text-sm py-2 px-5 border rounded-full top-16 left-1/2 -translate-x-1/2 cursor-pointer w-fit active:bg-neutral-100">
        New Posts
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
