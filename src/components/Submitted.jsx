import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTestcontext } from '../Context/GetallTest';
import { useUserContext } from '../Context/GetUsers';
function Submitted() {
  const { Tests, SetactiveComponent } = useTestcontext();
  const { Users } = useUserContext();
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    SetactiveComponent(true); // Set active component to LevelOne
    return () => {
      SetactiveComponent(null); // Clear active component on unmount
    };
  });

  useEffect(() => {
    const userString = localStorage.getItem('user');
    const user = JSON.parse(userString);
    const userid = user.userid;
    let data = Users.filter((Data) => Data.id === userid);
    setUserData(data);
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
    <div className="-z-0 py-5 md:pt-0 flex items-center justify-center md:py-0 min-h-screen w-full max-w-[1185px] relative m-auto sm:px-5 width_calc_scroll">
      <div className="relative sm:h-full md:min-h-[525px] md:top-[50%] width_calc md:mt-[130px] flex-grow-[1] mx-3 flex items-center justify-center">
        <div className=" bg-[#ffffff]  z-10 rounded-3xl sm:m-5 custom:mx-10 md:mx-0 relative max-w-[600px] md:max-w-full  flex items-center flex-col md:flex-row md:overflow-x-hidden p-5 custom:py-6 custom:px-8 md:gap-10 mt-12">
          {/* <div className=" text-center">
              <h1 className=" text-black font-medium text-5xl lg:text-6xl hidden md:block">
                {totalCorrectAnswerPercentage >= 80
                  ? 'Excellent Score'
                  : totalCorrectAnswerPercentage >= 60
                  ? 'Very Good Score'
                  : totalCorrectAnswerPercentage >= 33
                  ? 'Good Score'
                  : 'Less Score'}
              </h1>
              <h1 className="text-[42px] font-bold text-[#455A64] text_shadow md:hidden">
                {totalCorrectAnswerPercentage >= 80
                  ? 'Excellent'
                  : totalCorrectAnswerPercentage >= 60
                  ? 'Very Good'
                  : totalCorrectAnswerPercentage >= 33
                  ? 'Good'
                  : 'Less'}{' '}
                <span className="block">Score</span>
              </h1>
              <p className="md:text-black text-white font-normal text-base lg:text-xl mt-5 md:mt-0">
                Your Message goes here......
              </p>
            </div> */}
          <div className="text-center">
            <p className="text-lg font-normal text-black">
              "<span className="text-xl font-bold text-[#FF2000]">Congratulations</span> <br />
              on leveling up your English skills! You've aced all three levels like a pro! 🎉 Time
              to celebrate your linguistic triumph with a high-five and a victory dance! Keep
              shining bright with your newfound language prowess! ✨"
            </p>
            <div className="hidden md:block max-w-[380px] m-auto">
              <img className="w-full" src="/images/svg/2boys1.svg" alt="party_celebration" />
            </div>
          </div>
          <div className=" flex flex-col gap-3 mt-7  pb-2 justify-around lg:justify-center max-w-[405px] w-full">
            {userData &&
              userData.length > 0 &&
              userData[0].scores.map((data, index) => {
                return (
                  <div
                    key={index}
                    className=" bg-white rounded-2xl border-[1px] border-[#455A6433] p-5 w-full">
                    <h6 className="text-[#FF2000] font-bold text-xl text-center">{data.title}</h6>
                    <div className=" flex justify-between border-t-[1px] border-[#00000033] mt-2 pt-2 custom:px-3  lg:px-7 gap-3">
                      <div className=" flex flex-col items-center gap-2 text-center">
                        <p className=" text-sm text-black font-normal lh_16 custom:whitespace-nowrap">
                          Total Questions
                        </p>
                        <h6 className="text-black font-bold text-xl">{data.totalQuestions}</h6>
                      </div>
                      <div className=" flex flex-col items-center gap-2 text-center">
                        <p className=" text-sm text-black font-normal lh_16 custom:whitespace-nowrap">
                          Correct Answers
                        </p>
                        <h6 className="text-[#00C11F] font-bold text-xl">{data.correctAnswers}</h6>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Submitted;
