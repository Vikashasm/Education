import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTestcontext } from '../Context/GetallTest'
import { UseAuthcontext } from "../Context/GoggleAuth";
import { useNavigate } from "react-router-dom";

function Main() {
  const { logoutUser } = UseAuthcontext()  
  const navigate = useNavigate()
  // async function HandleLogout() {
  //   try {
  //     await logoutUser()
  //     navigate('/login')
  //     console.log("logout working")
  //   } catch (error) {
  //     console.log("Error is ", error)
  //   }
  // }


  // jhjkhkjhjkhjjk


  const { selectedTitleTests, Tests, selectedLevel, setselectedLevel } = useTestcontext()
  console.log("sdfasdf", selectedTitleTests)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [congs, setCongs] = useState(false)
  const [isselected, setIsSelected] = useState(false)
  const questions = selectedTitleTests.length > 0 && selectedTitleTests[0].questions;
  const question = selectedTitleTests.length > 0 && questions[currentQuestion];
  // console.log(question)
  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setIsSelected(false);
      setSelectedOption([...selectedOption.slice(0, currentQuestion + 1), null]);
    } else if (currentQuestion === questions.length - 1 && selectedOption[currentQuestion] !== null) {
      // Calculate the score
      let correctAnswers = 0;
      let wrongAnswers = 0;
      questions.forEach((question, index) => {
        const selectedAnswerIndex = selectedOption[index];
        if (selectedAnswerIndex !== null) {
          const selectedAnswer = question.answeroption[selectedAnswerIndex];
          if (selectedAnswer.iscorrect) {
            correctAnswers++;
          } else {
            wrongAnswers++;
          }
        }
      });

      // Save the score
      const score = {
        totalQuestions: questions.length,
        correctAnswers,
        wrongAnswers,
      };
      console.log("Score for this title:", score);

      const currentIndex = Tests.findIndex((test) => test.Level === selectedLevel);
      const nextIndex = currentIndex + 1;
      if (nextIndex < Tests.length) {
        setselectedLevel(Tests[nextIndex].Level);
      } else {
        setCongs(true);
      }
    }
  };
  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setIsSelected(true)
    }
  };

  const [selectedOption, setSelectedOption] = useState(Array.from({ length: questions.length }, () => null));

  const handleOptionClick = (index) => {
    const newSelectedOptions = [...selectedOption];
    newSelectedOptions[currentQuestion] = index;
    setSelectedOption(newSelectedOptions);
    setIsSelected(true)
  };

  useEffect(() => {
    setCurrentQuestion(0);
    setIsSelected(false);
    setSelectedOption(Array.from({ length: selectedTitleTests?.[0]?.questions?.length ?? 0 }, () => null));
  }, [selectedTitleTests, Tests]);

  return (
    <div className="bg_img min-h-screen w-[100%] md:w-[79.3%] pb-[110px] md:pb-0 relative">
      {congs === true ? (
        <div className="bg-white rounded-3xl flex flex-col justify-center items-center p-8 absolute w-[90%] sm:w-[70%] md:w-[410px] top-2/4 left-2/4 -translate-x-2/4 -translate-y-[68%] md:-translate-y-[50%] z-50 opacity-100">
          <div>
            <img src="./images/svg/trophy.svg" alt="Golden trophy" />
          </div>
          <h3 className=" text-black font-medium text-2xl mt-3">
            Congratulations
          </h3>
          <p className=" text-black text-sm font-normal my-2">
            You have completed the test.
          </p>
          <NavLink
            className="w-full"
            to="/result"
            onClick={() => setCongs(false)}
          >
            <h6 className="text-white font-normal text-2xl bg-[#125566] rounded-lg text-center p-2">
              Okay
            </h6>
          </NavLink>
        </div>
      ) : null}
      <div className=" flex flex-col items-center md:justify-center py-7 md:py-0  lg:gap-10 gap-8 h-full ">
        <h6 className=" font-normal text-sm lg:text-base text-white lg:max-w-[61%] max-w-[80%] mb-4 lg:mb-0">
          {selectedTitleTests.length > 0 &&
            selectedTitleTests[0].instructionText}
        </h6>
        <div className=" md:bg-[#66bcb4] bg-[#FFFFFF99] py-5 rounded-xl md:rounded-3xl  relative max-w-[90%]  md:max-w-[85%] lg:max-w-[65%] z-20 min_vh_calc">
          <div
            className="hidden md:flex sm:flex-row  sm:-top-5 sm:left-2/4 sm:-translate-x-1/2 lg:flex-row lg:gap-3 gap-2 absolute  lg:-top-5 lg:left-2/4 lg:-translate-x-1/2"
            id="maindiv"
          >
            {selectedTitleTests.length > 0 &&
              selectedTitleTests[0].questions.map((value, index) => {
                return (
                  <div
                    key={index}
                    className={`w-9 h-9 ${
                      currentQuestion === index
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
          <div className=" md:text-md lg:text-2xl text-black font-medium  px-9 lg:pt-6 md:mt-3 py-3 capitalize flex-wrap overflow-hidden flex">
            <span className="bg-transparent md:bg-[#66BCB4] z-30  pe-1">
              {" "}
              Question {currentQuestion + 1} :
            </span>
            <span id="text">{question.question}</span>
          </div>
          <div className="flex flex-wrap gap-3 lg:gap-y-8 mt-8 lg:mt-8 px-8 lg:px-0 lg:justify-around lg:pb-32 xl:pb-44 pb-10 overflow-hidden">
            {/* {questions[0].part1[state].answeroption.map((value, i) => {
              return (
                <div className="w-full lg:w-5/12" key={i}>
                  <p
                    id={i}
                    onClick={() =>
                      handelchange(
                        questions[0].part1[0].answeroption[i].iscorrect,
                        i
                      )
                    }
                    className="w-full font_lg md:text-md lg:text-lg xl:text-2xl bg-white  text-black font-normal outline-none rounded-xl p-2 capitalize cursor-default"
                  >
                    {value.optionNo + " " + value.answertext}
                  </p>
                </div>
              );
            })} */}
            {question &&
              question.answeroption.map((option, i) => (
                <div className="w-full lg:w-5/12" key={i}>
                  <p
                    onClick={() => handleOptionClick(i)}
                    className={`w-full h-full font_lg md:text-md lg:text-lg xl:text-2xl  text-black font-normal outline-none rounded-xl p-2 capitalize cursor-pointer ${
                      selectedOption[currentQuestion] === i
                        ? "bg-[#125566] text-white"
                        : "bg-white"
                    }`}
                  >
                    {option.optionNo + " " + option.answertext}
                  </p>
                </div>
              ))}
          </div>
          <div className=" flex rounded-b-2xl absolute bottom-0 w-full">
            <button
              id="prevbuton"
              onClick={handlePrevQuestion}
              className={` ${
                currentQuestion < 1
                  ? "pointer-events-none opacity-30"
                  : "pointer-events-auto opacity-100"
              } font-normal text-black md:text-md lg:text-2xl w-2/4  text-center py-2 lg:py-3 rounded-bl-xl md:rounded-bl-3xl bg-white`}
            >
              Previous Question
            </button>
            <button
              id="buton"
              className={`${
                !isselected && currentQuestion !== questions?.length - 1
                  ? "pointer-events-none opacity-30"
                  : currentQuestion === questions?.length - 1 && isselected
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-auto opacity-100"
              }
    font-normal text-black md:text-md lg:text-2xl w-2/4 text-center py-2 lg:py-3 rounded-br-xl md:rounded-br-3xl bg-[#FFCE32]`}
              onClick={handleNextQuestion}
            >
              {currentQuestion === questions?.length - 1 && isselected
                ? "Next Stage"
                : "Next Question"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
