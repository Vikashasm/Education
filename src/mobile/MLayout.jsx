import React from "react";
import { Outlet } from "react-router-dom";
import MNavbar from "./MNavbar";

function MLayout() {
  return (
    <div className=" relative">
      <div className=" absolute z-20 w-full  bottom-0 left-0 ">
        <MNavbar />
      </div>
      <Outlet />
    </div>
  );
}

export default MLayout;
