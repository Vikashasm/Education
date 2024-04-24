import React from 'react';
import { useTestcontext } from '../Context/GetallTest';
import { useEffect } from 'react';
function LevelThree({ onClose }) {
  const { SetactiveComponent } = useTestcontext();

  useEffect(() => {
    SetactiveComponent(true); // Set active component to LevelOne
    return () => {
      SetactiveComponent(null); // Clear active component on unmount
    };
  });

  return (
    <div className=" flex items-center justify-center h-screen w-[100%]  md:py-4 w-[79%] m-auto">
      <div className="flex items-center justify-center md:py-0 bg-white rounded-[20px] md:w-[797px] md:mt-12">
        <div className="hidden md:block">
          {<img className="py-[8px]" src={'/images/png/cartoon-boy.png'} alt="VectorGreen" />}
        </div>
        <div className=" py-10 px-5 lg:p-10  custom:w-[86%] md:w-[460px] relative">
          <h1 className=" text-[#FF2000] text-4xl font-bold text-center ">Congrats!</h1>
          <h2 className=" text-[#125566] text-lg font-medium text-center mt-3 lh_20">
            You've conquered <br /> Level 01!
          </h2>
          <p className=" font-normal text-lg text-center text-black my-7">
            Your excitement is like finding a rare Pokémon – not everyone's got that kind of energy!
          </p>
          <div className=" flex justify-center">
            <img
              className="md:hidden"
              width="250px"
              src="images/png/cartoon-boy.png"
              alt="dance_group"
            />
          </div>
          <div onClick={() => onClose()} className=" text-end mt-3">
            <button className=" text-white text-lg font-normal bg-[#FF2000]  rounded-[10px] py-[10px] w-full  px-[30px] text-center">
              Move to Level 02
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LevelThree;
