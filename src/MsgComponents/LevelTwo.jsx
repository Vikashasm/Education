import React from 'react'

function LevelTwo() {
  return (
    <div className=" bg_img h-screen w-[100%] md:w-[79.3%] pb-[110px] md:py-4 relative overflow-y-scroll">
      <div className="flex items-center justify-center h-full md:py-0">
        <div className=" bg-white rounded-[20px] p-10  w-[86%] md:w-[460px]">
          <h1 className=" text-[#125566] text-4xl font-medium text-center mt-3">
            Way to go!
          </h1>
          <p className=" font-medium text-[#909090] text-2xl text-center mb-5 mt-4 md:my-7">
            You've conquered the second round of awesomeness!
          </p>
          <div className=' flex justify-center items-center'>
            <img width='90%' src="images/svg/dance_group.svg" alt="dance_group" />
          </div>
          <div className=" text-end mt-5">
            <button className=" text-white text-lg font-normal bg-[#66BCB4] rounded-[10px] py-[10px] w-full md:w-auto px-[30px] text-center">
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LevelTwo