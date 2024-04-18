import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UseAuthcontext } from "../Context/GoggleAuth";
import Loader from "../Loader";
import { useEffect } from "react";
function Login() {
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const { GoggleSignIn, user } = UseAuthcontext();

  const handleLogin = async () => {
    try {
      setloading(true);
      await GoggleSignIn();
      setloading(false);
    } catch (error) {
      console.log("Error in Goggle sign in ", error);
    }
  };
  useEffect(() => {
    if (user !== null) {
      navigate("/");
    }
  }, []);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <ToastContainer></ToastContainer>
      <div className="flex relative">
        <div className=" bg-[#66BCB4] p-3 min-h-screen hidden md:flex flex-col justify-center items-center w-7/12 lg-w-7/12">
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
        </div>
        <div className=" bg-[#F5F5F5] md:bg-[#202125]  min-h-screen w-full md:w-5/12 lg-w-5/12 px-8 relative">
          <img
            className=" absolute md:hidden top-0 left-0"
            src="/images/png/Group.png"
            alt="img"
          />
          <img
            className=" absolute md:hidden bottom-0 right-0"
            src="/images/png/Group2.png"
            alt="img"
          />
          <div className="flex flex-col items-center justify-center min-h-screen py-8 xl:px-20  relative z-10">
            <div className=" text-center relative md:hidden w-[80%]">
              <div className=" flex justify-center">
                <img
                  className="w-[100%] h-full hidden md:inline"
                  src="/images/svg/Mlogin_img.svg"
                  alt="Login_img"
                />
                <img
                  className="w-[100%] h-full md:hidden"
                  src="/images/svg/Mlogin_img1.svg"
                  alt="Login_img"
                />
              </div>
              <h5 className=" text-[#FFCE32] text-lg font-normal mt-5 hidden md:inline">
                Welcome to
              </h5>
              <h2 className=" text-white font-bold text-2xl mt-3 hidden md:inline">
                ENGLISH TEST
              </h2>
            </div>

            <div className=" flex justify-center flex-col  md:gap-12 items-center w-full">
              <h1 className="text-center text-white font-bold text-xl lg:text-2xl hidden md:inline">
                LOGIN TO YOUR ACCOUNT
              </h1>
              <div className=" bg-[#FF725E] px-[20px] py-[40px] rounded-[20px] md:hidden mt-8 w-full">
                <h5 className="text-white text-lg font-normal md:hidden text-center">
                  Welcome to
                </h5>
                <h2 className="  text-[#FFCE32] font-bold text-2xl md:hidden mt-3 text-center">
                  ENGLISH LEVEL TEST
                </h2>
                <h1 className="text-center text-white font-normal text-xl lg:text-2xl mt-856  md:hidden my-8">
                  LOGIN TO YOUR ACCOUNT
                </h1>
                <button
                  onClick={() => handleLogin()}
                  className=" bg-[#E8E8E8] rounded-xl py-[18px] px-[10px] flex justify-center w-full"
                >
                  <img src="images/svg/GoggleLogo.svg" alt="GoggleLogo" />
                </button>
              </div>
              <button
                onClick={() => handleLogin()}
                className=" bg-white py-[18px] px-[10px] md:flex justify-center w-full xl:max-w-[125%] hidden"
              >
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
