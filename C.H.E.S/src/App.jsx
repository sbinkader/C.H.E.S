import CountDown from "./countDownPage";
import "./App.css";
import Username from "./landingPage";
import SelectTheTwo from "./Mode";
import GamePage from "./gamepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Username />} />
        <Route path="/mode" element={<SelectTheTwo />} />
        <Route path="/countdown" element={<CountDown />} />
        <Route path="/game/:mode" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
