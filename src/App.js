import "./App.css";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Layout from "./components/Layout";
import Login from './Page/Login'
import SignUp from "./Page/SignUp";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { UseAuthcontext } from './Context/LoginSignup';
import 'react-toastify/dist/ReactToastify.css';
import Submitted from "./components/Submitted";
import Loader from "./Loader";
function App() {

  const { LoginUserWithEmail } = UseAuthcontext()
  const Navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading,setloading] = useState(false)
  useEffect(() => {
    const userFromLocalStorage = localStorage.getItem("rememberedUser");
    const userFromSessionStorage = sessionStorage.getItem("rememberedUser");

    if (userFromLocalStorage || userFromSessionStorage) {
      setIsLoggedIn(true);
    }
  }, []);

  async function LoginUser(email, password, checkbox) {
    if (!email || !password) {
      toast.error("Please Enter the email or password")
    } else {
      try {
        setloading(true)
        const user = await LoginUserWithEmail(email, password)
        if (checkbox === "Remember") {
          localStorage.setItem("rememberedUser", JSON.stringify({ id: user.uid, email: user.email }));
        } else {
          sessionStorage.setItem("rememberedUser", JSON.stringify({ id: user.uid, email: user.email }));
        }
        console.log("User login success.");
        setIsLoggedIn(true); // Update isLoggedIn state to true
        setloading(false)
        Navigate('/');
      } catch (error) {
        setloading(false)
        if (error.code === "auth/invalid-credential") {
          toast.error("Wrong password. Please try again.");
        } else if (error.code === "auth/user-not-found") {
          toast.error("Email not found. Please sign up.");
        } else if (error.code === "auth/invalid-email") {
          toast.error("Please Provide Valid Email Address");
        } else {
          console.error("Error logging in:", error.message);
          toast.error("Error logging in. Please try again later.");
        }
      }
    }
  }
  if (loading) {
    return ( <Loader></Loader> )
  }

  return (
    <Routes>
      {!isLoggedIn ? (
        <>
          <Route path="/login" element={<Login onLogin={LoginUser} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={ <Login  onLogin={LoginUser} />} />
        </>
      ) : (
        <>
            <Route path="/" element={<Layout />}>
              <Route index element={<Main />} />
              <Route path="result" element={<Submitted />} />
            </Route>
        </>
      )}
    </Routes>
  );
}

export default App;
