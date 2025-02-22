import CountDown from "./countDownPage";
import "./App.css";
import Username from "./landingPage";
import SelectTheTwo from "./Mode";
import GamePage from "./gamepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NameProvider } from "./NameContext";


function App() {
  return (
    <NameProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Username />} />
        <Route path="/mode" element={<SelectTheTwo />} />
        <Route path="/countdown" element={<CountDown />} />
        <Route path="/game/:mode" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
    </NameProvider>
  );
}

export default App;
