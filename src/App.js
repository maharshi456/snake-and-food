import { Route, Routes } from "react-router-dom";
import Border from "./Components/Arena/Border";
import Infinity from "./Components/Arena/Infinity";
import Home from "./Components/Home";
import "./index.css";

function Errors() {
  return (
    <center>
      <h1>Are you here for game or for exploration</h1>
    </center>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Border" element={<Border />} />
      <Route path="/Infinity" element={<Infinity />} />
      <Route path="*" element={<Errors />} />
    </Routes>
  );
}

export default App;
