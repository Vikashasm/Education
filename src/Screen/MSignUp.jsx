import React from 'react'
import { NavLink } from "react-router-dom";


function MSignUp() {
   return (
     <div>
       <div className=" bg-[#202125] pt-10 pb-8 px-8 min-h-screen relative">
         <img
           className=" absolute top-0 left-0 "
           width="100%"
           src="/images/svg/signbg_img.svg"
           alt="img"
         />
         <div className=" text-center relative">
           <div className=" flex justify-center">
             <img
               className="min-w-[50%] h-full"
               src="/images/svg/sign_img.svg"
               alt="Login_img"
             />
           </div>
           <h2 className=" text-white font-bold text-2xl mt-8">
             Let’s Get Started
           </h2>
         </div>
         <div className=" relative max_w_80">
           <h3 className=" text-center text-white font-bold text-2xl pt-28">
             Register to “Website Name”
           </h3>
           <form action="#" className="mt-12 w-full">
             <div>
               <label
                 className=" text-base font-normal text-[#66BCB4]"
                 htmlFor="Memail"
               >
                 Email
               </label>
               <br />
               <input
                 className="bg-[#3F4044] px-3 2xl:py-4 py-2 lg:py-3  text-base font-normal text-[#FFFFFF80] mt-2 w-full outline-none"
                 type="email"
                 id="Memail"
                 name="email"
                 placeholder="Enter your email"
                 required
               />
             </div>
             <div className=" mt-5">
               <label
                 className=" text-base font-normal text-[#66BCB4]"
                 htmlFor="MPassword"
                 required
               >
                 Password
               </label>
               <br />
               <input
                 className="bg-[#3F4044] px-3 2xl:py-4 py-2 lg:py-3   text-base font-normal text-[#FFFFFF80] mt-2 w-full outline-none"
                 type="Password"
                 id="MPassword"
                 name="Password"
                 placeholder="Enter  Password"
                 required
               />
             </div>
             <div className=" mt-5">
               <label
                 className=" text-base font-normal text-[#66BCB4]"
                 htmlFor="MCPassword"
                 required
               >
                 Confirm Password
               </label>
               <br />
               <input
                 className="bg-[#3F4044] px-3 2xl:py-4 py-2 lg:py-3   text-base font-normal text-[#FFFFFF80] mt-2 w-full outline-none"
                 type="Password"
                 id="MCPassword"
                 name="Password"
                 placeholder="Re-Enter Password"
                 required
               />
             </div>

             <div className="mt-5  flex items-center justify-between gap-5 flex-col lg:flex-row">
               <div className="w-full lg:w-[50%]">
                 <label
                   className=" text-base font-normal text-[#66BCB4]"
                   htmlFor="MGender"
                   required
                 >
                   Gender
                 </label>
                 <br />
                 <input
                   className="bg-[#3F4044] px-3 2xl:py-4 py-2 lg:py-3   text-base font-normal text-[#FFFFFF80] mt-2 w-full outline-none"
                   type="text"
                   id="MGender"
                   name="Gender"
                   placeholder="Male"
                   required
                 />
               </div>
               <div className="w-full lg:w-[50%]">
                 <label
                   className=" text-base font-normal text-[#66BCB4]"
                   htmlFor="MDate"
                   required
                 >
                   Date of Birth
                 </label>
                 <br />
                 <input
                   className="bg-[#3F4044] px-3 2xl:py-4 py-2 lg:py-3   text-base font-normal text-[#FFFFFF80] mt-2 w-full outline-none"
                   type="date"
                   id="MDate"
                   name=" Date of Birth"
                   placeholder="dd-mm-yyyy"
                   required
                 />
               </div>
             </div>

             <div className=" mt-7">
               <NavLink className="bg-[#66BCB4] font-normal text-base 2xl:py-4 py-2 lg:py-3 px-3 block text-center">
                 Register
               </NavLink>
             </div>
             <div className="mt-5 text-center">
               <p className=" font-normal text-base text-white">
                 Already have an account?
                 <NavLink className="text-[#66BCB4]"> Sign In</NavLink>
               </p>
             </div>
           </form>
         </div>
       </div>
     </div>
   );
}

export default MSignUp