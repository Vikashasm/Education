import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className=" flex">
        <div className=" bg-[#66BCB4] p-3 min-h-screen flex flex-col justify-center items-center w-7/12 lg-w-7/12">
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
        <div className=" bg-[#202125] min-h-screen w-5/12 lg-w-5/12">
          <div className="flex flex-col items-center justify-center h-screen py-8 xl:px-20 px-6">
            <h2 className=" text-white font-bold text-lg lg:text-2xl">
              Sign In to “Website Name”
            </h2>
            <form action="#" className=" mt-7 lg:mt-12 w-full">
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
                  maxLength={'40'}
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
                  minLength={"6"}
                  maxLength={"15"}
                  placeholder="Enter  Password"
                  required
                />
              </div>
              <div className=" mt-7">
                <label className="container inline relative ps-9 mb-3 cursor-pointer text-base font-normal text-[#66BCB4]">
                  Remember me
                  <input
                    type="checkbox"
                    className=" absolute top-0 left-0 cursor-pointer h-0 w-0"
                    required
                    name="Remember me"
                  />
                  <span className="checkmark absolute top-0 left-0 h-[24px] rounded-md w-[24px] border-2 border-[#ffce32]"></span>
                </label>
              </div>
              <div className="mt-6">
                <NavLink className="bg-[#66BCB4] font-normal text-base 2xl:py-4 py-2 lg:py-3 px-3 block text-center">
                  Log In
                </NavLink>
              </div>
              <div className="mt-7 lg:mt-5 flex flex-col items-center">
                <p className=" font-normal text-base text-white">
                  Don’t have an account?
                  <NavLink className="text-[#66BCB4]">Get Started</NavLink>
                </p>
                <div className=" mt-4 text-center">
                  <NavLink className="text-[#66BCB4] font-normal text-base">
                    Forgot your password?
                  </NavLink>
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
