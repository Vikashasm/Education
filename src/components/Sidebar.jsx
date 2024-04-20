import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTestcontext } from '../Context/GetallTest';

function Sidebar() {
  const { Tests, selectedLevel, activeComponent } = useTestcontext();
  return (
    <>
      <div className=" hidden md:flex w-[25%]">
        <div className=" bg-[#125566] min-h-screen flex flex-col gap-4 ps-3 pt-3 w-full">
          {Tests.sort((a, b) => a.Level - b.Level).map((data) => {
            const isCurrentLevel = data.Level === parseInt(selectedLevel);
            const isPreviousLevel = data.Level < parseInt(selectedLevel);
            const isLockedLevel = data.Level > parseInt(selectedLevel);
            return (
              <div
                key={data.id}
                className={`flex items-center font-normal md:text-sm lg:text-base ${
                  isCurrentLevel
                    ? 'bg-white text-black'
                    : isPreviousLevel
                    ? 'bg-white text-black'
                    : 'bg-[#66BCB4] text-black cursor-not-allowed'
                } pl-3 md:pl-5 pr-4 justify-between rounded-l-full py-2 lg:py-4`}>
                <span className="mr-3">{data.LevelTitle}</span>
                {isPreviousLevel && <img src={'/images/svg/Vector2.svg'} alt="VectorGreen" />}
                {isLockedLevel && <img src={'/images/svg/Vector.svg'} alt="VectorGreen" />}
              </div>
            );
          })}
        </div>
      </div>
      {!activeComponent && (
        <div className="flex bg-[#4ab8d4a6] backdrop-blur-[10px]  justify-evenly gap-2 items-center  px-5 py-5 sticky top-[0px] z-30 md:hidden">
          {Tests.sort((a, b) => a.Level - b.Level).map((data) => {
            const isCurrentLevel = data.Level === parseInt(selectedLevel);
            const isPreviousLevel = data.Level < parseInt(selectedLevel);
            const isLockedLevel = data.Level > parseInt(selectedLevel);
            return (
              <NavLink key={data.id} className="flex flex-col items-center justify-center">
                <div
                  className={`w-[60px] h-[60px] rounded-full flex flex-col items-center justify-center text-sm font-normal ${
                    isCurrentLevel
                      ? 'bg-[#10C500] text-white border-[3px] border-[#4c67f0]'
                      : isPreviousLevel
                      ? 'bg-[#10C500] text-white'
                      : 'bg-[#FF2000] text-white cursor-not-allowed'
                  }`}>
                  <span>Level</span>
                  {data.Level}
                </div>
                <p className=" text-sm font-normal text-black mt-2">{data.LevelTitle}</p>
              </NavLink>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Sidebar;
