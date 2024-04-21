import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTestcontext } from "../Context/GetallTest";
import { useUserContext } from "../Context/GetUsers";
function Submitted() {
  const { Tests, SetactiveComponent } = useTestcontext()
  const { Users } = useUserContext()
  const [userData, setUserData] = useState([])
  useEffect(() => {
    SetactiveComponent(true); // Set active component to LevelOne
    return () => {
      SetactiveComponent(null); // Clear active component on unmount
    };
  })
  
  useEffect(() => {
    const userString = sessionStorage.getItem('user');
    const user = JSON.parse(userString);
    const userid = user.userid;
    let data = Users.filter((Data) => Data.id === userid)
    setUserData(data)
  }, [Users]);
  // console.log("user DAta",userData)

  let totalCorrectAnswers = 0;
  let totalQuestions = 0;
  let totalCorrectAnswerPercentage = 0;

  if (userData.length > 0) {
    userData[0].scores.forEach((score) => {
      totalCorrectAnswers += score.correctAnswers;
      totalQuestions += score.totalQuestions;
    });
    
    if (totalQuestions > 0) {
      totalCorrectAnswerPercentage = (totalCorrectAnswers / totalQuestions) * 100;
    }
  }

  // Calculate total correct answer percentage


  return (
    <div className="bg_img  z-10 pb-12 pt-5 md:pt-0 flex items-end justify-center md:inline  md:py-0  md:overflow-hidden h-screen md:h-screen w-full  relative   after:contents-[]  after:bg-[#0000008A] after:absolute after:h-full after:w-full after:top-0 after:left-0">
      <div className="overflow-y-auto h-full">
        <div className=" flex items-center justify-center sm:items-end md:items-center  sm:h-full relative pt-40 sm:pt-0 ">
          <img
            className="absolute top-0 sm:top-2 md:top-[0px] lg:top-[0px] 2xl:top-12 flex z-30 sm:z-20"
            src="/images/png/holiday.png"
            alt="holiday"
          />
          <div className=" bg-[#66bcb4] z-30 sm:z-20 md:mt-[148px] lg:mt-24 py-8 lg:py-12 rounded-3xl  relative max-w-[92%] lg:max-w-[88%] xl:max-w-[65%] flex flex-col items-center border-[5px] border-white  md:overflow-x-hidden">
            <img
              id="oneimg"
              className=" absolute left-[-7%] top-[0%] slide_img hidden lg:inline"
              src="/images/svg/party_celebration.svg"
              alt="party_celebration"
            />
            <img
              id="twoimg"
              className=" absolute right-[-7%] top-[0%] slide_img hidden lg:inline"
              src="/images/svg/Rparty_celebration.svg"
              alt="party_celebration"
            />
            <div className=" text-center">
              <h1 className=" text-black font-medium text-5xl lg:text-6xl hidden md:block">
                {totalCorrectAnswerPercentage >= 80
                  ? "Excellent Scorer"
                  : totalCorrectAnswerPercentage >= 60
                  ? "Very Good Scorer"
                  : totalCorrectAnswerPercentage >= 33
                  ? "Good Scorer"
                  : "Less Scorer"}
              </h1>
              <h1 className="text-[42px] font-bold text-[#455A64] text_shadow md:hidden">
                {totalCorrectAnswerPercentage >= 80
                  ? "Excellent"
                  : totalCorrectAnswerPercentage >= 60
                  ? "Very Good"
                  : totalCorrectAnswerPercentage >= 33
                  ? "Good"
                  : "Less"}{" "}
                <span className="block">Scorer</span>
              </h1>
              <p className="md:text-black text-white font-normal text-base lg:text-xl mt-5 md:mt-0">
                Your Message goes here......
              </p>
            </div>
            <div className=" flex flex-wrap gap-4 lg:gap-8 mt-7  pb-2 justify-around lg:justify-center">
              {userData &&
                userData.length > 0 &&
                userData[0].scores.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className=" bg-white rounded-2xl p-4 lg:p-5 box_shadow w-[85%] sm:w-[45%] lg:w-5/12 "
                    >
                      <h6 className="md:text-black text-[#FF725E] font-bold text-xl text-center">
                        {data.title}
                      </h6>
                      <div className=" flex justify-between mt-3">
                        <div className=" flex flex-col items-center gap-2">
                          <p className=" text-sm text-black font-normal">
                            Total Questions
                          </p>
                          <h6 className="text-black font-bold text-xl">
                            {data.totalQuestions}
                          </h6>
                        </div>
                        <div className=" flex flex-col items-center gap-2">
                          <p className=" text-sm text-black font-normal">
                            Correct Answers
                          </p>
                          <h6 className="text-[#00C11F] font-bold text-xl">
                            {data.correctAnswers}
                          </h6>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Submitted;
