import React from "react";
import { NavLink } from "react-router-dom";
import { Usethem } from "../Context/Context";

function Sidebar() {
  const { show, Mshow } = Usethem();
  return (
    <>
      <div className=" hidden md:flex w-[25%]">
        <div className=" bg-[#125566] min-h-screen flex flex-col gap-4 ps-3 pt-3 w-full">
          <NavLink
            to="/"
            className={`flex items-center font-normal md:text-sm lg:text-base bg-white pl-3 md:pl-5 pr-4 justify-between rounded-l-full py-2 lg:py-4 pointer-events-none`}
          >
            <span className="mr-3">Synonymize</span>
            {show >= 1 ? (
              <img src={`/images/svg/Vector2.svg`} alt="Vector" />
            ) : null}
          </NavLink>

          <NavLink
            className={`flex items-center font-normal md:text-sm lg:text-base ${
              show !== 1 ? "pointer-events-none" : "pointer-events-auto"
            } ${
              show === 0 ? "bg-[#66BCB4]" : show === 2 ? "bg-white" : "bg-white"
            } pl-3 md:pl-5 pr-4 justify-between rounded-l-full py-2 lg:py-4`}
            to="/one"
          >
            <span className="mr-3">Acknowledge</span>
            {show === 0 ? (
              <img src={`/images/svg/Vector.svg`} alt="Vector" />
            ) : show >= 2 ? (
              <img src={`/images/svg/Vector2.svg`} alt="Vector" />
            ) : null}
          </NavLink>

          <NavLink
            className={`flex items-center font-normal md:text-sm lg:text-base ${
              show !== 2 ? "pointer-events-none" : "pointer-events-auto"
            } ${
              show >= 0 && show <= 1 ? "bg-[#66BCB4]" : "bg-white"
            } pl-3 md:pl-5 pr-4 justify-between rounded-l-full py-2 lg:py-4`}
            to="/two"
          >
            <span className="mr-3">Explanation</span>
            {show >= 0 && show <= 1 ? (
              <img src={`/images/svg/Vector.svg`} alt="Vector" />
            ) : show >= 3 ? (
              <img src={`/images/svg/Vector2.svg`} alt="Vector" />
            ) : null}
          </NavLink>
          <NavLink
            className={`flex items-center font-normal md:text-sm lg:text-base ${
              show !== 3 ? "pointer-events-none" : "pointer-events-auto"
            } ${
              show >= 0 && show <= 2 ? "bg-[#66BCB4]" : "bg-white"
            } pl-3 md:pl-5 pr-4 justify-between rounded-l-full py-2 lg:py-4 `}
            to="/three"
          >
            <span className="mr-3">Fill Up</span>
            {show >= 0 && show <= 2 ? (
              <img src={`/images/svg/Vector.svg`} alt="Vector" />
            ) : Mshow === 1 ? (
              <img src={`/images/svg/Vector2.svg`} alt="Vector" />
            ) : null}
          </NavLink>
        </div>
      </div>
      <div className=" bg-black flex justify-between items-center w-full px-5 py-5 rounded-t-2xl fixed bottom-0 z-30 md:hidden">
        <NavLink to="/" className="flex flex-col items-center justify-center">
          <div
            className={`w-14 h-14 rounded-full bg-white flex flex-col items-center justify-center text-sm font-normal text-black`}
          >
            <span>Stage</span> 1
          </div>
          <p className=" text-sm font-normal text-white mt-2">Synonymize</p>
        </NavLink>

        <NavLink
          to="/one"
          className={`flex flex-col items-center justify-center ${
           show !== 1 ? "pointer-events-none" : "pointer-events-auto"
          }`}
        >
          <div
            className={`w-14 h-14 rounded-full  ${
             show === 0
                ? "bg-[#66BCB4]"
                :show === 2
                ? "bg-white"
                : "bg-white"
            } flex flex-col items-center justify-center text-sm font-normal text-black`}
          >
            <span>Stage</span> 2
          </div>
          <p className=" text-sm font-normal text-white mt-2">Acknowledge</p>
        </NavLink>

        <NavLink
          to="/two"
          className={`flex flex-col items-center justify-center ${
           show !== 2 ? "pointer-events-none" : "pointer-events-auto"
          }`}
        >
          <div
            className={`w-14 h-14 rounded-full  ${
             show >= 0 &&show <= 1 ? "bg-[#66BCB4]" : "bg-white"
            } flex flex-col items-center justify-center text-sm font-normal text-black`}
          >
            <span>Stage</span> 3
          </div>
          <p className=" text-sm font-normal text-white mt-2">Explanation</p>
        </NavLink>

        <NavLink
          to="/three"
          className={`flex flex-col items-center justify-center ${
           show !== 3 ? "pointer-events-none" : "pointer-events-auto"
          }`}
        >
          <div
            className={`w-14 h-14 rounded-full  ${
             show >= 0 &&show <= 2 ? "bg-[#66BCB4]" : "bg-white"
            } flex flex-col items-center justify-center text-sm font-normal text-black`}
          >
            <span>Stage</span> 4
          </div>
          <p className=" text-sm font-normal text-white mt-2">Fill Up</p>
        </NavLink>
      </div>
    </>
  );
}

export default Sidebar;
