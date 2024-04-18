import React from 'react'

import { useTestcontext } from '../Context/GetallTest';

function LevelTwo({ onClose }) {

  const { selectedLevel } = useTestcontext()
  return (
    <div className=" bg_img h-screen w-[100%] md:w-[79.3%] pb-[110px] md:py-4 relative overflow-y-scroll">
      {/* <img
        className=" absolute left-[16%] top-0"
        src="images/svg/party_celebration.svg"
        alt="party_celebration"
      />
      <img
        className=" absolute right-[16%] top-0 "
        src="images/svg/Rparty_celebration.svg"
        alt="party_celebration"
      /> */}
      <div className="flex items-center justify-center h-full md:py-0">
        <div className=" bg-white rounded-[20px] p-10  w-[86%] md:w-[460px]">
          <h1 className=" text-[#125566] text-4xl font-medium text-center mt-3">
            {selectedLevel === 2 ? "Way to go! " : "Big Congrats!"}
          </h1>
          <p className=" font-medium text-[#909090] text-2xl text-center mb-5 mt-4 md:my-7">
            {selectedLevel === 2
              ? "You've conquered the second round of awesomeness!"
              : "You've Officially Joined the rare league of finishers."}
          </p>
          <div className=" flex justify-center items-center">
            <img
              width="90%"
              src="images/svg/dance_group.svg"
              alt="dance_group"
            />
          </div>
          <div onClick={onClose} className=" text-end mt-5">
            <button className=" text-white text-lg font-normal bg-[#FF725E] md:bg-[#66BCB4]  rounded-[10px] py-[10px] w-full md:w-auto px-[30px] text-center">
              Move to Level 03
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default LevelTwo