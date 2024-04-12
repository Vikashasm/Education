import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { Link } from 'react-router-dom'
import { UseAuthcontext } from '../Context/LoginSignup';
import { addDoc, setDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import { doc } from 'firebase/firestore';
import { auth } from '../firebase';
import 'react-toastify/dist/ReactToastify.css';
import { fetchSignInMethodsForEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function SignUp() {

  const navigate = useNavigate()
  const { CreateUser } = UseAuthcontext();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRePassword] = useState('')
  const [gender, setGender] = useState('')
  const [dob, setDob] = useState('')

  const handleReset = () => {
    setDob('')
    setGender('')
    setEmail('')
    setPassword('')
    setRePassword('')
  }

  const handleDateChange = (date) => {
    const dateString = date.format('DD-MM-YYYY'); // Format date as "DD-MM-YYYY"
    const parsedDate = moment(dateString, 'DD-MM-YYYY', true)
    if (parsedDate.isValid()) {
      const isoDate = parsedDate.toDate().toISOString();
      setDob(isoDate);
    } else {
      console.error('Invalid date format:', date);
    }
  };

  async function RegisterUSer(e) {
    e.preventDefault()
    if (!email || !password || !repassword || !dob || !gender) {
      toast.error("Please fill all the fields.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address.");
    } else if (password !== repassword) {
      toast.error("Passwords do not match.");
    } else if (password.length < 8 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      toast.error("Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one special character.");
    } else if (gender.toLowerCase() !== 'male' && gender.toLowerCase() !== 'female' && gender !== 'other') {
      toast.error("Please select a valid gender.");
    } else {
      try {
        // Check if email is already in use
        const signInMethods = await fetchSignInMethodsForEmail(auth, email);
        console.log("Asdff",signInMethods)
        if (signInMethods.length > 0) {
          handleReset()
          return;
        } else {
          let data = {
            email: email,
            gender: gender.toLowerCase(),
            dob: dob,
          }
          const user = await CreateUser(email, password)
          console.log('user is ', user);
          data.uid = user.uid;
          let deliveryRef = doc(db, 'Users', user.uid);
          await setDoc(deliveryRef, data);
          navigate('/login')
          handleReset()
        }
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          toast.error("Email is already in use. Please Login");
        } else {
          console.error("Error registering user:", error.message);
          toast.error("Error registering user. Please try again later.");
        }
      }
    }
  }


  return (
    <div>
      <ToastContainer></ToastContainer>
      <div>
        <div className=" flex flex-row-reverse ">
          <div className=" bg-[#66BCB4] p-3 hidden md:flex min-h-screen   flex-col justify-center items-center w-[54%] lg-w-7/12">
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
          <div className=" bg-[#202125] min-h-screen w-full md:w-[46%] lg-w-5/12 py-3 md:py-0 relative">
            <img
              className=" absolute top-0 left-0 md:hidden"
              width="100%"
              src="/images/svg/signbg_img.svg"
              alt="img"
            />
            <div className=" text-center relative md:hidden">
              <div className=" flex justify-center">
                <img
                  className="min-w-[42%] h-full"
                  src="/images/svg/sign_img.svg"
                  alt="Login_img"
                />
              </div>
              <h2 className=" text-white font-bold text-2xl mt-8">
                Let’s Get Started
              </h2>
            </div>
            <div className="flex flex-col items-center md:justify-center md:min-h-screen pt-8 xl:px-20 px-6">
              <h2 className=" text-white font-bold text-lg lg:text-2xl hidden md:inline">
                Register to “Website Name”
              </h2>
              <h3 className=" text-center text-white font-bold text-2xl pt-20 md:hidden relative z-10">
                Register to “Website Name”
              </h3>
              <form  className=" mt-7 xl:mt-12 w-full relative z-20">
                <div>
                  <label
                    className=" text-base font-normal text-[#66BCB4]"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <br />
                  <input
                    className="bg-[#3F4044] px-3 2xl:py-4 py-3 lg:py-3  text-base font-normal text-[#FFFFFF80] mt-2 w-full outline-none"
                    type="email"
                    id="email"
                    name="email"
                    maxLength={"40"}
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
                    className="bg-[#3F4044] px-3 2xl:py-4 py-3 lg:py-3   text-base font-normal text-[#FFFFFF80] mt-2 w-full outline-none"
                    type="Password"
                    id="Password"
                    name="Password"
                    onChange={(e) => setPassword(e.target.value)}
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
                    className="bg-[#3F4044] px-3 2xl:py-4 py-3 lg:py-3   text-base font-normal text-[#FFFFFF80] mt-2 w-full outline-none mb-1"
                    type="Password"
                    id="CPassword"
                    name="Confirm Password"
                    placeholder="Re-Enter Password"
                    required
                    onChange={(e) => setRePassword(e.target.value)}
                  />
                </div>

                <div className=" mt-4 flex items-end justify-between gap-5 flex-col lg:flex-row">
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
                      className="bg-[#3F4044] px-3 2xl:py-4 py-3 lg:py-4   text-base font-normal text-[#FFFFFF80] mt-2 w-full outline-none"
                      type="text"
                      id="Gender"
                      name="Gender"
                      placeholder="Male"
                      required
                      onChange={(e) => setGender(e.target.value)}
                    />
                  </div>
                  <div className="w-full lg:w-[50%]">
                    <label
                      className=" text-base font-normal text-[#66BCB4] mt-3 pt-1"
                      htmlFor="Date"
                      required
                    >
                      Date of Birth
                    </label>
                    <br />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopDatePicker
                        className="bg-[#3F4044] text-base font-normal text-[#FFFFFF80] mt-3 w-full outline-none"
                        onChange={(date) => {
                          handleDateChange(date);
                        }}
                        disableFuture
                        format="DD-MM-YYYY"
                      />
                    </LocalizationProvider>
                  </div>
                </div>
                <div className=" mt-6">
                  <button
                    type="submit"
                    onClick={(e) => RegisterUSer(e)}
                    className="bg-[#66BCB4] font-normal text-base 2xl:py-4 py-3 lg:py-3 px-3 w-full text-center"
                  >
                    Register
                  </button>
                </div>
                <div className="mt-7 lg:mt-5 text-center">
                  <p className=" font-normal text-base text-white">
                    Already have an account?
                    <Link to={"/login"} className="text-[#66BCB4]">
                      {" "}
                      Sign In
                    </Link>
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
