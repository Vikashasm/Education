import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function MNavbar() {
  const path = useLocation();
  return (
    <div className=" bg-black flex justify-between items-center w-full px-5 py-5 rounded-t-2xl">
      <NavLink to="/" className="flex flex-col items-center justify-center">
        <div
          className={`w-14 h-14 rounded-full ${
            path.pathname !== "/" ? "bg-[#66BCB4]" : "bg-white"
          } flex flex-col items-center justify-center text-sm font-normal text-black`}
        >
          <span>Stage</span> 1
        </div>
        <p className=" text-sm font-normal text-white mt-2">Synonymize</p>
      </NavLink>
      <NavLink to="/one" className="flex flex-col items-center justify-center">
        <div
          className={`w-14 h-14 rounded-full ${
            path.pathname !== "/one" ? "bg-[#66BCB4]" : "bg-white"
          } flex flex-col items-center justify-center text-sm font-normal text-black`}
        >
          <span>Stage</span> 2
        </div>
        <p className=" text-sm font-normal text-white mt-2">Acknowledge</p>
      </NavLink>
      <NavLink to="/two" className="flex flex-col items-center justify-center">
        <div
          className={`w-14 h-14 rounded-full ${
            path.pathname !== "/two" ? "bg-[#66BCB4]" : "bg-white"
          } flex flex-col items-center justify-center text-sm font-normal text-black`}
        >
          <span>Stage</span> 3
        </div>
        <p className=" text-sm font-normal text-white mt-2">Explanation</p>
      </NavLink>
      <NavLink
        to="/three"
        className="flex flex-col items-center justify-center"
      >
        <div
          className={`w-14 h-14 rounded-full ${
            path.pathname !== "/three" ? "bg-[#66BCB4]" : "bg-white"
          } flex flex-col items-center justify-center text-sm font-normal text-black`}
        >
          <span>Stage</span> 4
        </div>
        <p className=" text-sm font-normal text-white mt-2">Fill Up</p>
      </NavLink>
    </div>
  );
}

export default MNavbar;
