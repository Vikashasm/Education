import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Layout from "./components/Layout";
import Login from "./Page/Login";
import SignUp from "./Page/SignUp";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Submitted from "./components/Submitted";
import { UseAuthcontext } from "./Context/GoggleAuth";
import Form1 from "./FormComponents/Form1";
import Form2 from "./FormComponents/Form2";
import Form3 from "./FormComponents/Form3";
import LevelOne from "./MsgComponents/LevelOne";
import LevelTwo from "./MsgComponents/LevelTwo";
import Loader from "./Loader";

function App() {

  const { user } = UseAuthcontext();
  return (
    <Routes>
      {!user ? (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Login />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main/>} />
          </Route>
        </>
      )}
    </Routes>
  );
}

export default App;
