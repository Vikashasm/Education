import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function SignUp() {
  const [details, setDetails] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    gender: "",
    date: "",
  });
;
  const onchangehandler = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  return (
    <div>
      <div>
        <div className=" flex flex-row-reverse">
          <div className=" bg-[#66BCB4] p-3 min-h-screen flex flex-col justify-center items-center w-[54%] lg-w-7/12">
            <h2 className=" font-bold text-2xl lg:text-4xl text-black mt-3 lg:mt-5">
              Let’s Register Your Account
            </h2>
            <div className="lg:mt-12 mt-8">
              <img
                width={"100%"}
                src="images/png/sign_img.png"
                alt="sign_img"
              />
            </div>
            <p className=" text-white font-normal text-sm lg:text-lg lg:mt-12 mt-8">
              Please Login / Sign up before proceeding to the test.
            </p>
          </div>
          <div className=" bg-[#202125] min-h-screen w-[46%] lg-w-5/12 py-3">
            <div className="flex flex-col items-center justify-center h-screen py-8 xl:px-20 px-6">
              <h2 className=" text-white font-bold text-lg lg:text-2xl ">
                Register to “Website Name”
              </h2>
              <form action="#" className=" mt-7 xl:mt-12 w-full">
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
                    maxLength={"40"}
                    onChange={onchangehandler}
                    placeholder="Enter your email"
                    required
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
                    onChange={onchangehandler}
                    placeholder="Enter  Password"
                    required
                  />
                </div>
                <div className=" mt-5">
                  <label
                    className=" text-base font-normal text-[#66BCB4]"
                    htmlFor="CPassword"
                    required
                  >
                    Confirm Password
                  </label>
                  <br />
                  <input
                    className="bg-[#3F4044] px-3 2xl:py-4 py-2 lg:py-3   text-base font-normal text-[#FFFFFF80] mt-2 w-full outline-none mb-1"
                    type="Password"
                    id="CPassword"
                    name="Confirm Password"
                    placeholder="Re-Enter Password"
                    required
                    onChange={onchangehandler}
                    minLength={"6"}
                    maxLength={"15"}
                  />
                </div>

                <div className=" mt-4 flex items-center justify-between gap-5 flex-col lg:flex-row">
                  <div className="w-full lg:w-[50%]">
                    <label
                      className=" text-base font-normal text-[#66BCB4]"
                      htmlFor="Gender"
                      required
                    >
                      Gender
                    </label>
                    <br />
                    <input
                      className="bg-[#3F4044] px-3 2xl:py-4 py-2 lg:py-3   text-base font-normal text-[#FFFFFF80] mt-2 w-full outline-none"
                      type="text"
                      id="Gender"
                      name="Gender"
                      placeholder="Male"
                      required
                      onChange={onchangehandler}
                      minLength={"4"}
                      maxLength={"6"}
                    />
                  </div>
                  <div className="w-full lg:w-[50%]">
                    <label
                      className=" text-base font-normal text-[#66BCB4]"
                      htmlFor="Date"
                      required
                    >
                      Date of Birth
                    </label>
                    <br />
                    <input
                      className="bg-[#3F4044] px-3 2xl:py-4 py-2 lg:py-3   text-base font-normal text-[#FFFFFF80] mt-2 w-full outline-none"
                      type="date"
                      id="Date"
                      name="Date of Birth"
                      placeholder="dd-mm-yyyy"
                      onChange={onchangehandler}
                      required
                    />
                  </div>
                </div>

                <div className=" mt-6">
                  <NavLink className="bg-[#66BCB4] font-normal text-base 2xl:py-4 py-2 lg:py-3 px-3 block text-center">
                    Register
                  </NavLink>
                </div>
                <div className="mt-7 lg:mt-5 text-center">
                  <p className=" font-normal text-base text-white">
                    Already have an account?
                    <NavLink className="text-[#66BCB4]"> Sign In</NavLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
