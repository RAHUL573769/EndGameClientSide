import { Route, Routes } from "react-router-dom";
import "./App.css";
import Calender from "./Components/Calender/Calender";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  return (
    <div>
      <HomePage></HomePage>

      <Routes>
        <Route path="/calender" element={<Calender></Calender>}></Route>
      </Routes>
    </div>
  );
}

export default App;
