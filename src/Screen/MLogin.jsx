import React from "react";
import { NavLink } from "react-router-dom";

function MLogin() {
  return (
    <div>
      <div className=" bg-[#202125] py-10 px-8 min-h-screen relative">
        <img
          className=" absolute top-0 left-0"
          width="100%"
          src="/images/svg/bg_img.svg"
          alt="img"
        />
        <div className=" text-center relative">
          <div className=" flex justify-center">
            <img
              className="w-[55%] h-full"
              src="/images/svg/Mlogin_img.svg"
              alt="Login_img"
            />
          </div>
          <h5 className=" text-[#FFCE32] text-lg font-normal mt-5">
            Welcome to
          </h5>
          <h2 className=" text-white font-bold text-2xl mt-3">
            ENGLISH LEVEL TEST
          </h2>
        </div>
        <div className=" relative max_w_80">
          <h3 className=" text-center text-white font-bold text-2xl pt-24">
            Sign In to “Website Name”
          </h3>
          <form action="#" className="mt-10 w-full">
            <div>
              <label
                className=" text-base font-normal text-[#66BCB4]"
                htmlFor="email1"
              >
                Email
              </label>
              <br />
              <input
                className="bg-[#3F4044] px-3 py-4 lg:py-3  text-base font-normal text-[#FFFFFF80] mt-2 w-full outline-none"
                type="email"
                id="email1"
                name="email"
                placeholder="Enter your email"
                required
                maxLength={'40'}
              />
            </div>
            <div className=" mt-5">
              <label
                className=" text-base font-normal text-[#66BCB4]"
                htmlFor="Password1"
                required
              >
                Password
              </label>
              <br />
              <input
                className="bg-[#3F4044] px-3  py-4 text-base font-normal text-[#FFFFFF80] mt-2 w-full outline-none"
                type="Password"
                id="Passwor1"
                name="Password"
                minLength={"6"}
                maxLength={"15"}
                placeholder="Enter  Password"
                required
              />
            </div>
            <div className=" mt-5">
              <label className="container inline relative ps-9 mb-3 cursor-pointer text-base font-normal text-[#66BCB4]">
                Remember me
                <input
                  type="checkbox"
                  required
                  className=" absolute top-0 left-0 cursor-pointer h-0 w-0"
                />
                <span className="checkmark absolute top-0 left-0 h-[24px] rounded-md w-[24px] border-2 border-[#ffce32]"></span>
              </label>
            </div>
            <div className=" mt-5">
              <NavLink className="bg-[#66BCB4] font-normal text-base 2xl:py-4 py-2 lg:py-3 px-3 block text-center">
                Log In
              </NavLink>
            </div>
            <div className="mt-5 flex flex-col items-center">
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
  );
}

export default MLogin;
