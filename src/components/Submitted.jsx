import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTestcontext } from "../Context/GetallTest";
import { useUserContext } from "../Context/GetUsers";
function Submitted() {
  const { Tests } = useTestcontext()
  const { Users } = useUserContext()
  const [userData, setUserData] = useState([])
  
  
  useEffect(() => {
    const userString = localStorage.getItem('user');
    const user = JSON.parse(userString);
    const userid = user.userid;
    let data = Users.filter((Data) => Data.id === userid)
    setUserData(data)
  }, [Users]);
  console.log("user DAta",userData)

  let totalCorrectAnswers = 0;
  let totalQuestions = 0;
  let totalCorrectAnswerPercentage;

  if (userData.length > 0) {
    userData[0].scores.forEach((score) => {
      totalCorrectAnswers += score.correctAnswers;
      totalQuestions += score.totalQuestions;
    });
    totalCorrectAnswerPercentage = (totalCorrectAnswers / totalQuestions) * 100;
  }


  // Calculate total correct answer percentage



  return (
    <div className="bg_img z-10 pt-10 pb-36 md:pb-0 min-h-screen w-full md:w-[79.3%]  relative after:contents-[] after:bg-[#0000008A] after:absolute after:h-full after:w-full after:top-0 after:left-0 after:-z-10">
      <div className=" flex items-center justify-center h-full relative">
        <img
          className=" absolute  top-[-50px] hidden sm:inline"
          src="/images/png/holiday.png"
          alt="holiday"
        />
        <div className=" bg-[#66bcb4] lg:mt-24 py-8 lg:py-12 rounded-3xl  relative max-w-[92%] lg:max-w-[88%] xl:max-w-[65%] flex flex-col items-center border-[5px] border-white overflow-x-hidden">
          <img
            id="oneimg"
            className=" absolute left-[100%] top-[-100%] slide_img hidden lg:inline"
            src="/images/svg/party_celebration.svg"
            alt="party_celebration"
          />
          <img
            id="twoimg"
            className=" absolute right-[100%] top-[-100%] slide_img hidden lg:inline"
            src="/images/svg/Rparty_celebration.svg"
            alt="party_celebration"
          />
          <div className=" text-center">
            <h1 className=" text-black font-medium text-5xl lg:text-6xl ">
              Score : {totalCorrectAnswerPercentage.toFixed(2)} %
            </h1>
            <h5 className="text-black font-medium text-lg lg:text-2xl my-4 lg:my-5 ">
              You are on Level  
            </h5>
            <p className="text-black font-normal text-base lg:text-xl">
              Your Message goes here......
            </p>
          </div>
          <div className=" flex flex-wrap gap-4 lg:gap-8 mt-7  pb-2 justify-around lg:justify-center">
            {userData && userData.length > 0 && userData[0].scores.map((data, index) => {
              return ( 
                <div key={index} className=" bg-white rounded-2xl p-4 lg:p-5 box_shadow w-[85%] sm:w-[45%] lg:w-5/12 ">
                  <h6 className="text-black font-bold text-xl text-center">
                    {data.title}
                  </h6>
                  <div className=" flex justify-between mt-3">
                    <div className=" flex flex-col items-center gap-2">
                      <p className=" text-sm text-black font-normal">
                        Total Questions
                      </p>
                      <h6 className="text-black font-bold text-xl">{data.totalQuestions}</h6>
                    </div>
                    <div className=" flex flex-col items-center gap-2">
                      <p className=" text-sm text-black font-normal">
                        Correct Answers
                      </p>
                      <h6 className="text-[#00C11F] font-bold text-xl">{data.correctAnswers}</h6>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Submitted;
