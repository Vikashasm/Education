import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import MSidebar from "./mobile/MSidebar";
import Layout from "./components/Layout";
import Data from "./components/Data";
import Data2 from "./components/Data2";
import Data3 from "./components/Data3";
import MData from "./mobile/MData";
import MData2 from "./mobile/MData2";
import MData3 from "./mobile/MData3";
import MLayout from "./mobile/MLayout";
import Login from "./Page/Login";
import SignUp from "./Page/SignUp";
import MLogin from "./Screen/MLogin";
import MSignUp from "./Screen/MSignUp";
import Submitted from "./components/Submitted";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="one" element={<Data />} />
            <Route path="two" element={<Data2 />} />
            <Route path="three" element={<Data3 />} />
            <Route path="Submitted" element={<Submitted />} />
          </Route>
        </Routes>
      </div>
      <div className="md:hidden">
        <Routes>
          <Route path="/" element={<MLayout />}>
            <Route index element={<MSidebar />} />
            <Route path="one" element={<MData />} />
            <Route path="two" element={<MData2 />} />
            <Route path="three" element={<MData3 />} />
          </Route>
        </Routes>
      </div>

      <div>
        <div className=" hidden md:inline">
          {/* <Login /> */}
          {/* <SignUp /> */}
        </div>
        <div className="md:hidden ">
          {/* <MLogin /> */}
          {/* <MSignUp/> */}
        </div>
      </div>
    </div>
  );
}

export default App;

/*
         

*/
