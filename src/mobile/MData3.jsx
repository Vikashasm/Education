import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Usethem } from "../Context/Context";

function MData3() {
  const {
    questions,
    Mhandelclick3,
    newstate,
    Mhandelchange3,
    Mprevhandelclick3,
    value,
  } = Usethem();

  useEffect(() => {
    let all = document.querySelectorAll("input");
    let heading = document.querySelector("#text1");
    heading.style.position = "relative";
    heading.style.transition = "2s";
    heading.style.right = "0";
    let count = 0;
    let stop = setInterval(() => {
      if (count === all.length) {
        clearInterval(stop);
      } else {
        all[count].style.position = "relative";
        all[count].style.transition = "600ms";
        all[count].style.top = "0%";
        all[count].style.right = "0%";
        count++;
      }
    }, 250);
  }, [newstate]);

  return (
    <div className=" phone_img p-5 overflow-y-scroll min_h_calc pb-[135px]">
      <p className=" font-normal text-white text-sm lg:text-base max-w-[90%] pb-2">
        Part IV has 25 Items (Question 1-25).Each item has a series of words.
        Out of the four options- A, B, C, D, find the correct analogy.
      </p>
      <div className="bg-[#FFFFFFC9] rounded-xl mt-5 pt-6  pb-5">
        <div className=" flex flex-col min-h-[68vh] justify-between">
          <div>
            <div className=" md:text-md lg:text-2xl text-black font-medium py-2 h-16 capitalize overflow-hidden flex ">
              <span className=" z-30  pe-1 bg-[#FFFFFF99] ps-[18px] overflow-hidden text-nowrap">
                {" "}
                Question {newstate + 1} :
              </span>
              <p className=" relative -right-[-500%] z-10 inline" id="text1">
                {questions[3].part4[newstate].questionstext}
              </p>
            </div>
            <div className=" flex justify-between gap-8 flex-wrap overflow-hidden px-4">
              {questions[3].part4[newstate].answeroption.map((value, index) => {
                return (
                  <input
                    key={index}
                    className="input bg-white w_xsm w_100 text-lg text-black font-normal outline-none rounded-xl p-3 border border-[#00000033] capitalize relative -top-[500%] -right-[500%]"
                    type="text"
                    readOnly
                    id={value.optionNo}
                    value={value.optionNo + " " + value.answertext}
                    onClick={() =>
                      Mhandelchange3(
                        questions[3].part4[newstate].answeroption[index]
                          .iscorrect,
                        value.optionNo
                      )
                    }
                  />
                );
              })}
            </div>
          </div>
          <div className=" flex flex-col gap-3 rounded-b-2xl mt-5  w-full px-4">
            <NavLink
              id="prevbuton2"
              onClick={Mprevhandelclick3}
              className={` ${
                newstate < 1 || newstate === 24
                  ? "pointer-events-none opacity-30"
                  : "pointer-events-auto opacity-100"
              } w-full font-normal text-black md:text-md lg:text-2xl  text-center py-2 lg:py-3 rounded-xl bg-white`}
            >
              Previous Question
            </NavLink>
            <NavLink
              id="buton1"
              className={` ${
                value === undefined || newstate === 24
                  ? "pointer-events-none opacity-30"
                  : "pointer-events-auto opacity-100"
              } w-full font-normal text-black md:text-md lg:text-2xl  text-center py-2 lg:py-3 rounded-xl bg-[#FFCE32]`}
              onClick={Mhandelclick3}
            >
              Next Question
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MData3;

// w-full font-normal text-black md:text-md lg:text-2xl  text-center py-2 lg:py-3 rounded-xl bg-white
