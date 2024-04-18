import React, { useState } from 'react'

function Form2({ onSubmit }) {

  const [formData, setFormData] = useState({
    hometown: "",
    coutryHigherStudies: "",
    IeltsOrPte: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    if (Object.values(formData).some(value => value.trim() === "")) {
      // Display an error message or handle the error as needed
      alert("Please fill in all fields.");
      return;
    }
    e.preventDefault();
    onSubmit(formData); // Submit the form data if validation passes
  };

  return (
    <div className=" bg_img h-screen w-[100%] md:w-[79.3%] pb-[110px] md:py-4 relative overflow-y-scroll">
      <div className="flex items-center justify-center h-full py-80 md:py-20">
        <div className=" bg-white rounded-[20px] p-10 lg:p-6 xl:p-10 w-[80%] md:w-[460px]">
          <h2 className=" text-[#125566] text-xl font-medium mb-8 lg:mb-6 xl:mb-8">
            Alright, time to dream big! Tell us:
          </h2>
          <form>
            <div className=" flex flex-col gap-8 lg:gap-5 xl:gap-8">
              <div className=" flex flex-col gap-3">
                <label
                  className=" text-[#125566] text-sm font-normal"
                  htmlFor="hometown"
                >
                  Where's the hometown for you?
                </label>
                <input
                  className=" bg-[#EEEEEE] rounded-xl py-[12px] px-[20px] text-[#00000080] font-normal text-base outline-none"
                  type="text"
                  id="hometown"
                  name="hometown"
                  placeholder="Enter Your Answer"
                  value={formData.hometown}
                  onChange={handleChange}
                />
              </div>
              <div className=" flex flex-col gap-3">
                <label
                  className=" text-[#125566] text-sm font-normal"
                  htmlFor="coutryHigherStudies"
                >
                  Which country is calling your name for higher studies?
                </label>
                <input
                  className=" bg-[#EEEEEE] rounded-xl py-[12px] px-[20px] text-[#00000080] font-normal text-base outline-none"
                  type="text"
                  id="coutryHigherStudies"
                  name="coutryHigherStudies"
                  placeholder="Enter Your Answer"
                  value={formData.coutryHigherStudies}
                  onChange={handleChange}

                />
              </div>
              <div className=" flex flex-col gap-3">
                <label
                  className=" text-[#125566] text-sm font-normal"
                  htmlFor="IeltsOrPte"
                >
                  And hey, are you eyeing IELTS or PTE for your next move?
                </label>
                <input
                  className=" bg-[#EEEEEE] rounded-xl py-[12px] px-[20px] text-[#00000080] font-normal text-base outline-none"
                  type="text"
                  id="IeltsOrPte"
                  name="IeltsOrPte"
                  placeholder="Enter Your Answer"
                  value={formData.IeltsOrPte}
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

export default Form2