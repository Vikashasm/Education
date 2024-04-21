import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTestcontext } from '../Context/GetallTest';

function Sidebar() {
  const { Tests, selectedLevel, activeComponent } = useTestcontext();
  return (
    <>
      <div className=" hidden md:flex md:max-w-[1200px] w-full absolute z-10 start-[50%] top-[40px] translate-x-[-50%] px-5">
        <div className="flex justify-between bg-[#ffffff]  flex w-full px-[30] rounded-[20px] items-center py-[3px]">
          <p className="text-lg font-normal text-[#455A64]  max-w-[355px] w-full lh-20">
            <span className="text-xl text-[#FF2000] font-bold lh_20">ETP</span> <br />
            English Level Test!
          </p>
          <div className="flex">
            {Tests.sort((a, b) => a.Level - b.Level).map((data, index) => {
              const isCurrentLevel = data.Level === parseInt(selectedLevel);
              const isPreviousLevel = data.Level < parseInt(selectedLevel);
              const isLockedLevel = data.Level > parseInt(selectedLevel);
              return (
                <div
                  key={data.id}
                  className={` font-normal  text-center flex items-center flex-col justify-center w-[143px]  ${
                    isCurrentLevel
                      ? 'bg-white text-black'
                      : isPreviousLevel
                      ? 'bg-white text-black'
                      : 'text-black cursor-not-allowed'
                  }justify-between`}>
                  {isCurrentLevel && (
                    <div
                      className={`${
                        data.Level == 1 || data.Level == 2 ? 'unlock_border' : null
                      } w-full flex justify-center`}>
                      <img
                        className="py-[8px] relative z-10"
                        src={'/images/png/unlock-level.png'}
                        alt="VectorGreen"
                      />
                    </div>
                  )}
                  {isPreviousLevel && (
                    <div
                      className={`${
                        data.Level == 1 || data.Level == 2 ? 'unlock_border' : null
                      } w-full flex justify-center`}>
                      <img
                        className="py-[8px] relative z-10"
                        src={'/images/png/unlock-level.png'}
                        alt="VectorGreen"
                      />
                    </div>
                  )}
                  {isLockedLevel && (
                    <div className={`lock_border_${index} w-full flex justify-center`}>
                      <img
                        className="py-[2px] relative z-10"
                        src={'/images/png/lock-level.png'}
                        alt="VectorGreen"
                      />
                    </div>
                  )}
                  <span className="pt-[8px]">{data.LevelTitle}</span>
                </div>
              );
            })}
          </div>
          <div className="w-full max-w-[355px] text-right flex justify-end items-center">
            <img src={'/images/png/user.png'} alt="" />
          </div>
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
