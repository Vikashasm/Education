import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTestcontext } from "../Context/GetallTest";

function Sidebar() {
  const { Tests, selectedLevel } = useTestcontext()
  return (
    <>
      <div className=" hidden md:flex w-[25%]">
        <div className=" bg-[#125566] min-h-screen flex flex-col gap-4 ps-3 pt-3 w-full">
          {Tests.map((data) => {
            const isCurrentLevel = data.Level === parseInt(selectedLevel);
            const isPreviousLevel = data.Level < parseInt(selectedLevel);
            const isLockedLevel = data.Level > parseInt(selectedLevel);
            return (
              <div
                key={data.id}
                className={`flex items-center font-normal md:text-sm lg:text-base ${isCurrentLevel ? "bg-white text-black" : isPreviousLevel ? "bg-white text-black" : "bg-[#66BCB4] text-black cursor-not-allowed"
                  } pl-3 md:pl-5 pr-4 justify-between rounded-l-full py-2 lg:py-4`}
              >
                <span className="mr-3">{data.LevelTitle}</span>
                {isPreviousLevel && <img src={'/images/svg/Vector2.svg'} alt="VectorGreen" />}
                {isLockedLevel && <img src={'/images/svg/Vector.svg'} alt="VectorGreen" />}
              </div>
            );
          })}
        </div>
      </div>
      <div className=" bg-black flex justify-between items-center w-full px-5 py-5 rounded-t-2xl fixed bottom-0 z-30 md:hidden">
        {Tests.map((data) => {
          const isCurrentLevel = data.Level === parseInt(selectedLevel);
          const isPreviousLevel = data.Level < parseInt(selectedLevel);
          const isLockedLevel = data.Level > parseInt(selectedLevel);
          return (
            <NavLink
              key={data.id}
              className="flex flex-col items-center justify-center"
            >
              <div
                className={`w-14 h-14 rounded-full flex flex-col items-center justify-center text-sm font-normal ${
                  isCurrentLevel
                    ? "bg-white text-black  border-[3px] border-[#125566] "
                    : isPreviousLevel
                    ? "bg-white text-black"
                    : "bg-[#66BCB4] text-black cursor-not-allowed"
                }`}
              >
                <span>Stage</span>
                {data.Level}
              </div>
              <p className=" text-sm font-normal text-white mt-2">
                {data.LevelTitle}
              </p>
            </NavLink>
          );
        })}
      </div>
    </>
  );
}

export default Sidebar;
