import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UseAuthcontext } from '../Context/GoggleAuth';
import Loader from '../Loader'
import { useEffect } from "react";
function Login() {

  const [loading, setloading] = useState(false)
  const navigate = useNavigate()
  const { GoggleSignIn,user } = UseAuthcontext()

  const handleLogin =  async () => {
    try {
      setloading(true);
      await GoggleSignIn()
      setloading(false)
    } catch (error) {
      console.log("Error in Goggle sign in ",error)
    }
  }
  useEffect(() => {
    if (user !== null) {
      navigate('/')
    }
  }, [])
  
  if (loading) {
    return (<Loader></Loader>)
  }

  return (
    <div>
      <ToastContainer></ToastContainer>
      <div className="flex relative">
        <div className=" md:hidden">
          <img
            className=" absolute top-0 left-0 "
            width="100%"
            src="/images/svg/bg_img.svg"
            alt="img"
          />
        </div>
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
        <div className=" bg-[#202125] min-h-screen w-full md:w-5/12 lg-w-5/12">
          <div className="flex flex-col items-center justify-around md:justify-center min-h-screen py-8 xl:px-20 px-6 relative z-10">
            <div className=" text-center relative md:hidden">
              <div className=" flex justify-center">
                <img
                  className="w-[100%] h-full"
                  src="/images/svg/Mlogin_img.svg"
                  alt="Login_img"
                />
              </div>
              <h5 className=" text-[#FFCE32] text-lg font-normal mt-5 ">
                Welcome to
              </h5>
              <h2 className=" text-white font-bold text-2xl mt-3">
                ENGLISH LEVEL TEST
              </h2>
            </div>

                <div className=" flex justify-center flex-col gap-6 md:gap-12 items-center">
                  <h1 className="text-center text-white font-bold text-xl lg:text-2xl">LOGIN TO YOUR ACCOUNT</h1>
                  <button onClick={() => handleLogin()} className=" bg-white py-[13px] px-[10px] flex justify-center w-full lg:w-[125%]">
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
