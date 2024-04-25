import React from 'react';
import { useTestcontext } from '../Context/GetallTest';
import { useEffect } from 'react';

function LevelTwo({ onClose }) {
  const { selectedLevel, SetactiveComponent } = useTestcontext();

  useEffect(() => {
    SetactiveComponent(true); // Set active component to LevelOne
    return () => {
      SetactiveComponent(null); // Clear active component on unmount
    };
  });

  return (
    <div className="h-screen w-[100%] md:w-[79.3%]  md:py-4 relative m-auto md:pt-12">
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
      <div className="flex items-center justify-center h-full mx-5 md:mx-0">
        <div className="flex items-center justify-center bg-white rounded-[20px] md:gap-[70px] py-10 md:py-[56px] md:ps-5">
          <div className="hidden md:block">
            {selectedLevel === 2 ? (
              <img src="images/svg/girl-boy.svg" alt="girl-boy" />
            ) : (
              <img src="images/svg/2boys.svg" alt="girl-boy" />
            )}
          </div>
          <div className="w-[88%] md:w-[317px] md:pe-[60px]">
            <h1 className=" text-[#FF2000] text-4xl font-bold text-center mt-3">
              {selectedLevel === 2 ? 'Way to go! ' : 'Big Congrats!'}
            </h1>
            <p className=" font-normal text-black text-lg md:text-xl text-center mb-5 mt-4 md:my-7 px-2 lh_22">
              {selectedLevel === 2
                ? "You've conquered the second round of awesomeness!"
                : "You've Officially Joined the rare league of finishers."}
            </p>
            <div className=" flex justify-center items-center">
              {selectedLevel === 2 ? (
                <img
                  className="md:hidden"
                  width="90%"
                  src="images/svg/2boys.svg"
                  alt="dance_group"
                />
              ) : (
                <img
                  className="md:hidden"
                  width="90%"
                  src="images/svg/2boys.svg"
                  alt="dance_group"
                />
              )}
            </div>
            <div onClick={onClose} className=" text-end mt-5">
              <button className=" text-white text-lg font-normal bg-[#FF2000]  rounded-[10px] py-[10px] w-full px-[30px] text-center">
                {selectedLevel === 2 ? 'Move to Level 03' : 'Move to Final Step'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LevelTwo;
