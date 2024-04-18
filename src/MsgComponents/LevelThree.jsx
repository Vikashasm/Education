import React from "react";

function LevelThree({ onClose }) {
  return (
    <div className=" bg_img h-screen w-[100%] md:w-[79.3%] pb-[110px] md:py-4  overflow-y-scroll">
      <div className="flex items-center justify-center h-full md:py-0">
        <div className=" bg-white rounded-[20px] py-10 px-5 lg:p-10  w-[86%] md:w-[460px] relative">
          <img
            className=" hidden md:flex absolute left-0 lg:left-[-21%] top-[-34%]"
            src="images/svg/party_celebration.svg"
            alt="party_celebration"
          />
          <img
            className=" hidden md:flex absolute right-0 lg:right-[-21%] top-[-34%]"
            src="images/svg/Rparty_celebration.svg"
            alt="party_celebration"
          />

          <h1 className=" text-[#125566] text-4xl font-medium text-center ">
            Congrats!
          </h1>
          <h2 className=" text-[#125566] text-2xl font-medium text-center mt-3">
            You've conquered Level 01!
          </h2>
          <p className=" font-normal text-lg text-center text-[#909090] my-7">
            Your excitement is like finding a rare Pokémon – not everyone's got
            that kind of energy!
          </p>
          <div onClick={() => onClose()} className=" text-end">
            <button className=" text-white text-lg font-normal bg-[#FF725E] md:bg-[#66BCB4] rounded-[10px] py-[10px] w-full md:w-auto px-[30px] text-center">
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LevelThree;
