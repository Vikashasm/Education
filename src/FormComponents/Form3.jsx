import React from 'react'
import { useState } from 'react';

function Form3({onSubmit }) {
  const [formData, setFormData] = useState({
    School: "",
    Age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Submit the form data if validation passes
  };
  return (
    <div className=" bg_img h-screen w-[100%] md:w-[79.3%] pb-[110px] md:py-4 relative overflow-y-scroll">
      <div className="flex items-center justify-center h-full py-80 md:py-20">
        <div className=" bg-white rounded-[20px] p-10 lg:p-6 xl:p-10 w-[85%] md:w-[460px]">
          <h2 className=" text-[#125566] text-xl font-medium mb-8 lg:mb-6 xl:mb-8">
            Before you dive into your results, hang tight for just two more
            questions!
          </h2>
          <form>
            <div className=" flex flex-col gap-8 lg:gap-5 xl:gap-8">
              <div className=" flex flex-col gap-3">
                <label
                  className=" text-[#125566] text-sm font-normal"
                  htmlFor="School"
                >
                  Which school or college did you last grace with your presence?
                </label>
                <input
                  className=" bg-[#EEEEEE] rounded-xl py-[12px] px-[20px] text-[#00000080] font-normal text-base outline-none"
                  type="text"
                  id="School"
                  name="School"
                  placeholder="Enter Your Answer"
                  value={formData.School}
                  onChange={handleChange}
                />
              </div>
              <div className=" flex flex-col gap-3">
                <label
                  className=" text-[#125566] text-sm font-normal"
                  htmlFor="Age"
                >
                  how many trips around the sun have you completed?
                </label>
                <input
                  className=" bg-[#EEEEEE] rounded-xl py-[12px] px-[20px] text-[#00000080] font-normal text-base outline-none"
                  type="text"
                  id="Age"
                  name="Age"
                  placeholder="Enter Your Answer"
                  value={formData.Age}
                  onChange={handleChange}
                />
              </div>
              <div className=" text-end">
                <button onClick={handleSubmit} className=" text-white text-lg font-normal bg-[#66BCB4] rounded-[10px] py-[10px] w-full md:w-auto px-[30px] text-center">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form3