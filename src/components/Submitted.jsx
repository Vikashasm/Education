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
    const userString = sessionStorage.getItem('user');
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
    <div className="bg_img z-10 py-5 md:pt-0 flex items-end justify-center md:inline  md:py-0  md:overflow-hidden min-h-screen md:h-screen w-full relative after:bg-[#0000008A]">
      <div className="">
        <div className=" flex items-center justify-center sm:items-end md:items-center  sm:h-full relative">
          <div className=" bg-[#ffffff]  z-10 rounded-3xl m-5 custom:mx-10 md:mx-0 relative max-w-[600px] md:max-w-[100%] md:w-[700px] llg:w-[800px] md:max-h[538px] flex items-center flex-col md:flex-row md:overflow-x-hidden p-5 custom:p-10 md:gap-10">
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
            <div className="md:max-w-[300px] llg:max-w-[345px] text-center">
              <p className="text-lg font-normal text-black">
                "<span className="text-xl font-bold text-[#FF2000]">Congratulations</span> <br />
                on leveling up your English skills! You've aced all three levels like a pro! 🎉 Time
                to celebrate your linguistic triumph with a high-five and a victory dance! Keep
                shining bright with your newfound language prowess! ✨"
              </p>
              <div className="hidden md:block">
                <img className="w-full" src="/images/png/2boys.png" alt="party_celebration" />
              </div>
            </div>
            <div className=" flex flex-col gap-3 mt-7  pb-2 justify-around lg:justify-center w-full">
              {userData &&
                userData.length > 0 &&
                userData[0].scores.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className=" bg-white rounded-2xl border-[1px] border-[#455A6433] p-5 w-full">
                      <h6 className="text-[#FF2000] font-bold text-xl text-center">{data.title}</h6>
                      <div className=" flex justify-between border-t-[1px] border-[#00000033] mt-2 pt-2  custom:px-7">
                        <div className=" flex flex-col items-center gap-2 text-center">
                          <p className=" text-sm text-black font-normal lh_16">
                            Total <br />
                            Questions
                          </p>
                          <h6 className="text-black font-bold text-xl">{data.totalQuestions}</h6>
                        </div>
                        <div className=" flex flex-col items-center gap-2 text-center">
                          <p className=" text-sm text-black font-normal lh_16">
                            Correct <br />
                            Answers
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
