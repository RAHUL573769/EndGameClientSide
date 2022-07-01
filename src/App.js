import { Route, Routes } from "react-router-dom";
import "./App.css";
import Calender from "./Components/Calender/Calender";
import HomePage from "./Components/HomePage/HomePage";
import Header from "./Components/Shared/Header";
import ToDo from "./Components/ToDo/ToDo";
import Updating from "./Components/Updating/Updating";

function App() {
  return (
    <div>
      {/* <Header></Header> */}
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
        <Route path="/todo" element={<ToDo></ToDo>}></Route>

        <Route path="/update/:id" element={<Updating></Updating>}></Route>

        <Route path="/calender" element={<Calender></Calender>}></Route>
      </Routes>
    </div>
  );
}

export default App;
