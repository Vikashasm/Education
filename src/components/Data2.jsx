import React from "react";
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
  return (
    <div className=" bg_img min-h-screen sm:w-[75%] md:w-[80%] ">
      <div className=" flex flex-col items-center justify-center  lg:gap-10 gap-8 h-full ">
        <p className=" font-normal text-sm lg:text-base text-white lg:max-w-[61%] sm:max-w-[70%] ">
          Part I has 10 Item (Questions 1-10), First Look at the word in capital
          letters. There are four options – A, B, C, D. Find the word which
          means the same as the word in capitals from the given options
        </p>
        <div className=" bg-[#66bcb4]  py-5 rounded-3xl  relative max-w-[65%]">
          <div
            className="flex sm:flex-row  sm:-top-5 sm:left-2/4 sm:-translate-x-1/2 lg:flex-row lg:gap-3 gap-2 absolute  lg:-top-5 lg:left-2/4 lg:-translate-x-1/2"
            id="maindiv"
          >
            <div
              className={`w-9 h-9 ${
                state === 0 ? "scale-[1.4]" : "scale-1"
              }  rounded-full bg-white flex items-center justify-center`}
            >
              <p className=" text-sm font-normal text-slate-600">1</p>
            </div>
            <div
              className={`w-9 h-9 ${
                state === 1 ? "scale-[1.4]" : "scale-1"
              }  rounded-full bg-white flex items-center justify-center`}
            >
              <p className=" text-sm font-normal text-slate-600">2</p>
            </div>
            <div
              className={`w-9 h-9 ${
                state === 2 ? "scale-[1.4]" : "scale-1"
              }  rounded-full bg-white flex items-center justify-center`}
            >
              <p className=" text-sm font-normal text-slate-600">3</p>
            </div>
            <div
              className={`w-9 h-9 ${
                state === 3 ? "scale-[1.4]" : "scale-1"
              }  rounded-full bg-white flex items-center justify-center`}
            >
              <p className=" text-sm font-normal text-slate-600">4</p>
            </div>
            <div
              className={`w-9 h-9 ${
                state === 4 ? "scale-[1.4]" : "scale-1"
              }  rounded-full bg-white flex items-center justify-center`}
            >
              <p className=" text-sm font-normal text-slate-600">5</p>
            </div>
            <div
              className={`w-9 h-9 ${
                state === 5 ? "scale-[1.4]" : "scale-1"
              }  rounded-full bg-white flex items-center justify-center`}
            >
              <p className=" text-sm font-normal text-slate-600">6</p>
            </div>
            <div
              className={`w-9 h-9 ${
                state === 6 ? "scale-[1.4]" : "scale-1"
              }  rounded-full bg-white flex items-center justify-center`}
            >
              <p className=" text-sm font-normal text-slate-600">7</p>
            </div>
            <div
              className={`w-9 h-9 ${
                state === 7 ? "scale-[1.4]" : "scale-1"
              }  rounded-full bg-white flex items-center justify-center`}
            >
              <p className=" text-sm font-normal text-slate-600">8</p>
            </div>
            <div
              className={`w-9 h-9 ${
                state === 8 ? "scale-[1.4]" : "scale-1"
              }  rounded-full bg-white flex items-center justify-center`}
            >
              <p className=" text-sm font-normal text-slate-600">9</p>
            </div>
            <div
              className={`w-9 h-9 ${
                state === 9 ? "scale-[1.4]" : "scale-1"
              }  rounded-full bg-white flex items-center justify-center`}
            >
              <p className=" text-sm font-normal text-slate-600">10</p>
            </div>
          </div>
          <h2 className=" md:text-md lg:text-2xl text-black font-medium px-9 lg:pt-6 md:mt-3 md:h-12 lg:h-16 capitalize">
            Question {state + 1} : {questions[state].questionstext}
          </h2>
          <div className="flex flex-wrap gap-3 lg:gap-y-8 lg:mt-8 px-8 lg:px-0 lg:justify-around lg:pb-44 pb-10">
            {questions[state].answeroption.map((value, i) => {
              return (
                <div key={i} className="md:w-9/12 lg:w-5/12">
                  <input
                    className="w-full font_lg md:text-md lg:text-lg xl:text-2xl  text-black font-normal outline-none rounded-xl p-2 capitalize cursor-default"
                    type="text"
                    readOnly
                    id={i}
                    value={value.optionNo + " " + value.answertext}
                    onClick={() =>
                      handelchange(
                        questions[state].answeroption[i].iscorrect,
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
                state < 1
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
                   } font-normal text-black md:text-md lg:text-2xl w-2/4  text-center py-2 lg:py-3 rounded-br-3xl bg-white`}
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
