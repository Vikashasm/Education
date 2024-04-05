import React from "react";
import { NavLink } from "react-router-dom";
import { Usethem } from "../Context/Context";

function MData3() {
  const { questions, Mhandelclick, state, Mhandelchange, Mprevhandelclick } =
    Usethem();

  return (
    <div className=" phone_img p-5 min-h-screen relative">
      <p className=" font-normal text-white text-sm lg:text-base max-w-[90%] ">
        Part I has 10 Item (Questions 1-10), First Look at the word in capital
        letters. There are four options – A, B, C, D. Find the word which means
        the same as the word in capitals from the given options
      </p>
      <div className="bg-[#FFFFFFC9] rounded-xl mt-5 p-4">
        <div className=" flex flex-col min-h-[68vh] justify-between">
          <div>
            <h2 className=" md:text-md lg:text-2xl text-black font-medium p-2 h-16 capitalize">
              Question {state + 1} : {questions[state].questionstext}
            </h2>
            <div className=" flex justify-between gap-8 flex-wrap">
              {questions[state].answeroption.map((value, index) => {
                return (
                  <input
                    key={index}
                    className="input bg-white w_xsm w_100 text-lg text-black font-normal outline-none rounded-xl p-3 border border-[#00000033] capitalize"
                    type="text"
                    readOnly
                    id={value.optionNo}
                    value={value.optionNo + " " + value.answertext}
                    onClick={() =>
                      Mhandelchange(
                        questions[state].answeroption[index].iscorrect,
                        value.optionNo
                      )
                    }
                  />
                );
              })}
            </div>
          </div>
          <div className=" flex flex-col gap-3 rounded-b-2xl  w-full">
            <NavLink
              id="prevbuton2"
              onClick={Mprevhandelclick}
              className={` ${
                state < 1
                  ? "pointer-events-none opacity-30"
                  : "pointer-events-auto opacity-100"
              } w-full font-normal text-black md:text-md lg:text-2xl  text-center py-2 lg:py-3 rounded-xl m,scm,`}
            >
              Previous Question
            </NavLink>
            <NavLink
              id="buton1"
              className={` ${
                state === 9
                  ? "pointer-events-none opacity-30"
                  : "pointer-events-auto opacity-100"
              } w-full font-normal text-black md:text-md lg:text-2xl  text-center py-2 lg:py-3 rounded-xl bg-white`}
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

export default MData3;

// w-full font-normal text-black md:text-md lg:text-2xl  text-center py-2 lg:py-3 rounded-xl bg-white
