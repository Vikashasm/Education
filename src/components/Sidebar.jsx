import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTestcontext } from "../Context/GetallTest";

function Sidebar() {
  const { Tests, setSelectedTitleId, selectedTitleId } = useTestcontext()
  
  const [selectedIds, setSelectedIds] = useState([selectedTitleId]);

  const handleTitleClick = (titleId) => {
    setSelectedTitleId(titleId);
    setSelectedIds((prevSelectedIds) => [...prevSelectedIds, titleId]);
  };

  useEffect(() => {
    setSelectedIds((prevSelectedIds) => [...prevSelectedIds, selectedTitleId]);
  },[selectedTitleId])

  return (
    <>
      <div className=" hidden md:flex w-[25%]">
        <div className=" bg-[#125566] min-h-screen flex flex-col gap-4 ps-3 pt-3 w-full">
          {Tests.map((data) => {
            return (
              <NavLink key={data.id} onClick={() => handleTitleClick(data.id)}
                className={`flex items-center font-normal md:text-sm lg:text-base ${selectedIds.includes(data.id) ? "bg-white text-black" : "bg-[#66BCB4] text-black"
                  } pl-3 md:pl-5 pr-4 justify-between rounded-l-full py-2 lg:py-4`}
                to="/"
              >
                <span className="mr-3">{data.LevelTitle}</span>
                {(selectedTitleId === data.id || selectedIds.includes(data.id)) ? null : <img src={'/images/svg/Vector.svg'} alt="Vector" />}
                {(selectedIds.includes(data.id) && data.id !== selectedTitleId) ? <img src={'/images/svg/Vector2.svg'} alt="Vector" /> : null}
              </NavLink>
            )
          })}
        </div>
      </div>
      <div className=" bg-black flex justify-between items-center w-full px-5 py-5 rounded-t-2xl fixed bottom-0 z-30 md:hidden">
        {Tests.map((data) => {
          return (
            <NavLink to="/" key={data.id} className="flex flex-col items-center justify-center">
              <div
                className={`w-14 h-14 rounded-full bg-white flex flex-col items-center justify-center text-sm font-normal text-black`}
              >
                <span>Stage</span> {data.Level}
              </div>
              <p className=" text-sm font-normal text-white mt-2">{ data.LevelTitle}</p>
            </NavLink>
          )
        })}
      </div>
    </>
  );
}

export default Sidebar;
