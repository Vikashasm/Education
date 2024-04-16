import "./App.css";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Layout from "./components/Layout";
import Login from './Page/Login'
import SignUp from "./Page/SignUp";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Submitted from "./components/Submitted";
import { UseAuthcontext } from "./Context/GoggleAuth";


function App() {
  const navigate = useNavigate()
  const { user } = UseAuthcontext()
  return (
    <Routes>
      {!user ? (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={ <Login />} />
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
