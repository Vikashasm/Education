import React, { useState } from "react";

function Form1({ onSubmit }) {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    alternatePhoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some(value => value.trim() === "")) {
      // Display an error message or handle the error as needed
      alert("Please fill in all fields.");
      return;
    }
    if (formData.phoneNumber === formData.alternatePhoneNumber) {
      // Display an error message or handle the error as needed
      alert("Phone Number and Alternate Phone Number cannot be the same.");
      return;
    }
    onSubmit(formData); // Submit the form data if validation passes
  }
  


  
  return (
    <div className=" bg_img h-screen w-[100%] md:w-[79.3%] pb-[110px] md:py-4 relative overflow-y-scroll">
      <div className="flex items-center justify-center h-full py-80">
        <div className=" bg-white rounded-[20px] p-10 lg:p-6 xl:p-10 w-[90%] md:w-[460px]">
          <h2 className=" text-[#FF2000] text-xl font-medium mb-8 lg:mb-6 xl:mb-8 text-center">
            Tell us about yourself
          </h2>
          <form>
            <div className=" flex flex-col gap-8 lg:gap-5 xl:gap-8">
              <div className=" flex flex-col gap-3">
                <label
                  className=" text-[#125566] text-sm font-normal"
                  htmlFor="name"
                >
                  Full Name*
                </label>
                <input
                  className=" bg-[#EEEEEE] rounded-xl py-[12px] px-[20px] text-[#00000080] font-normal text-base outline-none"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className=" flex flex-col gap-3">
                <label
                  className=" text-[#125566] text-sm font-normal"
                  htmlFor="email"
                >
                  Email Address*
                </label>
                <input
                  className=" bg-[#EEEEEE] rounded-xl py-[12px] px-[20px] text-[#00000080] font-normal text-base outline-none"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className=" flex flex-col gap-3">
                <label
                  className=" text-[#125566] text-sm font-normal"
                  htmlFor="phoneNumber"
                >
                  Phone Number*
                </label>
                <input
                  className=" bg-[#EEEEEE] rounded-xl py-[12px] px-[20px] text-[#00000080] font-normal text-base outline-none"
                  type="number"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="+91 "
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className=" flex flex-col gap-3">
                <label
                  className=" text-[#125566] text-sm font-normal"
                  htmlFor="alternatePhoneNumber"
                >
                  Alternate Phone Number*
                </label>
                <input
                  className=" bg-[#EEEEEE] rounded-xl py-[12px] px-[20px] text-[#00000080] font-normal text-base outline-none"
                  type="number"
                  id="alternatePhoneNumber"
                  name="alternatePhoneNumber"
                  placeholder="+91"
                  value={formData.alternatePhoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="text-end">
                <button
                  onClick={handleSubmit}
                  className=" text-white text-lg font-normal md:bg-[#66BCB4] bg-[#FF2000] rounded-[10px] py-[10px] w-full md:w-auto px-[30px] text-center"
                >
                  Move to Level 02
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form1;
