import React from "react";

function Form1() {
  return (
    <div className=" bg_img h-screen w-[100%] md:w-[79.3%] pb-[110px] md:py-4 relative overflow-y-scroll">
      <div className="flex items-center justify-center h-full py-80">
        <div className=" bg-white rounded-[20px] p-10 lg:p-6 xl:p-10 w-[90%] md:w-[460px]">
          <h2 className=" text-[#125566] text-xl font-medium mb-8 lg:mb-6 xl:mb-8">
            Tell us about yourself
          </h2>
          <form>
            <div className=" flex flex-col gap-8 lg:gap-5 xl:gap-8">
              <div className=" flex flex-col gap-3">
                <label
                  className=" text-[#125566] text-sm font-normal"
                  htmlFor="name"
                >
                  Full Name*
                </label>
                <input
                  className=" bg-[#EEEEEE] rounded-xl py-[12px] px-[20px] text-[#00000080] font-normal text-base outline-none"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                />
              </div>
              <div className=" flex flex-col gap-3">
                <label
                  className=" text-[#125566] text-sm font-normal"
                  htmlFor="email"
                >
                  Email Address*
                </label>
                <input
                  className=" bg-[#EEEEEE] rounded-xl py-[12px] px-[20px] text-[#00000080] font-normal text-base outline-none"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@example.com"
                />
              </div>
              <div className=" flex flex-col gap-3">
                <label
                  className=" text-[#125566] text-sm font-normal"
                  htmlFor="number"
                >
                  Phone Number*
                </label>
                <input
                  className=" bg-[#EEEEEE] rounded-xl py-[12px] px-[20px] text-[#00000080] font-normal text-base outline-none"
                  type="number"
                  id="number"
                  name="number"
                  placeholder="+91 "
                />
              </div>
              <div className=" flex flex-col gap-3">
                <label
                  className=" text-[#125566] text-sm font-normal"
                  htmlFor="Number"
                >
                  Alternate Phone Number*
                </label>
                <input
                  className=" bg-[#EEEEEE] rounded-xl py-[12px] px-[20px] text-[#00000080] font-normal text-base outline-none"
                  type="number"
                  id="Number"
                  name="Number"
                  placeholder="+91"
                />
              </div>
              <div className=" text-end">
                <button className=" text-white text-lg font-normal bg-[#66BCB4] rounded-[10px] py-[10px] w-full md:w-auto px-[30px] text-center">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form1;
