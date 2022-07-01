import { Route, Routes } from "react-router-dom";
import "./App.css";
import Calender from "./Components/Calender/Calender";
import HomePage from "./Components/HomePage/HomePage";
import ToDo from "./Components/ToDo/ToDo";

function App() {
  return (
    <div>
      <HomePage></HomePage>

      <Routes>
        <Route path="/todo" element={<ToDo></ToDo>}></Route>
        <Route path="/calender" element={<Calender></Calender>}></Route>
      </Routes>
    </div>
  );
}

export default App;
