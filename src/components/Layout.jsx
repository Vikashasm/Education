import { Outlet } from 'react-router-dom';
import React from 'react';
import Sidebar from './Sidebar';

function Layout() {
  return (
    <div className="flex flex-col bg_img min-h-screen md:overflow-hidden">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Layout;
