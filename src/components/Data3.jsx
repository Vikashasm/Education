import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Usethem } from "../Context/Context";

function Data3() {
  const {
    questions,
    handelclick3,
    newstate,
    prevhandelclick3,
    handelchange3,
    value,
    Mshow,
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
  }, [newstate]);

  return (
    <div
      className={`bg_img min-h-screen sm:w-[75%] md:w-[79.3%] relative  before:content-[''] before:bg-[#00000080] ${
        Mshow === 1 ? "before:absolute" : "before:relative"
      } before:w-full before:h-full before:z-10`}
    >
      <div
        className={`bg-white rounded-3xl flex flex-col justify-center items-center p-8 absolute w-[410px] top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4   ${
          Mshow === 1 ? "opacity-100 z-40" : "opacity-0"
        }`}
      >
        <div>
          <img src="./images/svg/trophy.svg" alt="Golden trophy" />
        </div>
        <h3 className=" text-black font-medium text-2xl mt-3">
          Congratulations
        </h3>
        <p className=" text-black text-sm font-normal my-2">
          You have completed the test.
        </p>
        <NavLink className="w-full" to="Submitted">
          <h6 className="text-white font-normal text-2xl bg-[#125566] rounded-lg text-center p-2">
            Okay
          </h6>
        </NavLink>
      </div>

      <div className=" flex flex-col items-center justify-center  lg:gap-10 gap-8 h-full ">
        <p className=" font-normal text-sm lg:text-base text-white lg:max-w-[61%] sm:max-w-[70%] mb-5 lg:mb-0">
          Part IV has 25 Items (Question 1-25).Each item has a series of words.
          Out of the four options- A, B, C, D, find the correct analogy.
        </p>
        <div className=" bg-[#66bcb4]  py-5 rounded-3xl  relative max-w-[80%] xl:max-w-[65%]">
          {newstate > 19 ? (
            <div
              className="flex sm:flex-row  sm:-top-8 sm:left-2/4 sm:-translate-x-1/2 lg:flex-row lg:gap-3 gap-2 absolute  lg:-top-8 lg:left-2/4 lg:-translate-x-1/2 p-3 "
              id="maindiv"
            >
              <div
                className={`w-9 h-9 ${
                  newstate === 20
                    ? "scale-[1.4] bg-white border-2  border-[#125566]"
                    : "scale-1"
                }  rounded-full bg-[#F1F1F1] flex items-center justify-center`}
              >
                <p className=" text-sm font-normal text-slate-600">21</p>
              </div>
              <div
                className={`w-9 h-9 ${
                  newstate === 21
                    ? "scale-[1.4] bg-white border-2  border-[#125566]"
                    : "scale-1"
                }  rounded-full bg-[#F1F1F1] flex items-center justify-center`}
              >
                <p className=" text-sm font-normal text-slate-600">22</p>
              </div>
              <div
                className={`w-9 h-9 ${
                  newstate === 22
                    ? "scale-[1.4] bg-white border-2  border-[#125566]"
                    : "scale-1"
                }  rounded-full bg-[#F1F1F1] flex items-center justify-center`}
              >
                <p className=" text-sm font-normal text-slate-600">23</p>
              </div>
              <div
                className={`w-9 h-9 ${
                  newstate === 23
                    ? "scale-[1.4] bg-white border-2  border-[#125566]"
                    : "scale-1"
                }  rounded-full bg-[#F1F1F1] flex items-center justify-center`}
              >
                <p className=" text-sm font-normal text-slate-600">24</p>
              </div>
              <div
                className={`w-9 h-9 ${
                  newstate === 24
                    ? "scale-[1.4] bg-white border-2  border-[#125566]"
                    : "scale-1"
                }  rounded-full bg-[#F1F1F1] flex items-center justify-center`}
              >
                <p className=" text-sm font-normal text-slate-600">25</p>
              </div>
            </div>
          ) : newstate < 10 ? (
            <div
              className="flex sm:flex-row  sm:-top-8 sm:left-2/4 sm:-translate-x-1/2 lg:flex-row lg:gap-3 gap-2 absolute  lg:-top-8 lg:left-2/4 lg:-translate-x-1/2 p-3 "
              id="maindiv"
            >
              <div
                className={`w-9 h-9 ${
                  newstate === 0
                    ? "scale-[1.4] bg-whiteborder-2 "
                    : "scale-1 border-[#F1F1F1] bg-[#F1F1F1]"
                }  rounded-full bg-white border-2  border-[#125566] flex items-center justify-center`}
              >
                <p className=" text-sm font-normal text-slate-600">1</p>
              </div>
              <div
                className={`w-9 h-9 ${
                  newstate === 1
                    ? "scale-[1.4] bg-white border-2  border-[#125566]"
                    : "scale-1"
                }  rounded-full bg-[#F1F1F1] flex items-center justify-center`}
              >
                <p className=" text-sm font-normal text-slate-600">2</p>
              </div>
              <div
                className={`w-9 h-9 ${
                  newstate === 2
                    ? "scale-[1.4] bg-white border-2  border-[#125566]"
                    : "scale-1"
                }  rounded-full bg-[#F1F1F1] flex items-center justify-center`}
              >
                <p className=" text-sm font-normal text-slate-600">3</p>
              </div>
              <div
                className={`w-9 h-9 ${
                  newstate === 3
                    ? "scale-[1.4] bg-white border-2  border-[#125566]"
                    : "scale-1"
                }  rounded-full bg-[#F1F1F1] flex items-center justify-center`}
              >
                <p className=" text-sm font-normal text-slate-600">4</p>
              </div>
              <div
                className={`w-9 h-9 ${
                  newstate === 4
                    ? "scale-[1.4] bg-white border-2  border-[#125566]"
                    : "scale-1"
                }  rounded-full bg-[#F1F1F1] flex items-center justify-center`}
              >
                <p className=" text-sm font-normal text-slate-600">5</p>
              </div>
              <div
                className={`w-9 h-9 ${
                  newstate === 5
                    ? "scale-[1.4] bg-white border-2  border-[#125566]"
                    : "scale-1"
                }  rounded-full bg-[#F1F1F1] flex items-center justify-center`}
              >
                <p className=" text-sm font-normal text-slate-600">6</p>
              </div>
              <div
                className={`w-9 h-9 ${
                  newstate === 6
                    ? "scale-[1.4] bg-white border-2  border-[#125566]"
                    : "scale-1"
                }  rounded-full bg-[#F1F1F1] flex items-center justify-center`}
              >
                <p className=" text-sm font-normal text-slate-600">7</p>
              </div>
              <div
                className={`w-9 h-9 ${
                  newstate === 7
                    ? "scale-[1.4] bg-white border-2  border-[#125566]"
                    : "scale-1"
                }  rounded-full bg-[#F1F1F1] flex items-center justify-center`}
              >
                <p className=" text-sm font-normal text-slate-600">8</p>
              </div>
              <div
                className={`w-9 h-9 ${
                  newstate === 8
                    ? "scale-[1.4] bg-white border-2  border-[#125566]"
                    : "scale-1"
                }  rounded-full bg-[#F1F1F1] flex items-center justify-center`}
              >
                <p className=" text-sm font-normal text-slate-600">9</p>
              </div>
              <div
                className={`w-9 h-9 ${
                  newstate === 9
                    ? "scale-[1.4] bg-white border-2  border-[#125566]"
                    : "scale-1"
                }  rounded-full bg-[#F1F1F1] flex items-center justify-center`}
              >
                <p className=" text-sm font-normal text-slate-600">10</p>
              </div>
            </div>
          ) : (
            <div
              className="flex sm:flex-row  sm:-top-8 sm:left-2/4 sm:-translate-x-1/2 lg:flex-row lg:gap-3 gap-2 absolute  lg:-top-8 lg:left-2/4 lg:-translate-x-1/2 p-3 "
              id="maindiv"
            >
              <div
                className={`w-9 h-9 ${
                  newstate === 10
                    ? "scale-[1.4] bg-whiteborder-2 "
                    : "scale-1 border-[#F1F1F1] bg-[#F1F1F1]"
                }  rounded-full bg-white border-2  border-[#125566] flex items-center justify-center`}
              >
                <p className=" text-sm font-normal text-slate-600">11</p>
              </div>
              <div
                className={`w-9 h-9 ${
                  newstate === 11
                    ? "scale-[1.4] bg-white border-2  border-[#125566]"
                    : "scale-1"
                }  rounded-full bg-[#F1F1F1] flex items-center justify-center`}
              >
                <p className=" text-sm font-normal text-slate-600">12</p>
              </div>
              <div
                className={`w-9 h-9 ${
                  newstate === 12
                    ? "scale-[1.4] bg-white border-2  border-[#125566]"
                    : "scale-1"
                }  rounded-full bg-[#F1F1F1] flex items-center justify-center`}
              >
                <p className=" text-sm font-normal text-slate-600">13</p>
              </div>
              <div
                className={`w-9 h-9 ${
                  newstate === 13
                    ? "scale-[1.4] bg-white border-2  border-[#125566]"
                    : "scale-1"
                }  rounded-full bg-[#F1F1F1] flex items-center justify-center`}
              >
                <p className=" text-sm font-normal text-slate-600">14</p>
              </div>
              <div
                className={`w-9 h-9 ${
                  newstate === 14
                    ? "scale-[1.4] bg-white border-2  border-[#125566]"
                    : "scale-1"
                }  rounded-full bg-[#F1F1F1] flex items-center justify-center`}
              >
                <p className=" text-sm font-normal text-slate-600">15</p>
              </div>
              <div
                className={`w-9 h-9 ${
                  newstate === 15
                    ? "scale-[1.4] bg-white border-2  border-[#125566]"
                    : "scale-1"
                }  rounded-full bg-[#F1F1F1] flex items-center justify-center`}
              >
                <p className=" text-sm font-normal text-slate-600">16</p>
              </div>
              <div
                className={`w-9 h-9 ${
                  newstate === 16
                    ? "scale-[1.4] bg-white border-2  border-[#125566]"
                    : "scale-1"
                }  rounded-full bg-[#F1F1F1] flex items-center justify-center`}
              >
                <p className=" text-sm font-normal text-slate-600">17</p>
              </div>
              <div
                className={`w-9 h-9 ${
                  newstate === 17
                    ? "scale-[1.4] bg-white border-2  border-[#125566]"
                    : "scale-1"
                }  rounded-full bg-[#F1F1F1] flex items-center justify-center`}
              >
                <p className=" text-sm font-normal text-slate-600">18</p>
              </div>
              <div
                className={`w-9 h-9 ${
                  newstate === 18
                    ? "scale-[1.4] bg-white border-2  border-[#125566]"
                    : "scale-1"
                }  rounded-full bg-[#F1F1F1] flex items-center justify-center`}
              >
                <p className=" text-sm font-normal text-slate-600">19</p>
              </div>
              <div
                className={`w-9 h-9 ${
                  newstate === 19
                    ? "scale-[1.4] bg-white border-2  border-[#125566]"
                    : "scale-1"
                }  rounded-full bg-[#F1F1F1] flex items-center justify-center`}
              >
                <p className=" text-sm font-normal text-slate-600">20</p>
              </div>
            </div>
          )}

          <div className=" md:text-base lg:text-2xl text-black  font-medium lg:pt-6 md:mt-3 md:h-12 lg:h-24 capitalize overflow-hidden flex pe-2 mb-2">
            <span
              className={`${
                Mshow === 1 ? "bg-transparent" : "bg-[#66BCB4]"
              }  z-30 ps-9 pe-1 text-nowrap`}
            >
              Question {newstate + 1} :
            </span>
            <span className=" relative -right-[-500%] z-10" id="text">
              {questions[3].part4[newstate].questionstext}
            </span>
          </div>
          <div className="flex flex-wrap gap-3 lg:gap-y-8 lg:mt-8 px-8 lg:px-0 lg:justify-around lg:pb-44 pb-10 overflow-hidden">
            {questions[3].part4[newstate].answeroption.map((value, i) => {
              return (
                <div key={i} className="md:w-9/12 lg:w-5/12">
                  <input
                    className="w-full font_lg md:text-md lg:text-lg xl:text-2xl  text-black font-normal outline-none rounded-xl p-2 capitalize cursor-default relative -top-[500%] -right-[500%]"
                    type="text"
                    readOnly
                    id={i}
                    value={value.optionNo + " " + value.answertext}
                    onClick={() =>
                      handelchange3(
                        questions[3].part4[0].answeroption[i].iscorrect,
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
              onClick={prevhandelclick3}
              className={` ${
                newstate < 1 || newstate === 25
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
                     value === undefined || newstate === 24
                       ? "pointer-events-none opacity-30"
                       : "pointer-events-auto opacity-100"
                   } font-normal text-black md:text-md lg:text-2xl w-2/4  text-center py-2 lg:py-3 rounded-br-3xl bg-[#FFCE32]`}
              onClick={handelclick3}
            >
              Next Question
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data3;

// <div key={index}>
//   <div
//     className={`w-9 h-9 ${
//       newstate === index
//         ? "scale-[1.4] bg-white border-2  border-[#125566]"
//         : "scale-1"
//     }  rounded-full bg-[#F1F1F1] flex items-center justify-center`}
//   >
//     <p className=" text-sm font-normal text-slate-600">{index + 1}</p>
//   </div>
// </div>;
