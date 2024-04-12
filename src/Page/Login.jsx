import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UseAuthcontext } from '../Context/LoginSignup';
function Login({ onLogin}) {
  const navigate = useNavigate()

  const { LoginUserWithEmail } = UseAuthcontext()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkbox, setCheckbox] = useState('')
  async function LoginUser() {
    await onLogin(email, password, checkbox);
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
          <div className="flex flex-col items-center md:justify-center min-h-screen py-8 xl:px-20 px-6 relative z-10">
            <div className=" text-center relative md:hidden">
              <div className=" flex justify-center">
                <img
                  className="w-[75%] h-full"
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
            <h2 className=" text-white font-bold text-lg lg:text-2xl mt-20 md:mt-0">
              Sign In to “Website Name”
            </h2>
            <form
              action="#"
              className="md:mt-7 lg:mt-12 w-full relative z-20 mt-14 "
            >
              <div>
                <label
                  className=" text-base font-normal text-[#66BCB4]"
                  htmlFor="email"
                >
                  Email
                </label>
                <br />
                <input
                  className="bg-[#3F4044] px-3 2xl:py-4 py-2 lg:py-3  text-base font-normal text-[#FFFFFF80] mt-2 w-full outline-none"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className=" mt-5">
                <label
                  className=" text-base font-normal text-[#66BCB4]"
                  htmlFor="Password"
                  required
                >
                  Password
                </label>
                <br />
                <input
                  className="bg-[#3F4044] px-3 2xl:py-4 py-2 lg:py-3   text-base font-normal text-[#FFFFFF80] mt-2 w-full outline-none"
                  type="Password"
                  id="Password"
                  name="Password"
                  placeholder="Enter  Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className=" mt-7">
                <label className="container inline relative ps-9 mb-3 cursor-pointer text-base font-normal text-[#66BCB4]">
                  Remember me
                  <input
                    type="checkbox"
                    className=" absolute top-0 left-0 cursor-pointer h-0 w-0"
                    required
                    onChange={() => setCheckbox(checkbox === "Remember" ? "" : "Remember")}
                    checked={checkbox === "Remember"}
                    name="Remember me"
                  />
                  <span className="checkmark absolute top-0 left-0 h-[24px] rounded-md w-[24px] border-2 border-[#ffce32]"></span>
                </label>
              </div>
              <div className="mt-6">
                <button onClick={() => LoginUser()} className="bg-[#66BCB4] font-normal text-base 2xl:py-4 py-2 lg:py-3 px-3 block text-center">
                  Log In
                </button>
              </div>
              <div className="mt-7 lg:mt-5 flex flex-col items-center">
                <p className=" font-normal text-base text-white">
                  Don’t have an account?
                  <Link to={'signup'} className="text-[#66BCB4]">Get Started</Link>
                </p>
                <div className=" mt-4 text-center">
                  <p className="text-[#66BCB4] font-normal text-base">
                    Forgot your password?
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
