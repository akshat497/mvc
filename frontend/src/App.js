import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} ></Route>
          <Route path="/Signup" element={<Signup />} ></Route>
          <Route path="/Home" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;