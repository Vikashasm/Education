import React, { useEffect } from "react";

function Submitted() {
  useEffect(() => {
    let img = document.getElementsByClassName("slide_img");
    let box_shadow = document.getElementsByClassName("box_shadow");
    for (const i of img) {
      if (i === img[0]) {
        i.style.transition = "4s";
        i.style.top = "48px";
        i.style.left = "-58px";
      }
      i.style.transition = "4s";
      i.style.top = "48px";
      i.style.right = "-58px";
    }

    for (const i of box_shadow) {
      i.style.transition = "3s";
      i.style.left = "0px";
    }
  }, []);

  return (
    <div className="bg_img z-10 pb-8 min-h-screen sm:w-[75%] md:w-[79.3%]  relative after:contents-[] after:bg-[#0000008A] after:absolute after:h-full after:w-full after:top-0 after:left-0 after:-z-10">
      <div className=" flex items-center justify-center h-full relative">
        <img
          className=" absolute top-9 lg:top-[-10px] hidden lg:inline"
          src="/images/png/holiday.png"
          alt="holiday"
        />
        <div className=" bg-[#66bcb4] lg:mt-24 py-8 lg:py-12 rounded-3xl  relative max-w-[92%] lg:max-w-[88%] xl:max-w-[65%] flex flex-col items-center border-[5px] border-white overflow-x-hidden">
          <img
            id="oneimg"
            className=" absolute left-[100%] top-[-100%] slide_img hidden lg:inline"
            src="/images/svg/party_celebration.svg"
            alt="party_celebration"
          />
          <img
            id="twoimg"
            className=" absolute right-[100%] top-[-100%] slide_img hidden lg:inline"
            src="/images/svg/Rparty_celebration.svg"
            alt="party_celebration"
          />
          <div className=" text-center">
            <h1 className=" text-black font-medium text-5xl lg:text-6xl ">
              Score : 65%
            </h1>
            <h5 className="text-black font-medium text-lg lg:text-2xl my-4 lg:my-5 ">
              You are on Level - 2
            </h5>
            <p className="text-black font-normal text-base lg:text-xl">
              Your Message goes here......
            </p>
          </div>
          <div className=" flex flex-wrap gap-4 lg:gap-8 mt-7  pb-2 justify-around lg:justify-center">
            <div className=" bg-white rounded-2xl p-4 lg:p-5 box_shadow w-[45%] lg:w-5/12 relative left-[-100%]">
              <h6 className="text-black font-bold text-xl text-center">
                Synonymize
              </h6>
              <div className=" flex justify-between mt-3">
                <div className=" flex flex-col items-center gap-2">
                  <p className=" text-sm text-black font-normal">
                    Total Questions
                  </p>
                  <h6 className="text-black font-bold text-xl">12</h6>
                </div>
                <div className=" flex flex-col items-center gap-2">
                  <p className=" text-sm text-black font-normal">
                    Correct Answers
                  </p>
                  <h6 className="text-[#00C11F] font-bold text-xl">9</h6>
                </div>
              </div>
            </div>
            <div className=" bg-white rounded-2xl p-4 lg:p-5 box_shadow w-[45%] lg:w-5/12 relative left-[-100%]">
              <h6 className="text-black font-bold text-xl text-center">
                Acknowledge
              </h6>
              <div className=" flex justify-between mt-3">
                <div className=" flex flex-col items-center gap-2">
                  <p className=" text-sm text-black font-normal">
                    Total Questions
                  </p>
                  <h6 className="text-black font-bold text-xl">12</h6>
                </div>
                <div className=" flex flex-col items-center gap-2">
                  <p className=" text-sm text-black font-normal">
                    Correct Answers
                  </p>
                  <h6 className="text-[#00C11F] font-bold text-xl">11</h6>
                </div>
              </div>
            </div>
            <div className=" bg-white rounded-2xl p-4 lg:p-5 box_shadow w-[45%] lg:w-5/12 relative left-[-100%]">
              <h6 className="text-black font-bold text-xl text-center">
                Explanation
              </h6>
              <div className=" flex justify-between mt-3">
                <div className=" flex flex-col items-center gap-2">
                  <p className=" text-sm text-black font-normal">
                    Total Questions
                  </p>
                  <h6 className="text-black font-bold text-xl">12</h6>
                </div>
                <div className=" flex flex-col items-center gap-2">
                  <p className=" text-sm text-black font-normal">
                    Correct Answers
                  </p>
                  <h6 className="text-[#00C11F] font-bold text-xl">9</h6>
                </div>
              </div>
            </div>
            <div className=" bg-white rounded-2xl p-4 lg:p-5 box_shadow w-[45%] lg:w-5/12 relative left-[-100%]">
              <h6 className="text-black font-bold text-xl text-center">
                Fill Up
              </h6>
              <div className=" flex justify-between mt-3">
                <div className=" flex flex-col items-center gap-2">
                  <p className=" text-sm text-black font-normal">
                    Total Questions
                  </p>
                  <h6 className="text-black font-bold text-xl">25</h6>
                </div>
                <div className=" flex flex-col items-center gap-2">
                  <p className=" text-sm text-black font-normal">
                    Correct Answers
                  </p>
                  <h6 className="text-[#00C11F] font-bold text-xl">11</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Submitted;
