import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Usethem } from "../Context/Context";

function Data2() {
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
    <div className=" bg_img min-h-screen sm:w-[75%] md:w-[79.3%] ">
      <div className=" flex flex-col items-center justify-center  lg:gap-10 gap-8 h-full ">
        <p className=" font-normal text-sm lg:text-base text-white lg:max-w-[61%] sm:max-w-[70%] mb-5 lg:mb-0">
          Part III has 10 Items (Question 1-10).Each item has a series of words.
          Out of the four options- A, B, C, D, find the correct meaning of given
          phrase.
        </p>
        <div className=" bg-[#66bcb4]  py-5 rounded-3xl  relative max-w-[80%] lg:max-w-[65%]">
          <div
            className="flex sm:flex-row  sm:-top-5 sm:left-2/4 sm:-translate-x-1/2 lg:flex-row lg:gap-3 gap-2 absolute  lg:-top-5 lg:left-2/4 lg:-translate-x-1/2"
            id="maindiv"
          >
            <div
              className={`w-9 h-9 ${
                state === 0
                  ? "scale-[1.4] bg-whiteborder-2 "
                  : "scale-1 border-[#F1F1F1] bg-[#F1F1F1]"
              }  rounded-full bg-white border-2  border-[#125566] flex items-center justify-center`}
            >
              <p className=" text-sm font-normal text-slate-600">1</p>
            </div>
            <div
              className={`w-9 h-9 ${
                state === 1
                  ? "scale-[1.4] bg-white border-2  border-[#125566]"
                  : "scale-1"
              }  rounded-full bg-[#F1F1F1] flex items-center justify-center`}
            >
              <p className=" text-sm font-normal text-slate-600">2</p>
            </div>
            <div
              className={`w-9 h-9 ${
                state === 2
                  ? "scale-[1.4] bg-white border-2  border-[#125566]"
                  : "scale-1"
              }  rounded-full bg-[#F1F1F1] flex items-center justify-center`}
            >
              <p className=" text-sm font-normal text-slate-600">3</p>
            </div>
            <div
              className={`w-9 h-9 ${
                state === 3
                  ? "scale-[1.4] bg-white border-2  border-[#125566]"
                  : "scale-1"
              }  rounded-full bg-[#F1F1F1] flex items-center justify-center`}
            >
              <p className=" text-sm font-normal text-slate-600">4</p>
            </div>
            <div
              className={`w-9 h-9 ${
                state === 4
                  ? "scale-[1.4] bg-white border-2  border-[#125566]"
                  : "scale-1"
              }  rounded-full bg-[#F1F1F1] flex items-center justify-center`}
            >
              <p className=" text-sm font-normal text-slate-600">5</p>
            </div>
            <div
              className={`w-9 h-9 ${
                state === 5
                  ? "scale-[1.4] bg-white border-2  border-[#125566]"
                  : "scale-1"
              }  rounded-full bg-[#F1F1F1] flex items-center justify-center`}
            >
              <p className=" text-sm font-normal text-slate-600">6</p>
            </div>
            <div
              className={`w-9 h-9 ${
                state === 6
                  ? "scale-[1.4] bg-white border-2  border-[#125566]"
                  : "scale-1"
              }  rounded-full bg-[#F1F1F1] flex items-center justify-center`}
            >
              <p className=" text-sm font-normal text-slate-600">7</p>
            </div>
            <div
              className={`w-9 h-9 ${
                state === 7
                  ? "scale-[1.4] bg-white border-2  border-[#125566]"
                  : "scale-1"
              }  rounded-full bg-[#F1F1F1] flex items-center justify-center`}
            >
              <p className=" text-sm font-normal text-slate-600">8</p>
            </div>
            <div
              className={`w-9 h-9 ${
                state === 8
                  ? "scale-[1.4] bg-white border-2  border-[#125566]"
                  : "scale-1"
              }  rounded-full bg-[#F1F1F1] flex items-center justify-center`}
            >
              <p className=" text-sm font-normal text-slate-600">9</p>
            </div>
            <div
              className={`w-9 h-9 ${
                state === 9
                  ? "scale-[1.4] bg-white border-2  border-[#125566]"
                  : "scale-1"
              }  rounded-full bg-[#F1F1F1] flex items-center justify-center`}
            >
              <p className=" text-sm font-normal text-slate-600">10</p>
            </div>
          </div>

          <div className=" md:text-base lg:text-2xl text-black font-medium  lg:pt-6 md:mt-3 md:h-12 lg:h-16 capitalize overflow-hidden flex">
            <span className="bg-[#66BCB4] z-30 ps-9 pe-1">
              {" "}
              Question {state + 1} :
            </span>
            <span className=" relative -right-[-500%] z-10" id="text">
              {questions[2].part3[state].questionstext}
            </span>
          </div>
          <div className="flex flex-wrap gap-3 lg:gap-y-8 lg:mt-8 px-8 lg:px-0 lg:justify-around lg:pb-44 pb-10 overflow-hidden">
            {questions[2].part3[state].answeroption.map((value, i) => {
              return (
                <div key={i} className="md:w-9/12 lg:w-5/12">
                  <input
                    className="w-full font_lg md:text-md lg:text-lg xl:text-2xl  text-black font-normal outline-none rounded-xl p-2 capitalize cursor-default relative -top-[500%] -right-[500%]"
                    type="text"
                    readOnly
                    id={i}
                    value={value.optionNo + " " + value.answertext}
                    onClick={() =>
                      handelchange(
                        questions[2].part3[0].answeroption[i].iscorrect,
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
              } font-normal text-black md:text-md lg:text-2xl w-2/4  text-center py-2 lg:py-3 rounded-bl-3xl bg-white`}
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
                   } font-normal text-black md:text-md lg:text-2xl w-2/4  text-center py-2 lg:py-3 rounded-br-3xl bg-[#FFCE32]`}
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

export default Data2;
