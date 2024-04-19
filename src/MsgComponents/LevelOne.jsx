import React, { useEffect } from 'react'
import { useTestcontext } from '../Context/GetallTest';
function LevelOne() {
  const { Tests, setselectedLevel, selectedLevel, SetactiveComponent } = useTestcontext();
  // console.log("selectedLevel ",selectedLevel)
  async function handleContinue() {
    setselectedLevel(1)
  }

  useEffect(() => {
    SetactiveComponent(true); // Set active component to LevelOne
    return () => {
      SetactiveComponent(null); // Clear active component on unmount
    };
  })

  return (
    <div className=" bg_img h-screen w-[100%] md:w-[79.3%]  md:py-4 relative overflow-y-scroll">
      <div className="flex items-center justify-center h-full md:py-0">
        <div className=" bg-white rounded-[20px] py-10 px-5 lg:p-10  w-[86%] md:w-[460px]">
          <h2 className=" text-[#125566] text-2xl font-medium text-center">
            Welcome to the
          </h2>
          <h1 className=" text-[#FF2000] md:text-[#125566] text-4xl font-medium text-center mt-3">
            ETP English Level Test
          </h1>
          <p className=" font-normal text-lg text-center my-7">
            We've got <span className=" font-bold">{Tests.length} levels</span>{" "}
            to conquer, but beware, only the bravest make it to level{" "}
            {Tests.length}. Are you up for the challenge? Let's see what you've
            got! <span className=" font-bold">Good luck!</span>
          </p>
          <div className=" text-end">
            <button
              onClick={() => handleContinue()}
              className=" text-white text-lg font-normal bg-[#FF2000] md:bg-[#66BCB4] rounded-[10px] py-[10px] w-full md:w-auto px-[30px] text-center"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );

}


export default LevelOne