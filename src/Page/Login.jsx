import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UseAuthcontext } from '../Context/GoggleAuth';
import Loader from '../Loader';
import { useEffect } from 'react';
import { FirebaseError } from 'firebase/app';
function Login() {
  const [loading, setloading] = useState(false);
  const [isCondition, setIsCondition] = useState(false);
  const [showCondition, setShowCondition] = useState(false);
  const navigate = useNavigate();
  const { GoggleSignIn, user } = UseAuthcontext();

  const handleLogin = async () => {
    if (isCondition) {
      try {
        setloading(true);
        await GoggleSignIn();
      } catch (error) {
        if (error.name === 'FirebaseError') {
          setIsCondition(false);
        }
        console.log('Error in Goggle sign in ', error);
      } finally {
        setloading(false);
      }
    } else {
      toast.error(
        'Please confirm that you have read and understood the privacy policy and terms of services',
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        }
      );
    }
  };
  useEffect(() => {
    if (user !== null) {
      navigate('/');
    }
  }, []);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <ToastContainer></ToastContainer>
      <div className="flex relative login_bg justify-end">
        {/* <div className=" bg-[#66BCB4] p-3 min-h-screen hidden md:flex flex-col justify-center items-center w-7/12 lg-w-7/12">
          <h3 className=" font-normal text-2xl lg:text-4xl text-black">
            Welcome to{" "}
          </h3>
          <h2 className=" font-bold text-2xl lg:text-4xl text-black mt-3 lg:mt-5">
            ENGLISH LEVEL TEST
          </h2>
          <div className="xl:mt-10 ">
            <img width={"100%"} src="images/png/login_img.png" alt="Login" />
          </div>
          <p className=" text-white font-normal text-sm lg:text-lg xl:mt-10">
            Please Login / Sign up before proceeding to the test.
          </p>
        </div> */}
        <div className="  min-h-screen  px-8 ">
          <div className="flex flex-col items-center justify-center min-h-screen pb-8 md:pt-8  relative z-10">
            <div className=" text-center relative md:hidden w-[80%]">
              <div className=" flex justify-center w-[85%] custom:w-[55%] m-auto ">
                {/* <img
                  className="w-[100%] h-full hidden md:inline"
                  src="/images/svg/Mlogin_img.svg"
                  alt="Login_img"
                /> */}
                <img
                  className="w-[100%] h-full md:hidden"
                  src="/images/png/woman2.png"
                  alt="Login_img"
                />
              </div>
            </div>
            <div className=" flex justify-center flex-col items-center w-full md:w-[412px] md:border-2 md:border-[#FFB80066] rounded-[20px] md:me-[150px] md:bg-[#FFFFFF54] login_drop_shadow md:py-[40px] md:px-[20px]">
              <h5 className="text-black text-xl font-semibold hidden md:inline text-center">
                Welcome to the
              </h5>
              <h2 className="  text-[#FF0000] font-semibold text-[32px] hidden md:inline mt-3 text-center">
                ETP English Level Test!
              </h2>
              <p className=" text-lg font-normal text-black my-7 text-center hidden md:inline">
                Get set for an exhilarating journey through this thrilling game of English
                proficiency. Are you prepared to put your skills to the test? Let the English
                adventure commence!
              </p>
              <h1 className="text-black text-xl font-semibold hidden md:inline text-center mb-7">
                LOGIN TO YOUR ACCOUNT
              </h1>
              <div className="items-start gap-3 hidden md:flex mb-7">
                <input
                  onChange={() => setIsCondition(!isCondition)}
                  type="checkbox"
                  className="mt-1 min-w-[15px] h-[15px]"
                />
                <p className=" text-base font-normal text-black">
                  I agree to the processing of my personal data in accordance with a privacy policy.{' '}
                  <span
                    onClick={() => setShowCondition(!showCondition)}
                    className="text-blue-900 font-medium whitespace-nowrap cursor-pointer">
                    {' '}
                    Read More...
                  </span>
                </p>
              </div>
              {showCondition && (
                <div className="bg-white fixed w-[310px] xsm:w-[350px] p-6 pt-7 rounded-[10px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <img
                    onClick={() => setShowCondition(false)}
                    className="absolute right-3 top-1 cursor-pointer"
                    src="images/svg/close.svg"
                    alt=""
                  />
                  <p>
                    By using this Level Test, you give consent to the use of your personal
                    information to improve services and for marketing, and to share only as required
                    by Pearson India Education Private Ltd., Grey Matters Group, or by law.
                  </p>
                </div>
              )}
              <div className=" bg-[#FF2000] px-[20px] py-[40px] rounded-[20px] md:hidden  w-full">
                <h5 className="text-white text-lg font-normal md:hidden text-center">
                  Welcome to the
                </h5>
                <h2 className="  text-white  font-bold text-2xl md:hidden mt-3 text-center">
                  ETP English Level Test!
                </h2>
                <p className=" text-sm font-normal text-center text-white mt-3 sm:w-[85%] mx-auto">
                  Get set for an exhilarating journey through this thrilling game of English
                  proficiency. Are you prepared to put your skills to the test? Let the English
                  adventure commence!
                </p>
                <h1 className="text-center text-white font-bold text-xl lg:text-2xl mt-856  md:hidden my-3">
                  LOGIN TO YOUR ACCOUNT
                </h1>
                <div className="flex items-start gap-3 mb-7">
                  <input
                    onChange={() => setIsCondition(!isCondition)}
                    type="checkbox"
                    className="mt-1"
                    checked={isCondition === true}
                  />
                  <p className=" text-sm font-normal text-white ">
                    I agree to the processing of my personal data in accordance with a privacy
                    policy.{' '}
                    <span
                      onClick={() => setShowCondition(!showCondition)}
                      className="text-blue-900 font-medium whitespace-nowrap cursor-pointer">
                      {' '}
                      Read More...
                    </span>
                  </p>
                </div>
                <button
                  onClick={() => handleLogin()}
                  className=" bg-[#E8E8E8] rounded-xl py-[18px] px-[10px] flex justify-center w-full">
                  <img src="images/svg/GoggleLogo.svg" alt="GoggleLogo" />
                </button>
              </div>
              <button
                onClick={() => handleLogin()}
                className=" bg-white py-[18px] rounded-xl  px-[10px] md:flex justify-center w-full xl:max-w-[125%] hidden cursor-pointer">
                <img src="images/svg/GoggleLogo.svg" alt="GoggleLogo" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
