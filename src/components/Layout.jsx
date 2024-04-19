import { Outlet } from "react-router-dom";
import React from "react";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className="md:flex bg_img h-screen overflow-hidden">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Layout;
