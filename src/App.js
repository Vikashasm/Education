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
    </div>
  );
}

export default App;
