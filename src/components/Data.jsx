import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Usethem } from "../Context/Context";

function Data() {
  const {
    questions,
    handelclick,
    state,
    prevhandelclick,
    handelchange,
    value,
  } = Usethem();

  useEffect(() => {
    let all = document.querySelectorAll("input");
    let heading = document.querySelector("#text");
    heading.style.position = "relative";
    heading.style.transition = "2s";
    heading.style.right = "-8px";
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
    <div className=" bg_img min-h-screen w-[100%] md:w-[79.3%] pb-32 md:pb-0">
      <div className=" flex flex-col items-center md:justify-center py-7 md:py-0  lg:gap-10 gap-8 h-full ">
        <p className=" font-normal text-sm lg:text-base text-white lg:max-w-[61%] max-w-[80%] mb-4 lg:mb-0">
          Part II has 10 items (Questions 1-10).Each item has a series of words.
          Out of the four options- A, B, C, D, find the word that has been spelt
          correctly
        </p>
        <div className=" md:bg-[#66bcb4] bg-[#FFFFFF99] py-5 rounded-xl md:rounded-3xl  relative max-w-[90%] md:max-w-[65%] z-20 h-[68vh]">
          <div
            className="hidden md:flex sm:flex-row  sm:-top-5 sm:left-2/4 sm:-translate-x-1/2 lg:flex-row lg:gap-3 gap-2 absolute  lg:-top-5 lg:left-2/4 lg:-translate-x-1/2"
            id="maindiv"
          >
            {questions[0].part1.map((value, index) => {
              return (
                <div
                  key={index}
                  className={`w-9 h-9 ${
                    state === index
                      ? "scale-[1.4] bg-whiteborder-2 "
                      : "scale-1 border-[#F1F1F1] bg-[#F1F1F1]"
                  }  rounded-full bg-white border-2  border-[#125566] flex items-center justify-center`}
                >
                  <p className=" text-sm font-normal text-slate-600">
                    {index + 1}
                  </p>
                </div>
              );
            })}
          </div>

          <div className=" md:text-md lg:text-2xl text-black font-medium  lg:pt-6 md:mt-3 md:h-12 lg:h-16 capitalize overflow-hidden flex">
            <span className="bg-transparent md:bg-[#66BCB4] z-30 ps-9 pe-1">
              {" "}
              Question {state + 1} :
            </span>
            <span className=" relative -right-[-500%] z-10" id="text">
              {questions[1].part2[state].questionstext}
            </span>
          </div>

          <div className="flex flex-wrap gap-3 lg:gap-y-8 mt-8 lg:mt-8 px-8 lg:px-0 lg:justify-around lg:pb-44 pb-10 overflow-hidden">
            {questions[1].part2[state].answeroption.map((value, i) => {
              console.log(value);
              return (
                <div key={i} className="w-full lg:w-5/12">
                  <input
                    className="w-full font_lg md:text-md lg:text-lg xl:text-2xl  text-black font-normal outline-none rounded-xl p-2 capitalize cursor-default relative -top-[500%] -right-[500%]"
                    type="text"
                    readOnly
                    id={i}
                    value={value.optionNo + " " + value.answertext}
                    onClick={() =>
                      handelchange(
                        questions[1].part2[0].answeroption[i].iscorrect,
                        i
                      )
                    }
                  />
                </div>
              );
            })}
          </div>
          <div className=" flex rounded-b-2xl absolute bottom-0 w-full">
            <NavLink
              id="prevbuton"
              onClick={prevhandelclick}
              className={` ${
                state < 1 || state === 9
                  ? "pointer-events-none opacity-30"
                  : "pointer-events-auto opacity-100"
              } font-normal text-black md:text-md lg:text-2xl w-2/4  text-center py-2 lg:py-3 rounded-bl-xl md:rounded-bl-3xl bg-white`}
            >
              Previous Question
            </NavLink>
            <NavLink
              id="buton"
              className={`
                   ${
                     value === undefined || state === 9
                       ? "pointer-events-none opacity-30"
                       : "pointer-events-auto opacity-100"
                   } font-normal text-black md:text-md lg:text-2xl w-2/4  text-center py-2 lg:py-3 rounded-br-xl md:rounded-br-3xl bg-[#FFCE32]`}
              onClick={handelclick}
            >
              Next Question
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
