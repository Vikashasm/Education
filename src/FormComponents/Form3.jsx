import React from 'react';
import { useState, useEffect } from 'react';
import { useTestcontext } from '../Context/GetallTest';

function Form3({ onSubmit }) {
  const { SetactiveComponent } = useTestcontext();

  useEffect(() => {
    SetactiveComponent(true); // Set active component to LevelOne
    return () => {
      SetactiveComponent(null); // Clear active component on unmount
    };
  });

  const [formData, setFormData] = useState({
    School: '',
    Age: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    if (Object.values(formData).some((value) => value.trim() === '')) {
      // Display an error message or handle the error as needed
      alert('Please fill in all fields.');
      return;
    }
    e.preventDefault();
    onSubmit(formData); // Submit the form data if validation passes
  };
  return (
    <div className="h-screen w-[100%] md:w-[79.3%]  md:py-4 relative flex items-center justify-center m-auto md:pt-12">
      <div className="w-full  sm:h-auto pb-4">
        <div className=" bg-white rounded-[20px] p-10 lg:p-6 xl:p-10 w-[90%] md:max-w-[800px] mx-auto md:min-h-[390px] flex items-center justify-center">
          <div className="">
            <h2 className=" text-[#FF2000] text-center text-xl font-medium mb-8 lg:mb-6 xl:mb-8">
              Before you dive into your results, hang tight for just two more questions!
            </h2>
            <form>
              <div className=" flex flex-col">
                <div className="flex flex-col md:flex-row gap-8 lg:gap-5 xl:gap-8 h-full">
                  <div className=" flex flex-col gap-3 w-full justify-between">
                    <label className=" text-[#125566] text-sm font-normal" htmlFor="School">
                      Which school or college did you last grace with your presence?
                    </label>
                    <input
                      className=" bg-[#EEEEEE] rounded-xl py-[12px] px-[20px] text-[#00000080] font-normal text-base outline-none w-full"
                      type="text"
                      id="School"
                      name="School"
                      placeholder="Enter Your Answer"
                      value={formData.School}
                      onChange={handleChange}
                    />
                  </div>
                  <div className=" flex flex-col gap-3 w-full h-full justify-between">
                    <label className=" text-[#125566] text-sm font-normal" htmlFor="Age">
                      Also, spill the beans – how many trips around the sun have you completed?" I
                      mean your Age.
                    </label>
                    <input
                      className=" bg-[#EEEEEE] rounded-xl py-[12px] px-[20px] text-[#00000080] font-normal text-base outline-none w-full"
                      type="text"
                      id="Age"
                      name="Age"
                      placeholder="Enter Your Answer"
                      value={formData.Age}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="text-end mt-7">
                  <button
                    onClick={handleSubmit}
                    className=" text-white text-lg font-normal bg-[#FF2000] rounded-[10px] py-[10px] w-full md:w-auto px-[30px] text-center">
                    Submit for Final Result
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form3;
