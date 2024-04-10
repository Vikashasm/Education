import React from "react";
import { NavLink } from "react-router-dom";
import { Usethem } from "../Context/Context";

function MNavbar() {
  const { Mshow } = Usethem();
  return (
    <div className=" bg-black flex justify-between items-center w-full px-5 py-5 rounded-t-2xl fixed bottom-0 z-30 ">
      <NavLink to="/" className="flex flex-col items-center justify-center">
        <div
          className={`w-14 h-14 rounded-full bg-white flex flex-col items-center justify-center text-sm font-normal text-black`}
        >
          <span>Stage</span> 1
        </div>
        <p className=" text-[12px] font-normal text-white mt-2">Synonymize</p>
      </NavLink>

      <NavLink
        to="/one"
        className={`flex flex-col items-center justify-center ${
          Mshow !== 1 ? "pointer-events-none" : "pointer-events-auto"
        }`}
      >
        <div
          className={`w-14 h-14 rounded-full  ${
            Mshow === 0 ? "bg-[#66BCB4]" : Mshow === 2 ? "bg-white" : "bg-white"
          } flex flex-col items-center justify-center text-sm font-normal text-black`}
        >
          <span>Stage</span> 2
        </div>
        <p className=" text-[12px] font-normal text-white mt-2">Acknowledge</p>
      </NavLink>

      <NavLink
        to="/two"
        className={`flex flex-col items-center justify-center ${
          Mshow !== 2 ? "pointer-events-none" : "pointer-events-auto"
        }`}
      >
        <div
          className={`w-14 h-14 rounded-full  ${
            Mshow >= 0 && Mshow <= 1 ? "bg-[#66BCB4]" : "bg-white"
          } flex flex-col items-center justify-center text-sm font-normal text-black`}
        >
          <span>Stage</span> 3
        </div>
        <p className=" text-[12px] font-normal text-white mt-2">Explanation</p>
      </NavLink>

      <NavLink
        to="/three"
        className={`flex flex-col items-center justify-center ${
          Mshow !== 3 ? "pointer-events-none" : "pointer-events-auto"
        }`}
      >
        <div
          className={`w-14 h-14 rounded-full  ${
            Mshow >= 0 && Mshow <= 2 ? "bg-[#66BCB4]" : "bg-white"
          } flex flex-col items-center justify-center text-sm font-normal text-black`}
        >
          <span>Stage</span> 4
        </div>
        <p className="text-[12px] font-normal text-white mt-2">Fill Up</p>
      </NavLink>
    </div>
  );
}

export default MNavbar;
