import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTestcontext } from "../Context/GetallTest";
import { UseAuthcontext } from "../Context/GoggleAuth";
import { useNavigate } from "react-router-dom";
import LevelOne from "../MsgComponents/LevelOne";
import LevelTwo from "../MsgComponents/LevelTwo";
import LevelThree from "../MsgComponents/LevelThree";
import Form1 from "../FormComponents/Form1";
import Form2 from "../FormComponents/Form2";
import Form3 from "../FormComponents/Form3";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import Loader from "../Loader";
import { useUserContext } from "../Context/GetUsers";
import Submitted from "./Submitted";

function Main() {
  const { logoutUser } = UseAuthcontext();
  const { Users, updateData } = useUserContext();

  const { selectedTitleTests, Tests, selectedLevel, setselectedLevel } =
    useTestcontext();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [CongratulationsPopup, setCongratulationsPopup] = useState(false)
  const [formPopup, SetformPopup] = useState(false)
  const [resultpopup, setResult] = useState(false)
  const [congs, setCongs] = useState(false)
  const [isselected, setIsSelected] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isFormSubmit, setIsFormSubmit] = useState(false);

  const [scores, setScores] = useState([]);

  const questions =
    selectedTitleTests.length > 0 && selectedTitleTests[0].questions;
  const question = selectedTitleTests.length > 0 && questions[currentQuestion];

  useEffect(() => {
    const userString = localStorage.getItem("user");
    const user = JSON.parse(userString);
    const userid = user.userid;

    const storedScoresString = localStorage.getItem("scores");
    if (storedScoresString) {
      const storedScores = JSON.parse(storedScoresString);
      setScores(storedScores);
    }

    const userScores = Users.find(user => user.uid === userid)?.scores;
    const userData = Users.filter(user => user.id === userid)
    // console.log(userData)
    if (userScores) {
      setScores(userScores);
    }

    if (userData.length > 0 && userData[0].hasOwnProperty('isFormSubmit') && userData[0].isFormSubmit) {
      // console.log("isFormSubmit is present and true");
      setIsFormSubmit(true);
    } else {
      // console.log("isFormSubmit is not present or false");
    }
  }, [Users]);

  /**  *************************************************
   * Hanle Next Question Start
   * *************************************************
   *     */

  const handleNextQuestion = async () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setIsSelected(false);
      setSelectedOption([
        ...selectedOption.slice(0, currentQuestion + 1),
        null,
      ]);
    } else if (
      currentQuestion === questions.length - 1 &&
      selectedOption[currentQuestion] !== null
    ) {
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
        Level: selectedTitleTests[0].Level,
        title: selectedTitleTests[0].LevelTitle,
        totalQuestions: questions.length,
        correctAnswers,
        wrongAnswers,
      };
      // console.log("Score for this title:", score);

      setScores([...scores, score]);

      const currentIndex = Tests.findIndex(
        (test) => test.Level === selectedLevel
      );
      const nextIndex = currentIndex + 1;
      if (nextIndex < Tests.length) {
        setCongratulationsPopup(true);
        // setselectedLevel(Tests[nextIndex].Level);
      } else {
        try {
          setLoading(true);
          const userString = localStorage.getItem("user");
          // Parse the user object string to JSON
          const user = JSON.parse(userString);
          // Get the userid from the user object
          const userid = user.userid;
          console.log("userid", userid);
          
          const userRef = doc(db, "Users", userid);
          const userSnap = await getDoc(userRef);
          if (userSnap.exists()) {
            const userData = userSnap.data();
            if (userData.isFormSubmit) {
              console.log("Form already submitted");
              setLoading(false);
              setCongs(true);
              return;
            }
            await updateDoc(userRef, {
              Level: selectedLevel,
              uid: userid,
              scores: [...scores, score],
              isFormSubmit:true,
            });
            setIsFormSubmit(true);
          }
          updateData(userid, { Level: selectedLevel, scores: [...scores, score], isFormSubmit: true, });
          setLoading(false);
          setCongs(true);
        } catch (error) {
          console.log("Error in last ", error);
        }
      }
    }
  };

  /**  *************************************************
   * Hanle Next Question End
   * *************************************************
   *     */

  /**  *************************************************
   * Hanle PreviQuestion Question Start
   * *************************************************
   *     */

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setIsSelected(true);
    }
  };

  /**  *************************************************
   * Hanle PreviQuestion Question end
   * *************************************************
   *     */

  /**  *************************************************
          Hanle Option  Click  Start
      **************************************************
       */

  const [selectedOption, setSelectedOption] = useState(
    Array.from({ length: questions.length }, () => null)
  );
  const handleOptionClick = (index) => {
    const newSelectedOptions = [...selectedOption];
    newSelectedOptions[currentQuestion] = index;
    setSelectedOption(newSelectedOptions);
    setIsSelected(true);
  };

  /**  *************************************************
    Hanle Option  Click  End
    *************************************************
        */

  // Set The States to null
  useEffect(() => {
    setCurrentQuestion(0);
    setIsSelected(false);
    setSelectedOption(
      Array.from(
        { length: selectedTitleTests?.[0]?.questions?.length ?? 0 },
        () => null
      )
    );
  }, [selectedTitleTests, Tests]);

  const handleCongrasultaionClose = () => {
    setCongratulationsPopup(false);
    SetformPopup(true);
    // const currentIndex = Tests.findIndex((test) => test.Level === selectedLevel);
    // const nextIndex = currentIndex + 1;
    // if (nextIndex < Tests.length) {
    //   setselectedLevel(Tests[nextIndex].Level);
    // }
  };

  /**  *************************************************
   * Hanle Form Data  Submit  Start
   * *************************************************
   *     */

  async function handleFormSubmit(formData) {
    // console.log("Form data:", formData);
    setLoading(true);
    SetformPopup(false);
    const userString = localStorage.getItem("user");
    // Parse the user object string to JSON
    const user = JSON.parse(userString);
    // Get the userid from the user object
    const userid = user.userid;
    // console.log("userid", userid);
    const formDataKeyValue = Object.entries(formData).reduce(
      (acc, [key, value]) => {
        return { ...acc, [key]: value };
      },
      {}
    );
    // Update the form data in Firestore under the user's UID
    try {
      const userRef = doc(db, "Users", userid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        await updateDoc(userRef, {
          Level: selectedLevel + 1,
          uid: userid,
          ...formDataKeyValue,
          scores,
        });
        updateData(userid, { Level: selectedLevel + 1, scores: scores,uid : userid })
      } else {
        await setDoc(userRef, {
          Level: selectedLevel + 1,
          uid: userid,
          ...formDataKeyValue,
          scores,
        });
      }
      // Update the level
      const nextLevel = selectedLevel + 1;
      setselectedLevel(nextLevel);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error updating document: ", error);
      // Handle the error here
    }
  }

  /**  *************************************************
      Hanle Form Data  Submit  End
     * *************************************************
          */

  if (loading) {
    return <Loader></Loader>;
  }

  if (resultpopup) {
    return <Submitted></Submitted>;
  }

  return (
    <>
      {selectedLevel === 0 && <LevelOne></LevelOne>}
      {selectedLevel !== 0 &&
      !CongratulationsPopup &&
      !formPopup &&
      !isFormSubmit ? (
        <div
          className={`bg_img h-screen w-[100%] md:w-[79.3%] pb-[110px] md:pb-0 relative overflow-hidden ${
            congs === true
              ? "after:contents-[] relative after:bg-[#0000008A] after:absolute after:h-full after:w-full after:top-0 after:left-0 after:z-[60]"
              : null
          }`}
        >
          {congs === true ? (
            <div className="bg-white rounded-3xl flex flex-col justify-center items-center p-8 absolute w-[90%] sm:w-[70%] md:w-[410px] top-2/4 left-2/4 -translate-x-2/4 -translate-y-[68%] md:-translate-y-[50%] z-[70] opacity-100 over">
              <div>
                <img src="./images/svg/trophy.svg" alt="Golden trophy" />
              </div>
              <h3 className=" text-black font-medium text-2xl mt-3">
                Congratulations
              </h3>
              <p className=" text-black text-sm font-normal my-2">
                You have completed the test.
              </p>
              <div
                className="w-full"
                onClick={() => {
                  setCongs(false);
                  setResult(true);
                }}
              >
                <h6 className="text-white cursor-pointer font-normal text-2xl bg-[#125566] rounded-lg text-center p-2">
                  Okay
                </h6>
              </div>
            </div>
          ) : null}
          <div className=" flex flex-col overflow-y-scroll items-center md:justify-center py-7 md:py-4  lg:gap-10 gap-8 h-full ">
            <h6 className=" font-normal text-sm lg:text-base text-white lg:max-w-[61%] max-w-[80%] mb-4 lg:mb-0">
              {selectedTitleTests.length > 0 &&
                selectedTitleTests[0].instructionText}
            </h6>
            <div className=" md:bg-[#66bcb4] bg-[#FFFFFF99] z-50 py-5 rounded-xl md:rounded-3xl  relative max-w-[90%]  md:max-w-[85%] lg:max-w-[65%]  min_vh_calc">
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
                            ? "md:bg-[#125566] bg-[#FF725E] text-white"
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
                 font-normal md:text-black md:text-md lg:text-2xl w-2/4 text-center py-2 lg:py-3 rounded-br-xl md:rounded-br-3xl  md:bg-[#FFCE32] bg-[#FF725E] text-white`}
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
      ) : isFormSubmit ? (
        <div
          className={`bg_img h-screen w-[100%] md:w-[79.3%] pb-[110px] md:pb-0 relative overflow-hidden
          after:contents-[]  after:bg-[#0000008A] after:absolute after:h-full after:w-full after:top-0 after:left-0 after:z-40
         `}
        >
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
            <div
              className="w-full"
              onClick={() => {
                setCongs(false);
                setResult(true);
              }}
            >
              <h6 className="text-white cursor-pointer font-normal text-2xl bg-[#125566] rounded-lg text-center p-2">
                Okay
              </h6>
            </div>
          </div>
        </div>
      ) : null}
      {selectedLevel === 1 && CongratulationsPopup === true ? (
        <LevelThree onClose={handleCongrasultaionClose} />
      ) : selectedLevel >= 2 && CongratulationsPopup === true ? (
        <LevelTwo onClose={handleCongrasultaionClose} />
      ) : null}
      {selectedLevel === 1 && !CongratulationsPopup && formPopup ? (
        <Form1 onSubmit={handleFormSubmit} />
      ) : selectedLevel === 2 && !CongratulationsPopup && formPopup ? (
        <Form2 onSubmit={handleFormSubmit} />
      ) : selectedLevel === 3 && !CongratulationsPopup && formPopup ? (
        <Form3 onSubmit={handleFormSubmit} />
      ) : null}
    </>
  );
}

export default Main;
