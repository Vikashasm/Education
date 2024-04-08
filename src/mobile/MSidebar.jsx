import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Usethem } from "../Context/Context";

function MSidebar() {
  const {
    questions,
    Mhandelclick,
    state,
    Mhandelchange,
    Mprevhandelclick,
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
    }, [state]);

  return (
    <div className=" phone_img p-5 overflow-y-scroll min_h_calc pb-[135px]">
      <p className=" font-normal text-white text-sm lg:text-base max-w-[90%] ">
        Part I has 10 Item (Questions 1-10), First Look at the word in capital
        letters. There are four options – A, B, C, D. Find the word which means
        the same as the word in capitals from the given options
      </p>
      <div className="bg-[#FFFFFFC9] rounded-xl mt-5 pt-4  pb-5">
        <div className=" flex flex-col min-h-[68vh] justify-between min_h_71">
          <div>
            <div className=" md:text-md lg:text-2xl text-black font-medium py-2 h-16 capitalize overflow-hidden flex ">
              <span className=" z-30  pe-1 ps-[18px] overflow-hidden">
                {" "}
                Question {state + 1} :
              </span>
              <p className=" relative -right-[-500%] z-10 inline" id="text1">
                {questions[0].part1[state].questionstext}
              </p>
            </div>
            <div className=" flex justify-between gap-8 flex-wrap overflow-hidden px-4">
              {questions[0].part1[state].answeroption.map((value, index) => {
                return (
                  <input
                    key={index}
                    className="input bg-white w_xsm w_100 text-lg text-black font-normal outline-none rounded-xl p-3 border border-[#00000033] capitalize relative -top-[500%] -right-[500%]"
                    type="text"
                    readOnly
                    id={value.optionNo}
                    value={value.optionNo + " " + value.answertext}
                    onClick={() =>
                      Mhandelchange(
                        questions[0].part1[state].answeroption[index].iscorrect,
                        value.optionNo
                      )
                    }
                  />
                );
              })}
            </div>
          </div>
          <div className=" flex flex-col gap-3 rounded-b-2xl mt-5 w-full px-4">
            <NavLink
              id="prevbuton2"
              onClick={Mprevhandelclick}
              className={` ${
                state < 1 || state === 9
                  ? "pointer-events-none opacity-30"
                  : "pointer-events-auto opacity-100"
              } w-full font-normal text-black md:text-md lg:text-2xl  text-center py-2 lg:py-3 rounded-xl bg-white`}
            >
              Previous Question
            </NavLink>
            <NavLink
              id="buton1"
              className={` ${
                value === undefined || state === 9
                  ? "pointer-events-none opacity-30"
                  : "pointer-events-auto opacity-100"
              } w-full font-normal text-black md:text-md lg:text-2xl  text-center py-2 lg:py-3 rounded-xl bg-[#FFCE32]`}
              onClick={Mhandelclick}
            >
              Next Question
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MSidebar;

